let container = document.getElementById("container");
let arrNumber= [];
let i = 0;
// Created with cicle While 5 Random Numbers
while(i < 5){
  let number = randomNumber(100,1);
  if(!arrNumber.includes(number)){
    arrNumber.push(number);
    i++
  }    
};

// Set CountDown For Timer
let time = 30;

let counterTime = setInterval(function() {
  if(time == 0){
    clearInterval(counterTime);
  }
  time--;
  document.getElementById("time").innerHTML = `Hai ancora ${time}s per memorizzarli..`
},1000);

// Printed on screen inside the container
container.innerHTML += `<div style="background-color:#${randomColor()}" class="content">
                          <span>${arrNumber}</span>
                        </div>`;

// Set timer 30s and remove the element inside the container
setTimeout ( myFunction, time * 1000);
function myFunction (){
  container.innerHTML = "";
};

// Created a function for a random Number
function randomNumber (max, min){
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};

// Created a function for a random Color
function randomColor (){
  return Math.floor(Math.random()*11111111).toString(16);
}

