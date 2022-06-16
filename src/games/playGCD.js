import { play, ROUNDS_NUMBER } from '../index.js';
import { getRandomNumber } from '../cli.js';

const QESTION = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (x, y) => {
  if (y === 0) {
    return Math.abs(x);
  }

  return getGreatestCommonDivisor(y, x % y);
};

const createTasksAndAnswers = () => {
  const tasks = [];
  const correctAnsweers = [];

  for (let i = 0; i < ROUNDS_NUMBER + 1; i += 1) {
    const firstNumber = getRandomNumber() + 1;
    let secondNumber = getRandomNumber() + 1;
  
    while (firstNumber === secondNumber) {
      secondNumber = getRandomNumber() + 1;
    }
  
    const taskString = `${firstNumber} ${secondNumber}`;
    tasks.push(taskString);
  
    const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
    correctAnsweers.push(String(correctAnswer));
  }

  return [tasks, correctAnsweers];
};

const [tasks, answers] = createTasksAndAnswers();

const playGCD = () => play(QESTION, tasks, answers);

export default playGCD;
