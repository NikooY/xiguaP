$(function () {
	//按钮鼠标放上颜色
	$('.btn').hover(
		function() { $(this).css('background-color','#87CEFA') },
		function() { $(this).css('background-color','#8470FF') }
	);

	$('#call').click(function(e){
		if( $('#counter').css('display')=="none" ){
			e.stopPropagation();
			$('#starter').css('display','flex');
		}else{
			$("#call").attr('disabled',true);
		}
	});

	
	//关闭按钮关闭菜单
	$('#close').click(function(e){
 		e.stopPropagation();
		$('#starter').css('display','none');
	});

	//打开计时器
	$('#begin').click(function(e){
		e.stopPropagation();
		$('#starter').css('display','none');
		$('#counter').slideDown('slow');
		var time=60;
		function timer(){
			m = parseInt(time/60);
			s = time%60;
			$('#time').css('color','black');
			if(m>=10&&s>=10){
				$('#time').html(m+':'+s);
			}else if(m<10&&s>=10){
				$('#time').html('0'+m+':'+s);
			}else if(m>=10&&s<10){
				$('#time').html(m+':0'+s);
			}else if(m<10&&s<10){
				$('#time').html('0'+m+':0'+s);
			}
			if(m==0&&s<=10){
				$('#time').css('color','red');
			}
			if(m==0&&s<0){
				clearInterval(interval);
				$('#counter').hide();
			}		
			time--;
		};
		timer();
		var interval;
		clearInterval(interval);
		interval = setInterval(timer, 1000);
	});

	//点击空白处关闭菜单
	$(document).bind('click',function(e){
 		var start = $("#starter");
    	if(!start.is(e.target) && start.has(e.target).length==0){
    		$('#starter').css('display','none');
    	}
    });

	//logo
	var canvas=document.getElementById('myCanvas'); 
	canvas.width=300;
	canvas.height=300;
	var ctx=canvas.getContext('2d');
	ctx.translate(100,100);
	function drawSix(r,color,lineColor){
		ctx.beginPath();
		ctx.lineTo(0,-r);
		ctx.lineTo(r*Math.sin(60*Math.PI/180),-r*Math.sin(30*Math.PI/180));
		ctx.lineTo(r*Math.sin(60*Math.PI/180),r*Math.sin(30*Math.PI/180));
		ctx.lineTo(0,r);
		ctx.lineTo(-r*Math.sin(60*Math.PI/180),r*Math.sin(30*Math.PI/180));
		ctx.lineTo(-r*Math.sin(60*Math.PI/180),-r*Math.sin(30*Math.PI/180));
		ctx.closePath();
		ctx.lineWidth = 1; 
		ctx.strokeStyle = lineColor;
		ctx.stroke();
		ctx.fillStyle=color;
		ctx.fill();  
	}
	var r1=100;
	var r2=85;
	var r3=75;
	var color1='#73B429';
	var color2='#EE4058';
	var lineColor1="black";
	drawSix(r1,color1); 
	drawSix(r2,color2); 
	drawSix(r3,color2,lineColor1); 
	ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.font="40px SimeHei bolder white";
	ctx.fillStyle='white';
	ctx.fillText("西瓜",-40,-10);
	ctx.fillText("创客",-40,32);
});