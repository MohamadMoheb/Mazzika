//import firstTrack from '../database/1.mp3'
//const Track1 = new Audio(firstTrack)

const PreviousButton = document.getElementById('prevbtn');
  function prevbtnclick(){
    console.log("Previous Clicked");
  }

const PlayButton = document.getElementById('playbtn');
  function playbtnclick(){
    console.log("Play / Pause Clicked");

    //Track1.play()
}

const SkipButton = document.getElementById('skipbtn');
  function skipbtnclick(){
    console.log("Skip Clicked");
}
/////////////
const LoopButton = document.getElementById('loopbtn');
  function loopbtnclick(){
    console.log("Loop Clicked");
}

const ShuffleButton = document.getElementById('shufflebtn');
  function shufflebtnclick(){
    console.log("Shuffle Clicked");
}