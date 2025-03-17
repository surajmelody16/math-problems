const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const mathProblems = {
  add: (a: number, b: number): number => a + b,
  subtract: (a: number, b: number): number => a - b,
  multiply: (a: number, b: number): number => a * b,
  divide: (a: number, b: number): number => a / b,
};

const generateMathProblem = () => {
  const problemType = getRandomNumber();
  const operator = mathProblems[`operator${problemType}`];
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();

  return `${operand1} ${operator(operand1, operand2)}`;
};
