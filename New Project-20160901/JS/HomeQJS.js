/*
* Navigation Angular JS / JQUERY
* By : Tons-of-Carls
*/

	//----------------------------JQUERY------------------------------
	
$(document).ready(function($){
	$('.nav-item').mouseenter(function(){
		$(this).css('color', 'black');
	});

	$('.nav-item').mouseleave(function(){
		$(this).css('color', 'gray');
	});
});
