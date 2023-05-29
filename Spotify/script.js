console.log("Welcome to my App");

let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("MasterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

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
    // console.log("played");
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");  
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  let progress = parseInt(audioElement.currentTime/audioElement.duration * 100 );
  console.log(progress);
  myProgressBar.value = progress ; 
});

myProgressBar.addEventListener("change",()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100 ;
})

// audioElement.play();
