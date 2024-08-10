// NonNullable<Type>
// remove undefined and null from Type

// type T6 = string | number;
type T6 = NonNullable<string | number | undefined | null>;
