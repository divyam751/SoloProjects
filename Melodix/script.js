// console.log("Welcome to my App");

let index = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("MasterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let ds = document.getElementById("songDesc");
let songItems = Array.from(document.getElementsByClassName("songItem"));

const updatedTime = document.getElementById("updatedTime");


audioElement.addEventListener(`timeupdate`,function(){
  let currentTime = audioElement.currentTime;

  let minutes = Math.floor(currentTime / 60);
  let seconds = Math.floor(currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  let formattedTime = minutes + ':' + seconds;


  updatedTime.innerText = formattedTime;
})


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
    
  
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.addEventListener("click", (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        ds.innerText = songs[index].songName;
        // sDuration.innerText = "time updated";
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
   
    audioElement.src = `songs/${index+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-paly-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
});


