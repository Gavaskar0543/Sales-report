import React from 'react';
import TransactionTable from '../Components/TransactionTable';
import Navbar from '../Components/Navbar';
import BarChart from '../Components/BarChart';
import PieChart from '../Components/PieChart';
const HomePage = () => {
  return (
    <>
    <Navbar/>
    <TransactionTable/>
    <BarChart/>
    <PieChart/>
    </>
  );
};

export default HomePage;
