import React from "react";

const Charts = (props: any) => {
  return (
    <div>
      CHART BELOW
      {props.chartsData.map((chartData: any, i: number) => (
        <div>
          CHARTS {i} {chartData}
        </div>
      ))}
    </div>
  );
};

export default Charts;
