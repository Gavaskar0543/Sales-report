const axios = require('axios');
const Product = require('../../../model/Product'); 
let productDB = [];

module.exports.products_transactions = async (req, res) => {
    const urlToFetch = 'https://s3.amazonaws.com/roxiler.com/product_transaction.json';

    try {
        const response = await axios.get(urlToFetch);
      productDB = response.data;

        for (let productData of productDB) {
       await   insertIntoDB(productData);
        }

       
    } catch (error) {
        console.error('Error fetching or saving products:', error.message);
       
    }
}


const insertIntoDB = async (productData) =>{
  const dateString = productData.dateOfSale ;
const date = new Date(dateString);

// Get the month (0-indexed, where 0 represents January)
const monthIndex = date.getMonth();

// Convert the month index to the month name
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = monthNames[monthIndex];

  await Product.create({
    title: productData.title,
    price: productData.price,
    description: productData.description,
    category: productData.category,
    image: productData.image,
    sold: productData.sold,
    dateOfSale: monthName
});
}


module.exports.products = async (month)=>{
  
try{
  const product = await Product.find({dateOfSale:month})
  

  return {
    product:product,
   
  }
}
catch(error){
  return res.status(500).json({
    message:'Interval server Error'
  })
}
}



//statistic

module.exports.statistic = async (month) => {
  try {
      
      

      // Calculate total sale amount, total number of sold items, and total number of unsold items
      const totalSaleAmount = await calculateTotalSaleAmount(month);
      const totalSoldItems = await calculateTotalSoldItems(month);
      const totalUnsoldItems = await calculateTotalUnsoldItems(month);

      // Return the statistics as JSON response
      let saleReport = {
        totalSaleAmout:  totalSaleAmount,
        totalSoldItems:  totalSoldItems,
        totalUnsoldItems:  totalUnsoldItems
      };
      return saleReport;
  } catch (error) {
      console.log('Error calculating statistics:', error.message);
      
  }
};

// Function to calculate total sale amount for the selected month
async function calculateTotalSaleAmount(month) {
  //  logic to retrieve and calculate total sale amount from database
  const products = await Product.find({ dateOfSale: { $regex: new RegExp(month, 'i') }, sold: true });
  const totalSaleAmount = products.reduce((total, product) => total + product.price, 0);
  return totalSaleAmount;
}

// Function to calculate total number of sold items for the selected month
async function calculateTotalSoldItems(month) {
  //  logic to retrieve and calculate total number of sold items from database
 
  const soldProducts = await Product.countDocuments({ dateOfSale: { $regex: new RegExp(month, 'i') }, sold: true });
  return soldProducts;
}

// Function to calculate total number of unsold items for the selected month
async function calculateTotalUnsoldItems(month) {
  // Implement logic to retrieve and calculate total number of unsold items from database
  // Example:
  const unsoldProducts = await Product.countDocuments({ dateOfSale: { $regex: new RegExp(month, 'i') }, sold: false });
  return unsoldProducts;
}



//bar chart

module.exports.barChart = async (month) => {
  try {
      
     

      // Define price ranges
      const priceRanges = [
          { min: 0, max: 100 },
          { min: 101, max: 200 },
          { min: 201, max: 300 },
          { min: 301, max: 400 },
          { min: 401, max: 500 },
          { min: 501, max: 600 },
          { min: 601, max: 700 },
          { min: 701, max: 800 },
          { min: 801, max: 900 },
          { min: 901, max: Infinity } // For prices above 900
      ];

      // Initialize an object to store the count of items in each price range
      const priceRangeCounts = {};

      // Retrieve products for the selected month from the database
      const products = await Product.find({ dateOfSale: { $regex: new RegExp(month, 'i') } });

      // Iterate through products and count the number of items in each price range
      products.forEach(product => {
          const price = product.price;
          for (const range of priceRanges) {
              if (price >= range.min && price <= range.max) {
                  const rangeLabel = `${range.min}-${range.max}`;
                  priceRangeCounts[rangeLabel] = (priceRangeCounts[rangeLabel] || 0) + 1;
                  break; // Exit loop once item is found within a range
              }
          }
      });

      // Return the price range counts as a JSON 
      return priceRangeCounts;
  } catch (error) {
      console.log('Error generating bar chart data:', error.message);
  }
};

//pie chart
module.exports.pieChart = async (month) => {
  try {
      

      // Retrieve products for the selected month from the database
      const products = await Product.find({ dateOfSale: { $regex: new RegExp(month, 'i') } });

      // Initialize an object to store the count of items in each category
      const categoryCounts = {};

      // Iterate through products and count the number of items in each category
      products.forEach(product => {
          const category = product.category;
          categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      });

      // Return the category counts as a JSON response
      return categoryCounts;
  } catch (error) {
      console.error('Error generating pie chart data:', error);
  }
};


module.exports.combinedData = async (req, res) => {
  try {
      const month = req.params.month; // Assuming the month is sent in the request body

      // Fetch data from the three APIs concurrently using Promise.all
      const [transactionsData, statisticsData, barChartData, pieChartData] = await Promise.all([
          this.products(month),
          this.statistic(month),
          this.barChart(month),
          this.pieChart(month)
      ]);

      // Combine the data into a single object
      const combinedData = {
          transactions: transactionsData,
          statistics: statisticsData,
          barChart: barChartData,
          pieChart: pieChartData
      };

      // Return the combined data as a JSON response
      res.status(200).json({
        combinedData,
        success:true
      });
  } catch (error) {
      console.error('Error fetching or combining data:', error.message);
      res.status(500).json({ error: 'Internal server error' });
  }
};
