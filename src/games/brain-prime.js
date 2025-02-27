import { getGameTemplate, getRandomNumber } from '../utils.js';
import { MAX_NUMBER } from '../const.js';

const isPrimeNumber = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(MAX_NUMBER);
  const correctAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default () => {
  getGameTemplate(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateQuestionAndAnswer
  );
};
