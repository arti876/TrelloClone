const headerTime = document.querySelector('.header__time');
const taskListBodyTodo = document.querySelector('.task-list__body--todo');
const taskListBodyInProgress = document.querySelector('.task-list__body--in-progress');
const taskListBodyDone = document.querySelector('.task-list__body--done');
const taskListBtnAddTodo = document.querySelector('.task-list__btn--add-todo');
const formAddTodo = document.querySelector('.form-add-todo');
const formInputTitle = document.querySelector('.form-add-todo__input-title');
const formInputDescription = document.querySelector('.form-add-todo__input-description');
const formВtnCancel = document.querySelector('.form-add-todo__btn-cancel');
const formВtnConfirm = document.querySelector('.form-add-todo__btn-confirm');
const formSelectUser = document.querySelector('.form-add-todo__user');
const controls = document.querySelectorAll('.form-control');
const board = document.querySelector('.board');
const taskListBody = document.querySelector('.task-list__body');

export {
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
}