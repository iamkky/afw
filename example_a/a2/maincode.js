var width;
var height;
var center_x;
var center_y;

function setup()
{
		width = afw.getWidth();
		height = afw.getHeight();
		
		center_x = width/2;
		center_y = height/2;
}

function redraw()
{
	// A centralized box
	afw.fillRectangle(center_x - 15, center_y - 15,30,30);
	afw.fillCircle(center_x+200,center_y+200,20);
}

function animate(dt, time)
{
}
