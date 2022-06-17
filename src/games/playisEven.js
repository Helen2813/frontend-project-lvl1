import { play, ROUNDS_NUMBER, getRandomNumber } from '../index.js';

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';
const QESTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const createTasksAndAnswers = () => {
  const tasks = [];
  const correctAnsweers = [];

  for (let i = 0; i < ROUNDS_NUMBER + 1; i += 1) {
    const randomNumber = getRandomNumber(100);
    tasks.push(randomNumber);

    const correctAnsweer = ((randomNumber % 2) === 0) ? ANSWER_YES : ANSWER_NO;
    correctAnsweers.push(correctAnsweer);
  }

  return [tasks, correctAnsweers];
};

const playIsEven = () => {
  const [tasks, answers] = createTasksAndAnswers();

  return play(QESTION, tasks, answers);
};

export default playIsEven;
