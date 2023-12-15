import {
  headerTime,
  taskListBodyTodo,
  taskListBtnAddTodo,
  formAddTodo,
  formInputTitle,
  formInputDescription,
  formВtnCancel,
  formВtnConfirm,
  formSelectUser,
  controls,
  board,
  taskListBody,
  taskListBodyInProgress,
  taskListBodyDone,
} from './refs.js'; // получение переменных

function createTodoCard(createDiv, createButton) {

    // let [{ id, todo: { title, body }, user: { name, username }, completed }] = todosGetData

  // controls.forEach(control => {
  //   if (control.classList.contains('required') && !control.value) {
  //     control.classList.add('invalid-control');
  //   }
  // });

  // if (completed === 'inProgress') {

  // } else if (completed === 'done') {

  // } else if ((completed === 'done') || (formInputTitle.value && formInputDescription.value && formSelectUser.value)) {
  // }


  const elTask = createDiv('task task--todo');
  elTask.draggable = true; // Drag'n'drop ***
  // elTask.id = Math.random().toString(36).slice(2);

  taskListBodyTodo.append(
    elTask
  );

  const elTaskHeaer = createDiv('task__header');
  const elTaskBody = createDiv('task__body');
  const elTaskFooter = createDiv('task__footer');

  elTask.append(
    elTaskHeaer,
    elTaskBody,
    elTaskFooter
  );

  const elTaskBtnContainer = createDiv('task__btn-container');
  const elTaskTitle = createDiv('task__title');
  elTaskTitle.textContent = formInputTitle.value;

  elTaskHeaer.append(
    elTaskBtnContainer,
    elTaskTitle
  );

  const elTaskBtnEdit = createButton('task__btn task__btn--edit', 'EDIT');
  const elTaskBtnDel = createButton('task__btn task__btn--del', 'DELETE');

  elTaskBtnContainer.append(
    elTaskBtnEdit,
    elTaskBtnDel
  );

  const elTaskDescription = createDiv('task__description');
  elTaskDescription.textContent = formInputDescription.value;
  const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');

  elTaskBody.append(
    elTaskDescription,
    elTaskBtnRelocate
  );

  const elTaskUser = createDiv('task__user');
  elTaskUser.textContent = formSelectUser.value;
  const elTaskTime = createDiv('task__time');
  elTaskTime.textContent = headerTime.textContent;

  elTaskFooter.append(
    elTaskUser,
    elTaskTime
  );
}

export { createTodoCard } // создание новой карточки дел