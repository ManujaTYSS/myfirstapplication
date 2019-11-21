const tables = {
    'attended': document.getElementById('attended'),
    'not attended': document.getElementById('not attended')
  }
  
  Highcharts.chart('container', {
    chart: {
      type: 'pie',
      events: {
        drilldown(e) {
          const table = tables[e.point.drilldown]
  
          table.style.display = 'block'
  
          const tableRect = table.getBoundingClientRect()
          const containerRect = this.container.getBoundingClientRect()
  
          table.style.left = (containerRect.left + (containerRect.width - tableRect.width) / 2) + 'px'
          table.style.top = (containerRect.top + (containerRect.height - tableRect.height) / 2) + 'px'
        },
        drillup(e) {
          Object.values(tables).forEach(table => table.style.display = 'none')
        }
      }
    },
  
    "series": [{
      "name": "Sourcing",
      "colorByPoint": true,
      "data": [{
          "name": "Attended",
          "y": 62.74,
          "drilldown": "attended"
        },
        {
          "name": "Not Attended",
          "y": 10.57,
          "drilldown": "not attended"
        }
      ]
    }],
    "drilldown": {
      "series": [{
          "name": "Attended",
          "id": "attended",
          "data": []
        },
        {
          "name": "Not Attended",
          "id": "not attended",
          "data": []
        }
      ]
    }
  });
  