import { play } from '../index.js';
import { ROUNDS_NUMBER } from '../index.js';

const ARITHMETIC_SIGNS = [ '+', '-', '*'];
const QESTION = 'What is the result of the expression?';
const tasks = [];
const correctAnsweers = [];

const getCorrectAnswer = (firstNumber, secondNumber, operation) => {
    if (operation === '+') {
        return String(firstNumber + secondNumber);
    } else if (operation === '-') {
        return String(firstNumber - secondNumber);
    } else if (operation === '*') {
        return String(firstNumber * secondNumber);
    };
};

for (let i = 0; i < ROUNDS_NUMBER + 1; i++) {
    const firstRandomNumber = Math.floor(Math.random() * 100);
    const secondRandomNumber = Math.floor(Math.random() * 100);
    const randomOperation = ARITHMETIC_SIGNS[Math.floor(Math.random() * ROUNDS_NUMBER)];

    const taskString = `${firstRandomNumber} ${randomOperation} ${secondRandomNumber}`
    tasks.push(taskString);

    const correctAnsweer = getCorrectAnswer(firstRandomNumber, secondRandomNumber, randomOperation);
    correctAnsweers.push(correctAnsweer);
};

export const playCalc = () => play(QESTION, tasks, correctAnsweers);