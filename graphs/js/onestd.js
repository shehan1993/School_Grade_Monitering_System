$(document).ready(function(){
	
			var subject = [];
			var mark = [];
			var ctx = $("#mycanvas");
			var horizontalBarChartData;
			var barGraph;
			var type = 'horizontalBar';
			
			
			var randomColorGenerator = function () { 
			return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
		};
			
			
	$.ajax({
		url: "onestdtermark.json",
		dataType:"json",
		
		success: function(data) {
			console.log(data);
			this.datas = data;

			
			
			subject.push("Maths");
			subject.push("Science");
			subject.push("Religon");
			subject.push("History");
			subject.push("English");
			subject.push("Language");
						
			
				mark.push(data[0].Maths);
				mark.push(data[0].Science);
				mark.push(data[0].Religon);
				mark.push(data[0].History);
				mark.push(data[0].English);
				mark.push(data[0].Language);
			
			

			


			 barGraph = new Chart(ctx, {
				type: type,
				data: horizontalBarChartData,
				options: {
                    // Elements options apply to all of the options unless overridden in a dataset
                    // In this case, we are setting the border of each horizontal bar to be 2px wide
                    elements: {
                        rectangle: {
                            borderWidth: 1,
                        }
                    },
                    responsive: true,
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Name of the Student'
                    },
					scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'SUBJECTS'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'MARKS'
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
	horizontalBarChartData = {
				labels: subject,
				datasets : [
					{
						label: 'subject mark',
						backgroundColor: randomColorGenerator(),
						borderColor: randomColorGenerator(),
						hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
						hoverBorderColor: 'rgba(200, 200, 200, 1)',
						 borderWidth: 2,
						data: mark
					}
				]
			};
		
});