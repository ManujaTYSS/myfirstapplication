// Build the chart
Highcharts.chart('container1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Requirement '
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.no}</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.no:.1f} %'
            }
        }
    },
    series: [{
        name: 'Number',
        colorByPoint: true,
        data: [{
            name: 'JAVA full stack',
            y: 41.41,
            no:200,
            sliced: true,
            selected: true
        }, {
            name: 'C,C++',
            y: 11.84,
            no:100,
        }, {
            name: 'MEAN stack',
            y: 15.85,
            no:80,
        }, {
            name: 'MERN stack',
            y: 4.67,
            no:50,
        }, {
            name: 'Data Science',
            y: 14.18,
            no:20,
        }, {
            name: 'DOT NET',
            y: 12.06,
            no:25,
        }]
    }]
});