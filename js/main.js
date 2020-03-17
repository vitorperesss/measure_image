
$(document).ready(function(){
	
	 
	
		var clicks = 0;
		var lastClick = [0, 0];
		var valor_final_X = 0;
		var valor_final_Y = 0;
				
		
		document.getElementById('canvas').addEventListener('click', drawLine, false);
		
		function getCursorPosition(e) {
			
			var x;
			var y;
			
				if (e.pageX != undefined && e.pageY != undefined) {
					x = e.pageX;
					y = e.pageY;
				} else {
					x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
					y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
				}
				
				return [x, y];
						
			}
			
	
	 	function drawLine(e) {
			var canvas = document.getElementById("canvas");
			var context = this.getContext('2d');
			var key = 'false';
			var x = getCursorPosition(e)[0] - this.offsetLeft;
			var y = getCursorPosition(e)[1] - this.offsetTop;
			if(clicks == 1){
				key = true;
			}
			var eixoX = x; 
			var eixoY = y; 
		
			
			calculateAxes(eixoX,eixoY,key);
			
		
			if (clicks != 1  && key != true) {
				
				context.lineWidth = '4';
				context.beginPath();
				context.arc(x+0.9, y, 6, 20, Math.PI*2, true);
				context.closePath();
				context.fillStyle = 'green';
				context.fill();
				context.strokeStyle = '#ADFF2F';
				context.stroke();
				context.save();
				clicks++;
			} else {
				context.beginPath();
				context.arc(x, y, 6, 20, Math.PI*2, true);
				context.closePath();
				context.fill();
				context.fillStyle = 'green';
				context.moveTo(lastClick[0], lastClick[1]);
				context.lineTo(x, y, 6);
				context.strokeStyle = '#ADFF2F';
				context.lineWidth = '4';
				context.stroke();
				context.font = "16px Comic Sans MS";
				context.fillStyle = 'green';
				context.textAlign = "center";
				context.fillText((valor_final_X+valor_final_Y).toFixed(2)+" Cm", x, y-12);
				context.save();
				clicks = 0;
				
				$("#undo").click(function() {
				
				context.clearRect(0, 0, canvas.width, canvas.height);
				
				});

				
			}
			
			lastClick = [x, y];
			

		}
	
			
				

	
			var array = ['X','Y','key'];
			array['X'] = [];
			array['Y'] = [];
			array['key'] = [];
	
		function calculateAxes(eixoX,eixoY,key){
			var tamX = "";
			var tamY = "";
			var chave = "";
			
			
			if (tamX == ''  && tamY == ''){
				var i = 0;
				
				tamX = eixoX;
				tamY = eixoY;
				chave = key;

				if(chave == true){
					i = i+1;	
				}
				
					array['X'][i] = tamX;
					array['Y'][i] = tamY;
					array['key'][i] = chave;
		
					var result_x = array['X'][0] - array['X'][1];	
					var result_y = array['Y'][0] - array['Y'][1];	
					var valor_de_x = Math.abs(result_x);
					var valor_de_y = Math.abs(result_y);

					if(chave == true){
						getImgSize(valor_de_x,valor_de_y);
					}
				} 			
			}
	
	
	 		 var X;
			 var Y;
		
		function getImgSize(valor_de_x,valor_de_y,X,Y) {
	
			 var tamanho_x = valor_de_x * 2.54 / 96 * 1.7;
			 var tamanho_y = valor_de_y * 2.54 / 96 * 2.2;
			
			 	if(tamanho_x > tamanho_y){
					
					X = tamanho_x; 
					
					if(X > 0){
					
						valor_final_X = X;
						valor_final_Y = 0;
					}
					
			
				}else{
					Y = tamanho_y;
					
					if(Y > 0){
						valor_final_Y = Y;
							valor_final_X = 0;
						
					}
					
				}
			}
	
	
			
		
			var x = (x!==undefined) ? x : 0;
			var y = (y!==undefined) ? x : 0;
			
		document.getElementById('imageLoader').addEventListener('change', function(event) {
			
			var h = $("#canvas").height();
			var w = $("#canvas").width();
			
			var x = $("#imagem").width();
			var newx = w;
			var y = $("#imagem").height();
			
			var prop = (100 * newx/x) / 100;
			var newy = x * prop;
			
			
			
			var myCanvas = document.getElementById('canvas');
			var ctx = myCanvas.getContext('2d');
			var img = new Image();
			img.onload = function(){
				myCanvas.width = img.width;
				myCanvas.height = img.height;
				
					
					$("#canvas").attr('width',newx);
					$("#canvas").attr('height',newy);
					$("#imagem").attr('src', img);
					ctx.drawImage(img, 0,0,newx,newy);
					ctx.save();
				
			};

			img.src = URL.createObjectURL(event.target.files[0]);
		});
		
	});


	

