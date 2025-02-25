import { greet, askQuestion, getRandomNumber } from '../utils.js';
import { MAX_NUMBER, TRIES_NUMBER } from '../const.js';

const calculate = (firstNumber, secondNumber) => {
  let maxDivisor = 1;
  const minNumber = firstNumber > secondNumber ? secondNumber : firstNumber;

  for (let j = 2; j <= minNumber; j += 1) {
    if (firstNumber % j === 0 && secondNumber % j === 0) {
      maxDivisor = j;
    }
  }
  return maxDivisor;
};

const generateQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(MAX_NUMBER);
  const secondNumber = getRandomNumber(MAX_NUMBER);
  const question = `${firstNumber} ${secondNumber}`;

  const correctAnswer = calculate(firstNumber, secondNumber).toString();

  return [question, correctAnswer];
};

export const brainGcd = () => {
  const name = greet();

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < TRIES_NUMBER; i += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    const isAnswerCorrect = askQuestion(question, correctAnswer, name);
    if (isAnswerCorrect === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
