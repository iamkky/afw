var width;
var height;

// Let's start with a box in the center of the canvas
// A box that don't move

var box_x;
var box_y;

// Besides nothing moves there things going on
// To understand lets create a variable called frames
// And start it with 0

var frames;

function setup()
{
	width = afw.getWidth();
	height = afw.getHeight();

	box_x = width/2 - 15;
	box_y = height/2 - 15;
	
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
}

// Run and see that frames is changing. And changing pretty fast.
// Computer is constantly redrawing the screen. 
// What happen if the variable box_x changes between redraws?
// Try to change value of box_x in the animate function and see what happens.
// Try something like:
//
//  box_x = box_x + 1;
//
//  or
//
//  box_x = box_x + 1; 
//  box_y = box_y + 1; 
//
//  Try different number like 0.1 or 0.5 or 2. Or even bigger, like:
//
//  box_x = box_x + 0.1;
//  box_y = box_y + 0.5;
//
// Don't fotget to try negative number...  like those:
//
//  box_x = box_x - 1;
//  box_y = buy_y + 1;
