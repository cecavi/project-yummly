import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/utils';
import { StyledNonTransparentDiv } from "components/styles/DivStyles";
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom';

const RecentlyLiked = () => {
  const accessToken = localStorage.getItem('accessToken');
  const userId = localStorage.getItem('userId');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken
      }
    };

    fetch(API_URL(`users/${userId}`), options)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.response.likedRecipes.reverse());
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [userId, accessToken]);

  const handleLike = (recipeId) => {
    const updatedPosts = [...posts];
    const likedRecipe = updatedPosts.find((recipe) => recipe._id === recipeId);
    if (likedRecipe) {
      likedRecipe.recipe.likes += 1;
      const payload = {
        likes: likedRecipe.recipe.likes
      };
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": accessToken
        },
        body: JSON.stringify(payload)
      };

      fetch(API_URL(`recipes/${recipeId}`), options)
        .then((response) => response.json())
        .then((data) => {
          // Handle the response if needed
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    setPosts(updatedPosts);
  };

  if (posts.length > 0) {
    const lastThreeLikedRecipes = posts.slice(0, 3);

    return (
      <MarginTopDiv>
        <h2>Recently liked recipes</h2>
        {lastThreeLikedRecipes.map((singleRecipe) =>
          <Link
            to={`/recipes/${singleRecipe._id}`}
            recipeid={singleRecipe._id}
            key={singleRecipe._id}
            onClick={() => handleLike(singleRecipe._id)} // Call handleLike when recipe link is clicked
          >
            {singleRecipe.recipe.name}
          </Link>
        )}
      </MarginTopDiv>
    );
  } else {
    return (
      <MarginTopDiv>
        <h2>Recently liked recipes</h2>
        <p>You have not liked any recipes yet</p>
      </MarginTopDiv>
    );
  }
};

export default RecentlyLiked;

const MarginTopDiv = styled(StyledNonTransparentDiv)`
  margin-top: 160px;
  height: fit-content;
  min-width: 250px;
  max-width: 400px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1rem;
  }

  a {
    cursor: pointer;
    margin-top: 5px;

    &:hover {
      color: var(--color-vividBlue);
    }
  }
`;
