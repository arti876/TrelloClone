// import {
//   startTime,
// } from './reExport.js';

// ------------------------------------------------------------------------------

// const getTrelloData = async () => {
//   const todos = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json());
//   const users = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());

//   return {
//     todos,
//     users
//   }
// }

// const runTrelloApplication = async () => {
//   const { users, todos } = await getTrelloData();
//   // console.log(users,todos)


//   // Write your code

// }

// runTrelloApplication()

// ------------------------------------------------------------------------------
// часы

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector('.header__time').innerHTML = h + ':' + m + ':' + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = '0' + i };
  return i;
}

// вызов
startTime();

// ------------------------------------------------------------------------------
// создание элементов

// создание элемента - div
function createDiv(classList) {
  const element = document.createElement('div');
  element.classList = classList;
  return element;
}

// создание элемента - label
function createLabel(classList) {
  const element = document.createElement('label');
  element.classList = classList;
  return element;
}

// создание элемента - button
function createButton(classList, textContent) {
  const element = document.createElement('button');
  element.classList = classList;
  element.type = 'button';
  element.textContent = textContent;
  return element;
}

// создание элемента - input
function createInput(classList, name, placeholder) {
  const element = document.createElement('input');
  element.classList = classList;
  element.type = 'text';
  element.name = name;
  element.placeholder = placeholder;
  return element;
}

// ------------------------------------------------------------------------------
// модальное окно формы Todo

const headerTime = document.querySelector('.header__time');

const taskListBody = document.querySelector('.task-list__body--todo');
const taskListBtnAddTodo = document.querySelector('.task-list__btn--add-todo');

const formAddTodo = document.querySelector('.form-add-todo');
const formInputTitle = document.querySelector('.form-add-todo__input-title');
const formInputDescription = document.querySelector('.form-add-todo__input-description');
const formВtnCancel = document.querySelector('.form-add-todo__btn-cancel');
const formВtnConfirm = document.querySelector('.form-add-todo__btn-confirm');
const formSelectUser = document.querySelector('.form-add-todo__user');

function addTodo() {
  formAddTodo.classList.toggle('form-add-todo--vis');
  formInputTitle.value = '';
  formInputDescription.value = '';
  formSelectUser.value = '';
};

function pressCancel() {
  formAddTodo.classList.toggle('form-add-todo--vis');
  formInputDescription.classList.remove('animated', 'shake');
  formInputTitle.classList.remove('animated', 'shake');
};

function pressConfirm() {
  if (formInputTitle.value && formInputDescription.value && formSelectUser.value) {
    formAddTodo.classList.toggle('form-add-todo--vis');

    const elTask = createDiv('task task--todo');

    taskListBody.append(
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
  } else if (formInputTitle) {
    formInputTitle.classList.add('animated', 'shake');
  } else if (formInputDescription) {
    formInputDescription.classList.add('animated', 'shake');
  }
};

taskListBtnAddTodo.addEventListener('click', addTodo);
formВtnCancel.addEventListener('click', pressCancel);
formВtnConfirm.addEventListener('click', pressConfirm);


// const trello = document.querySelector('.trello');

// trello.addEventListener('click', function (event) {

//   if (event.target.classList.contains('task-list__btn--add-todo')) {
//     addTodo();
//   }

//   if (event.target.classList.contains('form-add-todo__btn-confirm')) {
//     pressConfirm();
//   }

//   if (event.target.classList.contains('form-add-todo__btn-cancel')) {
//     pressCancel();
//   }
// });