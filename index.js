var row1A = document.querySelector('.x1y1');
var row1B = document.querySelector('.x2y1');
var row1C = document.querySelector('.x3y1');
var row2A = document.querySelector('.x1y2');
var row2B = document.querySelector('.x2y2');
var row2C = document.querySelector('.x3y2');
var row3A = document.querySelector('.x1y3');
var row3B = document.querySelector('.x2y3');
var row3C = document.querySelector('.x3y3');

// var box = document.querySelectorAll('.box');


var row1 = document.querySelectorAll('.row1');
var row2 = document.querySelectorAll('.row2');
var row3 = document.querySelectorAll('.row3');

var a = document.querySelectorAll('.a');
var b = document.querySelectorAll('.b');
var c = document.querySelectorAll('.c');

var cross = document.querySelectorAll('.cross');
var slash = document.querySelectorAll('.slash');

var span = document.querySelector('span');
var button = document.querySelector('button');


var n = 1;
function filltheBox() {

    if(n % 2 !== 0) {
      this.classList.add('red');
    }else {
      this.classList.add('blue');
    }
    n++;
    winner();
}

var arr = [row1,row2,row3,a,b,c,cross,slash];
function winner() {

    for (var i = 0; i < arr.length; i++) {
       arr[i].forEach(checking);
           if(numR<3 || numB<3) {
            numR=0;
            numB=0;
           }
    }
}

var numR = 0;
var numB = 0;

var checking = function(elem) {

      if(elem.classList.contains('red')) {
        numR++;
      }else if(elem.classList.contains('blue')) {
        numB++;
      }else {
        numR = 0;
        numB = 0;
      }

      if(numR == 3) {
        span.textContent = "RED WINS!"
      }else if(numB == 3) {
        span.textContent = "BLUE WINS!"
      }
}

function reset() {
  location.reload();
}

var boxes = [row1A,row1B,row1C,row2A,row2B,row2C,row3A,row3B,row3C];
 for (var i = 0; i < boxes.length; i++) {
   boxes[i].addEventListener('click', filltheBox);
 }

button.addEventListener('click', reset);
