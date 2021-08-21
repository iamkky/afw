var x;
var y;
var dx;
var dy;
var frames;

var width;
var height;

function setup()
{
	width = afw.getWidth();
	height = afw.getHeight();

	x = width/2;
	y = height/2;
	
	dx = 1;
	dy = 1;

	frames = 0;
	animates = 0;
}

function redraw()
{
	afw.fillRectangle(x,y,30,30);

	frames++;
	afw.print(10,30,"Frames: " + frames);
}

function animate(dt, time)
{
	if(x>width-30) dx = -dx;
	if(x<0) dx = 1;

	x = x + dx;
	
	if(y>height-30) dy = -dy;
	if(y<0) dy = 1;

	y = y + dy;
}
