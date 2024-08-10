/* eslint-disable @typescript-eslint/ban-types */
// Extract<Type, Union>
// used to extract Type from Union Type

// type T0 =  "a"
type T0 = Extract<"a" | "b" | "c", "a" | "f">;

// type T1 = () => void
type T1 = Extract<number | string | (() => void), Function>;

type Shape1 =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

// type T2 = { kind: "circle"; radius: number;}
type T2 = Extract<Shape1, { kind: "triangle" }>;
