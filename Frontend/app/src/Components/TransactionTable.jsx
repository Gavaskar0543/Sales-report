import { useEffect, useState, useRef } from "react";
import SearchComponent from "./SearchComponent";
import styled from 'styled-components'
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
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Sold</th>
                                <th>Image</th>

                            </tr></thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="">{item._id}</td>
                                    <td className="para">{item.title}</td>
                                    <td><p className="para">{item.description}</p></td>
                                    <td>{Math.round(item.price)}</td>
                                    <td>{item.sold ? 'Yes' : 'No'}</td>
                                    <td><img src={item.image} alt="img" width={100} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



                <PageLayout className="pageLayout">
                    <div className="paagNo">
                        <p className="pageText">Page No:{currentPage}</p>
                    </div>
                    <div className="nextPrevious">
                        <Button onClick={handlePrev} className="btn"> Previous </Button>
                        <Button onClick={handleNxt} className="btn">Next </Button>
                    </div>
                    <div className="perPage">
                        <p className="pageText">Per Page:{itemsPerPage}</p>
                    </div>
                </PageLayout>
            </div>
        </>
    )
}
const PageLayout = styled.div`
width:100%;
margin:30px 0px;
display:flex;
justify-content:space-around;
align-items:center;
font-size:1rem;
font-weight:600;

`
const Button = styled.button`
padding:10px;
margin:10px;
width:80px;
box-shadow:0px 0px 10px gray;
border:2px solid white;
border-radius:10px;
font-size:0.8rem;
font-weight:600;
cursor:pointer;

&:hover{
filter:brightness(0.9);
box-shadow:2px 2px 10px gray;
}
`
export default TransactionTable;