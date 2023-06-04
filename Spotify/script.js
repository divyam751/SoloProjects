// console.log("Welcome to my App");

let index = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("MasterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let ds = document.getElementById("songDesc");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let sDuration = document.getElementsByClassName("timeStamp");
const currentTimeSpan = document.getElementsByClassName("updatedTime");



let songs = [
  {
    songName: "Get Ready To Fight",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
    totalTime : "00:42  "
    
  },
  {
    songName: "Brother anthem",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
    totalTime: "03:25  "
  },
  {
    songName: "Alan Walker – On My Way",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
    totalTime: "03:36  "
  },
  {
    songName: "TONES DANCE MONKEY",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
    totalTime: "04:07  "
  },
  {
    songName: "John legend - All of me",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
    totalTime: "05:07  "
  },
  {
    songName: "Alan walker - The Spectre ",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
    totalTime: "03:25  "
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  element.getElementsByClassName("songDuration")[0].innerText = songs[i].totalTime;
});

//Handle Play Pause Button
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    ds.innerText = songs[index].songName;
    currentTimeSpan.innerText = "1050";



    removePlayButton(index);
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    ds.innerText = songs[index].songName;
    removePauseButton(index);
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

function removePlayButton(index) {
  const playButton = document.getElementById(`${index}`);
  if (playButton) {
    playButton.classList.remove('fa-play-circle');
    playButton.classList.add('fa-pause-circle');
  }
}
function removePauseButton(index) {
  const playButton = document.getElementById(`${index}`);
  if (playButton) {
    playButton.classList.remove('fa-pause-circle');
    playButton.classList.add('fa-play-circle');
  }
}
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
  });
  
  myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
  });
  
  const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach(
      (element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
        
      }
      );
    };
    
    const songDuration = (audioElement)=>{
        sDuration.innerText = "time updated";
        console.log(audioElement.duration);
    }

  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.addEventListener("click", (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        ds.innerText = songs[index].songName;
        sDuration.innerText = "time updated";
        audioElement.src = `songs/${index+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-paly-circle");
        masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById(`next`).addEventListener('click',()=>{
    if(index == 5){
      index = 0 ;
    }
    else{
      index += 1;
    }
    ds.innerText = songs[index].songName;
    removePlayButton(index);
    if(index > 0){
      removePauseButton(index-1);
    }
    else{
      removePauseButton(5);
    }
    

    audioElement.src = `songs/${index+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-paly-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
})
document.getElementById("previous").addEventListener('click',()=>{
    if(index == 0){
      index = 5 ;
    }
    else{
      index -= 1;
    }
    
    if(index == 5){
      removePauseButton(0);
      removePlayButton(index);
    }
    else if(index >= 0 ){
      removePlayButton(index);
      removePauseButton(index+1);
    }
    ds.innerText = songs[index].songName;
    showCurrentTime();
   
    audioElement.src = `songs/${index+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-paly-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
});

function showCurrentTime() {
  // Get the <span> element
  // let currentTimeSpan = document.getElementsByClassName("songTimeUpdate");

  

  // Update the current time when the song is playing
  audioElement.addEventListener('timeupdate', function() {
    var currentTime = audioElement.currentTime;

    // Format the current time as minutes and seconds
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);
    var formattedTime = minutes + ':' + seconds;

    // + (seconds < 10 ? '0' : '') 

    // Update the text inside the <span> element


    // var formattedTime ="00:50";
    currentTimeSpan.innerText = formattedTime;
    // currentTimeSpan.innerText = 100;
    
    console.log(formattedTime);
  });

  // Js Function to get audio total time

  
 
}
