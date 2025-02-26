import readlineSync from 'readline-sync';
import { TRIES_NUMBER } from './const.js';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const askQuestion = (question, correctAnswer, name) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer !== correctAnswer.toString()) {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
    );
    return false;
  }
  console.log('Correct!');
  return true;
};

export const getRandomNumber = (maxNumber, minNumber = 0) =>
  Math.floor(Math.random() * maxNumber) + minNumber;

export const getGameTemplate = (rule, generateQuestionAndAnswer) => {
  const name = greet();

  console.log(rule);

  for (let i = 0; i < TRIES_NUMBER; i += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    const isAnswerCorrect = askQuestion(question, correctAnswer, name);
    if (isAnswerCorrect === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
