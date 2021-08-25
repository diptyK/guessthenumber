'use Strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
document.querySelector('.guess').value = '';

const displayMessage = function (msg) {
  document.querySelector('.message').innerHTML = msg;
};
const displaySecretNumber = function (num) {
  document.querySelector('.number').textContent = num;
};
const displayScore = function (scores) {
  document.querySelector('.score').textContent = scores;
};

const styleInputBox = function (bgColor) {
  document.querySelector('.guess').style.backgroundColor = bgColor;
};

const styleBody = function (bgBody) {
  document.querySelector('body').style.backgroundColor = bgBody;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when their is no input
  if (!guess) {
    displayMessage('<i class="fas fa-times-circle"></i> No Number!');
  }
  //when player wins
  else if (guess === secretNumber) {
    displaySecretNumber(secretNumber);
    displayMessage('<i class="fas fa-check-circle"></i> Correct Number!');
    styleBody('green');
    styleInputBox('green');

    //set highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess wrong (refactored codes)
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '<i class="fas fa-arrow-circle-up"></i> Too High!'
          : '<i class="fas fa-arrow-circle-down"></i> Too Low!'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('<i class="fas fa-frown"></i> You Lost the Game ! ');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('<i class="fas fa-gamepad"></i> Start Guessing....');
  displaySecretNumber('?');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  styleBody('#000');
  styleInputBox('#000');
});

//refactoring code means find repeat codes and change it
