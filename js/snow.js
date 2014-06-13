//  Snow Particale System Code

/*<!doctype html>
<html>
<meta charset="utf-8">
<title>Snow</title>
<canvas id="canvas" width="1000" height="700">

    </canvas>*/

var canvas;  //create a variable called canvas

var context;  //create a variable called context

var par;  //create a variable for the array to store the particles

var gravity = 0;  //if you want gravity use this, you can set any value you want

window.onload = function ()  //waits for the page to load and then executes

{

	canvas = document.getElementById("canvas"); //stores canvas in a variable
	context = canvas.getContext("2d"); //stores the context in a variable

	par = new Array();  //creates the array

	for (var i = 0; i < 100; i++)  //creates 100 particles
	{
		par[i] = new snow(); //creates an instance of snow
		par[i].draw();  //draws the snow
	}
	
	animate();  //make the snow move

}

//class description of the object

function snow ()
{
	//positions snow's x-coordinate from 0 to the width of the canvas
	
	this.x = Math.random() * canvas.width;  //sets the x to a random location
	this.y = Math.random() * canvas.height; //sets the y to a random location
	this.x = canvas.width/2; //sets the x to the center of the screen
	this.y = canvas.height/2; //sets the y to the center of the screend
	this.radius = Math.random() * 10 + 5;
	this.vx = Math.random() * 10 + 5;
	this.vy = Math.random() * 10 + 5;

	this.vx = Math.random() * 20 - 10; //to move left and right 
	this.vy = Math.random() * 20 - 10; //to move up and down

		//draw a circle on the canvas
		this.draw = function ()

		{

		context.fillStyle = "aaaacc"; //sets the color
		context.beginPath(); //starts a shape

		//creates the geometry for a circle
		context.arc(this.x, this.y, this.radius, this.radius, 0, 360 * Math.PI/180, false);

		context.fill();  //colors in the geometry

		}

		
		//move the snow
		this.move = function ()

		{

		//add velocity y to y position
		this.vy += gravity; //to apply gravity
		this.x += this.vx;  //to move things on the x-axis
		this.y += this.vy;  //to move things on the y-axis

		this.y += Math.random() * 10 - 5; //to move randomly in different directions
		this.x += Math.random() * 10 - 5; 

		//check to see if snow is off the screen

			if(this.y > canvas.height)
			{
			this.y = Math.random() * 1000 - 75;  //puts snow back at top of screen
			this.x = Math.random() * 1000 - 75;

			}
		}
}

function animate()

{
	//erases the canvas
	context.clearRect(0, 0, canvas.width, canvas.height);

	//move and draw each particle
	for(var i = 0; i < 100; i++)
	{
		par[i].move();
		par[i].draw();
	}

	//timer loop
	var timer = setTimeout("animate()", 50);

}


/*
Exception: syntax error
*/
