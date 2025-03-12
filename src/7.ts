// Generate a random math problem
const generateMathProblem = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 3)];
  let solution;

  switch (operator) {
    case '+':
      solution = num1 + num2;
      break;
    case '-':
      solution = num1 - num2;
      break;
    case '*':
      solution = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        console.log('Cannot divide by zero');
        return generateMathProblem();
      }
      solution = num1 / num2;
      break;
    default:
      console.log('Invalid operator');
      return generateMathProblem();
  }

  return `${num1} ${operator} ${num2} = ${solution}`;
};
