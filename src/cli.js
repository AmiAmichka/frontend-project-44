import readlineSync from 'readline-sync';

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestion = (question, correctAnswer, name) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer !== correctAnswer) {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
    );
    return false;
  }
  console.log('Correct!');
  return true;
};

export const getRandomNumber = (maxNumber) =>
  Math.floor(Math.random() * maxNumber);
