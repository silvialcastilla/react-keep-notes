import React from 'react'
import Aside from '../../components/Aside/Aside'
//import Logo from "../../components/logo/Logo";
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';



function RemindersPage() {
  var data = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
      [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    ]
  };

  var options = {
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null;
      }
    }
  };

  var type = 'Bar'


  return (
    <div className="reminders-page">
      <h1>RemindersPage</h1>
      <Aside/>
      <ChartistGraph className={'ct-octave'} data={data} options={options} type={type} />
    </div>
  );
}

export default RemindersPage;