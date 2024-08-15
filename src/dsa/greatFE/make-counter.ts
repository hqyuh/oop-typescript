// https://www.greatfrontend.com/questions/javascript/make-counter

export const makeCounter = (value: number = 0): Function => {
  return () => value++;
};
