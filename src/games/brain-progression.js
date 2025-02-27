import { getRandomNumber, getGameTemplate } from '../utils.js';

const MAX_PROGRESSION_START = 15;
const MAX_PROGRESSION_STEP = 5;
const MIN_PROGRESSION_STEP = 1;
const MAX_ADDED_PROGRESSION_LENGTH = 5;
const MIN_PROGRESSION_LENGTH = 5;

const generateQuestionAndAnswer = () => {
  const startNumber = getRandomNumber(MAX_PROGRESSION_START);
  const progressionStep = getRandomNumber(
    MAX_PROGRESSION_STEP,
    MIN_PROGRESSION_STEP
  );
  const progressionLength = getRandomNumber(
    MAX_ADDED_PROGRESSION_LENGTH,
    MIN_PROGRESSION_LENGTH
  );

  const progression = [];

  for (
    let i = startNumber;
    i <= startNumber + progressionStep * progressionLength;
    i += progressionStep
  ) {
    progression.push(i);
  }

  const arrayIndex = getRandomNumber(progression.length);
  const correctAnswer = progression[arrayIndex];
  progression[arrayIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  getGameTemplate(
    'What number is missing in the progression?',
    generateQuestionAndAnswer
  );
};
