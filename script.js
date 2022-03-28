'use strict';

const calculateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// const displayNumber = function (number) {
//   document.querySelector('.number').textContent = number;
// };

// const displayScore = function (score) {
//   document.querySelector('.score').textContent = score;
// };

// const displayHighScore = function (highScore) {
//   document.querySelector('.highscore').textContent = highScore;
// };

const displayValueOfItem = function (className, value) {
  document.querySelector(`.${className}`).textContent = value;
};

let secretNumber = calculateSecretNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // displayMessage('⛔️ No number!');
    displayValueOfItem('message', '⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // displayMessage('🎉 Correct Number!');
    // displayNumber(secretNumber);
    displayValueOfItem('message', '🎉 Correct Number!');
    displayValueOfItem('number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      // displayHighScore(highscore);
      displayValueOfItem('highscore', highscore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      displayValueOfItem(
        'message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      // displayScore(score);
      displayValueOfItem('score', score);
    } else {
      // displayMessage('💥 You lost the game!');
      // displayScore(0);
      displayValueOfItem('message', '💥 You lost the game!');
      displayValueOfItem('score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = calculateSecretNumber();
  // displayMessage('Start guessing...');
  // displayScore(score);
  // displayNumber('?');
  displayValueOfItem('message', 'Start guessing...');
  displayValueOfItem('score', score);
  displayValueOfItem('number', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
