import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { API_URL } from 'utils/utils'
import { StyledButton } from 'components/styles/ButtonStyles'
import { ButtonDiv } from 'components/styles/ButtonStyles'
import { StyledDiv } from 'components/styles/DivStyles'
import Input from './Input'
import InputTextArea from './InputTextArea'
import Checkbox from './Checkbox'


// Filter arrays
export const MealArray = [{ value: 'breakfast', title: 'Breakfast' }, { value: 'lunch', title: 'Lunch' }, { value: 'dinner', title: 'Dinner' }, { value: 'snack', title: 'Snack' }]
export const PreferencesArray = [{ value: 'vegan', title: 'Vegan' }, { value: 'vegetarian', title: 'Vegetarian' }, { value: 'Gluten free', title: 'Gluten free' }, { value: 'lactose free', title: 'Lactose free' }]
export const TimeArray = [{ value: '<30min', title: '<30min' }, { value: '>30min', title: '>30min' }, { value: '>1h', title: '>1h' }]

const Form = ({ setCollapsed }) => {
  const [recipeName, setRecipeName] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [description, setDescription] = useState('')
  const [instructions, setInstructions] = useState([])
  const [rating, setRating] = useState(0)
  const [tags, setTags] = useState({})

  const accessToken = localStorage.getItem('accessToken');

  //Submitting new recipe
  const onSubmit = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken
      },
      body: JSON.stringify({
        recipe: {
          name: recipeName,
          description,
          ingredients,
          instructions,
          userRating: rating,
          tags: convertTagsToArray(tags)
        }
      })
    }
    fetch(API_URL("recipes"), options)
      .then(res => res.json())
      .then(data => {
        dispatch(recipes.actions.setNewRecipe(data.response))
      })
  }

  const convertTagsToArray = (tagsObject) => {
    const tagsArray = [];
    Object.keys(tagsObject).forEach(key => {
      if (tagsObject[key] === true) {
        tagsArray.push(key);
      }
    })
    return tagsArray;
  }

  const handleRecipeName = (event) => {
    setRecipeName(event.target.value)
  }

  const handleIngredients = (event) => {
    setIngredients(event.target.value)
  }

  const handleInstructions = (event) => {
    setInstructions(event.target.value)
  }

  const handleDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleRating = (event) => {
    setRating(event.target.value)
  }

  const closeForm = () => {
    setCollapsed(true)
  }

  const handleOnChange = (event) => {
    const key = event.target.name;
    const currentValue = tags[key];
    setTags((tags) => ({
      ...tags,
      [key]: !currentValue
    }));
  }
  
  return (
    <FormStyledDiv>
      <CreateRecipeDiv>
        <h1>Create recipe</h1>
        <button type="button" onClick={closeForm}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L24 24M24 2L2 24" stroke="#F2C19F" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </button>
      </CreateRecipeDiv>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          srOnly="Name of recipe"
          placeholder="My recipe is called..."
          value={recipeName}
          onChange={handleRecipeName}
        />
        <Input
          type="text"
          srOnly="Description"
          placeholder="Say something about your recipe"
          value={description}
          onChange={handleDescription}
        />
          <label>
          Ingredients:
            <InputTextArea
              srOnly="Ingredients"
              placeholder="Separate your ingredients with a comma"
              value={ingredients}
              onChange={handleIngredients}
            />
          </label>

        <label>
        Instructions:
          <InputTextArea
            srOnly="Instructions"
            placeholder="Separate the steps by using a line-break after each step"
            value={instructions}
            onChange={handleInstructions}
          /> 
        </label>

        <div>
        Rating:
          <select 
          onChange={handleRating} 
          value={rating}
          type="number"
          srOnly="Rating">
            <option selected="true" disabled value="Rating:"></option>
            <option label="1 - okay recipe" value="1"></option>
            <option label="2" value="2"></option>
            <option label="3" value="3"></option>
            <option label="4" value="4"></option>
            <option label="5 - best recipe ever" value=">5"></option>
          </select>
        </div>
        <TagsDiv>
          <Tag>
            <h2>Meal</h2>
            <div>
              {MealArray.map(({ title, value }) => <Checkbox key={value} title={title} value={value} handleOnChange={handleOnChange} tags={tags} />)}
            </div>
          </Tag>
          <Tag>
            <h2>Preferences</h2>
            <div>
              {PreferencesArray.map(({ title, value }) => <Checkbox key={value} title={title} value={value} handleOnChange={handleOnChange} tags={tags} />)}
            </div>
          </Tag>
          <Tag>
            <h2>Time</h2>
            <div>
              {TimeArray.map(({ title, value }) => <Checkbox key={value} title={title} value={value} handleOnChange={handleOnChange} tags={tags} />)}
            </div>
          </Tag>
        </TagsDiv>
        <ButtonDiv>
          <AddNewRecipeButton type="submit">Add recipe</AddNewRecipeButton>
        </ButtonDiv>
      </form>
    </FormStyledDiv>
  )
}

export default Form

const FormStyledDiv = styled.div`
  
`

const CreateRecipeDiv = styled.div`
 
`

const AddNewRecipeButton = styled.button`
   
`

const TagsDiv = styled.div`
  
`

const Tag = styled.div`

`