var width;
var height;

// Let's start with a box in the center of the canvas
// A box that don't move

var box_x;
var box_y;

function setup()
{
	width = afw.getWidth();
	height = afw.getHeight();

	// Let's set up box_x and box_y so in order to position box in the center of canvas
	
	box_x = width/2 - 15;
	box_y = height/2 - 15;
}

function redraw()
{
	afw.fillRectangle(box_x,box_y,30,30);
}

function animate(dt, time)
{
}
