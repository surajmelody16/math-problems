// Generate a random math problem using a seed
const seed = Math.floor(Math.random() * 1000);
const problem = generateProblem(seed);
console.log(problem);

function generateProblem(seed) {
  const maxOperands = 5;
  const minValue = 0;
  const maxValue = 100;
  const operators = ["+", "-", "*", "/"];

  // Generate random operands and operator
  const operands = [];
  for (let i = 0; i < maxOperands; i++) {
    operands.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
  }
  const operatorIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorIndex];

  // Generate the problem
  let problem = "";
  for (let i = 0; i < operands.length - 1; i++) {
    problem += operands[i] + " " + operator + " ";
  }
  problem += operands[operands.length - 1];

  return problem;
}
