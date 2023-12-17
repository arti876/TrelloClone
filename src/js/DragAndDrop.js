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
import { getData, setData } from './localStorage.js'// запись-чтение данных localStorage

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

// изменение статуса карточки при переносе
function statusTaskСhange(activeElementId, todosGetData, status) {
  for (let i = 0; i < todosGetData.length; i++) {
    if (todosGetData[i].todo.id === activeElementId) {
      todosGetData[i].todo.completed = status;
      setData('todos', todosGetData);
    };
  };
}

// перенос карточки из ProgressInTodo
function relocateProgressInTodo(elem) {
  elem.classList = 'task task--todo';
  elem.querySelector('.task__btn--back').textContent = 'EDIT';
  elem.querySelector('.task__btn--back').classList = 'task__btn task__btn--edit';
  elem.querySelector('.task__btn--complete').textContent = 'DELETE';
  elem.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
  const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');
  elem.querySelector('.task__body').append(elTaskBtnRelocate);
}

// перенос карточки из TodoInProgress
function relocateTodoInProgress(elem) {
  elem.classList = 'task task--in-progress';
  elem.querySelector('.task__btn--relocate').remove()
  elem.querySelector('.task__btn--edit').textContent = 'BACK';
  elem.querySelector('.task__btn--edit').classList = 'task__btn task__btn--back';
  elem.querySelector('.task__btn--del').textContent = 'COMPLETE';
  elem.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
}

// перенос карточки из ProgressInDone
function relocateProgressInDone(elem) {
  elem.classList = 'task task--done';
  elem.querySelector('.task__btn--back').remove();
  elem.querySelector('.task__btn--complete').textContent = 'DELETE';
  elem.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
}

// перенос карточки из DoneInTodo
function relocateDoneInTodo(elem) {
  elem.classList = 'task task--todo';
  const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');
  elem.querySelector('.task__body').append(elTaskBtnRelocate)
  const elTaskBtnEdit = createButton('task__btn task__btn--edit', 'EDIT');
  elem.querySelector('.task__btn-container').prepend(elTaskBtnEdit);
}

// перенос карточки из DoneInProgress
function relocateDoneInProgress(elem) {
  elem.classList = 'task task--in-progress';
  const elTaskBtnBack = createButton('task__btn task__btn--back', 'BACK');
  elem.querySelector('.task__btn-container').prepend(elTaskBtnBack)
  elem.querySelector('.task__btn--del').textContent = 'COMPLETE';
  elem.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
}

// перенос карточки из TodoInDone
function relocateTodoInDone(elem) {
  elem.classList = 'task task--done';
  elem.querySelector('.task__btn--relocate').remove();
  elem.querySelector('.task__btn--edit').remove();
}

export {
  statusTaskСhange,
  relocateProgressInTodo,
  relocateTodoInProgress,
  relocateProgressInDone,
  relocateDoneInTodo,
  relocateDoneInProgress,
  relocateTodoInDone,
} // Drag'n'drop