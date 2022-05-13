document.getElementById('PlayPrevious').addEventListener('click', PlayPrevious);
document.getElementById('PlayPause').addEventListener('click', PlayPause);
document.getElementById('PlayNext').addEventListener('click', PlayNext);

var P = newBoolean(false);

function PlayPause() {
    if (P == false)
    {
        document.getElementById('result').innerHTML = 'Play';
        P = false
    }
    
    else
    {
        document.getElementById('result').innerHTML = 'Pause';
        P =  true
    }
}

function PlayPrevious() {
    document.getElementById('result').innerHTML = 'Previous';
}

function PlayNext() {
    document.getElementById('result').innerHTML = 'Next';
}