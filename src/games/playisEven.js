import { play, ROUNDS_NUMBER } from '../index.js';
import { getRandomNumber } from '../cli.js';

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';
const QESTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const tasks = [];
const correctAnsweers = [];

for (let i = 0; i < ROUNDS_NUMBER + 1; i += 1) {
  const randomNumber = getRandomNumber(100);
  tasks.push(randomNumber);

  const correctAnsweer = ((randomNumber % 2) === 0) ? ANSWER_YES : ANSWER_NO;
  correctAnsweers.push(correctAnsweer);
}

const playIsEven = () => play(QESTION, tasks, correctAnsweers);

export default playIsEven;
