$(document).ready(function(){
	
			var id = [];
			var mark = [];
			var ctx = $("#mycanvas");
			var chartdata;
			var barGraphs;
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


			 barGraphs = new Chart(ctx, {
				type: 'bar',
				data: chartdata,
				options: {
					responsive: true,
                    legend: {
                        position: 'top',
                    },
					title: {
                        display: true,
                        text: 'All std one sub:'
                    },
					scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'ID'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'MARK'
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
	

	chartdata = { 
				labels: id,
				datasets : [
					{	

						type: 'line', 
						data: mark,
						fill:false,
						label: 'subject mark',
						backgroundColor: randomColorGenerator(),
						borderColor: randomColorGenerator(),
						borderWidth: 2,
					},
					{	

						type: 'bar', 
						data: mark,
						label: 'subject mark',
						backgroundColor: randomColorGenerator(),
												
					},
					{	

						type: 'line', 
						data: mark,
						fill:false,
						label: 'subject mark',
						backgroundColor: randomColorGenerator(),
						borderColor: randomColorGenerator(),
						borderWidth: 2,
					},
					
					
				]
			}
				
				
			
			;
		
});