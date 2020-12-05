import React, { useState } from "react";
import styled from "styled-components";
import InputFields from "./InputFields";
import Charts from "./Charts";
import Sega from "./SEGA.woff";

const AppStyle = styled.div`
  text-align: center;
  display: flex;
  height: 100%;
  flex-direction: column;

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
        <header>
          <h1>Charts Generator</h1>
        </header>
        <InputFields declareFormData={setFormData} />
        {chartsData && <Charts chartsData={chartsData} />}
      </AppStyle>
    </React.Fragment>
  );
};

export default App;
