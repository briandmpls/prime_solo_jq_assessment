$(document).ready(function(){
		event.preventDefault();


var clickCounter = 0;

		$(".generateButton").on("click", function(){


				clickCounter ++;
				// add class
				$( "ul" ).addClass(".newClass");

				//create line counter text to append to HTML
				var $newText = $("<p> Line # " + clickCounter + "</p>");

				$("ul").append($newText);


				// Create new change color button
				var $button1 = $("<button type = button class=changeColorButton> Change Color </button>");
				
				$("ul").append($button1);	

				//Create remove button

				var $button2 = $("<button type = button class = removeButton> Remove </button>");


				$("ul").append($button2);

		});


		// Add change color button functionality

		$(".changeColorButton").on("click", ".newClass", function(){

			$("this").addClass(".clicked");

		});



		// Add remove button functionality

		$(".removeButton").on("click", function(){

			












		});

});



