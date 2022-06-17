import readlineSync from 'readline-sync';

export const ROUNDS_NUMBER = 3;

export const play = (question, tasksArray, correctAnsweersArray) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
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

export const getRandomNumber = (max = 10) => Math.floor(Math.random() * max);
