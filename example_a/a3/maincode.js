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
	
	// Four circles
	for(var i=0; i<5; i++){
		afw.fillCircle(center_x + (i-2) * 100,center_y+200,20);
	}
}

function animate(dt, time)
{
}
