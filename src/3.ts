const getRandomNumber = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const mathProblem = (operator: string) => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  let result = null;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
  }
  return {
    numbers: [number1, number2],
    operator: operator,
    result: result,
  };
};

const problem = mathProblem("*");
console.log(problem);
