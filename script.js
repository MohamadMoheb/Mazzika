document.getElementById('PlayPrevious').addEventListener('click', PlayPrevious);
document.getElementById('PlayPause').addEventListener('click', PlayPause);
document.getElementById('PlayNext').addEventListener('click', PlayNext);

var P = newBoolean(true);

function PlayPrevious() {
    document.getElementById('result').innerHTML = 'Previous';
}

function PlayPause() {
    if (P = false)
    {
        document.getElementById('result').innerHTML = 'Play';
        P = true
    }
    
    else if(P = true)
    {
        document.getElementById('result').innerHTML = 'Pause';
    }
}

function PlayNext() {
    document.getElementById('result').innerHTML = 'Next';
}


/*
function PlayPause() {
    document.getElementById('result').innerHTML = 'Play Pause';
}
*/