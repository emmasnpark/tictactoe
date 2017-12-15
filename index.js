var row1 = document.querySelectorAll('.row1');
var row2 = document.querySelectorAll('.row2');
var row3 = document.querySelectorAll('.row3');

var col1 = document.querySelectorAll('.col1');
var col2 = document.querySelectorAll('.col2');
var col3 = document.querySelectorAll('.col3');

var cross = document.querySelectorAll('.cross');
var slash = document.querySelectorAll('.slash');

var restart = document.querySelector('.restart');
var newgame = document.querySelector('.newGame');

var score1 = document.querySelector('.score1');
var score2 = document.querySelector('.score2');

var round = document.querySelector('.round');
var boxes = document.querySelectorAll('.box');
var second = document.querySelector('.second');

var player1 = document.querySelector('.player1');
var player2 = document.querySelector('.player2');
var overlay = document.querySelector('.overlay');
var body = document.querySelector('body');
var winner1 = document.querySelector('.winner1');
var winner2 = document.querySelector('.winner2');


var colorNumber=1;
var count = 0;
var run;
var test;
var startColor;
var draw= 0;
var numR = 0;
var numB = 0;
var scoreForRed = 0;
var scoreForBlue = 0;

function selectColorRed() {
  startColor = player1.getAttribute('data-color');
  colorNumber=1;
  return startColor;
}
function selectColorBlue() {
  startColor = player2.getAttribute('data-color');
  colorNumber=2;
  return startColor;
}

function timer() {
  clearInterval(run)
  count = 0;
  second.textContent = count;

  run = setInterval(function() {
  count++;
  second.textContent = count;
  },1000)
}
function filltheBox(event) {

    if(!startColor) {
      startColor = 'red'
    }

    // clearInterval(run)
    // count = 0;
    // second.textContent = count;
    //
    // run = setInterval(function() {
    // count++;
    // second.textContent = count;
    // },1000)
    timer();

    var check1 = this.classList.contains('red');
    var check2 = this.classList.contains('blue');
    console.log(check1);

    if(!check1 && !check2) {
       if(colorNumber % 2 !== 0) {
          this.classList.add('red');
          draw++;
          second.style.backgroundColor = 'blue';
        }else {
          this.classList.add('blue');
          draw++;
          second.style.backgroundColor = 'red';

         }
           colorNumber++;

        }
        win();
    if(draw == 9) {
      clearInterval(run);
      second.textContent = 0;
      second.style.backgroundColor = 'white';
        overlay.style.display = "block"
    }

}

function removeDraw() {
  overlay.style.display= "none"
  reset();
}

var matchingArr = [row1,row2,row3,col1,col2,col3,cross,slash];
function win() {

    for (var i = 0; i < matchingArr.length; i++) {
       matchingArr[i].forEach(checking);
           if(numR<3 || numB<3) {
            numR=0;
            numB=0;
           }
    }
}

var checking = function(elem) {

      if(elem.classList.contains('red')) {
        numR++;
      }else if(elem.classList.contains('blue')) {
        numB++;
      }

      if(numR == 3) {
        console.log(numR);
        winner1.style.color = 'red';
        scoreForRed++;
        score1.textContent = scoreForRed;
        boxes.forEach(function(box) {
          box.removeEventListener('click', filltheBox)});
        clearInterval(run);
        second.textContent = 0;
        second.style.backgroundColor = 'white';
      }else if(numB == 3) {
        winner2.style.color = 'blue';
        scoreForBlue++;
        score2.textContent = scoreForBlue;
        boxes.forEach(function(box) {
          box.removeEventListener('click', filltheBox)});
          clearInterval(run)
          second.textContent = 0;
          second.style.backgroundColor = 'white';
      }
}

var roundNum = 1;

function reset() {
  winner1.style.color = 'white';
  winner2.style.color = 'white';
  draw = 0;
  boxes.forEach(function(box) {
    box.classList.remove('red','blue')
  });

  console.log(colorNumber);
  roundNum++
  round.textContent = roundNum;
  boxes.forEach(function(box) {
    box.addEventListener('click', filltheBox);
    clearInterval(run);
    second.textContent = 0;
    second.style.backgroundColor = 'white';
  })
  if(startColor == 'red' || startColor == undefined) {
    colorNumber=1;
  }else {
    colorNumber=2
  }

  player1.removeEventListener('click', selectColorRed);
  player2.removeEventListener('click', selectColorBlue);


}

function reload() {
  location.reload();
}


restart.addEventListener('click', reset);
newgame.addEventListener('click', reload);
player1.addEventListener('click', selectColorRed);
player2.addEventListener('click', selectColorBlue);
boxes.forEach(function(box) {
  box.addEventListener('click', filltheBox)});
overlay.addEventListener('click', removeDraw);
