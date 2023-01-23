// const d = new Date();
// let year = d.getFullYear();
// document.getElementById("demo").innerHTML = year;

// var string = "Javascript Typing Animation"; /* type your text here */
// var array = string.split("");
// var timer;

// function frameLooper() {
//   if (array.length > 0) {
//     document.getElementById("text213").innerHTML += array.shift();
//   } else {
//     clearTimeout(timer);
//   }
//   loopTimer = setTimeout("frameLooper()", 70); /* change 70 for speed */
// }
// frameLooper();

// var i = 0;
// var txt = "Lorem ipsum dummy text blabla.";
// var speed = 100;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter();

const secondHand = document.getElementById('second-hand');
const minsHand = document.getElementById('min-hand');
const hourHand = document.getElementById('hour-hand');



function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
