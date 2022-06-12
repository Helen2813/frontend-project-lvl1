import { play } from '../index.js';
import { ROUNDS_NUMBER } from '../index.js';
import { getRandomNumber } from '../cli.js';

const QESTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';
const tasks = [];
const correctAnsweers = [];

const getIsPrime = (number) => {
    if (number < 2) {
      return false;
    } else if (number === 2) {
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

for (let i = 0; i < ROUNDS_NUMBER + 1; i++) {
    const randomNumber = getRandomNumber(100);
    tasks.push(randomNumber);

    correctAnsweers.push(getIsPrime(randomNumber) ? ANSWER_YES : ANSWER_NO);
};

export const playPrime = () => play(QESTION, tasks, correctAnsweers);