import React, { useState } from 'react'
import styled from 'styled-components';

export default function SearchComponent({ currMonth, currMonthChange }) {
    const [search, setSearch] = useState('');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
        <Layout className="search-select">
            <div className="searchBox">
                <input type="text" value={search} onChange={(e) => {
                    setSearch(e.target.value)
                    handleSearch();
                }} placeholder="Searh transactions" />
            </div>
            <div className="selectLayout">
                <select value={currMonth} onChange={(e) => currMonthChange(e.target.value)}>
                    {months.map((month, index) =>
                        <option key={index} value={month}>{month}</option>
                    )}
                </select>
            </div>
        </Layout>
    )
}

const Layout  = styled.div`
width:100%;
display:flex;
justify-content:space-around;
align-items:center;

input,select{
width:20vw;
padding:4px;
border:2px solid white;
border-radius:10px;
font-size:1rem;
letter-spacing:1px;
color:gray;
box-shadow:0px 0px 10px gray;
}
input:focus,select:focus{
outline:none;

}
`