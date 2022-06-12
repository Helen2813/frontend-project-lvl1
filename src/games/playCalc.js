import { play, ROUNDS_NUMBER } from '../index.js';
import { getRandomNumber } from '../cli.js';

const ARITHMETIC_SIGNS = ['+', '-', '*'];
const QESTION = 'What is the result of the expression?';
const tasks = [];
const correctAnsweers = [];

const getCorrectAnswer = (firstNumber, secondNumber, operation) => {
  if (operation === '+') {
    return String(firstNumber + secondNumber);
  } if (operation === '-') {
    return String(firstNumber - secondNumber);
  }

  return String(firstNumber * secondNumber);
};

for (let i = 0; i < ROUNDS_NUMBER + 1; i += 1) {
  const firstRandomNumber = getRandomNumber(100);
  const secondRandomNumber = getRandomNumber(100);
  const randomOperation = ARITHMETIC_SIGNS[getRandomNumber(ROUNDS_NUMBER)];

  const taskString = `${firstRandomNumber} ${randomOperation} ${secondRandomNumber}`;
  tasks.push(taskString);

  const correctAnsweer = getCorrectAnswer(firstRandomNumber, secondRandomNumber, randomOperation);
  correctAnsweers.push(correctAnsweer);
}

const playCalc = () => play(QESTION, tasks, correctAnsweers);

export default playCalc;
