document.getElementById('PlayPrevious').addEventListener('click', PlayPrevious);
document.getElementById('PlayNext').addEventListener('click', PlayNext);
document.getElementById('PlayPause').addEventListener('click', PlayPause);

var anchorPoint;
var play;


function PlayPrevious() {
    --anchorPoint;
    console.log("Playing Previous Song");
    document.getElementById('result').innerHTML = anchorPoint;
}

function PlayNext() {
    ++anchorPoint;
    console.log("Playing Next Song");
    document.getElementById('result').innerHTML = anchorPoint;
}

function PlayPause() {
    if (play == false)
    {
        document.getElementById('playpausestate').innerHTML = 'Play';
        play = true
        anchorPoint = 0
    }
    
    else
    {
        document.getElementById('playpausestate').innerHTML = 'Pause';
        play =  false
        anchorPoint = 0
    }
}