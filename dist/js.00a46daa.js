// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// import {
//   startTime,
// } from './reExport.js';

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

function Feed() {
  var fetchData = function fetchData(type) {
    return fetch("https://jsonplaceholder.typicode.com/".concat(type)).then(function (r) {
      return r.json();
    });
  };
  return Promise.all(['users', 'todos', 'posts'].map(fetchData)).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
      users = _ref2[0],
      todos = _ref2[1],
      posts = _ref2[2];
    var usersObj = Object.fromEntries(users.map(function (n) {
      return [n.id, n];
    }));
    var postsObj = Object.fromEntries(posts.map(function (n) {
      return [n.id, n];
    }));
    var todosObj = todos.map(function (n) {
      return {
        todo: n,
        user: usersObj[n.userId],
        post: postsObj[n.userId]
      };
    });
    console.log(todosObj);
  });
}
Feed();

// setData(posts.map(n => ({
//   post: n,
//   user: usersObj[n.userId],
// })));

// const runTrelloApplication = async () => {
//   const { todosPlaceholder, usersPlaceholder, commentsPlaceholder } = await getTrelloData();

//   // ------------------------------------------------------------------------------
//   // // localStorage

//   // // получить
//   // function getData(key) {
//   //   return JSON.parse(localStorage.getItem(key)) ?? [];
//   // };

//   // // записать
//   // function setData(key, value) {
//   //   localStorage.setItem(key, JSON.stringify(value));
//   // };

//   // setData('todosPlaceholder', todosPlaceholder)
//   // setData('usersPlaceholder', usersPlaceholder)
//   // setData('commentsPlaceholder', commentsPlaceholder)

//   // const todosPlaceholderGetData = getData('todosPlaceholder'); // id + title + completed
//   // const usersPlaceholderGetData = getData('usersPlaceholder'); // id + name
//   // const commentsPlaceholderGetData = getData('commentsPlaceholder'); // id + body

//   // // const todos = setData('todos', todos);

//   // console.log(usersPlaceholderGetData)

//   // // todos.forEach(todo => {
//   // //   createTodoCard(todo);
//   // // });

//   // ------------------------------------------------------------------------------
//   // получить текущую дату и время

//   function getDate() {
//     const data = new Date();
//     const Year = data.getFullYear();
//     const Month = data.getMonth();
//     const Day = data.getDate();
//     const Hour = data.getHours();
//     const Minutes = data.getMinutes();
//     const Seconds = data.getSeconds();

//     return `Time: ${Hour}:${Minutes}:${Seconds}
// Data: ${Day}.${Month}.${Year}`
//   }

//   // ------------------------------------------------------------------------------
//   // получить объект "todo"

//   function getTodoObj(titleTodo, despriptionTodo, usermTodo, statusTodo) {
//     // const idTodo = Math.random().toString(36).slice(2);
//     // const date = getDate();
//     // const title = title;
//     // const despription = despription;
//     // const user = user;
//     // const statusTodo = status;
//     const todo = {
//       id: Math.random().toString(36).slice(2),
//       date: getDate(),
//       title: titleTodo,
//       despription: despriptionTodo,
//       user: usermTodo,
//       status: statusTodo, // 'todo' 'in progress' 'done'
//     };

//     return todo
//   };

//   // ------------------------------------------------------------------------------
//   // часы

//   function startTime() {
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.querySelector('.header__time').innerHTML = h + ':' + m + ':' + s;
//     setTimeout(startTime, 1000);
//   }

//   function checkTime(i) {
//     if (i < 10) { i = '0' + i };
//     return i;
//   }

//   // вызов
//   startTime();

//   // ------------------------------------------------------------------------------
//   // счетчик Todos

