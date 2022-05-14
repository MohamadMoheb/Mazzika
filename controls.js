document.getElementById('PlayPrevious').addEventListener('click', PlayPrevious);
document.getElementById('PlayNext').addEventListener('click', PlayNext);
document.getElementById('PlayPause').addEventListener('click', PlayPause);

var trackIndex = 0;
var play;


function PlayPrevious() {
    trackIndex--;
    console.log("Playing Previous Song");
    document.getElementById('result').innerHTML = trackIndex;
}

function PlayNext() {
    trackIndex++;
    console.log("Playing Next Song");
    document.getElementById('result').innerHTML = trackIndex;
}

function PlayPause() {
    if (play == false)
    {
        document.getElementById('playpausestate').innerHTML = 'Play';
        play = true
        trackIndex = 0
    }
    
    else
    {
        document.getElementById('playpausestate').innerHTML = 'Pause';
        play =  false
        trackIndex = 0
    }
}