import React from "react";
import ReactApexChart from "react-apexcharts";
import "./PieChart.css"

const PieChart = () => {
  const chartData = {
    series: [18, 32, 53 ],


  
  
    options: {
      chart: { 
        type: "donut",
      },
      labels: ['In Discussion', 'Currently Listed', 'Being Rented '],
      colors: ["var(--siftPurple)", "rgb(118, 232, 255)", "var(--offPurple)"],

  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: 'bottom',
    horizontalAlign: 'left', 
    floating: false,
    fontSize: '12px',
    fontFamily: 'Montserrat, Helvetica, Arial',
    fontWeight: 500,
    //   formatter: function(seriesName, opts) {
    //     return [seriesName, "  ", opts.w.globals.series[opts.seriesIndex]]
    // },
  inverseOrder: false,
    width: 160,
    height: undefined,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: -15,
    offsetY: -5,
    labels: {
        colors: 'var(--lightGray)',
        useSeriesColors: false
    },
    markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: ["var(--siftPurple)", "rgb(118, 232, 255)", "var(--offPurple)"],
        radius: 5,
        customHTML: undefined,
        onClick: undefined,
        offsetX: -3,
        offsetY: 0
    },
    itemMargin: {
        horizontal: 5,
        vertical: 1
    },
    onItemClick: {
        toggleDataSeries: true
    },
    onItemHover: {
        highlightDataSeries: true
    },
},


      dataLabels: { enabled: false },
      tooltip: { enabled: true, fillSeriesColor: true },
      
      fill: { colors: ["var(--siftPurple)", "rgb(118, 232, 255)", "var(--offPurple)"] },
      states: {
        hover: { filter: { type: "lighten", value: 0.05 } },
        active: { filter: { type: "none", value: 0 } }
      },
      stroke: { width: 0 },
      plotOptions: {
        pie: {
          expandOnClick: false,
          customScale: 1,
          donut: {
            size: "70%",
            labels: {
              show: true,
              name: { show: false },
              total: {
                show: true,
                showAlways: true,
                formatter: function (w) {
                  const totals = w.globals.seriesTotals;
  
                  const result = totals.reduce((a, b) => a + b, 0);
  
                  return result;
                }
              }
            }
          }
        }
      }
    }
  };  
return <div 
  className="PieChart">
    <h2 className="section-title">All Properties</h2>
    <div className="donut-holder">
    <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width = '50%'
        height={'180%'}
      />  
      </div>
      </div>
};

export default PieChart;
