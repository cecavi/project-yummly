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
  --color-black: #000;
  --color-darkGrey: #383838;
  --color-lightGrey: #8A8989;
  --color-darkSand: #F2C19F;
  --color-sand: #F9DAC6;
  --color-beige: #FFEEE3;
  --color-vividBlue: #0000FF;
  --color-softPink: #F5C8C8;
  
  --font-main: 'Barlow', sans-serif;
  --font-secondary: 'MuseoModerno', cursive;
  
  // example: font-family: var(--font-secondary)
}

a {
    text-decoration: none;
  }

ul {
    list-style-type: none;
} 

`


export const OuterWrapper = styled.main`

`

export const Innerwrapper = styled.div`

`
export const FeedSection = styled.section`

`

export const SrOnly = styled.div`
 border:2px;
`

export const SmallDiv = styled.div`

`

export const TagContainer = styled.div`

`

export const StyledSvg = styled.svg`

`
