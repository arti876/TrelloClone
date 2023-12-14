// import {
//   startTime,
// } from './reExport.js';

// ------------------------------------------------------------------------------

// рандом id
import { v4 as uuidv4 } from 'uuid';

// console.log(uuidv4());

// рандом статуса дел
const completedTodo = ['todo', 'inProgress', 'done']
const randomCompleted = completedTodo[Math.floor(Math.random() * completedTodo.length)];

// ------------------------------------------------------------------------------

// const getTrelloData = async () => {
//   const todosPlaceholder = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json());
//   const usersPlaceholder = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());
//   const commentsPlaceholder = await fetch('https://jsonplaceholder.typicode.com/comments').then((response) => response.json());

//   return {
//     todosPlaceholder,
//     usersPlaceholder,
//     commentsPlaceholder
//   }
// }

function getTrelloData() {
  const fetchData = (type) => fetch(`https://jsonplaceholder.typicode.com/${type}`).then(r => r.json());

  Promise.all(['users', 'posts'].map(fetchData))
    .then(([users, posts]) => {
      const usersObj = Object.fromEntries(users.map(n => [n.id, n]))
      return posts.map(n => ({
        id: uuidv4(),
        todo: n,
        user: usersObj[n.userId],
        completed: randomCompleted,
      }))
    })
    .then(todos => setData('todos', todos))
}

// получить
function getData(key) {
  return JSON.parse(localStorage.getItem(key)) ?? [];
};

// записать
function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

// setData('todosPlaceholder', todosPlaceholder)

if (!localStorage.length) {
  getTrelloData()
  console.log(`Data in localStorage is loaded`)
}

