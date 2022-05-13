document.getElementById('PlayPause').addEventListener('click', PlayPause);

var play = newBoolean(false);

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