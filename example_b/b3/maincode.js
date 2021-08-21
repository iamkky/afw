var width;
var height;

var box_x;
var box_y;

var box_vel_x;
var box_vel_y;

var frames;

// Ok, box is moving. But it's going away through the wall !!!
// We could make some checks and change the velocity if the box touchs a wall, right?

function setup()
{
	width = afw.getWidth();
	height = afw.getHeight();

	box_x = width/2 - 15;
	box_y = height/2 - 15;
	
	// Gonna start with box moving horizontally
	box_vel_x = 0.2;
	box_vel_y = 0;

	box_vel_x = 0.6;
	box_vel_y = 1;
	
	frames = 0;
}

function redraw()
{
	frames++;
	afw.print(30,30,"Frames: "+frames);
	
	afw.fillRectangle(box_x,box_y,30,30);
}

function animate(dt, time)
{
	// Before we move the box let's check if it reached a limit
	// If so, we invert the speed before next move
	if(box_x > width-30) box_vel_x = -box_vel_x;
	if(box_x < 0) box_vel_x = -box_vel_x;

	
	// Even thou the box is not moving in vertical we can do the same for 
	// box_y variable, just in case we decide to change direction in the future
	// ATTENTION: remember to use height instead of width
	if(box_y > height-30) box_vel_y = -box_vel_y;
	if(box_y < 0) box_vel_y = -box_vel_y;

	
	// Here we use the velocity to change position of the box
	box_x = box_x + box_vel_x;
	box_y = box_y + box_vel_y;
}

// Now try to pick different values to box_vel_x and box_vel_y in the setup initialization
// try positive, negative values, and combinations os different numbers, for example:
// 
// box_vel_x = 0.6;
// box_vel_y = 1;

