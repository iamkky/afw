var x;
var y;
var dx;
var dy;
var frames;
var animates;

function setup()
{
	x = canvas.width/2;
	y = canvas.height/2;
	
	dx = 3;
	dy = 3;

	frames = 0;
	animates = 0;
}

function redraw()
{
	afwFillCircle(x,y,40);

	frames++;
	afwPrint(10,30,"Frames: " + frames);
	afwPrint(300,30,"Animates: " + animates);
}

function animate()
{
	animates++;

	if(x>canvas.width-40) dx = -dx;
	if(x<40) dx = 3;

	x = x + dx;
	
	if(y>canvas.height-40) dy = -dy;
	if(y<40) dy = 3;

	y = y + dy;
}
