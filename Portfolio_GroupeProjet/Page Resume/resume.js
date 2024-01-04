var player = document.getElementById("player");
let progress= document.getElementById("progress");
let playbtn = document.getElementById("playbtn");

var playpause = function(){
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

playbtn.addEventListener("click", playpause);

player.onplay = function(){
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
}

player.onpause = function(){
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
}

player.ontimeupdate = function(){
    let ct = player.currentTime;
    current.innerHTML = timeFormat(ct);

    let duration = player.duration;
    prog=Math.floor((ct*100)/duration);
    progress.style.setProperty("--progress", prog + "%");

}

function timeFormat(ct){
    let min = Math.floor(ct/60);
    if(min < 10){
        min = "0" + min;
    }
    let sec = Math.floor(ct%60);
    if(sec < 10){
        sec = "0" + sec;
    }
    return min + ":" + sec;
}

// btn pour dérouler le message
// btn1
let btn = document.getElementById("btn");
let btnIcon = document.getElementById("btn-icon");
let details = document.getElementById("details");

const toggleDetails = () => {
    if(btnIcon.name == "chevron-down"){
       btnIcon.name = "chevron-up";
    details.style.height = "max-content"; 
    }else {
        btnIcon.name = "chevron-down";
        details.style.height = 0;
    }
    
}

btn.addEventListener("click", toggleDetails);

// btn2
let btn_1 = document.getElementById("btn_1");
let btnIcon_1 = document.getElementById("btn_1-icon");
let details_1 = document.getElementById("details_1");

const toggleDetails_1 = () => {
    if(btnIcon_1.name == "chevron-down"){
       btnIcon_1.name = "chevron-up";
    details_1.style.height = "max-content"; 
    }else {
        btnIcon_1.name = "chevron-down";
        details_1.style.height = 0;
    }
    
}

btn_1.addEventListener("click", toggleDetails_1);

// btn3
let btn_2 = document.getElementById("btn_2");
let btnIcon_2 = document.getElementById("btn_2-icon");
let details_2 = document.getElementById("details_2");

const toggleDetails_2 = () => {
    if(btnIcon_2.name == "chevron-down"){
       btnIcon_2.name = "chevron-up";
    details_2.style.height = "max-content"; 
    }else {
        btnIcon_2.name = "chevron-down";
        details_2.style.height = 0;
    }
    
}

btn_2.addEventListener("click", toggleDetails_2);

// btn4
let btn_3 = document.getElementById("btn_3");
let btnIcon_3 = document.getElementById("btn_3-icon");
let details_3 = document.getElementById("details_3");

const toggleDetails_3 = () => {
    if(btnIcon_3.name == "chevron-down"){
       btnIcon_3.name = "chevron-up";
    details_3.style.height = "max-content"; 
    }else {
        btnIcon_3.name = "chevron-down";
        details_3.style.height = 0;
    }
    
}

btn_3.addEventListener("click", toggleDetails_3);