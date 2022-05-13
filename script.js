document.getElementById('PlayPrevious').addEventListener('click', PlayPrevious);
document.getElementById('PlayPause').addEventListener('click', PlayPause);
document.getElementById('PlayNext').addEventListener('click', PlayNext);

var play = newBoolean(false);
var audio = new Audio('./songs/Cage-The-Elephant-Instant-Crush.mp3');

var anchorPoint = 0;

function PlayPause() {
    if (play == false)
    {
        document.getElementById('playpausestate').innerHTML = 'Play';
        play = true
    }
    
    else
    {
        document.getElementById('playpausestate').innerHTML = 'Pause';
        play =  false
    }
}

    if (play = true)
    {

    }

function PlayPrevious() {
    --anchorPoint;
    console.log(anchorPoint);
    document.getElementById('result').innerHTML = anchorPoint;
}

function PlayNext() {
    ++anchorPoint;
    console.log(anchorPoint);
    document.getElementById('result').innerHTML = anchorPoint;
}