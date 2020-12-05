import React, { useState } from "react";
import styled from "styled-components";
import InputFields from "./InputFields";
import Charts from "./Charts";
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

export interface FormData {
  nrCharts: number;
  dataPoints: number;
}

const setChartsData = (data: any) => {
  let chartsData = [];

  for (let i = 0; i < data.nrCharts; i++) {
    let chartData = [];
    for (let j = 0; j < data.dataPoints; j++) {
      chartData.push(Math.ceil(Math.random() * 100));
    }
    chartsData.push(chartData);
  }
  console.log("CDD", chartsData);

  return chartsData;
};

const App = () => {
  const [formData, setFormData] = useState<FormData>();
  let chartsData;

  if (formData) {
    chartsData = setChartsData(formData);
    console.log("SET_APP_DATA", chartsData);
  }

  return (
    <React.Fragment>
      <AppStyle>
        <div className="App">
          <header>
            <h1>Charts Generator</h1>
          </header>
          <InputFields declareFormData={setFormData} />
          {chartsData && <Charts chartsData={chartsData} />}
        </div>
      </AppStyle>
    </React.Fragment>
  );
};

export default App;