//   function updateCounter() {
//     // счетчик Todo
//     (function getTodoCounter() {
//       return document.querySelector('.task-list__counters--todo').textContent = document.getElementsByClassName('task--todo').length;
//     })();
//     // счетчик InProgress
//     (function getInProgressCounter() {
//       return document.querySelector('.task-list__counters--in-progress').textContent = document.getElementsByClassName('task--in-progress').length;
//     })();
//     // счетчик Done
//     (function getDoneCounter() {
//       return document.querySelector('.task-list__counters--done').textContent = document.getElementsByClassName('task--done').length;
//     })();
//   };

//   updateCounter();

//   // ------------------------------------------------------------------------------
//   // создание элементов

//   // создание элемента - div
//   function createDiv(classList) {
//     const element = document.createElement('div');
//     element.classList = classList;
//     return element;
//   }

//   // создание элемента - label
//   function createLabel(classList) {
//     const element = document.createElement('label');
//     element.classList = classList;
//     return element;
//   }

//   // создание элемента - button
//   function createButton(classList, textContent) {
//     const element = document.createElement('button');
//     element.classList = classList;
//     element.type = 'button';
//     element.textContent = textContent;
//     return element;
//   }

//   // создание элемента - input
//   function createInput(classList, name, placeholder) {
//     const element = document.createElement('input');
//     element.classList = classList;
//     element.type = 'text';
//     element.name = name;
//     element.placeholder = placeholder;
//     return element;
//   }

//   // ------------------------------------------------------------------------------
//   // модальное окно формы Todo

//   const headerTime = document.querySelector('.header__time');
//   const taskListBodyTodo = document.querySelector('.task-list__body--todo');
//   const taskListBtnAddTodo = document.querySelector('.task-list__btn--add-todo');
//   const formAddTodo = document.querySelector('.form-add-todo');
//   const formInputTitle = document.querySelector('.form-add-todo__input-title');
//   const formInputDescription = document.querySelector('.form-add-todo__input-description');
//   const formВtnCancel = document.querySelector('.form-add-todo__btn-cancel');
//   const formВtnConfirm = document.querySelector('.form-add-todo__btn-confirm');
//   const formSelectUser = document.querySelector('.form-add-todo__user');

//   const controls = document.querySelectorAll('.form-control');

//   function addTodo() {
//     formAddTodo.classList.toggle('form-add-todo--vis');
//     formInputTitle.value = '';
//     formInputDescription.value = '';
//     formSelectUser.value = '';
//   };

//   function pressCancel() {
//     formAddTodo.classList.toggle('form-add-todo--vis');
//     formInputDescription.classList.remove('invalid-control');
//     formInputTitle.classList.remove('invalid-control');
//     formSelectUser.classList.remove('invalid-control');
//   };

//   function pressConfirm() {
//     // if () {
//     //   taskListBodyTodo.querySelectorAll('.task--todo')
//     //   .forEach(el => )
//     // }
//     controls.forEach(control => {
//       if (control.classList.contains('required') && !control.value) {
//         control.classList.add('invalid-control');
//       }
//     });

//     if (formInputTitle.value && formInputDescription.value && formSelectUser.value) {
//       formAddTodo.classList.toggle('form-add-todo--vis');

//       const elTask = createDiv('task task--todo');
//       elTask.draggable = true; // Drag'n'drop ***
//       elTask.id = Math.random().toString(36).slice(2);

//       taskListBodyTodo.append(
//         elTask
//       );

//       const elTaskHeaer = createDiv('task__header');
//       const elTaskBody = createDiv('task__body');
//       const elTaskFooter = createDiv('task__footer');

//       elTask.append(
//         elTaskHeaer,
//         elTaskBody,
//         elTaskFooter
//       );

//       const elTaskBtnContainer = createDiv('task__btn-container');
//       const elTaskTitle = createDiv('task__title');
//       elTaskTitle.textContent = formInputTitle.value;

//       elTaskHeaer.append(
//         elTaskBtnContainer,
//         elTaskTitle
//       );

