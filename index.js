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
var boxes = document.querySelectorAll('.box');
boxes.forEach(function(box) {
  box.addEventListener('click', filltheBox);
  // var i = 1;
  // box.classList.add('box'+i);
  // i++;
})


button.addEventListener('click', reset);
