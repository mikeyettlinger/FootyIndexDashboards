const initApex = () => {

var ydataArray = document.getElementById('y-axis').dataset.values.slice(1, -1).split(',').map(Number)
var xdataArray = document.getElementById('x-axis').dataset.values.slice(1, -1).split(',').map(Number)

  var options = {
    chart: {
      type: 'line',
    },
    title: {
    text: 'Profit Over Time',
    align: 'center',
    fontSize: '32px',
    color: '#010F37'
    },
    colors: ['#60CDF3', '#2F3C55'],
    grid: {
      row: {
          colors: ['#e5e5e5', 'transparent'],
          opacity: 0.5
      },
      column: {
          colors: ['#f8f8f8', 'transparent'],
      },
    },
    series: [
      {
        name: 'value',
        data: ydataArray,
        labels: {
        trim: true
        }
      }
    ],
    xaxis: {
      categories: xdataArray,
      labels: {
      show: false
      }
    }
  }

  var chart = new ApexCharts(document.querySelector('#chart'), options)
  chart.render()

  var baroptions = {
            series: [{
            name: 'PB',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'MB',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'IPD',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }],
            chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          title: {
          text: 'Dividends Over Time',
          align: 'center',
          fontSize: '32px',
          color: '#010F37'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
          };

          var chart = new ApexCharts(document.querySelector("#bar-chart"), baroptions);
          chart.render();


};

export {initApex}
