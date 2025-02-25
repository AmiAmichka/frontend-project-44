import { greet, askQuestion, getRandomNumber } from '../src/cli.js';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(operators.length)];
};

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

export const brainCalc = () => {
  const MAX_NUMBER = 100;
  const name = greet();

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(MAX_NUMBER);
    const secondNumber = getRandomNumber(MAX_NUMBER);
    const operator = getOperator();
    const question = `${firstNumber} ${operator} ${secondNumber}`;

    const correctAnswer = calculate(
      firstNumber,
      secondNumber,
      operator
    ).toString();

    const isAnswerCorrect = askQuestion(question, correctAnswer, name);
    if (isAnswerCorrect === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
