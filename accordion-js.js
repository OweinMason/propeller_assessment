// JavaScript Document
var data = new XMLHttpRequest();
	data.onreadystatechange = function() {
		
		if (this.status == 200) {
			var response = JSON.parse(data.responseText);
			var blocks = response.blocks;
			var output = "";
			for(var i = 0;i < blocks.length;i++){
				output += '<section id="'+blocks[i].heading+'"><a href="#'+blocks[i].heading+'"><h1>'+blocks[i].heading+'</h1></a><p>'+blocks[i].content+'</p></section>';
			}
			console.log(output);
			document.getElementById('content').innerHTML = output;
			
			var acc = document.getElementsByClassName("accordion");
		}
	};
	
	data.open("GET", "https://design.propcom.co.uk/buildtest/accordion-data.json", true);
	data.send();