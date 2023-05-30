import React from 'react'
import styled from 'styled-components/macro'
import Nav from './Nav'
//import Logo from './media/Logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'

export const Header = () => {

  // the plan is to show the username of the logged in user
  const accessToken = localStorage.getItem('accessToken');
  const username = localStorage.getItem('username');

  return (
    <Wrapper>
      <StyledHeader>
        <Nav />
        {/* {accessToken &&(
        <StyledP>Logged in as: {username}</StyledP>
        )} */}
        <NavLink to="/" className="logo-group">
          <h1>YUMMLY!</h1>
          <StyledLogo>
          {/*<Logo /> {Logo}*/}
          </StyledLogo>
        </NavLink>
      </StyledHeader>
    </Wrapper>
  )
}

export default Header

const StyledHeader = styled.header`
display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 100px;


  h1 {
    font-size: 2rem;
  }

  
`

const StyledLogo = styled.svg`
   
`

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: var(--color-red);
position: fixed;
z-index: 99;
`

const StyledP = styled.p`

  
`