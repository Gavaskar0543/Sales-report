import { useEffect, useState ,useRef} from "react";
import { ROOT_URL } from "../Urls";
function TransactionTable({data,currMonthChange,currMonth}){
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [search,setSearch] = useState('');
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

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

    const handlePrev = ()=>{
        if(currentPage<=1){
            return;
        }
        setCurrentPage(currentPage-1);


    }
    const handleNxt = ()=>{
        if(currentPage <= totalPages-1){
       setCurrentPage(currentPage+1);
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
                    <select value={currMonth} onChange={(e)=>currMonthChange(e.target.value)}>
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
                   {currentItems.map((item,index)=>(
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
                    <p className="pageText">Page No:{currentPage}</p>
                </div>
                <div className="nextPrevious">
                    <button onClick={handlePrev} className="btn">Prev</button>
                    <button onClick={handleNxt} className="btn">Next</button>
                </div>
                <div className="perPage">
                    <p className="pageText">Per Page:{itemsPerPage}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default TransactionTable;