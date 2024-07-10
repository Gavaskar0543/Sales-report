import React from 'react';
import TransactionTable from '../Components/TransactionTable';
import Navbar from '../Components/Navbar';
import BarChart from '../Components/BarChart';
import styled from 'styled-components';
import Statistics from '../Components/Statistics';
const HomePage = () => {
  return (
    <>
    <Navbar/>
    <MainContent>
    <TransactionTable/>
    <Statistics month={"june"}/>
    <BarChart />
   
    </MainContent>
    </>
  );
};

const MainContent = styled.div`
margin-top:10vh;
`
export default HomePage;