//       const elTaskBtnEdit = createButton('task__btn task__btn--edit', 'EDIT');
//       const elTaskBtnDel = createButton('task__btn task__btn--del', 'DELETE');

//       elTaskBtnContainer.append(
//         elTaskBtnEdit,
//         elTaskBtnDel
//       );

//       const elTaskDescription = createDiv('task__description');
//       elTaskDescription.textContent = formInputDescription.value;
//       const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');

//       elTaskBody.append(
//         elTaskDescription,
//         elTaskBtnRelocate
//       );

//       const elTaskUser = createDiv('task__user');
//       elTaskUser.textContent = formSelectUser.value;
//       const elTaskTime = createDiv('task__time');
//       elTaskTime.textContent = headerTime.textContent;

//       elTaskFooter.append(
//         elTaskUser,
//         elTaskTime
//       );
//     }
//   };

//   taskListBtnAddTodo.addEventListener('click', addTodo);
//   formВtnCancel.addEventListener('click', pressCancel);
//   formВtnConfirm.addEventListener('click', pressConfirm);

//   formAddTodo.addEventListener('click', function (event) {
//     if (event.target.classList.contains('form-add-todo__input-title')) {
//       event.target.closest('.form-add-todo__input-title').classList.remove('invalid-control');
//     }

//     if (event.target.classList.contains('form-add-todo__input-description')) {
//       event.target.closest('.form-add-todo__input-description').classList.remove('invalid-control');
//     }

//     if (event.target.classList.contains('form-add-todo__user')) {
//       event.target.closest('.form-add-todo__user').classList.remove('invalid-control');
//     }
//   })

//   // ------------------------------------------------------------------------------
//   // Drag'n'drop

//   // События, происходящие с объектом перетаскивания:
//   // dragstart   (срабатывает в начале операции перетаскивания элемента)
//   // drag  (срабатывает, когда элемент перетаскивается)
//   // dragend   (срабатывает, когда пользователь закончил перетаскивание элемента)

//   // События, происходящие с объектом на который перетаскивают:
//   // dragenter   (когда элемент будет перенесен на заданную зону (цель для переноса)) event.preventDefault();
//   // dragover  (срабатывает, когда элемент перемещают над допустимой зоной для переноса) event.preventDefault();
//   // dragleave   (срабатывает, когда элемент выходит из допустимой зоны для переноса)
//   // drop  (срабатывает после того, как перетаскиваемый элемент опустился на объект перетаскивания)

//   const board = document.querySelector('.board');
//   const taskListBody = document.querySelector('.task-list__body');
//   const taskListBodyInProgress = document.querySelector('.task-list__body--in-progress');
//   const taskListBodyDone = document.querySelector('.task-list__body--done');
//   // элемент который перетаскиваем
//   let activeElement = null;

//   function relocateProgressInTodo(elem) {
//     elem.classList = 'task task--todo';
//     elem.querySelector('.task__btn--back').textContent = 'EDIT';
//     elem.querySelector('.task__btn--back').classList = 'task__btn task__btn--edit';
//     elem.querySelector('.task__btn--complete').textContent = 'DELETE';
//     elem.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
//     const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');
//     elem.querySelector('.task__body').append(elTaskBtnRelocate);
//     updateCounter();
//   }

//   function relocateTodoInProgress(elem) {
//     elem.classList = 'task task--in-progress';
//     elem.querySelector('.task__btn--relocate').remove()
//     elem.querySelector('.task__btn--edit').textContent = 'BACK';
//     elem.querySelector('.task__btn--edit').classList = 'task__btn task__btn--back';
//     elem.querySelector('.task__btn--del').textContent = 'COMPLETE';
//     elem.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
//     updateCounter();
//   }

//   function relocateProgressInDone(elem) {
//     elem.classList = 'task task--done';
//     // elem.classList.remove('task--in-progress');
//     elem.querySelector('.task__btn--back').remove();
//     elem.querySelector('.task__btn--complete').textContent = 'DELETE';
//     elem.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
//     updateCounter();
//   }

