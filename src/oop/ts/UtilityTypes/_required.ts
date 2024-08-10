// Required<Type>
// It will make the keys required,
// even if they were originally optional(?)

type Blog = {
  title: string;
  status: boolean;
};

const handleBlog = (fields: Required<Blog>) => {
  return { ...fields };
};

console.log(handleBlog({ title: "blog", status: false }));

// ERROR
// console.log(handleBlog({status: false}));
// Argument of type '{ status: false; }' is not assignable to parameter of type 'Required<Todo>'.
// Property 'title' is missing in type '{ status: false; }' but required in type 'Required<Todo>'.
