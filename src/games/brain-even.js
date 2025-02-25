import { greet, askQuestion } from '../utils.js';
import { MAX_NUMBER, TRIES_NUMBER } from '../const.js';

const generateQuestionAndAnswer = () => {
  const randomNumber = Math.floor(Math.random() * MAX_NUMBER);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export const brainEven = () => {
  const name = greet();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < TRIES_NUMBER; i += 1) {
    const [randomNumber, correctAnswer] = generateQuestionAndAnswer();
    const isAnswerCorrect = askQuestion(randomNumber, correctAnswer, name);
    if (isAnswerCorrect === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
