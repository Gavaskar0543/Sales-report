import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:3rem;
  margin-bottom:2rem;
 

  &.scrolled {
 
    background-color: white;
    
  }
    a{
    text-decoration:none;
    color:black;
    font-weight:600;
    }
    a:hover{
    color:gray;
    }

    ul{
    display:flex;
    width:300px;
    justify-content:space-between;
    align-items:center;
    margin-right:20px;
    
    }
    
    
`;

const Title = styled.p`
font-size:1.4rem;
margin-left:5px;
color:black;
font-weight:800;
`

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  return (
    <StyledNavbar className={isScrolled ? 'scrolled' : ''}>
      <div>
        <Title>Sale Report</Title>
      </div>
      <div>
        <ul type='none'>
        <li> <a href='/'>Dashboard</a> </li>
        <li> <a href='#statistic'>Statistic view</a> </li>
          <li> <a href='#bar-chart'>Bar view</a> </li>
        </ul>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
