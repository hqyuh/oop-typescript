// https://www.greatfrontend.com/questions/javascript/type-utilities

export const isBoolean = (value: unknown): boolean => {
  return value === true || value === false;
};

export const isNumber = (value: unknown): boolean => {
  return typeof value === "number";
};

export const isNull = (value: unknown): boolean => {
  return value === null;
};

export const isString = (value: unknown): boolean => {
  return typeof value === "string";
};

export const isSymbol = (value: unknown): boolean => {
  return typeof value === "symbol";
};

export const isUndefined = (value: unknown): boolean => {
  return value === undefined;
};
