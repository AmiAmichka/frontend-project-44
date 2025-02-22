#!/usr/bin/env node
import {
  greet,
  askQuestion,
  getRandomNumber,
  getOperator,
} from '../src/cli.js';

export const brainCalc = () => {
  const MAX_NUMBER = 100;
  const name = greet();

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(MAX_NUMBER);
    const secondNumber = getRandomNumber(MAX_NUMBER);
    const operator = getOperator();
    const question = `${firstNumber} ${operator} ${secondNumber}`;

    // eslint-disable-next-line no-eval
    const correctAnswer = eval(question).toString();

    const isAnswerCorrect = askQuestion(question, correctAnswer, name);
    if (isAnswerCorrect === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
