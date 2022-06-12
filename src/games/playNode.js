import { play } from '../index.js';
import { ROUNDS_NUMBER } from '../index.js';
import { getRandomNumber } from '../cli.js';

const QESTION = 'Find the greatest common divisor of given numbers.';
const tasks = [];
const correctAnsweers = [];

for (let i = 0; i < ROUNDS_NUMBER + 1; i++) {
    const randomNode = getRandomNumber(100) + 1;
    const firstRandomNumber = randomNode * getRandomNumber() + 1;
    const seconNumber = randomNode * getRandomNumber() + 1;
    
    const taskString = `${firstRandomNumber} ${seconNumber}`;
    tasks.push(taskString);

    correctAnsweers.push(String(randomNode));
};

export const playNode = () => play(QESTION, tasks, correctAnsweers);