jQuery(document).ready(function($) {
 
	// Adds a source element, and appends it to the audio element, represented by elem.
	function addSource(elem, path) {
		$('<source>').attr('src', path).appendTo(elem);
	}
 
	$(".title").hover(function(){
 
		// Create an audio element, and set it to autoplay
		var audio = $('<audio />', {
		autoPlay : 'autoplay'
		});
 
		// Call our addSource function, and pass in the audio element and the path(s) to your audio.
		addSource(audio, 'http://localhost:8080/Thinkful-Portfolio/audio/Fire_Burning.ogg');
		addSource(audio, 'http://localhost:8080/Thinkful-Portfolio/audio/Fire_Burning.wav');
 
		// Add the audio + source elements to the page.
		audio.appendTo('body');
 
	});
 
});