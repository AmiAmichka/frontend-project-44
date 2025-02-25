import { getRandomNumber, getGameTemplate } from '../utils.js';
import { MAX_NUMBER } from '../const.js';

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

const generateQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(MAX_NUMBER);
  const secondNumber = getRandomNumber(MAX_NUMBER);
  const operator = getOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;

  const correctAnswer = calculate(
    firstNumber,
    secondNumber,
    operator
  ).toString();

  return [question, correctAnswer];
};

export default () => {
  getGameTemplate(
    'What is the result of the expression?',
    generateQuestionAndAnswer
  );
};
