// Exclude<UnionType, ExcludedMembers>
// It will remove the ExcludedMembers from UnionType

// type T3 = "b" | "c"
type T3 = Exclude<"a" | "b" | "c", "b">;

// type T4 = "c"
type T4 = Exclude<"a" | "b" | "c", "a" | "b">;

// type T5 = string | number;
type T5 = Exclude<string | number | (() => void), Function>;
