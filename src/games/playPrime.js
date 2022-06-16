import { play, ROUNDS_NUMBER } from '../index.js';
import { getRandomNumber } from '../cli.js';

const QESTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

const isNumberPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(number);
  while (i <= limit) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const createTasksAndAnswers = () => {
  const tasks = [];
  const correctAnsweers = [];

  for (let i = 0; i < ROUNDS_NUMBER + 1; i += 1) {
    const randomNumber = getRandomNumber(100);
    tasks.push(randomNumber);
  
    correctAnsweers.push(isNumberPrime(randomNumber) ? ANSWER_YES : ANSWER_NO);
  }

  return [tasks, correctAnsweers];
};

const [tasks, answers] = createTasksAndAnswers();

const playPrime = () => play(QESTION, tasks, answers);

export default playPrime;
