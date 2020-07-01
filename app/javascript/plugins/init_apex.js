const initApex = () => {

var ydata = document.getElementById('y-axis').innerText
var ydataArray = ydata.slice(1, -1).split(', ').map(Number)

var xdata = document.getElementById('x-axis').innerText
var xdataArray = xdata.slice(1, -1).split(', ').map(Number)

  // var data = document.getElementById('chart').innerHTML

  var options = {
    chart: {
      type: 'bar'
    },
    series: [
      {
        name: 'value',
        data: ydataArray,
        hideOverlappingLabels: true
      }
    ],
    xaxis: {
      categories: xdataArray,
      hideOverlappingLabels: true
    }
  }

  var chart = new ApexCharts(document.querySelector('#chart'), options)
  chart.render()
  console.log(ydataArray)
}

export {initApex}
