import React, { useState } from "react";
import styled from "styled-components";
import InputFields from "./InputFields";
import Charts from "./Charts";

const AppStyle = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: column;

  .bottom {
    width: 100%;
    height: 100%;
    bottom: 0;
    position: relative;
    overflow: visible;
  }
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
        <div className="bottom">
          {chartsData && <Charts chartsData={chartsData} />}
        </div>
      </AppStyle>
    </React.Fragment>
  );
};

export default App;
