const initApex = () => {

var ydataArray = document.getElementById('y-axis').dataset.values.slice(1, -1).split(',').map(Number)
// document.getElementById('y-axis').innerText
// var ydataArray = ydata.slice(1, -1).split(', ').map(Number)

// var xdata = document.getElementById('x-axis').innerText
var xdataArray = document.getElementById('x-axis').dataset.values.slice(1, -1).split(',').map(Number)

  var options = {
    chart: {
      type: 'line'
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
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    series: [
      {
        name: 'value',
        data: ydataArray,
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
}

export {initApex}
