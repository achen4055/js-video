var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.pause();
	video.loop = false;
	video.volume = document.querySelector("#slider").value / 100;
});

// PAGE LOAD

// PLAY BUTTON

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});

// PAUSE BUTTON

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	document.querySelector("#player1").pause()
});

// SLOW DOWN

document.querySelector("#slower").addEventListener("click", function() {
	
});