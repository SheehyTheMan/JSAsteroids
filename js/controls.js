// JavaScript Document

var up = false;
var down = false;
var left = false;
var right = false;

function addControls()
{
	window.addEventListener("keydown",function(e){

		if(e.keyCode == 37) // the left arrow out puts 37 when pressed down and when it is true it sets left as true 
		{
			left = true;
		}
		
		if(e.keyCode == 38) // the up arrow out puts 38 when pressed down and when it is true it sets up as true  
		{
			//alert("Up");  this is a good test for the beginning stages of the program
			up = true;
		}
		
		if(e.keyCode == 39) // the right arrow out puts 39 when pressed down and when it is true it sets right as true  
		{
			right = true;
		}
		
		if(e.keyCode == 40) // the down arrow out puts 37 when pressed down and when it is true it sets down as true  
		{
			down = true;
		}
	});	
	
	
	window.addEventListener("keyup",function(e){
		
		if(e.keyCode == 37)  // when the key is let go it turns it to false and stops the movment
		{
			left = false;
		}
		
		if(e.keyCode == 38) // when the key is let go it turns it to false and stops the movment 
		{
			up = false;
		}
		
		if(e.keyCode == 39) // when the key is let go it turns it to false and stops the movment 
		{
			right = false;
		}
		
		if(e.keyCode == 40)  // when the key is let go it turns it to false and stops the movment
		{
			down = false;
		}
	});	
}
addControls();
