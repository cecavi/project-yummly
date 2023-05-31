import React from "react";
import styled from "styled-components/macro";
//import { StyledNonTransparentDiv } from "components/styles/DivStyles";
import { Tag } from "./TagsVisual";
//import { ImageDiv } from "components/styles/DivStyles";
import BREAKFAST from "../media/BREAKFAST.jpg"
import LUNCH from "../media/LUNCH.jpg"
import SNACK from "../media/SNACK.jpg"
import FOOD from "../media/FOOD.jpg"
import DINNER from "../media/DINNER.jpg"

const RecipeDetails = ({ recipeInfo }) => {

    // Turning ingredients string into array (to be able to display the ingredients in a list). The string is split at each comma.
    const IngredientsIntoList = recipeInfo.map((recipe) => {
        return (
            recipe.ingredients[0].split(',')
        )
    })

    // Turning the instructions string into an array (to be able to display the ingredients in a list). The string is split at each line-break.
    const InstructionsIntoList = recipeInfo.map((recipe) => {
        return (
            recipe.instructions[0].split('\n')
        )
    })

    return (
        <>
            {recipeInfo.map((recipe) => {
                return (
                <MainRecipeDiv key={recipe._id}>
                    <BigImageDiv>
                    {recipe.tags.includes('breakfast') ? <img src={BREAKFAST} /> : recipe.tags.includes('lunch') ? <img src={LUNCH} /> : recipe.tags.includes('dinner') ? <img src={DINNER} /> : recipe.tags.includes('snack') ? <img src={SNACK} /> :  <img src={FOOD} />}                
                    </BigImageDiv>
                    <div>
                        <h1>{recipe.name}</h1>
                        <p>"{recipe.description}"</p>
                        <TagDiv>
                            {recipe.tags.map((tag, index) => {
                                return (
                                <TagRecipe key={index}>{tag}</TagRecipe>
                                )
                            })}
                        </TagDiv>
                    </div>
                    <RecipeInstructionsDiv>
                        <Ingredients>
                            <h2>Ingredients</h2>
                            <ul>
                                {IngredientsIntoList[0].map((li, index) => {
                                    return (
                                        <li key={index} >{li}</li>
                                    )
                                })}
                            </ul>
                        </Ingredients>
                        <Instructions>
                            <h2>Instructions</h2>
                            <ol>
                            {InstructionsIntoList[0].map((li, index) => {
                                    return (
                                        <li key={index}>{li}</li>
                                    )
                                })}
                            </ol>
                        </Instructions>
                    </RecipeInstructionsDiv>
                </MainRecipeDiv>
                )
            })}
        </>
    )
}

export default RecipeDetails

const MainRecipeDiv = styled.div`
border: 2px;
`
const RecipeInstructionsDiv = styled.div`
    border: 2px;
`

const Ingredients = styled.div`
    border: 2px;
`
const Instructions = styled.div`
    border: 2px;

`
const TagRecipe = styled.div`
  border: 2px;
`

const TagDiv = styled.div`
    border: 2px;
`

const BigImageDiv = styled.div`
border-color: black;
border: 2px;
`