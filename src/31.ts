function calculateSum(numbers: number[]): number {
    let sum = 0;
    numbers.forEach((num) => {
        if (!isNaN(num)) {
            sum += num;
        }
    });
    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4];
console.log(calculateSum(numbers)); // Output: 10
