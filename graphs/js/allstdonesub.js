$(document).ready(function(){
	
			var id = [];
			var mark = [];
			var ctx = $("#mycanvas");
			var chartdata;
			var barGraph;
			var type = 'bar';
			
			
			var randomColorGenerator = function () { 
			return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
		};
			
			
	$.ajax({
		url: "allstdonesub.json",
		dataType:"json",
		
		success: function(data) {
			console.log(data);
			this.datas = data;

			for(var i in data) {
				id.push(data[i].id);
				mark.push(data[i].mark);
			}


			 barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata,
				options: {
					responsive: true,
                    legend: {
                        position: 'top',
                    },
					title: {
                        display: true,
                        text: 'Chart.js Bar Chart'
                    },
					scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
										
					
				}
								
			});
			
			
		},
		error: function(data) {
			console.log(data);
		}
	});
	
	var color = Chart.helpers.color;
	chartdata = {
				labels: id,
				datasets : [
					{
						label: 'Player Score',
						backgroundColor: randomColorGenerator(),
						borderColor: randomColorGenerator(),
						//borderColor: 'rgba(200, 200, 200, 0.75)',
						hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
						hoverBorderColor: 'rgba(200, 200, 200, 1)',
						 borderWidth: 2,
						data: mark
					}
				]
			};
		
});