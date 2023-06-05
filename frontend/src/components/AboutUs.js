import React from 'react'
import styled from 'styled-components/macro'
import { StyledDiv, ClonedStyledDiv } from './styles/DivStyles'
import Cecilia from './media/Cecilia.jpg'
import Emilia from './media/Emilia.jpg'
import Nina from './media/Nina.jpg'


const AboutUs = () => {
  return (
    <>
      <StyledDiv>
        <h3>Introducing Yummly! - The Ultimate Recipe Sharing App.</h3>
        <p>Discover, save, and share recipes with ease. Yummly! simplifies your cooking experience, letting you effortlessly add, edit, and delete recipes. Explore a vibrant community of food enthusiasts, get inspired, and expand your culinary horizons. Create your profile, showcase your talent, and connect with fellow foodies. With Yummly!, recipes are just a tap away. Join the culinary revolution today!
        </p>
      </StyledDiv>
      <ClonedStyledDiv>
        <p>
        <span>Yummly!</span> is built by Cecilia Avila, Emilia G. Anundi and Nina Ströyer as the final project of Technigo’s Web Development Bootcamp 2022. 
        </p>
        <StyledImgDiv>
          <StyledProfileImg src={Cecilia}></StyledProfileImg>
          <StyledProfileImg src={Emilia}></StyledProfileImg>
          <StyledProfileImg src={Nina}></StyledProfileImg>
        </StyledImgDiv>
      </ClonedStyledDiv>
    </>
  )
}

export default AboutUs

const StyledImgDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

@media (min: 668px) {
  
}
@media (min: 1024px) {

}
`

const StyledProfileImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;

@media (min: 668px) {
  
}
@media (min: 1024px) {

}
`