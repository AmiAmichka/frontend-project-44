import { getRandomNumber, getGameTemplate } from '../utils.js';
import { MAX_NUMBER } from '../const.js';

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

  const correctAnswer = calculate(firstNumber, secondNumber);

  return [question, correctAnswer];
};

export default () => {
  getGameTemplate(
    'Find the greatest common divisor of given numbers.',
    generateQuestionAndAnswer,
  );
};
