import React from 'react';
import {createGlobalStyle} from "styled-components";
import {device} from "./components/models/MediaQueries";
import {Main} from "./components/Main";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    width: 100%;
    height: 100%;

  @media${device.laptop} {
    font-size: 71.25%;
  } @media${device.laptopL} {
    font-size: 81.25%;
  }
  }

  body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    letter-spacing: 1.5px;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <Main />
        </>
    );
}

export default App;
