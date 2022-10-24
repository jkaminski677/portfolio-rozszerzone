const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = year;

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
