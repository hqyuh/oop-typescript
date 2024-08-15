// https://www.greatfrontend.com/questions/javascript/min-by

export const minBy = <T>(array: Array<T>, iteratee: (value: T) => any): any => {
  let result: any, computed: any;

  for (const value of array) {
    const current = iteratee(value);

    // computed === undefined is for the first iteration
    if (current != null && (computed === undefined || current < computed)) {
      computed = current;

      // store the value of the current iteration
      result = value;
    }
  }
  return result;
};
