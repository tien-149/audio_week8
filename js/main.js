(() => {
	let aud = document.querySelector('audio'),
		play = document.querySelector('#playButton'),
		pause = document.querySelector('#pauseButton'),
		rewind = document.querySelector('#rewindButton');
		//WWrite the function for the audio element
		
	function playAudio() {
		aud.play();
	}
	function pauseAudio() {
		aud.pause(true);
	}
	function rewindAudio() {
		aud.currentTime = 0;
	}

 //add event handling
 
 	play.addEventListener("click", playAudio);
 	pause.addEventListener("click", pauseAudio);
 	rewind.addEventListener("click", rewindAudio);

})();