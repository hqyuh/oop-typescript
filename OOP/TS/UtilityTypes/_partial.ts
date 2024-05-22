// Partial<Type>
// It will create a new type based on the original type
// but will change all keys to optional (not required?)

type Todo = {
  title: string;
  status: boolean;
};

const handleTodo = (fields: Partial<Todo>) => {
  return { ...fields };
};

console.log(handleTodo({ status: false }));
