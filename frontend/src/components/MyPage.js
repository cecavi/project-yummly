import React, { useState, useEffect } from 'react'
import { API_URL } from 'utils/utils'
import { useNavigate, Link } from 'react-router-dom'
import { RecipeFeed, PostsToggle, HeadlineDiv } from './styles/DivStyles'
import RecipeCard from './feature components/RecipeCard'

const MyPage = () => {
const [myPosts, setMyPosts] = useState([])
const [myLikedRecipes, setMyLikedRecipes] = useState([])
const accessToken = localStorage.getItem('accessToken');
const userId = localStorage.getItem('userId');
const [toggle, setToggle]= useState(false)
// const [liked, setLiked] = useState([])
const [loading, setLoading] = useState(false)

const navigate = useNavigate()


useEffect(() => {
  if(!accessToken) {
    navigate("/login") 
  }   
}, [accessToken])

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": accessToken
  }
}
 // fetch the posted or liked recipes depending on the toggle 
 const fetchPostedRecipes = () => {
  fetch(API_URL(`users/${userId}/posts`), options)
    .then((response) => response.json())
    .then((data) => {
      console.log('data response', data.response)
      setMyPosts(data.response.reverse());
      setLoading(false)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const fetchLikedRecipes = () => {
  fetch(API_URL(`users/${userId}`), options)
    .then((response) => response.json())
    .then((data) => {
      const likedRecipes = data.response.likedRecipes.reverse();
      setMyLikedRecipes(likedRecipes);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

useEffect(() => {
  if (toggle) {
    setLoading(true)
    fetchPostedRecipes();
  } else {
    fetchLikedRecipes();
  }
}, [userId, toggle]);

 


return (
  <RecipeFeed>
    <HeadlineDiv>
      <div>
        <h1>My Recipes</h1>
      </div>
      <PostsToggle>
        <a onClick={() => setToggle(true)}>
          <h2 className={toggle ? 'active-h2' : ''}>Posted</h2>
        </a>
        <a onClick={() => setToggle(false)}>
          <h2 className={toggle ? '' : 'active-h2'}>Liked</h2>
        </a>
      </PostsToggle>
    </HeadlineDiv>
    {toggle ? (
      <>
      {loading ? <p>loading...</p> : <RecipeCard recipeList={myPosts.reverse()} />}
      </>
    ) : (
      <RecipeCard recipeList={myLikedRecipes} />
    )}
  </RecipeFeed>
);
    }

export default MyPage
