import { updateCounter } from './updateCounter.js' // обновление счетчиков Todos
import { createDiv, createLabel, createButton, createInput } from './htmlCreateElement.js' // создание элементов html
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

// Drag'n'drop

// События, происходящие с объектом перетаскивания:
// dragstart   (срабатывает в начале операции перетаскивания элемента)
// drag  (срабатывает, когда элемент перетаскивается)
// dragend   (срабатывает, когда пользователь закончил перетаскивание элемента)

// События, происходящие с объектом на который перетаскивают:
// dragenter   (когда элемент будет перенесен на заданную зону (цель для переноса)) event.preventDefault();
// dragover  (срабатывает, когда элемент перемещают над допустимой зоной для переноса) event.preventDefault();
// dragleave   (срабатывает, когда элемент выходит из допустимой зоны для переноса)
// drop  (срабатывает после того, как перетаскиваемый элемент опустился на объект перетаскивания)

function relocateProgressInTodo(elem) {
  elem.classList = 'task task--todo';
  elem.querySelector('.task__btn--back').textContent = 'EDIT';
  elem.querySelector('.task__btn--back').classList = 'task__btn task__btn--edit';
  elem.querySelector('.task__btn--complete').textContent = 'DELETE';
  elem.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
  const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');
  elem.querySelector('.task__body').append(elTaskBtnRelocate);
  updateCounter();
}

function relocateTodoInProgress(elem) {
  elem.classList = 'task task--in-progress';
  elem.querySelector('.task__btn--relocate').remove()
  elem.querySelector('.task__btn--edit').textContent = 'BACK';
  elem.querySelector('.task__btn--edit').classList = 'task__btn task__btn--back';
  elem.querySelector('.task__btn--del').textContent = 'COMPLETE';
  elem.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
  updateCounter();
}

function relocateProgressInDone(elem) {
  elem.classList = 'task task--done';
  // elem.classList.remove('task--in-progress');
  elem.querySelector('.task__btn--back').remove();
  elem.querySelector('.task__btn--complete').textContent = 'DELETE';
  elem.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
  updateCounter();
}

function relocateDoneInTodo(elem) {
  elem.classList = 'task task--todo';
  const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');
  elem.querySelector('.task__body').append(elTaskBtnRelocate)
  const elTaskBtnEdit = createButton('task__btn task__btn--edit', 'EDIT');
  elem.querySelector('.task__btn-container').prepend(elTaskBtnEdit);
  updateCounter();
}

function relocateDoneInProgress(elem) {
  elem.classList = 'task task--in-progress';
  const elTaskBtnBack = createButton('task__btn task__btn--back', 'BACK');
  elem.querySelector('.task__btn-container').prepend(elTaskBtnBack)
  elem.querySelector('.task__btn--del').textContent = 'COMPLETE';
  elem.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
  updateCounter();
}

function relocateTodoInDone(elem) {
  elem.classList = 'task task--done';
  elem.querySelector('.task__btn--relocate').remove();
  elem.querySelector('.task__btn--edit').remove();
  updateCounter();
}

function editTodo() {
  const idTask = event.target.closest('.task')
  const taskTitleText = idTask.querySelector('.task__title').textContent
  const taskDescriptionText = idTask.querySelector('.task__description').textContent
  const taskUserText = idTask.querySelector('.task__user').textContent

  formAddTodo.classList.toggle('form-add-todo--vis');

  formInputTitle.value = taskTitleText;
  formInputDescription.value = taskDescriptionText;
  formSelectUser.value = taskUserText;
};

export {
  relocateProgressInTodo,
  relocateTodoInProgress,
  relocateProgressInDone,
  relocateDoneInTodo,
  relocateDoneInProgress,
  relocateTodoInDone,
  editTodo,
} // Drag'n'drop