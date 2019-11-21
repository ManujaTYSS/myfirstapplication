//create table
const tables = {
    'JAVAFullStack': document.getElementById('JAVAFullStack'),
    'MEANSTACK': document.getElementById('MEANSTACK')
  }

// Create the chart
Highcharts.chart('containerPie', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Sourcing : Attended and Not Attended'
    },
    
    plotOptions: {
        pie: {
            allowPointSelect: true,
        //  cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
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
      },
    

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Browsers",
            colorByPoint: true,
            data: [
                {
                    name: "JAVAFullStack",
                    y: 62.74,
                    drilldown: "JAVAFullStack"
                },
                {
                    name: "MEANSTACK",
                    y: 10.57,
                    drilldown: "MEANSTACK"
                },
                {
                    name: "Python",
                    y: 7.23,
                    drilldown: "Python"
                },
                {
                    name: "DotNet",
                    y: 15.44,
                    drilldown: "DotNet"
                },
                {
                    name: "DataScience",
                    y: 4.02,
                    drilldown: "DataScience"
                }
                
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: "JAVAFullStack",
                id: "JAVAFullStack",
        
                data: [
                    [
                        "Attended",
                        6.0
                        
                    ],
                    [
                        "NotAttended",
                        4.0
                    ]
                   
                ]
            },
            {
                name: "MEANSTACK",
                id: "MEANSTACK",
                data: [
                    [
                        "Attended",
                        0.5
                    ],
                
                    [
                        "NotAttended",
                        "50.0",
                        0.5
                    ]
                ]
            },
            {
                name: "Python",
                id: "Python",
                data: [
                    
                    [
                        "Attended",
                        0.3
                    ],
                    [
                        "NotAttended",
                        "70.0",
                        0.7
                    ]
                ]
            },
            {
                name: "DotNet",
                id: "DotNet",
                data: [
                    [
                        "Attended",
                        0.1
                    ],
                    
                    [
                        "NotAttended",
                        "90.0",
                        0.9
                    ]
                ]
            },
            {
                name: "DataScience",
                id: "DataScience",
                data: [
                    [
                        "Attended",
                        0.4
                    ],
                   
                    [
                        "NotAttended",
                        0.6
                    ]
                ]
        
            }
           
        ]
    }
});