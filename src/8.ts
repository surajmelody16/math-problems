function getRandomMathProblem() {
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  return `What is ${num1} ${operator} ${num2}`;
}
