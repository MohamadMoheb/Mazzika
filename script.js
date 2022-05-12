document.getElementById('PlayPrevious').addEventListener('click', PlayPrevious);
document.getElementById('PlayPause').addEventListener('click', PlayPause);
document.getElementById('PlayNext').addEventListener('click', PlayNext);

function PlayPrevious() {
    document.getElementById('result').innerHTML = 'Previous';
}

function PlayPause() {
    document.getElementById('result').innerHTML = 'Play Pause';
}

function PlayNext() {
    document.getElementById('result').innerHTML = 'Next';
}
