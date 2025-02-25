import { greet, askQuestion, getRandomNumber } from '../src/cli.js';

export const brainGcd = () => {
  const MAX_NUMBER = 100;
  const name = greet();

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(MAX_NUMBER);
    const secondNumber = getRandomNumber(MAX_NUMBER);
    const question = `${firstNumber} ${secondNumber}`;

    const calculate = () => {
      let maxDivisor = 1;
      const minNumber = firstNumber > secondNumber ? secondNumber : firstNumber;

      for (let j = 2; j <= minNumber; j += 1) {
        if (firstNumber % j === 0 && secondNumber % j === 0) {
          maxDivisor = j;
        }
      }
      return maxDivisor;
    };
    const correctAnswer = calculate().toString();

    const isAnswerCorrect = askQuestion(question, correctAnswer, name);
    if (isAnswerCorrect === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
