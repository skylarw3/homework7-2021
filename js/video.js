var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	 video.play()
	 document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= .95
	console.log(video.playbackRate)
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume");
	console.log(this.value)
	video.volume = this.value /100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= .95
	console.log(video.playbackRate)
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.play()
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing CSS");
	video.play()
	video.classList.remove("oldSchool")
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted === false) {
		video.muted = true;
	}
	else {
		video.muted = false;
	}
	if (this.innerHTML == "Mute") {
		this.innerHTML = "Unmute";
	}
    else this.innerHTML = "Mute";
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log(video.currentTime);
	video.currentTime += 15;
	video.loop = true;
});

