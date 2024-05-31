import { useState } from "react";
import axios from 'axios';
import { ROOT_URL } from "../Urls";
function TransactionTable(){
    const[data,setdata] = useState([]);
    const [currentPage,setCurrentPage] = useState(1)
    const [perPage,setPerPage] = useState(10)
    const [search,setSearch] = useState('');
    const[currentMonth,setCurrentMonth] =useState('March')
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
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
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Sold</th>
                        <th>Image</th>

                    </tr>
                    <tr>
                        <td>Book</td>
                        <td>my books</td>
                        <td>$100</td>
                        <td>Yes</td>
                        <td>🔥</td>
                    </tr>
                    <tr>
                        <td>Book</td>
                        <td>my books</td>
                        <td>$100</td>
                        <td>Yes</td>
                        <td>🔥</td>
                    </tr>
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