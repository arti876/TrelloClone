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

const taskListBodyTodo = document.querySelector('.task-list__body--todo');
const taskListBtnAddTodo = document.querySelector('.task-list__btn--add-todo');

const formAddTodo = document.querySelector('.form-add-todo');
const formInputTitle = document.querySelector('.form-add-todo__input-title');
const formInputDescription = document.querySelector('.form-add-todo__input-description');
const formВtnCancel = document.querySelector('.form-add-todo__btn-cancel');
const formВtnConfirm = document.querySelector('.form-add-todo__btn-confirm');
const formSelectUser = document.querySelector('.form-add-todo__user');

const controls = document.querySelectorAll('.form-control');

function addTodo() {
  formAddTodo.classList.toggle('form-add-todo--vis');
  formInputTitle.value = '';
  formInputDescription.value = '';
  formSelectUser.value = '';
};

function pressCancel() {
  formAddTodo.classList.toggle('form-add-todo--vis');
  formInputDescription.classList.remove('invalid-control');
  formInputTitle.classList.remove('invalid-control');
  formSelectUser.classList.remove('invalid-control');
};

function pressConfirm() {
  controls.forEach(control => {
    if (control.classList.contains('required') && !control.value) {
      control.classList.add('invalid-control');
    }
  });

  if (formInputTitle.value && formInputDescription.value && formSelectUser.value) {
    formAddTodo.classList.toggle('form-add-todo--vis');

    const elTask = createDiv('task task--todo');
    elTask.draggable = true; // Drag'n'drop

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
};

taskListBtnAddTodo.addEventListener('click', addTodo);
formВtnCancel.addEventListener('click', pressCancel);
formВtnConfirm.addEventListener('click', pressConfirm);

formAddTodo.addEventListener('click', function (event) {
  if (event.target.classList.contains('form-add-todo__input-title')) {
    event.target.closest('.form-add-todo__input-title').classList.remove('invalid-control');
  }

  if (event.target.classList.contains('form-add-todo__input-description')) {
    event.target.closest('.form-add-todo__input-description').classList.remove('invalid-control');
  }

  if (event.target.classList.contains('form-add-todo__user')) {
    event.target.closest('.form-add-todo__user').classList.remove('invalid-control');
  }
})

// ------------------------------------------------------------------------------
// Drag'n'drop

const board = document.querySelector('.board');
const taskListBody = document.querySelector('.task-list__body');
const taskListBody2 = document.querySelector('.task-list__body-1');
const taskListBody3 = document.querySelector('.task-list__body-2');
// const taskListBody = document.querySelector('.task-list__body');
// const trello = document.querySelector('.trello');

board.addEventListener('dragstart', (event) => {
  event.target.classList.add('selected');
})

board.addEventListener('dragend', (event) => {
  event.target.classList.remove('selected');
});



board.addEventListener(`dragover`, (event) => {
  // Разрешаем сбрасывать элементы в эту область
  event.preventDefault();

  // Находим перемещаемый элемент
  const activeElement = board.querySelector(`.selected`);
  // Находим элемент, над которым в данный момент находится курсор
  const currentElement = event.target;
  // Проверяем, что событие сработало:
  // 1. не на том элементе, который мы перемещаем,
  // 2. именно на элементе списка
  const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains(`task`);

  // Если нет, прерываем выполнение функции
  if (!isMoveable) {
    return;
  }

  // Находим элемент, перед которым будем вставлять
  const nextElement = (currentElement === activeElement.nextElementSibling) ?
    currentElement.nextElementSibling :
    currentElement;

  // Вставляем activeElement перед nextElement
  taskListBody.insertBefore(activeElement, nextElement);
  taskListBody2.insertBefore(activeElement, nextElement);
  taskListBody3.insertBefore(activeElement, nextElement);
});




// const getNextElement = (cursorPosition, currentElement) => {
//   // Получаем объект с размерами и координатами
//   const currentElementCoord = currentElement.getBoundingClientRect();
//   // Находим вертикальную координату центра текущего элемента
//   const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

//   // Если курсор выше центра элемента, возвращаем текущий элемент
//   // В ином случае — следующий DOM-элемент
//   const nextElement = (cursorPosition < currentElementCenter) ? currentElement : currentElement.nextElementSibling;

//   return nextElement;
// };

// taskListBody.addEventListener(`dragover`, (event) => {
//     // Разрешаем сбрасывать элементы в эту область
//   event.preventDefault();

//     // Находим перемещаемый элемент
//   const activeElement = taskListBody.querySelector(`.selected`);
//     // Находим элемент, над которым в данный момент находится курсор
//   const currentElement = event.target;
//     // Проверяем, что событие сработало:
//   // 1. не на том элементе, который мы перемещаем,
//   // 2. именно на элементе списка
//   const isMoveable = activeElement !== currentElement && currentElement.classList.contains(`task`);
//   // Если нет, прерываем выполнение функции
//   if (!isMoveable) {
//     return;
//   }

//   // event.clientY — вертикальная координата курсора в момент,
//   // когда сработало событие
//   const nextElement = getNextElement(event.clientY, currentElement);

//   // Проверяем, нужно ли менять элементы местами
//   if (
//     nextElement &&
//     activeElement === nextElement.previousElementSibling ||
//     activeElement === nextElement
//   ) {
//     // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
//     return;
//   }

//   taskListBody.insertBefore(activeElement, nextElement);
// });