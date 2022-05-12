document.getElementById('Previous-Song').addEventListener('click', PreviousSong);
document.getElementById('Play-Pause').addEventListener('click', PlayPause);
document.getElementById('Next-Song').addEventListener('click', NextSong);

document.getElementById('tester').addEventListener('click', tester);

function importtester() {
    document.getElementById('result').innerHTML = 'Hello World';
}

function removetester() {
    document.getElementById('result').innerHTML = '';
}
