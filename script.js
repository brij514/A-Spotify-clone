 console.log("Welcome to Spotify");
 let songIndex = 0;
 let audioElement =new Audio('1.mp3');
 let masterPlay = document.getElementById('masterPlay');
 let myProgressBar = document.getElementById('myProgressBar');
 let gif = document.getElementById('gif');
 let songItems = Array.from(document.getElementByClassName('songItem'));
 let song = [
 {song: "Sugar & Brownies-Dharia", filePath:"songs/1.mp3", coverPath:"covers/1.jpg" },
 {song: "Alan-Walker-Ava-Max-Alone-Pt-II", filePath:"songs/2.mp3", coverPath:"covers/1.jpg" },
 {song: "Ignite-Alan Walker ", filePath:"songs/3.mp3", coverPath:"covers/1.jpg" },
 {song: "Let Me Down Slowly", filePath:"songs/4.mp3", coverPath:"covers/1.jpg" },
 {song: "Headlights-Alan Walker", filePath:"songs/5.mp3", coverPath:"covers/1.jpg" },
 {song: "Heaven and Hell Music", filePath:"songs/6.mp3", coverPath:"covers/1.jpg" },
 {song: "Faded-Alan Walker", filePath:"songs/7.mp3", coverPath:"covers/1.jpg" },
 {song: "Darkside-Alan Walker", filePath:"songs/8.mp3", coverPath:"covers/1.jpg" },

 ]

  
 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
 })
 audioElement.addEventListener('timeupdate',()=>{
     
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value = progress;
 })
 myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
 })

 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
    console.log(e);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
   })

   
 })
 
 












  