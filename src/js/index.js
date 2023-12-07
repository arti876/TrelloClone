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
// модальное окно формы Todo

const taskListBtnAddTodo = document.querySelector('.task-list__footer-btn--add-todo');
const formAddTodo = document.querySelector('.form-add-todo');
const formВtnCancel = document.querySelector('.form-add-todo__btn-cancel');
const formВtnConfirm = document.querySelector('.form-add-todo__btn-confirm');
const formSelectUser = document.querySelector('.form-add-todo__user');
// const body = document.getElementsByTagName('body')[0];
const user = document.querySelector('.task__user');

function addTodo() {
  formAddTodo.classList.add('form-add-todo--vis');
  // body.classList.toog('body-block'); // убираем прокрутку
}

function pressCancel() {
  formAddTodo.classList.remove('form-add-todo--vis');
    // body.classList.remove('body-block'); // возвращаем прокрутку
};
function pressConfirm() {
  user.textContent = formSelectUser.value;
  formAddTodo.classList.remove('form-add-todo--vis');
    // body.classList.remove('body-block'); // возвращаем прокрутку
};

taskListBtnAddTodo.addEventListener("click", addTodo);
formВtnCancel.addEventListener("click", pressCancel);
formВtnConfirm.addEventListener("click", pressConfirm);