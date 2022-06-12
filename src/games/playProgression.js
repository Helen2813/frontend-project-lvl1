/* eslint-disable no-return-assign */
import { play, ROUNDS_NUMBER } from '../index.js';
import { getRandomNumber } from '../cli.js';

const QESTION = 'What number is missing in the progression?';
const HIDDEN = '..';
const MIN_PROGRESSION_LENGTH = 5;
const tasks = [];
const correctAnsweers = [];

const getProgression = (index, multiplier, startNumber, length) => {
  const result = Array(length)
    .fill(startNumber)
    .map((_, ind) => startNumber + (multiplier * ind));
  const answer = String(result[index]);
  result[index] = HIDDEN;

  return [result.join(' '), answer];
};

for (let i = 0; i < ROUNDS_NUMBER + 1; i += 1) {
  const multiplier = MIN_PROGRESSION_LENGTH;
  const startNumber = getRandomNumber();
  const length = getRandomNumber(MIN_PROGRESSION_LENGTH) + MIN_PROGRESSION_LENGTH;
  const randomIndex = getRandomNumber(length);

  const [progression, correctAnswer] = getProgression(randomIndex, multiplier, startNumber, length);
  tasks.push(progression);

  correctAnsweers.push(correctAnswer);
}

const playProgression = () => play(QESTION, tasks, correctAnsweers);

export default playProgression;
