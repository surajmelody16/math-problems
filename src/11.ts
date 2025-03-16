import { random } from 'mathjs';

const generateRandomTsCode = () => {
  const x = random(10);
  const y = random(10);
  return `const result = ${x} + ${y};`;
};

generateRandomTsCode();
