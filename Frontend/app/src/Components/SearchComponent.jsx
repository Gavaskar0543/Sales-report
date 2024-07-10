import React, { useState } from 'react'


export default function SearchComponent({ currMonth, currMonthChange }) {
    const [search, setSearch] = useState('');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
        <div className="search-select">
            <div className="searchBox">
                <input type="text" value={search} onChange={(e) => {
                    setSearch(e.target.value)
                    handleSearch();
                }} placeholder="Searh here" />
            </div>
            <div className="selectLayout">
                <select value={currMonth} onChange={(e) => currMonthChange(e.target.value)}>
                    {months.map((month, index) =>
                        <option key={index} value={month}>{month}</option>
                    )}
                </select>
            </div>
        </div>
    )
}
