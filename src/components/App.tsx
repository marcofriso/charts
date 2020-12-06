import React, { useState } from "react";
import styled from "styled-components";
import InputFields from "./InputFields";
import Charts from "./Charts";

const AppStyle = styled.div`
  text-align: center;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

interface FormData {
  nrCharts: number;
  dataPoints: number;
}

const setChartsData = (data: FormData) => {
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
        <InputFields declareFormData={setFormData} />
        {chartsData && <Charts chartsData={chartsData} />}
      </AppStyle>
    </React.Fragment>
  );
};

export default App;
