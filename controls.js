document.getElementById('PlayPrevious').addEventListener('click', PlayPrevious);
document.getElementById('PlayNext').addEventListener('click', PlayNext);
document.getElementById('PlayPause').addEventListener('click', PlayPause);

var trackIndex = 0;
var playState;
var Playlist = {};

//Track Array
const Tracks = ['Aziz Maraka - Meen Gallek', 'Cage The Elepant - Instant Crush', 'Gorillaz - Souk Eye']

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

        track.pause()
    }
    
    else
    {
        document.getElementById('playState').innerHTML = 'Pause';
        playState =  false
        console.log("playing track now")
        track.play();
    }
}