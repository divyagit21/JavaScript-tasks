const time = document.querySelector('.watch').innerText.split(":")
var hr=0;
var sec=0;
var min=0;
var interval=0;
function startTime() {
    sec++;
    if(sec==60){
        min++;
        sec=0;
    }
    if(min==60){
        hr++;
        min=0;
        sec=0;
    }
    time[0]=hr.toString().padStart(2,'0');
    time[1]=min.toString().padStart(2,'0');
    time[2]=sec.toString().padStart(2,'0');
    document.querySelector('.watch').innerText=time.join(":");
}
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const restart = document.querySelector('.restart');
start.addEventListener('click', () => {
    if(interval==0){
        interval=setInterval(startTime, 1000);
    }
})
stop.addEventListener('click',()=>{
    clearInterval(interval);
    interval=0;
})
restart.addEventListener('click',()=>{
    clearInterval(interval);
    interval=0;
    hr=0;
    min=0;
    sec=0;
    document.querySelector('.watch').innerText='00:00:00';
})
