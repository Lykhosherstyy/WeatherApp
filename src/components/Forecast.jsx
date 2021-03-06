import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

export default class CityCard extends Component {
  setConfig = () => {
    const { list } = this.props;

    const dataArray = formatData(list);

    return {
      xAxis: {
        gridLineWidth:1,
        title: {
          text: null
        },
        alignTicks:false,
        categories:dataArray.x,
        lineColor: '#fff',
        lineWidth: 1,
        gridLineColor: '#fff',
        tickColor:'#fff',
        tickWidth: 1
      },
      chart: {
        backgroundColor: 'transparent',
        type: 'line',
        inverted: false
      },
      yAxis: {
        gridLineWidth:0,
        startOnTick: true,
        min: 0,
        labels: {
          enabled: false
        },
        title: {
          text: null
        }
      },
      title: {
        text: 'Forecast'
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        series: {
          color: '#fff',
          dataLabels: {
            format: '{y} °C',
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [ {
        data:dataArray.y
      } ]
    };
  }
  render() {
    return (
      <div>
        <ReactHighcharts config = {this.setConfig()} />
      </div>
    );
  }
}


const formatData = (forecast) => {
  const tempArray = forecast.map(temp => (
    Math.round(temp.main.temp)
  ));

  const dateArray = forecast.map(item => {
    const date = new Date(item.dt * 1000);
    const min = `0${date.getMinutes()}`;

    return `${date.getHours()}:${min}`;
  });

  return {
    x:dateArray,
    y:tempArray
  };
};