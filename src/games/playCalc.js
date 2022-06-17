import { play, ROUNDS_NUMBER, getRandomNumber } from '../index.js';

const ARITHMETIC_SIGNS = ['+', '-', '*'];
const QESTION = 'What is the result of the expression?';

const calculate = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const createTasksAndAnswers = () => {
  const tasks = [];
  const correctAnsweers = [];

  for (let i = 0; i < ROUNDS_NUMBER + 1; i += 1) {
    const firstRandomNumber = getRandomNumber(100);
    const secondRandomNumber = getRandomNumber(100);
    const randomOperation = ARITHMETIC_SIGNS[getRandomNumber(ROUNDS_NUMBER)];

    const taskString = `${firstRandomNumber} ${randomOperation} ${secondRandomNumber}`;
    tasks.push(taskString);

    const correctAnsweer = String(
      calculate(firstRandomNumber, secondRandomNumber, randomOperation),
    );
    correctAnsweers.push(correctAnsweer);
  }

  return [tasks, correctAnsweers];
};

const playCalc = () => {
  const [tasks, answers] = createTasksAndAnswers();

  return play(QESTION, tasks, answers);
};

export default playCalc;
