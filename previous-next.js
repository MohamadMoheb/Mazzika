document.getElementById('PlayPrevious').addEventListener('click', PlayPrevious);
document.getElementById('PlayNext').addEventListener('click', PlayNext);

var anchorPoint = 0;


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

console.log(playpausestate)