function TransactionTable(){
    return(
        <>
        <div className="outerLayout">
            <div className="search-select">
                <div className="searchBox">
                 <input type="text" placeholder="Searh here"/>
                </div>
                <div className="selectLayout">
                    <select>
                       <option>Select Month</option>
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