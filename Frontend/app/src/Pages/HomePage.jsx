import { useEffect, useState ,useRef} from "react";
import TransactionTable from '../Components/TransactionTable';
import Navbar from '../Components/Navbar';
import BarChart from '../Components/BarChart';
import styled from 'styled-components';
import Statistics from '../Components/Statistics';
import axios from 'axios';
import { ROOT_URL } from "../Urls";
const HomePage = () => {
  const[data,setdata] = useState([]);
  const[currentMonth,setCurrentMonth] =useState('June');
  //bar chart
  const [barChartData,setBarChartData] = useState({})
  //statistic
  const [statisticData,setStatisticData] = useState({});

 //this useEffect fetch data from backend
  useEffect(()=>{
    async function fetch(){
        const url = `${ROOT_URL}/sales/${currentMonth}`;
        console.log('url',url);

      const response = await axios.get(url);
   
      setdata(response.data.combinedData.transactions.product)
      setStatisticData(response.data.combinedData.statistics)
      setBarChartData(response.data.combinedData.barChart)

    
}fetch()
},[currentMonth])

  return (
    <>
    <Navbar/>
    <MainContent>
    <TransactionTable data={data} currMonth={currentMonth} currMonthChange={setCurrentMonth}/>
    <Statistics month={currentMonth} saleData={statisticData} />
    <BarChart chartData={barChartData} month={currentMonth}/>
   
    </MainContent>
    </>
  );
};

const MainContent = styled.div`
margin-top:10vh;
`
export default HomePage;
