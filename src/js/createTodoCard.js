// let [{id, todo: { id: idTodo, title, body}, user: { id: idUser, name, username }, completed }] = todosGetData

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
import { getData, setData } from './localStorage.js'// запись-чтение данных localStorage



function createTodoCard(todosGetData, createDiv, createButton) {
  let { id, completed, date, todo: { id: idTodo, title, body }, user: { id: idUser, name } } = todosGetData;

  if (completed === 'inProgress') {
    const elTask = createDiv('task task--in-progress');
    taskListBodyInProgress.append(elTask);
    const elTaskBtnBack = createButton('task__btn task__btn--back', 'BACK');
    const elTaskBtnComplete = createButton('task__btn task__btn--complete', 'COMPLETE');
    elTaskBtnContainer.append(elTaskBtnBack, elTaskBtnComplete);

  } else if (completed === 'done') {
    const elTask = createDiv('task task--done');
    taskListBodyDone.append(elTask);
    const elTaskBtnDel = createButton('task__btn task__btn--del', 'DELETE');
    elTaskBtnContainer.append(elTaskBtnDel);
  } else {
    const elTask = createDiv('task task--todo');
    taskListBodyTodo.append(elTask);
    const elTaskBtnEdit = createButton('task__btn task__btn--edit', 'EDIT');
    const elTaskBtnDel = createButton('task__btn task__btn--del', 'DELETE');
    elTaskBtnContainer.append(elTaskBtnEdit, elTaskBtnDel);
    const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');
    elTaskBody.append(elTaskBtnRelocate);
  }

  elTask.draggable = true; // Drag'n'drop ON
  elTask.id = id;

  const elTaskHeaer = createDiv('task__header');
  const elTaskBody = createDiv('task__body');
  const elTaskFooter = createDiv('task__footer');

  elTask.append(elTaskHeaer, elTaskBody, elTaskFooter);

  const elTaskBtnContainer = createDiv('task__btn-container');
  const elTaskTitle = createDiv('task__title');
  elTaskTitle.textContent = formInputTitle.value;

  elTaskHeaer.append(elTaskBtnContainer, elTaskTitle);

  const elTaskDescription = createDiv('task__description');
  elTaskDescription.textContent = formInputDescription.value;

  elTaskBody.append(elTaskDescription);

  const elTaskUser = createDiv('task__user');
  elTaskUser.textContent = formSelectUser.value;
  const elTaskTime = createDiv('task__time');
  elTaskTime.textContent = headerTime.textContent;

  elTaskFooter.append(elTaskUser, elTaskTime);
}

export { createTodoCard } // создание новой карточки дел