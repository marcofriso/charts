import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const LineStyle = styled.div`
  background: white;
  margin: 20px auto;
  max-width: 1000px;
  align: center;
`;

const ChartsStyle = styled.div`
  margin: 20px 10px 0 10px;
`;

const setData = (chartData: Array<number>, labels: Array<number>) => ({
  labels,
  datasets: [
    {
      label: "chart",
      data: chartData,
      lineTension: 0,
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
});

const setOptions = (name: string) => ({
  title: {
    display: true,
    text: name,
    fontSize: 20,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 100,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
});

const LineChart = ({ name, chartData, labels }: any) => (
  <>
    <LineStyle>
      <Line data={setData(chartData, labels)} options={setOptions(name)} />
    </LineStyle>
  </>
);

const Charts = (props: any) => {
  const len = props.chartsData[0].length;
  const labels = [...Array(len).keys()].map((x) => x + 1);

  return (
    <>
      <ChartsStyle>
        {props.chartsData.map((chartData: Array<number>, i: number) => (
          <div key={i}>
            <LineChart
              name={`Chart - ${i + 1}`}
              chartData={chartData}
              labels={labels}
            />
          </div>
        ))}
      </ChartsStyle>
    </>
  );
};

export default Charts;
