document.getElementById('PlayPrevious').addEventListener('click', PlayPrevious);
document.getElementById('PlayNext').addEventListener('click', PlayNext);
document.getElementById('PlayPause').addEventListener('click', PlayPause);

var trackIndex = 0;
var play;

var audio = new Audio("folder_name/audio_file.mp3");

function PlayPrevious() {
    trackIndex--;
    console.log("Playing Previous Track");
    document.getElementById('result').innerHTML = trackIndex;
}

function PlayNext() {
    trackIndex++;
    console.log("Playing Next Track");
    document.getElementById('result').innerHTML = trackIndex;
}

function PlayPause() {

    trackIndex = 0

    console.log("Play/Pause Pressed")

    if (play == false)
    {
        document.getElementById('playpausestate').innerHTML = 'Play';
        play = true
    }
    
    else
    {
        document.getElementById('playpausestate').innerHTML = 'Pause';
        play =  false
        
        audio.play();
    }
}