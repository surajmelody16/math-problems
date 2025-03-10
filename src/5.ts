export const mathProblem = () => {
  // Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  // Generate a random math operator (+, -, x, /)
  const op = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];

  return { num1, num2, op };
};
