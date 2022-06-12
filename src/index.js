import readlineSync from 'readline-sync';
import { greetingUserByName } from './cli.js';

export const ROUNDS_NUMBER = 3;

export const play = (question, tasksArray, correctAnsweersArray) => {
  const userName = greetingUserByName();
  console.log(question);

  for (let i = 1; i < ROUNDS_NUMBER + 1; i += 1) {
    console.log(`Question: ${tasksArray[i]}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnsweersArray[i]) {
      console.log('Correct!');

      if (i === ROUNDS_NUMBER) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnsweersArray[i]}'.
        \nLet's try again, ${userName}!`);
      break;
    }
  }
};