//   function relocateDoneInTodo(elem) {
//     elem.classList = 'task task--todo';
//     const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');
//     elem.querySelector('.task__body').append(elTaskBtnRelocate)
//     const elTaskBtnEdit = createButton('task__btn task__btn--edit', 'EDIT');
//     elem.querySelector('.task__btn-container').prepend(elTaskBtnEdit);
//     updateCounter();
//   }

//   function relocateDoneInProgress(elem) {
//     elem.classList = 'task task--in-progress';
//     const elTaskBtnBack = createButton('task__btn task__btn--back', 'BACK');
//     elem.querySelector('.task__btn-container').prepend(elTaskBtnBack)
//     elem.querySelector('.task__btn--del').textContent = 'COMPLETE';
//     elem.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
//     updateCounter();
//   }

//   function relocateTodoInDone(elem) {
//     elem.classList = 'task task--done';
//     elem.querySelector('.task__btn--relocate').remove();
//     elem.querySelector('.task__btn--edit').remove();
//     updateCounter();
//   }

//   // срабатывает в начале операции перетаскивания элемента
//   board.addEventListener('dragstart', (event) => {
//     event.target.classList.add('active-element');
//     activeElement = event.target;
//   })

//   // срабатывает, когда элемент перемещают над допустимой зоной для переноса
//   board.addEventListener('dragover', (event) => {
//     event.preventDefault();
//     // Элемент перед которым нужно разместить activeElement
//     const currentElement = event.target;
//     // Находим элемент, перед которым будем вставлять
//     const nextElement = (currentElement === activeElement.nextElementSibling) ?
//       currentElement.nextElementSibling :
//       currentElement;
//     // Вставяем activeElement
//     setTimeout(() => {
//       if (currentElement.classList.contains(`task`)) {
//         currentElement.closest('.task-list__body').insertBefore(activeElement, nextElement);
//       } else if (currentElement.classList.contains(`task-list__body`)) {
//         currentElement.prepend(activeElement);
//       }
//     }, 100);
//   });

//   // срабатывает, когда пользователь закончил перетаскивание элемента
//   board.addEventListener('dragend', (event) => {
//     event.target.classList.remove('active-element');
//     // перемещение в TodoList
//     if (event.target.closest('.task-list__body--todo')) {
//       if (event.target.classList.contains('task--in-progress')) {
//         relocateProgressInTodo(event.target);
//       } else if (event.target.classList.contains('task--done')) {
//         relocateDoneInTodo(event.target);
//       }
//       // перемещение в InProgress
//     } else if (event.target.closest('.task-list__body--in-progress')) {
//       if (event.target.classList.contains('task--todo')) {
//         relocateTodoInProgress(event.target);
//       } else if (event.target.classList.contains('task--done')) {
//         relocateDoneInProgress(event.target);
//       }
//       // перемещение в Done
//     } else if (event.target.closest('.task-list__body--done')) {
//       if (event.target.classList.contains('task--todo')) {
//         relocateTodoInDone(event.target);
//       } else if (event.target.classList.contains('task--in-progress')) {
//         relocateProgressInDone(event.target);
//       }
//     }
//   });

//   // ------------------------------------------------------------------------------
//   // Ивенты в board

