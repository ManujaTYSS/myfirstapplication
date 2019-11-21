Highcharts.chart('container3', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Skill Based Sourcing 2019'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'java',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'mean stack',
            y: 11.84
        }, {
            name: 'data science',
            y: 10.85
        }, {
            name: 'phython',
            y: 4.67
        }, {
            name: 'dot net',
            y: 4.18
        
        }]
    }]
});