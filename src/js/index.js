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
  document.querySelector('.header__time').innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };
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
function createButton(classList, name, textContent) {
  const element = document.createElement('button');
  element.classList = classList;
  element.type = 'button';
  element.name = name;
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

const taskListBtnAddTodo = document.querySelector('.task-list__btn--add-todo');
const formAddTodo = document.querySelector('.form-add-todo');
const formInputTitle = document.querySelector('.form-add-todo__input-title');
const formInputDescription = document.querySelector('.form-add-todo__input-description');
const formВtnCancel = document.querySelector('.form-add-todo__btn-cancel');
const formВtnConfirm = document.querySelector('.form-add-todo__btn-confirm');
const formSelectUser = document.querySelector('.form-add-todo__user');

// const body = document.getElementsByTagName('body')[0];
const user = document.querySelector('.task__user');

function addTodo() {
  formAddTodo.classList.toggle('form-add-todo--vis');
  // body.classList.toggle('body-block'); // убираем прокрутку
}

function pressCancel() {
  formAddTodo.classList.toggle('form-add-todo--vis');
  // body.classList.toggle('body-block'); // возвращаем прокрутку
};
function pressConfirm() {
  if (formInputTitle.value && formInputDescription.value) {
    user.textContent = formSelectUser.value;
    formAddTodo.classList.toggle('form-add-todo--vis');
  }
  // body.classList.toggle('body-block'); // возвращаем прокрутку
};

taskListBtnAddTodo.addEventListener("click", addTodo);
formВtnCancel.addEventListener("click", pressCancel);
formВtnConfirm.addEventListener("click", pressConfirm);