//   board.addEventListener('click', function (event) {
//     // удаление карточки кнопкой DELETE
//     if (event.target.classList.contains('task__btn--del')) {
//       const task = event.target.closest('.task');
//       task.remove();
//       updateCounter();
//     }
//     // перемещение из Todo в InProgress
//     if (event.target.classList.contains('task__btn--relocate')) {
//       const task = event.target.closest('.task');
//       const cloneTask = task.cloneNode(true);
//       task.remove();
//       relocateTodoInProgress(cloneTask)
//       document.querySelector('.task-list__body--in-progress').prepend(cloneTask);
//     }
//     // перемещение из InProgress в Todo
//     if (event.target.classList.contains('task__btn--back')) {
//       const task = event.target.closest('.task');
//       const cloneTask = task.cloneNode(true);
//       task.remove();
//       relocateProgressInTodo(cloneTask);
//       document.querySelector('.task-list__body--todo').prepend(cloneTask);
//     }
//     // перемещение из InProgress в Done
//     if (event.target.classList.contains('task__btn--complete')) {
//       const task = event.target.closest('.task');
//       const cloneTask = task.cloneNode(true);
//       task.remove();
//       relocateProgressInDone(cloneTask)
//       document.querySelector('.task-list__body--done').prepend(cloneTask);
//     }
//     // удаление всех карточек
//     if (event.target.classList.contains('task-list__btn--del-all')) {
//       taskListBodyDone.querySelectorAll('.task--done').
//         forEach(elem => elem.remove());
//       updateCounter();
//     }
//     // редакрирование Todo
//     if (event.target.classList.contains('task__btn--edit')) {
//       editTodo()
//     }
//   });

//   function editTodo() {
//     const idTask = event.target.closest('.task')
//     const taskTitleText = idTask.querySelector('.task__title').textContent
//     const taskDescriptionText = idTask.querySelector('.task__description').textContent
//     const taskUserText = idTask.querySelector('.task__user').textContent

//     formAddTodo.classList.toggle('form-add-todo--vis');

//     formInputTitle.value = taskTitleText;
//     formInputDescription.value = taskDescriptionText;
//     formSelectUser.value = taskUserText;
//   };

// }

// runTrelloApplication()

// // ------------------------------------------------------------------------------
// // часы

// function startTime() {
//   const today = new Date();
//   let h = today.getHours();
//   let m = today.getMinutes();
//   let s = today.getSeconds();
//   m = checkTime(m);
//   s = checkTime(s);
//   document.querySelector('.header__time').innerHTML = h + ':' + m + ':' + s;
//   setTimeout(startTime, 1000);
// }

// function checkTime(i) {
//   if (i < 10) { i = '0' + i };
//   return i;
// }

// // вызов
// startTime();

// // ------------------------------------------------------------------------------
// // счетчик Todos

// function updateCounter() {
//   // счетчик Todo
//   (function getTodoCounter() {
//     return document.querySelector('.task-list__counters--todo').textContent = document.getElementsByClassName('task--todo').length;
//   })();
//   // счетчик InProgress
//   (function getInProgressCounter() {
//     return document.querySelector('.task-list__counters--in-progress').textContent = document.getElementsByClassName('task--in-progress').length;
//   })();
//   // счетчик Done
//   (function getDoneCounter() {
//     return document.querySelector('.task-list__counters--done').textContent = document.getElementsByClassName('task--done').length;
//   })();
// };

// updateCounter();

// // ------------------------------------------------------------------------------
// // создание элементов

// // создание элемента - div
// function createDiv(classList) {
//   const element = document.createElement('div');
//   element.classList = classList;
//   return element;
// }

// // создание элемента - label
// function createLabel(classList) {
//   const element = document.createElement('label');
//   element.classList = classList;
//   return element;
// }

// // создание элемента - button
// function createButton(classList, textContent) {
//   const element = document.createElement('button');
//   element.classList = classList;
//   element.type = 'button';
//   element.textContent = textContent;
//   return element;
// }

// // создание элемента - input
// function createInput(classList, name, placeholder) {
//   const element = document.createElement('input');
//   element.classList = classList;
//   element.type = 'text';
//   element.name = name;
//   element.placeholder = placeholder;
//   return element;
// }

// // ------------------------------------------------------------------------------
// // модальное окно формы Todo

