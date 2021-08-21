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

//Lets Give a name to this drawing
function house()
{
	// Complex drawing
	afw.line(0,height-22,0,height);
	afw.line(20,height-22,10,height-32);
	afw.line(0,height-22,10,height-32);
	afw.line(20,height-22,20,height);
	afw.line(20,height-22,0,height-22);
	
	afw.line(5,height,5,height-7);
	afw.line(5,height-7,10,height-7);
	afw.line(10,height-7,10,height);

	afw.line(50,height-32,10,height-32);
	afw.line(20,height-22,60,height-22);
	afw.line(50,height-32,60,height-22);
	afw.line(60,height-22,60,height);
		
	afw.line(27,height-5,27,height-12);
	afw.line(27,height-12,37,height-12);
	afw.line(37,height-12,37,height-5);
	afw.line(37,height-5,27,height-5);
	
	afw.line(47,height-5,47,height-12);
	afw.line(47,height-12,57,height-12);
	afw.line(57,height-12,57,height-5);
	afw.line(57,height-5,47,height-5);	
}

function redraw()
{
	// Now we can call it by it's name
	house();
	
	// And now it has a name we can call it twice
	// ... with a little bit of magic in between
	afw.translate(100,0);
	house();
	
	// And we can even another one
	afw.translate(100,0);
	house();
	
}

function animate(dt, time)
{
}
