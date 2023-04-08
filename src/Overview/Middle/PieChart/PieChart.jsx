import React from "react";
import Chart from "react-apexcharts";
import "./PieChart.css"

const PieChart = () => {
  const data = {
    series: [44, 55, 33],
    options: {
      chart: {
        width: 280,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: 'thug',
              value: 54
            }
          }
        }
      },
  
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        position: 'bottom',
        offsetY: 0,
        height: 0,
      }
    },
  };
  
return <div 
  className="PieChart">
    <h2>Pie Chart</h2>
    
        <Chart options={data.options} series={data.series} type="donut" />
  </div>;
};

export default PieChart;
