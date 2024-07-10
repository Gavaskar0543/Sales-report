import { useEffect, useState, useRef } from "react";
import { ROOT_URL } from "../Urls";
import MyTable from './MyTable'
import SearchComponent from "./SearchComponent";
function TransactionTable({ data, currMonthChange, currMonth }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);


    const handlePrev = () => {
        if (currentPage <= 1) {
            return;
        }
        setCurrentPage(currentPage - 1);


    }
    const handleNxt = () => {
        if (currentPage <= totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }

    }

    return (
        <>
            <div className="outerLayout">

                <SearchComponent currMonth={currMonth} currMonthChange={currMonthChange} />

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
                            {currentItems.map((item, index) => (
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