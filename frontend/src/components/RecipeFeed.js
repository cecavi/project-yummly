import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import Form from './feature components/Form';
import Filter from './feature components/Filter';
import RecentlyLiked from './feature components/RecentlyLiked';
import styled from 'styled-components/macro';
//import AddIcon from './media/AddIcon.png'
import RecipesInFeed from './feature components/RecipesInFeed';

const RecipeFeed = () => {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('accessToken')
  const [collapsed, setCollapsed] = useState(true)

  useEffect(() => {
    if(!accessToken) {
      navigate("/login") 
    }   
  }, [accessToken])

  // Toggling the Form component
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  // Function to make sure that not all components mount depending on screen size
  const useMediaQuery = (width) => {
    const [pixelWidthReached, setPixelWidthReached] = useState(false);
  
    const updateWidth = useCallback((event) => {
      if (event.matches) {
        setPixelWidthReached(true);
      } else {
        setPixelWidthReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addEventListener("change", updateWidth);
      if (media.matches) {
        setPixelWidthReached(true);
      }
      return () => media.removeEventListener("change", updateWidth);
    }, []);
  
    return pixelWidthReached;
  };
  
  const mobileView = useMediaQuery(668)
  const tabletView = useMediaQuery(1024)

  return (
    <SectionAroundFeed>
    {mobileView ? ( 
      <FeedSection>
        <ButtonContainer>
            <button  
              type="button"
              onClick={toggle}>
              <img src={AddIcon} />
              <p>add new recipe</p>
            </button>
            {!collapsed && <Form collapsed={collapsed} setCollapsed={setCollapsed} />}
        </ButtonContainer>
        <Filter />
        <RecipesInFeed />
    </FeedSection>
    ) : tabletView ? (
      <FeedSection> 
        <div>
          <ButtonContainer>
            <button  
              type="button"
              onClick={toggle}>
              <img src={AddIcon} />
              <p>add new recipe</p>
            </button>
            {!collapsed && <Form collapsed={collapsed} setCollapsed={setCollapsed} />}
            </ButtonContainer>
        <RecipesInFeed />
        </div>
        <div>
          <Filter />
        </div>
      </FeedSection>
      ) : (
        <FeedSection> 
        <RecentlyLiked />
        <div>
          <ButtonContainer>
            <button  
              type="button"
              onClick={toggle}>
              <img src={AddIcon} />
              <p>add new recipe</p>
            </button>
            {!collapsed && <Form collapsed={collapsed} setCollapsed={setCollapsed} />}
            </ButtonContainer>
        <RecipesInFeed />
        </div>
        <div>
          <Filter />
        </div>
      </FeedSection>
      )
    }
    </SectionAroundFeed>
    )
  }

export default RecipeFeed

const SectionAroundFeed = styled.section`

`

const FeedSection = styled.section`
  
`

const ButtonContainer = styled.div`

  `