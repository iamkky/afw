var width;
var height;

var box_x;
var box_y;

// After last experimentation with numbers, let's create two more variables
// Those variables will represent the velocity of the moving box;

var box_vel_x;
var box_vel_y;

var frames;

function setup()
{
	width = afw.getWidth();
	height = afw.getHeight();

	box_x = width/2 - 15;
	box_y = height/2 - 15;
	
	// Let's give the box a velocity
	
	box_vel_x = 0.2;
	box_vel_y = 0.2;
	
	frames = 0;
}

function redraw()
{
	// Every time the software redraw screen we gona make frames increase
	frames++;
	// And lets shows the value of frames on screen
	afw.print(30,30,"Frames: "+frames);
	
	afw.fillRectangle(box_x,box_y,30,30);
}

function animate(dt, time)
{
	// Here we use the velocity to change position of the box
	
	box_x = box_x + box_vel_x;
	box_y = box_y + box_vel_y;
}

