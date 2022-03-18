const playbtn= document.getElementById("playme");
const pausebtn = document.getElementById("stopme");
const vid = document.getElementById("video");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}


playbtn.addEventListener("click", playVid);

pausebtn.addEventListener("click", pauseVid);