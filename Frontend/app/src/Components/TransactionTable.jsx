function TransactionTable(){
    return(
        <>
        <div className="outerLayout">
            <div className="search-select">
                <div className="inputLayout">
                 <input type="text" placeholder="Searh here"/>
                </div>
                <div className="selectLayout">
                    <select>
                       <option>Select Month</option>
                    </select>
                </div>
            </div>
            <div className="tableLayout">
                <table>
                    <thead>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Sold</th>
                        <th>Image</th>

                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
            <div className="pageLayout">
                <div className="paagNo">
                    <p>Page No:</p>
                </div>
                <div className="nextPrevious">
                    <button>Next</button>
                    <button>Previous</button>
                </div>
                <div className="perPage">
                    <p>Per Page:</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default TransactionTable;