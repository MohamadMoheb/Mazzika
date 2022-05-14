document.getElementById('PlayPrevious').addEventListener('click', PlayPrevious);
document.getElementById('PlayNext').addEventListener('click', PlayNext);
document.getElementById('PlayPause').addEventListener('click', PlayPause);

var trackIndex = 0;
var playState;
var Playlist = {};

var audio = new Audio("/songs/Aziz-Maraka-Meen-Gallek.mp3");

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

    if (playState == false)
    {
        document.getElementById('playState').innerHTML = 'Play';
        playState = true

        audio.pause()
    }
    
    else
    {
        document.getElementById('playState').innerHTML = 'Pause';
        playState =  false
        console.log("playing track now")
        audio.play();
    }
}