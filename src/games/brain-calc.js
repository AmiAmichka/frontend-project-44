import { greet, askQuestion, getRandomNumber } from '../utils.js';
import { MAX_NUMBER, TRIES_NUMBER } from '../const.js';

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

export const brainCalc = () => {
  const name = greet();

  console.log('What is the result of the expression?');

  for (let i = 0; i < TRIES_NUMBER; i += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    const isAnswerCorrect = askQuestion(question, correctAnswer, name);
    if (isAnswerCorrect === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
