function createTodoObj() {
  const todo = {
    id: uuidv4(),
    date: headerTime.textContent,
    completed: 'todo',
    todo: {
      // userId: user.id,
      title: formInputTitle.value,
      body: formInputDescription.value,
    },
    user: {
      // id: todo.userId,
      name: formSelectUser.value,
    },
  }

  return todo
};

export { createTodoObj } //создать объект Todo