// const headerTime = document.querySelector('.header__time');
// const taskListBodyTodo = document.querySelector('.task-list__body--todo');
// const taskListBtnAddTodo = document.querySelector('.task-list__btn--add-todo');
// const formAddTodo = document.querySelector('.form-add-todo');
// const formInputTitle = document.querySelector('.form-add-todo__input-title');
// const formInputDescription = document.querySelector('.form-add-todo__input-description');
// const formВtnCancel = document.querySelector('.form-add-todo__btn-cancel');
// const formВtnConfirm = document.querySelector('.form-add-todo__btn-confirm');
// const formSelectUser = document.querySelector('.form-add-todo__user');

// const controls = document.querySelectorAll('.form-control');

// function addTodo() {
//   formAddTodo.classList.toggle('form-add-todo--vis');
//   formInputTitle.value = '';
//   formInputDescription.value = '';
//   formSelectUser.value = '';
// };

// function pressCancel() {
//   formAddTodo.classList.toggle('form-add-todo--vis');
//   formInputDescription.classList.remove('invalid-control');
//   formInputTitle.classList.remove('invalid-control');
//   formSelectUser.classList.remove('invalid-control');
// };

// function pressConfirm() {
//   // if () {
//   //   taskListBodyTodo.querySelectorAll('.task--todo')
//   //   .forEach(el => )
//   // }
//   controls.forEach(control => {
//     if (control.classList.contains('required') && !control.value) {
//       control.classList.add('invalid-control');
//     }
//   });

//   if (formInputTitle.value && formInputDescription.value && formSelectUser.value) {
//     formAddTodo.classList.toggle('form-add-todo--vis');

//     const elTask = createDiv('task task--todo');
//     elTask.draggable = true; // Drag'n'drop ***
//     elTask.id = Math.random().toString(36).slice(2);

//     taskListBodyTodo.append(
//       elTask
//     );

//     const elTaskHeaer = createDiv('task__header');
//     const elTaskBody = createDiv('task__body');
//     const elTaskFooter = createDiv('task__footer');

//     elTask.append(
//       elTaskHeaer,
//       elTaskBody,
//       elTaskFooter
//     );

//     const elTaskBtnContainer = createDiv('task__btn-container');
//     const elTaskTitle = createDiv('task__title');
//     elTaskTitle.textContent = formInputTitle.value;

//     elTaskHeaer.append(
//       elTaskBtnContainer,
//       elTaskTitle
//     );

//     const elTaskBtnEdit = createButton('task__btn task__btn--edit', 'EDIT');
//     const elTaskBtnDel = createButton('task__btn task__btn--del', 'DELETE');

//     elTaskBtnContainer.append(
//       elTaskBtnEdit,
//       elTaskBtnDel
//     );

//     const elTaskDescription = createDiv('task__description');
//     elTaskDescription.textContent = formInputDescription.value;
//     const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');

//     elTaskBody.append(
//       elTaskDescription,
//       elTaskBtnRelocate
//     );

//     const elTaskUser = createDiv('task__user');
//     elTaskUser.textContent = formSelectUser.value;
//     const elTaskTime = createDiv('task__time');
//     elTaskTime.textContent = headerTime.textContent;

//     elTaskFooter.append(
//       elTaskUser,
//       elTaskTime
//     );
//   }
// };

// taskListBtnAddTodo.addEventListener('click', addTodo);
// formВtnCancel.addEventListener('click', pressCancel);
// formВtnConfirm.addEventListener('click', pressConfirm);

// formAddTodo.addEventListener('click', function (event) {
//   if (event.target.classList.contains('form-add-todo__input-title')) {
//     event.target.closest('.form-add-todo__input-title').classList.remove('invalid-control');
//   }

//   if (event.target.classList.contains('form-add-todo__input-description')) {
//     event.target.closest('.form-add-todo__input-description').classList.remove('invalid-control');
//   }

//   if (event.target.classList.contains('form-add-todo__user')) {
//     event.target.closest('.form-add-todo__user').classList.remove('invalid-control');
//   }
// })

// // ------------------------------------------------------------------------------
// // Drag'n'drop

