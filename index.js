let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = 0;

function twoDigts(digit){
    if(digit < 10){
        return "0" + digit
    }else{
        return digit
    }
}

function start(){
    watch()
 interval = setInterval(watch,1000)
};


function pause(){
 clearInterval(interval)
};

function stop(){
 clearInterval(interval)
 seconds = 0;
 minutes = 0;
 document.getElementById('watch').innerText ="00:00:00"
};

function watch() {
    seconds++
    if(seconds === 60){
        minutes++
        seconds = 0
    }if(minutes === 60){
        hours++
        minutes = 0;
    }
    document.getElementById('watch').innerText =twoDigts(hours)+ ":" + twoDigts(minutes)+ ":" + twoDigts(seconds)
}