// Version 2.0
// Using requestAnimationFrame

const afw = {
	ticks: 0,
	timeReal: 0,
	timeStart: -1,
	timeFromStart: 0,
	time: 0,
	imagesToLoad: 0,
	state: 0,
	animatePerSecond: 600,
	animateDt: 1000/600,
	canvas: null,
	context: null,
	keyDown: {},
	loadImage(src)
	{
		var downloadingImage;

		if(afw.state != 1) return;
		downloadingImage = new Image();
		downloadingImage.onload = function (){ afw.imagesToLoad--;	};
		afw.imagesToLoad++;
		downloadingImage.src = src;
	
		return downloadingImage;
	},
	getWidth()
	{
		return this.canvas.width;
	},
	getHeight()
	{
		return this.canvas.height;
	},
	fillCircle(x, y, radius)
	{
		this.context.beginPath();
		//afw.context.moveTo(x, y);
		this.context.arc(x, y, radius, 0, 2 * Math.PI);
		this.context.fill();
	},
	fillRectangle(x, y, width, height)
	{
		this.context.beginPath();
		this.context.fillRect(x, y, width, height);
	},
	line(x1,y1,x2,y2)
	{
		this.context.beginPath();
		this.context.moveTo(x1,y1);
		this.context.lineTo(x2,y2);
		this.context.stroke();
	},
	drawImage(img,x,y)
	{
		this.context.drawImage(img,x,y);
	},
	setStrokeColor(color)
	{
		this.context.strokeStyle = color;	
	},
	setFillColor(color)
	{
		this.context.fillStyle = color;
	},
	setColor(color)
	{
		afwStrokeColor(color);
		afwFillColor(color);
	},
	setfont(font)
	{
		this.context.font = font;
	},
	print(x,y,text)
	{
		this.context.fillText(text, x, y); 
	},
	translate(x,y)
	{
		this.context.translate(x,y);
	}
};

var afwKeyDown = [];

// Stub functions
function animate()
{
}

function setup()
{
}

 function afw_timetick(timestamp)
{
	afw.timeReal = timestamp;

	if(afw.imagesToLoad>0) return;

	if(afw.timeStart<0) afw.timeStart = timestamp;
	afw.timeFromStart = timestamp - afw.timeStart;

	while(afw.time < afw.timeFromStart){
		animate(afw.animateDt, afw.time);
		afw.ticks++;
		afw.time += afw.animateDt;
	}

	afw.context.resetTransform();	
	afw.context.clearRect(0, 0, afw.canvas.width, afw.canvas.height);
	redraw();
	
	window.requestAnimationFrame(afw_timetick);
}
		
function afw_setup(canvasName)
{
	afw.canvas = document.getElementById(canvasName);
	afw.canvas.focus();
	afw.context = afw.canvas.getContext('2d');
	afw.context.font = "30px Arial";
	afw.canvas.addEventListener('keydown', afw_keydown);
	afw.canvas.addEventListener('keyup', afw_keyup);
	afw.state = 1;
	setup();
	afw.state = 2;
	window.requestAnimationFrame(afw_timetick);
}	

function afw_keydown(e)
{
	afw.keyDown[e.code] = true;
}
	
function afw_keyup(e)
{
	afw.keyDown[e.code] = false;
}	
	


