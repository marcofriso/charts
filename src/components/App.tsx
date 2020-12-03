import React from "react";
import styled from "styled-components";
import InputFields from "./InputFields";
import Sega from "./SEGA.woff";

const AppStyle = styled.div`
  .App {
    height: 100vh;
    background: no-repeat center center fixed cover;
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  @font-face {
    font-family: "SEGA LOGO FONT";
    font-style: normal;
    font-weight: normal;
    src: local("SEGA LOGO FONT"), url(${Sega}) format("woff");
  }

  h1 {
    font-family: "SEGA LOGO FONT";
    margin-top: 10vh;
    font-weight: 200;
    color: rgb(4, 68, 245);
    font-size: 4em;
  }
`;

const App = () => (
  <React.Fragment>
    <AppStyle>
      <div className="App">
        <header>
          <h1>Charts Generator</h1>
        </header>
        <InputFields />
      </div>
    </AppStyle>
  </React.Fragment>
);

export default App;
