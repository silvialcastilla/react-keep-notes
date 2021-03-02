import React from "react";
import Aside from "../../components/Aside/Aside";
//import Logo from "../../components/logo/Logo";
import ReactDOM from "react-dom";
import ChartistGraph from "react-chartist";

function RemindersPage() {
  let jsonPrueba = [
    {
      labels: ["json", "Ahhhhhhhh", "Cableeee"],
      series: [10, 30, 60],
    },
    {
      labels: ["json", "Ahhhhhhhh", "Cableeee"],
      series: [
        [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
        [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
      ],
    },
    {
      labels: ["json", "Ahhhhhhhh", "Cableeee"],
      series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6],
      ],
    },
  ];

  console.log(jsonPrueba[0].labels);

  var data = {
    labels: jsonPrueba[0].labels,
    series: jsonPrueba[0].series,
  };

  var options = {
    labelInterpolationFnc: function (value) {
      return value[0];
    },
  };

  var responsiveOptions = [
    [
      "screen and (min-width: 640px)",
      {
        chartPadding: 30,
        labelOffset: 100,
        labelDirection: "explode",
        labelInterpolationFnc: function (value) {
          return value;
        },
      },
    ],
    [
      "screen and (min-width: 1024px)",
      {
        labelOffset: 80,
        chartPadding: 20,
      },
    ],
  ];

  var type = "Pie";

  return (
    <div className="reminders-page">
      <h1>RemindersPage</h1>
      <Aside />
      <ChartistGraph
        className={"ct-chart"}
        data={data}
        options={options}
        responsiveOptions={responsiveOptions}
        type={type}
      />
    </div>
  );
}

export default RemindersPage;
