var audioPlayer = document.getElementById("audio-player");
var playButton = document.getElementById("play-button");
var stopButton = document.getElementById("stop-button");

function playAudio() {
  audioPlayer.play();
  playButton.classList.add("playing");
}

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  playButton.classList.remove("playing");
}
