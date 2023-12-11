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
    elTask.draggable = true; // Drag'n'drop ***
    elTask.id = Math.random().toString(36).slice(2);

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

// События, происходящие с объектом перетаскивания:
// dragstart   (срабатывает в начале операции перетаскивания элемента)
// drag  (срабатывает, когда элемент перетаскивается)
// dragend   (срабатывает, когда пользователь закончил перетаскивание элемента)

// События, происходящие с объектом на который перетаскивают:
// dragenter   (когда элемент будет перенесен на заданную зону (цель для переноса)) event.preventDefault();
// dragover  (срабатывает, когда элемент перемещают над допустимой зоной для переноса) event.preventDefault();
// dragleave   (срабатывает, когда элемент выходит из допустимой зоны для переноса)
// drop  (срабатывает после того, как перетаскиваемый элемент опустился на объект перетаскивания)

// элемент который перетаскиваем
let activeElement = null;
// элемент над которым перетаскиваемый элемент
// let currentElement = null;
// элемент куда перетаскиваем
// let droppeZone = null;



const board = document.querySelector('.board');
const taskListBody = document.querySelector('.task-list__body');
const taskListBodyInProgress = document.querySelector('.task-list__body--in-progress');
const taskListBodyDone = document.querySelector('.task-list__body--done');

// срабатывает в начале операции перетаскивания элемента
board.addEventListener('dragstart', (event) => {
  event.target.classList.add('active-element');
  activeElement = event.target;
})

// срабатывает, когда элемент перемещают над допустимой зоной для переноса
board.addEventListener('dragover', (event) => {
  event.preventDefault();
  // Элемент перед которым нужно разместить activeElement
  const currentElement = event.target;
  // Находим элемент, перед которым будем вставлять
  const nextElement = (currentElement === activeElement.nextElementSibling) ?
    currentElement.nextElementSibling :
    currentElement;
  // Вставяем activeElement
  setTimeout(() => {
    if (currentElement.classList.contains(`task`)) {
      currentElement.closest('.task-list__body').insertBefore(activeElement, nextElement);
    } else if (currentElement.classList.contains(`task-list__body`)) {
      currentElement.prepend(activeElement);
    }
  }, 100);
});

// срабатывает, когда пользователь закончил перетаскивание элемента
board.addEventListener('dragend', (event) => {
  event.target.classList.remove('active-element');
  // task-list__body--todo
  if (event.target.closest('.task-list__body--todo')) {
    if (event.target.classList.contains('task--in-progress')) {
      event.target.classList.add('task--todo');
      event.target.classList.remove('task--in-progress');
      event.target.querySelector('.task__btn--back').textContent = 'EDIT';
      event.target.querySelector('.task__btn--back').classList = 'task__btn task__btn--edit';
      event.target.querySelector('.task__btn--complete').textContent = 'DELETE';
      event.target.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
      const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');
      event.target.querySelector('.task__body').append(elTaskBtnRelocate);
    } else if (event.target.classList.contains('task--done')) {
      event.target.classList.add('task--todo');
      event.target.classList.remove('task--done');
      const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');
      event.target.querySelector('.task__body').append(elTaskBtnRelocate)
      const elTaskBtnEdit = createButton('task__btn task__btn--edit', 'EDIT');
      event.target.querySelector('.task__btn-container').prepend(elTaskBtnEdit);
    }
    // task-list__body--in-progress
  } else if (event.target.closest('.task-list__body--in-progress')) {
    if (event.target.classList.contains('task--todo')) {
      event.target.classList.add('task--in-progress');
      event.target.classList.remove('task--todo');
      event.target.querySelector('.task__btn--relocate').remove()
      event.target.querySelector('.task__btn--edit').textContent = 'BACK';
      event.target.querySelector('.task__btn--edit').classList = 'task__btn task__btn--back';
      event.target.querySelector('.task__btn--del').textContent = 'COMPLETE';
      event.target.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
    } else if (event.target.classList.contains('task--done')) {
      event.target.classList.add('task--in-progress');
      event.target.classList.remove('task--done');
      const elTaskBtnBack = createButton('task__btn task__btn--back', 'BACK');
      event.target.querySelector('.task__btn-container').prepend(elTaskBtnBack)
      event.target.querySelector('.task__btn--del').textContent = 'COMPLETE';
      event.target.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
    }
    // task-list__body--done
  } else if (event.target.closest('.task-list__body--done')) {
    if (event.target.classList.contains('task--todo')) {
      event.target.classList.add('task--done');
      event.target.classList.remove('task--todo');
      event.target.querySelector('.task__btn--relocate').remove();
      event.target.querySelector('.task__btn--edit').remove();
    } else if (event.target.classList.contains('task--in-progress')) {
      event.target.classList.add('task--done');
      event.target.classList.remove('task--in-progress');
      event.target.querySelector('.task__btn--back').remove();
      event.target.querySelector('.task__btn--complete').textContent = 'DELETE';
      event.target.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
    }
  }
});