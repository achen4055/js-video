var video = document.querySelector("#player1");

// PAGE LOAD

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.pause();
	video.loop = false;
	video.volume = document.querySelector("#slider").value / 100;
});

// PLAY BUTTON

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});

// PAUSE BUTTON

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// SLOW DOWN

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log(video.playbackRate);
});

// SPEED UP

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log(video.playbackRate);
});

// SKIP AHEAD

document.querySelector("#skip").addEventListener("click", function() {
	let time = video.currentTime + 10;
	if (time >= video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = time;
	}
	console.log(video.currentTime);
});

// MUTE

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").textContent = 'Mute';
	}
	else {
		video.muted = true;
		document.querySelector("#mute").textContent = 'Unmute';
	}
	console.log(video.muted);
});

// VOLUME SLIDER

var newVolume = document.querySelector("#slider");
newVolume.addEventListener("input", function() {
	video.volume = newVolume.value / 100;
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});

// STYLED

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

// ORIGINAL

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});