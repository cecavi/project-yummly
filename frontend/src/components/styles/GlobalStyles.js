import styled, { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`
// RESET CSS
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
  height: 100%;
}

:root {
  --color-red: #DFD3C3;
  --color-white: #FFFFFF;
  --color-lightGrey: #8A8989;
  --color-darkSand: #D7C0AE;
  --color-sand: #F8EDE3;
  --color-beige: #FFEEE3;
  --color-vividBlue: #39909F;
  --color-softPink: #F5C8C8;
  --color-black: #000000;
  --color-brown: #967E76;

  --font-main: 'Hubballi', cursive;
  --font-secondary: 'Grandstander', cursive;
  

  // example: font-family: var(--font-main)
}

a {
    text-decoration: none;
  }

ul {
    list-style-type: none;
} 


//regular CSS

body {
    margin: 0;
    font-family: var(--font-main);
    background-color: var(--color-red);
    color: var(--color-brown);

  }

  h1, h2 {
    font-family: var(--font-main);
  }
  
  h2 {
    font-size: 1.2rem;
  }
  
  a {
    color: var(--color-brown);
    text-decoration: none;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0%;
    left: -1000px;
    padding-top: 15%;
    opacity: 0;
    transition: all 0.6s ease-in-out;
    background-color: var(--color-red);

    a {
      &:hover {
          color: var(--color-vividBlue);
        }
    }
    li {
      margin-left: -40px;
      margin-top: 10px;
      
    }

    a, button {
      font-size: 1.2rem;
      color: var(--color-darkGrey);
      padding: 10px 20px 13px 20px;
      border-radius: 20px;
      transition: all 0.25s ease-in-out;

      &.active {
        background-color: var(--color-darkSand);
        border-radius: 20px;
      }
    } 

    @media (min-width: 668px) {
      
    }

    @media (min-width: 1024px) {
      height: inherit;
      background: inherit;
      position: initial;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 0px 20px 26px;
      width: 100%;
      opacity: 1;

      a, button {
        padding: 10px 20px 13px 20px;
        margin-left: 2.5rem;

          &:hover {
          color: var(--color-vividBlue);
          background-color: var(--color-darkSand);
          border-radius: 20px;
        }
      }

    }
  }
// CSS classes
  .nav-menu.active {
    position: absolute;
    left: 0px;
    border-radius: 10px;
    padding-inline-start: 0px;
    display: flex;
    align-items: center;
    opacity: 1;

    @media (min-width: 668px) {
      
    }
    @media (min-width: 1024px) {
      background-color: inherit;
      position: initial;

    }
  }

  .logo-group {
    display: flex;
    align-items: center;
    transition: all 0.5s ease-in-out;
    margin-left: 5%;

    a {
      &:hover {
        color: var(--color-brown);
      }
    }
    &:hover {
      transform: scale(1.1);
    }
    @media (min-width: 1024px) {
    min-width: 270px;
    }
  }
  `


  export const OuterWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  `
  
  export const Innerwrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  
    @media (min-width: 667px) {
      margin-top: 160px;  
    }
  
    @media (min-width: 1024px) {
      margin-top: 180px
    }
  `
  export const FeedSection = styled.section`
    height: 100%;
    margin-top: 4%;
    display: grid;
    width: 100%;
    position: relative;
  
      @media (min-width: 668px) and (max-width: 1024px) {
        grid-template-columns: 2fr 1fr;
        gap: 2%;
        width: 80%
      }
  
      @media (min-width: 1025px) {
        grid-template-columns: 1fr 2fr 1fr;
        column-gap: 2vw;    
        width: 80%;
      }
  `
  
  export const SrOnly = styled.div`
    position: absolute;
     width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  `
  
  export const SmallDiv = styled.div`
    font-size: 0.8rem;
  
    a {
        &:hover {
            color: var(--color-vividBlue);
          }
      }
  `
  
  export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8vw;
  padding-top: 20px;
  `
  
  export const StyledSvg = styled.svg`
     &.liked {
         fill:"red";
     }
  `
  