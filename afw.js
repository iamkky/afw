
var canvas;
var context;
var afwTick;
var afwKeyDown = [];
var afwImagesToLoad;
// Version 2.0
// Using requestAnimationFrame

var afwState;
var afwAnimatePerSecond;

// Stub functions
function animate()
{
}

function setup()
{
}

//Just to remember how to print msg :-)	  
//console.log(afwKeyDown.length);	  

function afw_timetick()
{
	if(afwImagesToLoad>0) return;

	for(var i=0; i<afwAnimatePerSecond; i = i + 60){
		animate();
		afwTick++;
	}
		
	context.clearRect(0, 0, canvas.width, canvas.height);
	redraw();
	
	window.requestAnimationFrame(afw_timetick);
}
		
function afw_setup()
{
	afwTick = 0;
	imagesToLoad = 0;
	afwState = 0;
	
	canvas = document.getElementById('scr1');
	context = canvas.getContext('2d');
	context.font = "30px Arial";
	canvas.addEventListener('keydown', afw_keydown);
	canvas.addEventListener('keyup', afw_keyup);
	afwState = 1;
	afwAnimatePerSecond = 600;
	setup();
	afwState = 2;
	window.requestAnimationFrame(afw_timetick);
}	

function afwLoadImage(src)
{
	var downloadingImage;

	if(afwState != 1) return;
	downloadingImage = new Image();
	downloadingImage.onload = function (){ afwImagesToLoad--;	};
	afwImagesToLoad++;
	downloadingImage.src = src;
	
	return downloadingImage;
}

function afw_keydown(e)
{
	afwKeyDown[e.key] = true;
}
	
function afw_keyup(e)
{
	afwKeyDown[e.key] = false;
}	
	
function afwFillCircle(x, y, radius)
{
	context.beginPath();
	//context.moveTo(x, y);
	context.arc(x, y, radius, 0, 2 * Math.PI);
	context.fill();
}
		
function afwFillRect(x, y, width, height)
{
	context.beginPath();
	//context.moveTo(x, y);
	context.fillRect(x, y, width, height);
}

function afwLine(x1,y1,x2,y2)
{
	context.beginPath();
	context.moveTo(x1,y1);
	context.lineTo(x2,y2);
	context.stroke();
}

function afwDrawImage(img,x,y)
{
	context.drawImage(img,x,y);
}

function afwStrokeColor(color)
{
	context.strokeStyle = color;	
}

function afwFillColor(color)
{
	context.fillStyle = color;
}

function afwColor(color)
{
	afwStrokeColor(color);
	afwFillColor(color);
}

function afwFont(font)
{
	context.font = font;
}

function afwPrint(x,y,text)
{
	context.fillText(text, x, y); 
}


