// https://www.greatfrontend.com/questions/javascript/make-counter

// eslint-disable-next-line @typescript-eslint/ban-types
export const makeCounter = (value: number = 0): Function => {
  return () => value++;
};