// // События, происходящие с объектом перетаскивания:
// // dragstart   (срабатывает в начале операции перетаскивания элемента)
// // drag  (срабатывает, когда элемент перетаскивается)
// // dragend   (срабатывает, когда пользователь закончил перетаскивание элемента)

// // События, происходящие с объектом на который перетаскивают:
// // dragenter   (когда элемент будет перенесен на заданную зону (цель для переноса)) event.preventDefault();
// // dragover  (срабатывает, когда элемент перемещают над допустимой зоной для переноса) event.preventDefault();
// // dragleave   (срабатывает, когда элемент выходит из допустимой зоны для переноса)
// // drop  (срабатывает после того, как перетаскиваемый элемент опустился на объект перетаскивания)

// const board = document.querySelector('.board');
// const taskListBody = document.querySelector('.task-list__body');
// const taskListBodyInProgress = document.querySelector('.task-list__body--in-progress');
// const taskListBodyDone = document.querySelector('.task-list__body--done');
// // элемент который перетаскиваем
// let activeElement = null;

// function relocateProgressInTodo(elem) {
//   elem.classList = 'task task--todo';
//   elem.querySelector('.task__btn--back').textContent = 'EDIT';
//   elem.querySelector('.task__btn--back').classList = 'task__btn task__btn--edit';
//   elem.querySelector('.task__btn--complete').textContent = 'DELETE';
//   elem.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
//   const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');
//   elem.querySelector('.task__body').append(elTaskBtnRelocate);
//   updateCounter();
// }

// function relocateTodoInProgress(elem) {
//   elem.classList = 'task task--in-progress';
//   elem.querySelector('.task__btn--relocate').remove()
//   elem.querySelector('.task__btn--edit').textContent = 'BACK';
//   elem.querySelector('.task__btn--edit').classList = 'task__btn task__btn--back';
//   elem.querySelector('.task__btn--del').textContent = 'COMPLETE';
//   elem.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
//   updateCounter();
// }

// function relocateProgressInDone(elem) {
//   elem.classList = 'task task--done';
//   // elem.classList.remove('task--in-progress');
//   elem.querySelector('.task__btn--back').remove();
//   elem.querySelector('.task__btn--complete').textContent = 'DELETE';
//   elem.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
//   updateCounter();
// }

// function relocateDoneInTodo(elem) {
//   elem.classList = 'task task--todo';
//   const elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');
//   elem.querySelector('.task__body').append(elTaskBtnRelocate)
//   const elTaskBtnEdit = createButton('task__btn task__btn--edit', 'EDIT');
//   elem.querySelector('.task__btn-container').prepend(elTaskBtnEdit);
//   updateCounter();
// }

// function relocateDoneInProgress(elem) {
//   elem.classList = 'task task--in-progress';
//   const elTaskBtnBack = createButton('task__btn task__btn--back', 'BACK');
//   elem.querySelector('.task__btn-container').prepend(elTaskBtnBack)
//   elem.querySelector('.task__btn--del').textContent = 'COMPLETE';
//   elem.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
//   updateCounter();
// }

// function relocateTodoInDone(elem) {
//   elem.classList = 'task task--done';
//   elem.querySelector('.task__btn--relocate').remove();
//   elem.querySelector('.task__btn--edit').remove();
//   updateCounter();
// }

// // срабатывает в начале операции перетаскивания элемента
// board.addEventListener('dragstart', (event) => {
//   event.target.classList.add('active-element');
//   activeElement = event.target;
// })

