let container = document.getElementById("container");
let arrNumber= [];
let currentNumber = 0;
// Created with cicle While 5 Random Numbers
while(currentNumber < 5){
  let number = randomNumber(100,1);
  if(!arrNumber.includes(number)){
    arrNumber.push(number);
    currentNumber++
  }    
};

// Set CountDown For Timer
let time = 30;

let counterTime = setInterval(function() {
  document.getElementById("time").innerHTML = `Hai ancora ${time}s per memorizzarli..`
  if(time == 0){
    clearInterval(counterTime);
  };
  time--;
},1000);

// Printed on screen inside the container
container.innerHTML += `<div style="background-color:#${randomColor()}" class="content">
                          <span>${arrNumber}</span>
                        </div>`;

// Set timer 30s and remove the element inside the container
setTimeout ( myFunction, time * 1050);
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


setTimeout(function(){
  let myNumbersIRemember = [];
  let correctNumber = [];
  for(let i = 0; i < arrNumber.length; i++){
    let myNumber = parseInt(prompt(`Inserire qui il ${i + 1}° numero che ricordi:`));
    myNumbersIRemember.push(myNumber);
    console.log("Il mio numero" + myNumber)
    if(arrNumber.includes(myNumber)){
      correctNumber.push(myNumber);
    }
  }
  container.innerHTML += `<span class="text">Hai indovinato ${correctNumber.length} numeri</span>
                          <div style="background-color:#${randomColor()}" class="content">
                            <span>${correctNumber}</span>
                          </div>`;

console.log("I numeri da ricordare sono " + arrNumber)
console.log("I numeri che ho indovinato sono " + correctNumber)
console.log(myNumbersIRemember)
},32000)