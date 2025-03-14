const getRandomNumber = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const problemOne = `What is the sum of ${getRandomNumber()} and ${getRandomNumber()}?`;
