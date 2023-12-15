function addNameInForm(todosGetData) {
  const formAddTodoUser = document.querySelector('.form-add-todo__user');

  const userArr = todosGetData.map(el => el.user.name)

  const countUser = {};

  for (const user of userArr) {
    countUser[user] = countUser[user] ? countUser[user] + 1 : 1;
  }

  const result = Object.keys(countUser).filter((user) => countUser[user] > 1).
    forEach(name => {
      const elOption = document.createElement('option');
      elOption.value = name;
      elOption.textContent = name;
      formAddTodoUser.append(elOption);
    })
}

export { addNameInForm } //добавить имена из загружаемых данных в форму