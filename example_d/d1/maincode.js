var width;
var height;

// In this step we will organized the code a little bit

var box = {
	x: 0,
	y: 0,
	vex_x: 0,
	vel_y: 0
};

var pad = {
	x: 0,
	y: 0,
	size: 0
};

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

// The animate function was doing to much things.
// It animates the box and the pad.
// Lets break it down and create a function just for the box.
function animate_box(dt, time, b)
{
	if(b.x > width-30) b.vel_x = -b.vel_x;
	if(b.x < 0) b.vel_x = -b.vel_x;

	if(b.y > height-30) b.vel_y = -b.vel_y;
	if(b.y < 0) b.vel_y = -b.vel_y;
	
	if(b.y > pad.y - 30){
		if(b.x+30>pad.x && b.x<pad.x+pad.size){
			b.vel_y = -b.vel_y;
		}
	}

	b.x = b.x + b.vel_x;
	b.y = b.y + b.vel_y;
}

function animate(dt, time)
{
	// Moving the box
	animate_box(dt, time, box)
	
	// Moving pad according to A and D key status
	if(afw.keyDown["KeyD"] == 1 && pad.x < width-pad.size){
		pad.x += 1;
	}
	
	if(afw.keyDown["KeyA"] == 1 && pad.x > 0){
		pad.x -= 1;
	}
}

