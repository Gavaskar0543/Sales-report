import { useEffect, useState } from "react";
import axios from 'axios';
import { ROOT_URL } from "../Urls";
function TransactionTable(){
    const[product,setProduct] = useState([]);
    const [currentPage,setCurrentPage] = useState(1)
    const [perPage,setPerPage] = useState(10)
    const [search,setSearch] = useState('');
    const[currentMonth,setCurrentMonth] =useState('June')
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    useEffect(()=>{
        async function fetch(){
            const url = `${ROOT_URL}/sales/${currentMonth}`;
            console.log('url',url);
    
          const response = await axios.get(url);
          console.log(response.data.data.transactions.product)
          setProduct(response.data.data.transactions.product)
         
        
    }fetch()
    },[currentMonth])
  const  handleSearch = async ()=>{
        const url = `${ROOT_URL}/sales/${currentMonth}`;
        console.log('url',url);
        try{
      const response = await axios.get(url);
      console.log('data',response);
      setdata();
    }
        catch(err){
            alert(err.message);
        }
    }
    return(
        <>
        <div className="outerLayout">
            <div className="search-select">
                <div className="searchBox">
                 <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)
                handleSearch();
                }} placeholder="Searh here"/>
                </div>
                <div className="selectLayout">
                    <select value={currentMonth} onChange={(e)=>setCurrentMonth(e.target.value)}>
                   {  months.map((month,index) =>
                        <option key={index} value={month}>{month}</option>
                     )}
                    </select>
                </div>
            </div>
            <div className="tableLayout">
                <table id="dataTable">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Sold</th>
                        <th>Image</th>

                    </tr></thead>
                    <tbody>
                   {product.map((item,index)=>(
                    <tr key={index}>
                        <td className="para">{item.title}</td>
                        <td><p className="para">{item.description}</p></td>
                        <td>{item.price}</td>
                        <td>{item.sold ? 'Yes' : 'No'}</td>
                        <td><img src={item.image} alt="img" width={100} /></td>
                    </tr>
                   ))}
                      </tbody>
                </table>
            </div>
            <div className="pageLayout">
                <div className="paagNo">
                    <p className="pageText">Page No:</p>
                </div>
                <div className="nextPrevious">
                    <button className="btn">Prev</button>
                    <button className="btn">Next</button>
                </div>
                <div className="perPage">
                    <p className="pageText">Per Page:</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default TransactionTable;