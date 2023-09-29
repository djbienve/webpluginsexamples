/*
 * Renderiza los gráficos de la sección "iCrepe chatter"
 */
var presiont0 ;

$(window).ready(function()
{
	API.Segment = 'http://192.168.1.33:7888';; //TODO
	API.Resource = '/stream?machines=JSH_D3NYWC';
	Controller.DataQuery();
});


/*
####################################################################################
#########################   TENDENCIA CHATTER (1/4)  ###############################
####################################################################################
*/
Highcharts.chart('tendencia-chatter-graph', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {
                var ind1serie = this.series[0];
								var ind2serie = this.series[1];
								var ind3serie = this.series[2];
								var ind4serie = this.series[3];

                var refreshIntervalId = setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        indi1var = parseInt(Controller.acel_chatter_1_LC);
												indi2var = parseInt(Controller.acel_chatter_2);
												indi3var = parseInt(Controller.acel_chatter_3);
												indi4var = parseInt(Controller.acel_chatter_4_LT);

          ind1serie.addPoint([x, indi1var], false, true);
					ind2serie.addPoint([x, indi2var], false, true);
					ind3serie.addPoint([x, indi3var], false, true);
					ind4serie.addPoint([x, indi4var], true, true);

/*
					if (Controller.lastIndicatorValue) {
						# Para la función
						clearInterval(refreshIntervalId);
						alert("review your answer");
						window.location.href = "https://www.google.com/";
					}
*/

                }, 1000);
            }
        }
    },

    time: {
        useUTC: false
    },

    title: {
		// Titulo de arriba
        text: ''
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
			// Titulo del eje vertical
            text: ''
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },
    legend: {
        enabled: true
    },
    exporting: {
        enabled: false
    },
	credits: {
		enabled: false
	},

	series: [
		// FIRST LINE
		{
        name: 'acel_chatter_1_LC (m/s²rms)',
        data: (function () {
            var data = [],
                time = (new Date()).getTime(),
                i;
            for (i = -10; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: 0
                });
            }
            return data;
        }())
		},

		// SECOND LINE
		{
		name: 'acel_chatter_2 (m/s²rms)',
		data: (function () {
			var data = [],
				time = (new Date()).getTime(),
				i;
			for (i = -10; i <= 0; i += 1) {
				data.push({
					x: time + i * 1000,
					y: Math.random()
				});
			}
			return data;
		}())
		}
		,

		// THIRD LINE
		{
		name: 'acel_chatter_3 (m/s²rms)',
		data: (function () {
			var data = [],
				time = (new Date()).getTime(),
				i;
			for (i = -10; i <= 0; i += 1) {
				data.push({
					x: time + i * 1000,
					y: Math.random()
				});
			}
			return data;
		}())
		},

		// FOURTH LINE
		{
		name: 'acel_chatter_4_LT (m/s²rms)',
		data: (function () {
			var data = [],
				time = (new Date()).getTime(),
				i;
			for (i = -10; i <= 0; i += 1) {
				data.push({
					x: time + i * 1000,
					y: Math.random()
				});
			}
			return data;
		}())
		}
]
});

/*
####################################################################################
##########################   VALOR ACTUAL CHATTER (2/4)  ###########################
####################################################################################
*/
Highcharts.chart('valor-actual-chatter-bar-graph', {
	chart: {
			type: 'column',
	   		events: {
	            load: function() {
					var series = this.series[1];
					setInterval(function() {
						y1 = parseInt(Controller.acel_chatter_1_LC);
						y2 = parseInt(Controller.acel_chatter_2);
						y3 = parseInt(Controller.acel_chatter_3);
						y4 = parseInt(Controller.acel_chatter_4_LT);
						var color1 = (y1 > 80) ? "#D33A3A" : "#89C173"
						var color2 = (y2 > 80) ? "#D33A3A" : "#89C173"
						var color3 = (y3 > 80) ? "#D33A3A" : "#89C173"
						var color4 = (y4 > 80) ? "#D33A3A" : "#89C173"
				        series.setData([{
					          y: y1,
					          color: color1
					        },{
					          y: y2,
					          color: color2
					        },{
					          y: y3,
					          color: color3
					        },{
					          y: y4,
					          color: color4
					        }]);
					}, 1000);
			     }
			  }
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
		// Borrado de rayas
		lineWidth: 0,
		minorGridLineWidth: 0,
		lineColor: 'transparent',
		minorTickLength: 0,
		tickLength: 0,
		gridLineColor: 'transparent',
		labels: {
			style: {
				fontSize: "18px"
			}
		},
    },
	yAxis: {
		min: 0,
		max: 100,
        title: {
            text: ''
        },
		// Borrado de rayas
		lineWidth: 0,
		minorGridLineWidth: 0,
		lineColor: 'transparent',
		labels: {
		 enabled: false
		},
		minorTickLength: 0,
		tickLength: 0,
		gridLineColor: 'transparent',
    },
	exporting: {
		enabled: false
	},
    legend: {
        enabled: false
    },
    tooltip:{
    enabled: false
    },
    plotOptions: {
        series: {
            stacking:'percentage',
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}m/s²rms'
            },
			// Anchura de la barra
			pointWidth: 80,
			// Color del borde
			borderColor: '#5F636F',
			borderWidth:3
        }
    },
	credits: {
		enabled: false
	},

    series: [
        {
            name: "Series1",
            data: [{
              name: "acel_1_LC",
              y:100,
              color: '#5F636F'
            },{
              name: "acel_2",
              y:100,
              color: '#5F636F'
            },{
              name: "acel_3",
              y:100,
              color: '#5F636F'
            },{
              name: "acel_4_LT",
              y:100,
              color: '#5F636F'
            }],
             dataLabels: {
                enabled: false,
            }
        },{
            name: "Series2",
            data: [{
              name: "acel_1_LC",
              y: 0,
              color: '#0084ff'
            },{
             name: "acel_2",
              y: 0,
              color: '#0084ff'
            },{
             name: "acel_3",
              y: 0,
              color: '#0084ff'
            },{
             name: "acel_4_LT",
              y: 0,
              color: '#0084ff'
            }]
        }
    ]
});


