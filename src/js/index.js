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
  console.log(users,todos)


  // Write your code

}

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
// ивенты

// const trello = document.querySelector('.trello');

// trello.addEventListener('click', function (event) {

//   if (event.target.classList.contains('header__time')) {
//     // event.target.closest().querySelector().classList.toggle();
//     event.target.closest()
//   };
// });

// ------------------------------------------------------------------------------