function sumEvenNumbers(limit: number): number {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
