document.getElementById('PlayPrevious').addEventListener('click', PlayPrevious);
document.getElementById('PlayNext').addEventListener('click', PlayNext);
document.getElementById('PlayPause').addEventListener('click', PlayPause);

var trackIndex = 0;
var playState;
var Playlist = {};

var track1 = new Audio('/songs/Aziz Maraka - Meen Gallek.mp3');
var track2 = new Audio('/songs/Cage The Elepant - Instant Crush.mp3');
var track3 = new Audio('/songs/Gorillaz - Souk Eye.mp3');

function PlayPrevious() {
    trackIndex--;
    console.log("Playing Previous Track");
    document.getElementById('trackIndex').innerHTML = trackIndex;
}

function PlayNext() {
    trackIndex++;
    console.log("Playing Next Track");
    document.getElementById('trackIndex').innerHTML = trackIndex;
}

function PlayPause() {

    document.getElementById('trackIndex').innerHTML = 0;
    trackIndex = 0

    if (playState == false)
    {
        document.getElementById('playState').innerHTML = 'Paused';
        playState = true

        track.pause()
    }
    
    else
    {
        document.getElementById('playState').innerHTML = 'Playing';
        playState =  false
        console.log("playing track now")
        track.play();
    }
}