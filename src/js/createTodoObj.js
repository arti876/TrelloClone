function getTodoObj(titleTodo, despriptionTodo, usermTodo, statusTodo) {
  // const idTodo = Math.random().toString(36).slice(2);
  // const date = getDate();
  // const title = title;
  // const despription = despription;
  // const user = user;
  // const statusTodo = status;
  const todo = {
    id: Math.random().toString(36).slice(2),
    date: getDate(),
    title: titleTodo,
    despription: despriptionTodo,
    user: usermTodo,
    status: statusTodo, // 'todo' 'in progress' 'done'
  };

  return todo
};

export { getTodoObj } //создать объект Todo