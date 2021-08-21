var width;
var height;

// Let's put the pad and the moving box together

// Those variables holds the position and velocity of the moving box
var box_x;
var box_y;
var box_vel_x;
var box_vel_y;

// Those variables hold the position and size of this pad
var pad_x;
var pad_y;
var pad_size;

var frames;

function setup()
{
	width = afw.getWidth();
	height = afw.getHeight();

	// Gonna start with box in the center of screen and moving in diagonal
	box_x = width/2 - 15;
	box_y = height/2 - 15;
	box_vel_x = 0.5;
	box_vel_y = 0.5;

	// Let's start the pad in the center/bottom of screen
	pad_size = 100;
	pad_x = width/2 - pad_size/2;
	pad_y = height - 30;
	
	frames = 0;
}

function redraw()
{
	frames++;
	afw.print(30,30,"Frames: "+frames);
	afw.print(300,30,"Use A or D to move!");

	// Draw the moving box
	afw.fillRectangle(box_x,box_y,30,30);
	
	// Draw the pad.
	afw.fillRectangle(pad_x, pad_y, pad_size, 10);
}

function animate(dt, time)
{
	// Before we move the box let's check if it reached a limit
	// If so, we invert the velocity before next move
	if(box_x > width-30) box_vel_x = -box_vel_x;
	if(box_x < 0) box_vel_x = -box_vel_x;

	if(box_y > height-30) box_vel_y = -box_vel_y;
	if(box_y < 0) box_vel_y = -box_vel_y;

	// Using velocity to change position of the box
	box_x = box_x + box_vel_x;
	box_y = box_y + box_vel_y;
	
	// Moving pad according to A and D key status
	if(afw.keyDown["KeyD"] == 1 && pad_x < width-pad_size){
		pad_x += 1;
	}
	
	if(afw.keyDown["KeyA"] == 1 && pad_x > 0){
		pad_x -= 1;
	}
}


// And now we have the moving box and the pad working.
// But... Something is missing, right?
// The ball is nothing interacting with the pad. hummm...
// Just like it wasn't interacting with walls in the begining
// Let's try to fix it.
