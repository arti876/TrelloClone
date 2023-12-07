// import {
//   startTime,
// } from './reExport.js';

// ------------------------------------------------------------------------------

const getTrelloData = async () => {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json());
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());

  return {
    todos,
    users
  }
}

const runTrelloApplication = async () => {
  const { users, todos } = await getTrelloData();
  // console.log(users,todos)


  // Write your code

}

runTrelloApplication()

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
// модальное окно

const btnAddTodo = document.querySelector('.task-list__footer-btn--add-todo');
const btnCancel = document.getElementById('modal-cancel');
const btnConfirm = document.getElementById('modal-confirm');
const formAddTodo = document.querySelector('.form-add-todo');
const body = document.getElementsByTagName('body')[0];
const modalText = document.querySelector('.modal-text');



const user = document.querySelector('.task__footer-user');
const selectElement = document.getElementById('fruits');
const selectedFruit = selectElement.value;

function addTodo () {
  formAddTodo.classList.add('modal-vis'); // добавляем видимость окна
  formAddTodo.classList.remove('bounceOutDown'); // удаляем эффект закрытия
  body.classList.add('body-block'); // убираем прокрутку
}

function pressCancel() { // клик на закрытие
    formAddTodo.classList.add('bounceOutDown'); // добавляем эффект закрытия
    formAddTodo.classList.remove('modal-vis'); 
    body.classList.remove('body-block'); // возвращаем прокрутку
};
function pressConfirm() { // клик на закрытие
  formAddTodo.classList.add('bounceOutDown'); // добавляем эффект закрытия
  formAddTodo.classList.remove('modal-vis'); 
  body.classList.remove('body-block'); // возвращаем прокрутку
  user.textContent = selectElement.value;
};

btnAddTodo.addEventListener("click", addTodo);
btnCancel.addEventListener("click", pressCancel);
btnConfirm.addEventListener("click", pressConfirm);