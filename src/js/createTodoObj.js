function createTodoObj(todosGetData) {
  let { id, todo: { id: idTodo, title, body }, user: { id: idUser, name, username }, completed } = todosGetData;
  // const idTodo = Math.random().toString(36).slice(2);
  // const date = getDate();
  // const title = title;
  // const despription = despription;
  // const user = user;
  // const statusTodo = status;
  const todo = {
    id: id,
    date: getDate(),
    title: titleTodo,
    despription: despriptionTodo,
    user: usermTodo,
    status: statusTodo,
  };

  return todo
};

export { createTodoObj } //создать объект Todo

let todosGetData = {
  id,
  todo: {
    id: idTodo,
    title,
    body
  },
  user: {
    id: idUser,
    name,
    username
  },
  completed
}