import React from 'react'
import styled from 'styled-components/macro'
import Nav from './Nav'
import LOGO from './media/Logo.svg'
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
          <StyledLogo src={LOGO}/>
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

  @media (min-width: 668px) {
    height: 140px;
    width: 90%;

    h1 {
    font-size: 3rem;
    }

  }
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    align-items: flex-end;
    width: 95%;
    height: 180px;


    
      h1 {
        font-size: 3rem;
        z-index: 1;
      }
      div {
        display: flex;
        align-items: flex-end;
      }

    }
`

const StyledLogo = styled.img`
    width: 70px;
    height: 70px;
    margin-left: 10px;

  @media (min-width: 668px) {
    width: 100px;
    height: 100px;

  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--color-sand);
  box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
  position: fixed;
  z-index: 99;
`

// const StyledP = styled.p`
  
//   margin-left: 10px;

//   @media (min-width: 668px) {
//     left: 30px;
//     top: 285px;
//   }
//   @media (min-width: 1024px) {
//     position:absolute;
//     font-size: 1.2rem;
//     left: 60px;
//     top: 30px;
//   }
  
  
// `