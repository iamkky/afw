var x;
var y;
var dx;
var dy;
var frames;

function setup()
{
	x = afw.getWidth()/2;
	y = afw.getHeight()/2;
	
	dx = 1;
	dy = 1;

	frames = 0;
	animates = 0;
}

function redraw()
{
	afw.fillCircle(x,y,40);

	frames++;
	afw.print(10,30,"Frames: " + frames);
}

function animate(dt, time)
{
	if(x>afw.canvas.width-40) dx = -dx;
	if(x<40) dx = 1;

	x = x + dx;
	
	if(y>afw.canvas.height-40) dy = -dy;
	if(y<40) dy = 1;

	y = y + dy;
}
