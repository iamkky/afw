var width;
var height;

// We gonna try to let box variables a little bit more organized.

// Instead using four variables let's replace with single variable that can hold multiple values at once
//var box.x;
//var box.y;
//var box.vel_x;
//var box.vel_y;

var box = {
	x: 0,
	y: 0,
	vex_x: 0,
	vel_y: 0
};
// This looks a lot more organized, now we know that those values refers to same object

// Those variables hold the position and size of this pad
// Lets do the same with the pad
//var pad.x;
//var pad.y;
//var pad.size;

var pad = {
	x: 0,
	y: 0,
	size: 0
};

// Now, instead of box.x we should use box.x which means the variable "x" of object "box"
// Let's replace every box.x with box.x, box.y with box.y and so on.

var frames;

function setup()
{
	width = afw.getWidth();
	height = afw.getHeight();

	// Gonna start with box in the center of screen and moving in diagonal
	box.x = width/2 - 15;
	box.y = height/2 - 15;
	box.vel_x = 0.5;
	box.vel_y = 0.5;

	// Let's start the pad in the center/bottom of screen
	pad.size = 100;
	pad.x = width/2 - pad.size/2;
	pad.y = height - 30;
	
	frames = 0;
}

function redraw()
{
	frames++;
	afw.print(30,30,"Frames: "+frames);
	afw.print(300,30,"Use A or D to move!");
	
	// Draw the moving box
	afw.fillRectangle(box.x,box.y,30,30);
	
	// Draw the pad.
	afw.fillRectangle(pad.x, pad.y, pad.size, 10);
}

function animate(dt, time)
{
	// Before we move the box let's check if it reached a limit
	// If so, we invert the velocity before next move
	if(box.x > width-30) box.vel_x = -box.vel_x;
	if(box.x < 0) box.vel_x = -box.vel_x;

	if(box.y > height-30) box.vel_y = -box.vel_y;
	if(box.y < 0) box.vel_y = -box.vel_y;
	
	// If the moving box is close to the pad, let's check if the collided
	if(box.y > pad.y - 30){
		if(box.x+30>pad.x && box.x<pad.x+pad.size){
			box.vel_y = -box.vel_y;
		}
	}
	
	//    box.x   box.x+30
	//      v      v
	//      +------+
	//      |      |
	//      |      |
	//      +------+
	//         +-------------------+
	//         +-------------------+
	//         ^                   ^
	//        pad.x             pad.x+pad.size
	

	// Using velocity to change position of the box
	box.x = box.x + box.vel_x;
	box.y = box.y + box.vel_y;
	
	// Moving pad according to A and D key status
	if(afw.keyDown["KeyD"] == 1 && pad.x < width-pad.size){
		pad.x += 1;
	}
	
	if(afw.keyDown["KeyA"] == 1 && pad.x > 0){
		pad.x -= 1;
	}
}
