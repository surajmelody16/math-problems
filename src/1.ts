const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const mathProblems = {
  sum: (num1: number, num2: number) => num1 + num2,
  subtract: (num1: number, num2: number) => num1 - num2,
  multiply: (num1: number, num2: number) => num1 * num2,
  divide: (num1: number, num2: number) => num1 / num2,
};

const generateMathProblem = () => {
  const operation = mathProblems[getRandomNumber(0, 3)];
  const min = getRandomNumber(1, 10);
  const max = getRandomNumber(min + 1, 10);
  return `${operation}(${min}, ${max})`;
};
