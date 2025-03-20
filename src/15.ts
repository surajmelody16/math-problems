export function getRandomMathProblem(): number {
  const operators = ['+', '-', '*', '/'];
  let problem: string;

  // Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10 + 1);
  const num2 = Math.floor(Math.random() * 10 + 1);

  // Choose a random operator
  const opIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[opIndex];

  // Generate the problem string
  problem = `${num1} ${operator} ${num2}`;

  // Return the problem as a number
  return parseInt(problem);
}
