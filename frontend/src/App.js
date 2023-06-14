import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import recipeReducer from './/reducers/RecipeReducer'
import Login from 'components/Login'
import Header from 'components/Header'
import RecipeFeed from 'components/RecipeFeed'
import AboutUs from 'components/AboutUs'
import Contact from 'components/Contact'
import UserPage from 'components/UserPage'
import MyPage from 'components/MyPage'
import Recipe from 'components/Recipe'
import NotFound from 'components/NotFound'
import { GlobalStyles, OuterWrapper, Innerwrapper } from 'components/styles/GlobalStyles'


export const App = () => {
  const reducer = combineReducers({ recipes: recipeReducer.reducer})
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <BrowserRouter>
      <GlobalStyles />
      <OuterWrapper>
      <Header />
        <Innerwrapper>
        <Routes>
          <Route path={"/register"} element={
            <Login
              loginType="register"
              loginHeadline="Register here"
              buttonText="Register" />}/>
          <Route path={"/login"} element={
            <Login
              loginType="login"
              loginHeadline="Login here"
              buttonText="Sign in" />}/>          
          <Route path="/" element={<RecipeFeed />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="/recipes/:recipeId" element={<Recipe />} />
          <Route path="/404" element={<NotFound />} />
          {/* <Route path="*" element={<Navigate to="/404" />} /> */}
        </Routes>
        </Innerwrapper>
      </OuterWrapper>
      </BrowserRouter>
    </Provider>
  );
}