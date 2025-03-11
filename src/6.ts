const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const getRandomProblem = (a: number, b: number): string => {
    const operator = ['+', '-', '*', '/'][getRandomNumber()];
    return `${a} ${operator} ${b}`;
};

const solve = (problem: string) => {
    const [num1, num2] = problem.split(' ');
    switch (num1) {
        case '+':
            return +num1(+num2);
        case '-':
            return -num1(+num2);
        case '*':
            return +num1 * +num2;
        case '/':
            return +num1 / +num2;
    }
};
