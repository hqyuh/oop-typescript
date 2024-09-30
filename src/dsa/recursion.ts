const factorial = (value: number): number => {
  if (value === 0) return 1;

  const result = value * factorial(value - 1);

  return result;
};

console.log(factorial(4)); // 24
