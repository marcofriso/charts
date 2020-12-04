import React, { useState } from "react";
import styled from "styled-components";

const InputFieldStyle = styled.div`
  input {
    padding: 15px;
    width: 270px;
    font-size: 20px;
  }

  button {
    padding: 25px;
    background-color: #f4511e;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    font-size: 20px;
    margin: 4px 2px;
    opacity: 0.6;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    margin-top: 22vh;
  }
`;

interface FormData {
  nrCharts: number;
  dataPoints: number;
}

const InputFields = () => {
  const [nrCharts, setnrCharts] = useState<string>("");
  const [dataPoints, setdataPoints] = useState<string>("");
  const [formData, setFormData] = useState<FormData>();

  const handleSubmit = (event: React.SyntheticEvent): void => {
    setFormData({
      nrCharts: parseInt(nrCharts),
      dataPoints: parseInt(dataPoints),
    });
    setnrCharts("");
    setdataPoints("");

    event.preventDefault();
  };

  return (
    <InputFieldStyle>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          id="nr-charts"
          name="nr-charts"
          placeholder="Insert number of charts"
          max="10"
          onChange={(e) => setnrCharts(e.target.value)}
          value={nrCharts}
        ></input>
        <input
          type="number"
          id="nr-data-points"
          placeholder="Insert number of data points"
          max="200"
          value={dataPoints}
          onChange={(e) => setdataPoints(e.target.value)}
        ></input>
        <button type="submit">Generate Charts</button>
      </form>
      {console.log("FD", formData)}
    </InputFieldStyle>
  );
};

export default InputFields;
