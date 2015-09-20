$(document).ready(function(){
		event.preventDefault();


var clickCounter = 0;

				$(".generateButton").on("click", function(){


						clickCounter ++;
						// add div
						$( "body" ).append("<div class = newClass> </div>");

						//create line counter text to append to HTML
						var $newText = $("<p> Line # " + clickCounter + "</p>");

						$("body").append($newText);


						// Create new change color button
						var $button1 = $("<button type = button class=changeColorButton> Change Color </button>");
						
						$("body").append($button1);	

						//Create remove button

						var $button2 = $("<button type = button class = removeButton> Remove </button>");


						$("body").append($button2);

	

		// Add remove button functionality

				$(".removeButton").on("click", function(){
					$(this).pre
					console.log("test");
				});




			


		// Add change color button functionality

				$(".changeColorButton").on("click",function(){
						console.log("test");
						//$(this).prev().css("background-color", "red");
						$(this).toggleClass("clicked");
				});

		});		


});



