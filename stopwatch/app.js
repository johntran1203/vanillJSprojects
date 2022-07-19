const time = document.getElementById('time')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
const sec = document.getElementById('sec')
const min = document.getElementById('min')

let seconds = 0;
let minutes = 0;
let myInterval;


reset.addEventListener('click', function(){
    seconds = '00'
     minutes = '00';
     min.textContent = minutes
     sec.textContent = seconds
    

    
})

start.addEventListener('click', function(){
    myInterval =  setInterval(incrementSeconds, 10);
   return myInterval
})

stop.addEventListener('click', function(){
  clearInterval(myInterval)
})


function incrementSeconds() {
    if(seconds === 59) {
        seconds = 0
        minutes += 1
    }
    seconds += 1;
    sec.textContent = seconds
    min.textContent = minutes

}

