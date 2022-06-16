/* eslint-disable no-return-assign */
import { play, ROUNDS_NUMBER } from '../index.js';
import { getRandomNumber } from '../cli.js';

const QESTION = 'What number is missing in the progression?';
const HIDDEN = '..';
const MIN_PROGRESSION_LENGTH = 5;

const createProgression = (multiplier, startNumber, length) => {
  const result = Array(length)
    .fill(startNumber)
    .map((_, ind) => startNumber + (multiplier * ind));

  return result;
};

const createTasksAndAnswers = () => {
  const tasks = [];
  const correctAnsweers = [];

  for (let i = 0; i < ROUNDS_NUMBER + 1; i += 1) {
    const multiplier = MIN_PROGRESSION_LENGTH;
    const startNumber = getRandomNumber();
    const length = getRandomNumber(MIN_PROGRESSION_LENGTH) + MIN_PROGRESSION_LENGTH;
    const randomIndex = getRandomNumber(length);

    const progression = createProgression(multiplier, startNumber, length);
    const answer = String(progression[randomIndex]);
    progression[randomIndex] = HIDDEN;
    tasks.push(progression.join(' '));

    correctAnsweers.push(answer);
  }

  return [tasks, correctAnsweers];
};

const [tasks, answers] = createTasksAndAnswers();

const playProgression = () => play(QESTION, tasks, answers);

export default playProgression;
