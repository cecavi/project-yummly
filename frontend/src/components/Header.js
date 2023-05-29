import React from 'react'
import styled from 'styled-components/macro'
import Nav from './Nav'
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
          <h1>FEED ME</h1>
          <StyledLogo>
          </StyledLogo>
        </NavLink>
      </StyledHeader>
    </Wrapper>
  )
}

export default Header

const StyledHeader = styled.header`
  
`

const StyledLogo = styled.svg`
 
`

const Wrapper = styled.div`

`

const StyledP = styled.p`

  
`