/*
####################################################################################
###########################   VELOCIDAD PAPEL (3/4)  ###############################
####################################################################################
*/
Highcharts.chart('velocidad-papel-graph', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {
                var ind1serie = this.series[0];

                var refreshIntervalId = setInterval(function () {
                    var x = new Date().getTime(); // current time
                    indispeed = parseInt(Controller.paper_speed);
                    ind1serie.addPoint([x, indispeed], true, true);
/*
					if (Controller.lastIndicatorValue) {
						clearInterval(refreshIntervalId);
						alert("review your answer");
						window.location.href = "https://www.google.com/";
					}
*/
                }, 1000);
            }
        }
    },

    time: {
        useUTC: false
    },

    title: {
		// Titulo de arriba
        text: ''
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
			// Titulo del eje vertical
            text: ''
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },
    legend: {
        enabled: true
    },
    exporting: {
        enabled: false
    },
	credits: {
		enabled: false
	},

	series: [{
        name: 'Vel. papel (m/min)',
        data: (function () {
            var data = [],
                time = (new Date()).getTime(),
                i;
            for (i = -10; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: 0
                });
            }
            return data;
        }())}]
});


/*
####################################################################################
#######################   VELOCIDAD PAPEL BARRAS (4/4)  #############################
####################################################################################
*/
Highcharts.chart('velocidad-papel-bar-graph', {
	chart: {
			type: 'column',
	   		events: {
	            load: function() {
					var series = this.series[1];
					setInterval(function() {
						y1 = parseInt(Controller.paper_speed);
						presiont1 = parseInt(Controller.PresionRasquetaCrepado);
						diferencia = presiont1-presiont0;
						console.log(Math.abs(diferencia));
						console.log(y1);

						if (Math.abs(diferencia)> 1) {  //TODO

							$.remodal.lookup[$('[data-remodal-id=modal]').data('remodal')].open();
						}
						presiont0 = presiont1;
						mostrar = (y1/2000) * 100;

						var coloret1 = (mostrar > 80) ? "#D33A3A" : "#89C173"
				        series.setData([{
				          y: mostrar,
				          color: coloret1,
									hh: y1
				        }]);
					}, 1000);
	            }
	        }
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'category',
		// Borrado de rayas
		lineWidth: 0,
		minorGridLineWidth: 0,
		lineColor: 'transparent',
		labels: {
		 enabled: false
		},
		minorTickLength: 0,
		tickLength: 0,
		gridLineColor: 'transparent',
    },
	yAxis: {
		min: 0,
		max: 100,
        title: {
            text: ''
        },
		// Borrado de rayas
		lineWidth: 0,
		minorGridLineWidth: 0,
		lineColor: 'transparent',
		labels: {
		 enabled: false
		},
		minorTickLength: 0,
		tickLength: 0,
		gridLineColor: 'transparent'
    },
	exporting: {
		enabled: false
	},
    legend: {
        enabled: false
    },
    tooltip:{
    enabled: false
    },
    plotOptions: {
        series: {
            stacking:'percentage',
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.hh:.1f}m/min'
            },

			// Anchura de la barra
            pointWidth: 80,
			// Color del borde
			borderColor: '#5F636F',
			borderWidth:3
        }
    },
	credits: {
		enabled: false
	},

    series: [
        {
            name: "Series1",
            data: [{
              name: "",
              y:100,
              color: '#5F636F'
            }],
             dataLabels: {
                enabled: false,
            }
        },{
            name: "Series2",
            data: [{
              name: "",
              y: 0,
              color: '#0084ff'
            }]
        },
    ]
});
