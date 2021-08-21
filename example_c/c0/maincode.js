var width;
var height;

// In this example we are going to introduze a pad in the bottom of the screen
// Those variables hold the position and size of this pad
var pad_x;
var pad_y;
var pad_size;

var frames;

function setup()
{
	psize = 100;

	width = afw.getWidth();
	height = afw.getHeight();

	// Let's start the pad in the center/bottom of screen
	pad_size = 100;
	pad_x = width/2 - pad_size/2;
	pad_y = height - 30;
	
	frames = 0;
}

function redraw()
{
	// Draw the pad. It's a simple rectangle
	afw.fillRectangle(pad_x, pad_y, pad_size, 10);
	
	frames++;
	afw.print(10,30,"Frames: " + frames);
	afw.print(300,30,"Use A or D to move!");
}

// It's possible to check keyboard keys status, and use it to move things

function animate(dt, time)
{
	// that's how we can check if a key is down
	// And move pad position according to which key is down
	
	if(afw.keyDown["KeyD"] == 1 && pad_x < width-pad_size){
		pad_x += 1;
	}
	
	if(afw.keyDown["KeyA"] == 1 && pad_x > 0){
		pad_x -= 1;
	}
}
