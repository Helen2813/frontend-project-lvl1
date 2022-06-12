import readlineSync from 'readline-sync';

export const greetingUserByName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export const getRandomNumber = (max = 10) => Math.floor(Math.random() * max);
