console.log("Welcome to my App");

let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("MasterPlay");
let myProgressBar = document.getElementById("myProgressBar");

let songs = [
  {
    songName: "Get Ready To Fight",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Get Ready To Fight",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Get Ready To Fight",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Get Ready To Fight",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Get Ready To Fight",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Get Ready To Fight",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
];

//Handle Play Pause Button
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    console.log("played");
    audioElement.play();
  }
});

myProgressBar.addEventListener("timeupdate", () => {
  console.log("timeupdate");
});

// audioElement.play();
