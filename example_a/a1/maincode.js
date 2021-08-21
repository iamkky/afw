var width;
var height;

function setup()
{
		width = afw.getWidth();
		height = afw.getHeight();
}

function redraw()
{
	// A centralized box
	afw.fillRectangle((width-30)/2,(height-30)/2,30,30);
}

function animate(dt, time)
{
}
