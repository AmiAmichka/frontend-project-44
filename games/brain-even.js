import { greet, askQuestion } from '../src/cli.js';

export const brainEven = () => {
  const MAX_NUMBER = 100;
  const name = greet();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * MAX_NUMBER);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    const isAnswerCorrect = askQuestion(randomNumber, correctAnswer, name);
    if (isAnswerCorrect === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