const runTrelloApplication = async () => {
  // const { todosPlaceholder, usersPlaceholder, commentsPlaceholder } = await getTrelloData();

  let todosGetData = getData('todos');

  // setTimeout(() => {
  //   let todosGetData = getData('todos');

  //   let [{id, todo: { id: idTodo, title, body}, user: { id: idUser, name, username }, completed }] = todosGetData
  //   console.log(id)
  //   console.log(idTodo)
  //   console.log(title)
  //   console.log(body)
  //   console.log(completed)
  //   console.log(idUser)
  //   console.log(name)
  //   console.log(username)
  // }, 100)

  // console.log(todosGetData[0].todo.title)

  // ------------------------------------------------------------------------------
  // localStorage

  // // получить
  // function getData(key) {
  //   return JSON.parse(localStorage.getItem(key)) ?? [];
  // };

  // // записать
  // function setData(key, value) {
  //   localStorage.setItem(key, JSON.stringify(value));
  // };

  // setData('todosPlaceholder', todosPlaceholder)
  // setData('usersPlaceholder', usersPlaceholder)
  // setData('commentsPlaceholder', commentsPlaceholder)

  // const todosPlaceholderGetData = getData('todosPlaceholder'); // id + title + completed
  // const usersPlaceholderGetData = getData('usersPlaceholder'); // id + name
  // const commentsPlaceholderGetData = getData('commentsPlaceholder'); // id + body

  // todos.forEach(todo => {
  //   createTodoCard(todo);
  // });


  // ------------------------------------------------------------------------------
  // получить текущую дату и время

  function getDate() {
    const data = new Date();
    const Year = data.getFullYear();
    const Month = data.getMonth();
    const Day = data.getDate();
    const Hour = data.getHours();
    const Minutes = data.getMinutes();
    const Seconds = data.getSeconds();

    return `Time: ${Hour}:${Minutes}:${Seconds}
Data: ${Day}.${Month}.${Year}`
  }

  // ------------------------------------------------------------------------------
  // получить объект "todo"

  function getTodoObj(titleTodo, despriptionTodo, usermTodo, statusTodo) {
    // const idTodo = Math.random().toString(36).slice(2);
    // const date = getDate();
    // const title = title;
    // const despription = despription;
    // const user = user;
    // const statusTodo = status;
    const todo = {
      id: Math.random().toString(36).slice(2),
      date: getDate(),
      title: titleTodo,
      despription: despriptionTodo,
      user: usermTodo,
      status: statusTodo, // 'todo' 'in progress' 'done'
    };

    return todo
  };

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
  // счетчик Todos

  function updateCounter() {
    // счетчик Todo
    (function getTodoCounter() {
      return document.querySelector('.task-list__counters--todo').textContent = document.getElementsByClassName('task--todo').length;
    })();
    // счетчик InProgress
    (function getInProgressCounter() {
      return document.querySelector('.task-list__counters--in-progress').textContent = document.getElementsByClassName('task--in-progress').length;
    })();
    // счетчик Done
    (function getDoneCounter() {
      return document.querySelector('.task-list__counters--done').textContent = document.getElementsByClassName('task--done').length;
    })();
  };

  updateCounter();

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

  function pressConfirm(todosGetData) {
    let [{id, todo: { title, body}, user: { name, username }, completed }] = todosGetData

    // controls.forEach(control => {
    //   if (control.classList.contains('required') && !control.value) {
    //     control.classList.add('invalid-control');
    //   }
    // });

    // if (completed === 'inProgress') {

    // } else if (completed === 'done') {

    // } else if ((completed === 'done') || (formInputTitle.value && formInputDescription.value && formSelectUser.value)) {
      formAddTodo.classList.toggle('form-add-todo--vis');

      const elTask = createDiv('task task--todo');
      elTask.draggable = true; // Drag'n'drop ***
      // elTask.id = Math.random().toString(36).slice(2);

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
    // }
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

  const board = document.querySelector('.board');
  const taskListBody = document.querySelector('.task-list__body');
  const taskListBodyInProgress = document.querySelector('.task-list__body--in-progress');
  const taskListBodyDone = document.querySelector('.task-list__body--done');
  // элемент который перетаскиваем
  let activeElement = null;

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
    // перемещение в TodoList
    if (event.target.closest('.task-list__body--todo')) {
      if (event.target.classList.contains('task--in-progress')) {
        relocateProgressInTodo(event.target);
      } else if (event.target.classList.contains('task--done')) {
        relocateDoneInTodo(event.target);
      }
      // перемещение в InProgress
    } else if (event.target.closest('.task-list__body--in-progress')) {
      if (event.target.classList.contains('task--todo')) {
        relocateTodoInProgress(event.target);
      } else if (event.target.classList.contains('task--done')) {
        relocateDoneInProgress(event.target);
      }
      // перемещение в Done
    } else if (event.target.closest('.task-list__body--done')) {
      if (event.target.classList.contains('task--todo')) {
        relocateTodoInDone(event.target);
      } else if (event.target.classList.contains('task--in-progress')) {
        relocateProgressInDone(event.target);
      }
    }
  });

  // ------------------------------------------------------------------------------
  // Ивенты в board

  board.addEventListener('click', function (event) {
    // удаление карточки кнопкой DELETE
    if (event.target.classList.contains('task__btn--del')) {
      const task = event.target.closest('.task');
      task.remove();
      updateCounter();
    }
    // перемещение из Todo в InProgress
    if (event.target.classList.contains('task__btn--relocate')) {
      const task = event.target.closest('.task');
      const cloneTask = task.cloneNode(true);
      task.remove();
      relocateTodoInProgress(cloneTask)
      document.querySelector('.task-list__body--in-progress').prepend(cloneTask);
    }
    // перемещение из InProgress в Todo
    if (event.target.classList.contains('task__btn--back')) {
      const task = event.target.closest('.task');
      const cloneTask = task.cloneNode(true);
      task.remove();
      relocateProgressInTodo(cloneTask);
      document.querySelector('.task-list__body--todo').prepend(cloneTask);
    }
    // перемещение из InProgress в Done
    if (event.target.classList.contains('task__btn--complete')) {
      const task = event.target.closest('.task');
      const cloneTask = task.cloneNode(true);
      task.remove();
      relocateProgressInDone(cloneTask)
      document.querySelector('.task-list__body--done').prepend(cloneTask);
    }
    // удаление всех карточек
    if (event.target.classList.contains('task-list__btn--del-all')) {
      taskListBodyDone.querySelectorAll('.task--done').
        forEach(elem => elem.remove());
      updateCounter();
    }
    // редакрирование Todo
    if (event.target.classList.contains('task__btn--edit')) {
      editTodo()
    }

    if (event.target.classList.contains('task-list__header--done')) {
      localStorage.clear()
    }
  });

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

}

runTrelloApplication()