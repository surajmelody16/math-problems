import { getRandomInt } from 'utils';

function getMathProblem() {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operator = ['+', '-', '*', '/'].random();

  let problem;
  if (operator === '+') {
    problem = `${num1} + ${num2}`;
  } else if (operator === '-') {
    problem = `${num1} - ${num2}`;
  } else if (operator === '*') {
    problem = `${num1} * ${num2}`;
  } else {
    problem = `${num1} / ${num2}`;
  }

  return problem;
}
