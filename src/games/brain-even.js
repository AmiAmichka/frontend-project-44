import { getGameTemplate, getRandomNumber } from '../utils.js';
import { MAX_NUMBER } from '../const.js';

const generateQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(MAX_NUMBER);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default () => {
  getGameTemplate(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateQuestionAndAnswer,
  );
};