// // срабатывает, когда элемент перемещают над допустимой зоной для переноса
// board.addEventListener('dragover', (event) => {
//   event.preventDefault();
//   // Элемент перед которым нужно разместить activeElement
//   const currentElement = event.target;
//   // Находим элемент, перед которым будем вставлять
//   const nextElement = (currentElement === activeElement.nextElementSibling) ?
//     currentElement.nextElementSibling :
//     currentElement;
//   // Вставяем activeElement
//   setTimeout(() => {
//     if (currentElement.classList.contains(`task`)) {
//       currentElement.closest('.task-list__body').insertBefore(activeElement, nextElement);
//     } else if (currentElement.classList.contains(`task-list__body`)) {
//       currentElement.prepend(activeElement);
//     }
//   }, 100);
// });

// // срабатывает, когда пользователь закончил перетаскивание элемента
// board.addEventListener('dragend', (event) => {
//   event.target.classList.remove('active-element');
//   // перемещение в TodoList
//   if (event.target.closest('.task-list__body--todo')) {
//     if (event.target.classList.contains('task--in-progress')) {
//       relocateProgressInTodo(event.target);
//     } else if (event.target.classList.contains('task--done')) {
//       relocateDoneInTodo(event.target);
//     }
//     // перемещение в InProgress
//   } else if (event.target.closest('.task-list__body--in-progress')) {
//     if (event.target.classList.contains('task--todo')) {
//       relocateTodoInProgress(event.target);
//     } else if (event.target.classList.contains('task--done')) {
//       relocateDoneInProgress(event.target);
//     }
//     // перемещение в Done
//   } else if (event.target.closest('.task-list__body--done')) {
//     if (event.target.classList.contains('task--todo')) {
//       relocateTodoInDone(event.target);
//     } else if (event.target.classList.contains('task--in-progress')) {
//       relocateProgressInDone(event.target);
//     }
//   }
// });

// // ------------------------------------------------------------------------------
// // Ивенты в board

// board.addEventListener('click', function (event) {
//   // удаление карточки кнопкой DELETE
//   if (event.target.classList.contains('task__btn--del')) {
//     const task = event.target.closest('.task');
//     task.remove();
//     updateCounter();
//   }
//   // перемещение из Todo в InProgress
//   if (event.target.classList.contains('task__btn--relocate')) {
//     const task = event.target.closest('.task');
//     const cloneTask = task.cloneNode(true);
//     task.remove();
//     relocateTodoInProgress(cloneTask)
//     document.querySelector('.task-list__body--in-progress').prepend(cloneTask);
//   }
//   // перемещение из InProgress в Todo
//   if (event.target.classList.contains('task__btn--back')) {
//     const task = event.target.closest('.task');
//     const cloneTask = task.cloneNode(true);
//     task.remove();
//     relocateProgressInTodo(cloneTask);
//     document.querySelector('.task-list__body--todo').prepend(cloneTask);
//   }
//   // перемещение из InProgress в Done
//   if (event.target.classList.contains('task__btn--complete')) {
//     const task = event.target.closest('.task');
//     const cloneTask = task.cloneNode(true);
//     task.remove();
//     relocateProgressInDone(cloneTask)
//     document.querySelector('.task-list__body--done').prepend(cloneTask);
//   }
//   // удаление всех карточек
//   if (event.target.classList.contains('task-list__btn--del-all')) {
//     taskListBodyDone.querySelectorAll('.task--done').
//       forEach(elem => elem.remove());
//     updateCounter();
//   }
//   // редакрирование Todo
//   if (event.target.classList.contains('task__btn--edit')) {
//     editTodo()
//   }

//   // очистка localStorage
//   if (event.target.classList.contains('task-list__header--done')) {
//     localStorage.clear()
//   }
// });

// function editTodo() {
//   const idTask = event.target.closest('.task')
//   const taskTitleText = idTask.querySelector('.task__title').textContent
//   const taskDescriptionText = idTask.querySelector('.task__description').textContent
//   const taskUserText = idTask.querySelector('.task__user').textContent

//   formAddTodo.classList.toggle('form-add-todo--vis');

//   formInputTitle.value = taskTitleText;
//   formInputDescription.value = taskDescriptionText;
//   formSelectUser.value = taskUserText;
// };
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53774" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map