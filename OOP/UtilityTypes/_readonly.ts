// Readonly<Type>
// It will make the keys Readonly (read only, not edited).

interface Class {
    id: number;
    name: string;
}

const class12A: Readonly<Class> = {
    id: 1,
    name: 'Fizz'
}

// ERROR
// Cannot assign to 'title' because it is a read-only property.
// class12A.name = 'dd';
