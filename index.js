let cookie = 0;
let autoEater = 0;
let autoCostScale = 1;
let speedEat = 2000;
let speedScale = 1;

const button = document.getElementById("cookie_button");
const autoButton = document.getElementById("auto_button");
const speedButton = document.getElementById("speed_button");

setInterval(updateAuto, speedEat);

document.getElementById('auto_count').innerHTML = 10;
document.getElementById('speed_count').innerHTML = 100;

button.addEventListener('click', update);

autoButton.addEventListener('click', function(){
    if(cookie <= -10*autoCostScale){

        cookie = cookie + 10*autoCostScale;
        autoCostScale += 1;
        autoEater += 1;
        document.getElementById('auto_count').innerHTML = 10*autoCostScale;
    }
    update();
});

speedButton.addEventListener('click', function(){
    if(cookie <= -10*speedScale){

        cookie = cookie + 10*speedScale;
        speedScale += 10;
        speedEat = speedEat - 1000;

        document.getElementById('speed_count').innerHTML = 10*speedScale;
    }
    update();
});

function update(){
    cookie--;
    document.getElementById('cookie_count').innerHTML = cookie;
}

function updateAuto(){
    for (let i = 0; i < autoEater; i++) {
        cookie--;
    }
    document.getElementById('cookie_count').innerHTML = cookie;
}
