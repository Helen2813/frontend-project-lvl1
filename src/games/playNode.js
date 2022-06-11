import { play } from '../index.js';
import { ROUNDS_NUMBER } from '../index.js';

const QESTION = 'Find the greatest common divisor of given numbers.';
const tasks = [];
const correctAnsweers = [];

for (let i = 0; i < ROUNDS_NUMBER + 1; i++) {
    const randomNode = Math.floor(Math.random() * 100) + 1;
    const firstRandomNumber = randomNode * (Math.floor(Math.random() * 10));
    const seconNumber = randomNode * (Math.floor(Math.random() * 10));
    
    const taskString = `${firstRandomNumber} ${seconNumber}`;
    tasks.push(taskString);

    correctAnsweers.push(String(randomNode));
};

export const playNode = () => play(QESTION, tasks, correctAnsweers);