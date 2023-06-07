import React from 'react'
import { StyledDiv } from './styles/DivStyles'
import ContactDetails from './feature components/ContactDetails'
import styled from 'styled-components/macro'

const Contact = () => {
  return ( 
  <StyledDiv>
    <h3>Get in <span>touch!</span></h3>
    <p>Do you have any questions or suggestions? Or perhaps just want to say hi?</p>
    <ContactDetailsDiv>
      <ContactDetails 
        name="Cecilia Avila"
        email="cecilia.avila@hotmail.se"
        linkedin="https://www.linkedin.com/in/cecilia-avila-caballero-71381a216/"
        />
      <ContactDetails 
        name="Emilia G. Anundi"
        email="emilia-lundmark@hotmail.com"
        linkedin="https://www.linkedin.com/in/emiliaga/"
        />
        <ContactDetails 
        name="Nina Ströyer"
        email="nina.stroyer@hotmail.com"
        linkedin="https://www.linkedin.com/in/ninastroyer/"
        />
    </ContactDetailsDiv>
  </StyledDiv>
  )
}

export default Contact

const ContactDetailsDiv = styled.div`
display: flex;
flex-direction: row;
`