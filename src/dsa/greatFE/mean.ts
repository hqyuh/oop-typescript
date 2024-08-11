// https://www.greatfrontend.com/questions/javascript/mean

export const mean = (array: number[]): number => {
  return array.reduce((a, b) => a + b, 0) / array.length;
};
