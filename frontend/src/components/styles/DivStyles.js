import styled from 'styled-components/macro'
import { SmallDiv } from './GlobalStyles'

export const StyledTransparentDiv = styled.div`

`

export const StyledNonTransparentDiv = styled.div`

`

export const StyledFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const StyledDiv = styled.div`
  border-radius: 30px;
  width: 80%;
  min-height: 160px;
  padding: 30px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-red);
  box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
  margin-top: 5%;


  h1, h2 {
    margin-bottom: 15px;
    color: var(--color-darkGrey);
  }

  h3 {
    font-weight: 400;
    color: var(--color-darkGrey);
  }


  form  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }

  input + button {
    margin-top: 10px;
  }

  input, textarea {
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
    padding: 5px 10px;
    max-width: 200px;

    ::placeholder {
      text-align: center;
    }
  }

  span {
    font-weight: 700;
    color: var(--color-vividBlue);
    
  }

  a {
    text-decoration: none;
    color: var(--color-vividBlue);
    padding: 5px 10px;
    transition: 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 667px) {
    width: 80%;
    padding: 30px 30px;


    input  {
      max-width: 200px;
    }
  } 
  @media (min-width: 1024px) {
    max-width: 600px;
    padding: 30px 30px;

  }
`
  export const ClonedStyledDiv = styled.div`

`

export const RecipeContainer = styled.div`
 border: 4px;
 background: pink;  
 margin: 10px; 
`

export const RecipeList = styled.div`
border: 4px;
`


export const LikeContainer = styled.div`                  
 border: 4px;
`
export const HeadlineDiv = styled.div`
 border: 4px;
`

export const PostsToggle = styled.div`
 border: 4px;
 display: flex;
`
export const RecipeFeed = styled.div`
 border: 4px;
`

export const DescriptionImagesTagsDiv = styled.div`
 border: 4px;
`

export const DescriptionDiv = styled.div `
 border: 4px;
`

export const ImageDiv = styled.div `
 border: 4px solid;
  height: 200px;
  width: 350px;
`

