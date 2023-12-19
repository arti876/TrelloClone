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
})({"js/refs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warningText = exports.warningBtnConfirm = exports.warning = exports.trelloWrapper = exports.taskListBtnShowAllTodo = exports.taskListBtnShowAllInProgress = exports.taskListBtnShowAllDone = exports.taskListBtnShowAll = exports.taskListBtnAddTodo = exports.taskListBodyTodo = exports.taskListBodyInProgress = exports.taskListBodyDone = exports.taskListBody = exports.goTopBtn = exports.formВtnConfirm = exports.formВtnCancel = exports.formSelectUser = exports.formInputTitle = exports.formInputDescription = exports.formAddTodo = exports.controls = exports.board = void 0;
var taskListBodyTodo = exports.taskListBodyTodo = document.querySelector('.task-list__body--todo');
var taskListBodyInProgress = exports.taskListBodyInProgress = document.querySelector('.task-list__body--in-progress');
var taskListBodyDone = exports.taskListBodyDone = document.querySelector('.task-list__body--done');
var taskListBtnAddTodo = exports.taskListBtnAddTodo = document.querySelector('.task-list__btn-add-todo');
var formAddTodo = exports.formAddTodo = document.querySelector('.form-add-todo');
var formInputTitle = exports.formInputTitle = document.querySelector('.form-add-todo__input-title');
var formInputDescription = exports.formInputDescription = document.querySelector('.form-add-todo__input-description');
var formВtnCancel = exports.formВtnCancel = document.querySelector('.form-add-todo__btn-cancel');
var formВtnConfirm = exports.formВtnConfirm = document.querySelector('.form-add-todo__btn-confirm');
var formSelectUser = exports.formSelectUser = document.querySelector('.form-add-todo__user');
var controls = exports.controls = document.querySelectorAll('.form-control');
var board = exports.board = document.querySelector('.board');
var taskListBody = exports.taskListBody = document.querySelector('.task-list__body');
var warning = exports.warning = document.querySelector('.warning');
var warningBtnConfirm = exports.warningBtnConfirm = document.querySelector('.warning__btn-confirm');
var warningText = exports.warningText = document.querySelector('.warning__text');
var trelloWrapper = exports.trelloWrapper = document.querySelector('.trello__wrapper');
var goTopBtn = exports.goTopBtn = document.querySelector(".go-top");
var taskListBtnShowAll = exports.taskListBtnShowAll = document.querySelector('.task-list__btn-show-all');
var taskListBtnShowAllTodo = exports.taskListBtnShowAllTodo = document.querySelector('.task-list__btn-show-all--todo');
var taskListBtnShowAllInProgress = exports.taskListBtnShowAllInProgress = document.querySelector('.task-list__btn-show-all--in-progress');
var taskListBtnShowAllDone = exports.taskListBtnShowAllDone = document.querySelector('.task-list__btn-show-all--done');
},{}],"js/getData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDay = getDay;
exports.getTime = getTime;
function getDay() {
  var data = new Date();
  var Year = data.getFullYear();
  var Month = data.getMonth();
  var Day = data.getDate();
  return "".concat(Day, "-").concat(Month + 1, "-").concat(Year);
}
function getTime() {
  var data = new Date();
  var Hour = ('0' + data.getHours()).slice(-2);
  var Minutes = ('0' + data.getMinutes()).slice(-2);
  var Seconds = ('0' + data.getSeconds()).slice(-2);
  return "".concat(Hour, ":").concat(Minutes, ":").concat(Seconds);
}

// получить текущую дату и время
},{}],"js/updateCounter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCounter = updateCounter;
function updateCounter() {
  // счетчик Todo
  (function getTodoCounter() {
    var taskListCountersTodo = document.querySelector('.task-list__counters--todo');
    var taskTodoAll = document.getElementsByClassName('task--todo');
    return taskListCountersTodo.textContent = taskTodoAll.length;
  })();
  // счетчик InProgress
  (function getInProgressCounter() {
    var taskListCountersInProgress = document.querySelector('.task-list__counters--in-progress');
    var taskInProgressAll = document.getElementsByClassName('task--in-progress');
    return taskListCountersInProgress.textContent = taskInProgressAll.length;
  })();
  // счетчик Done
  (function getDoneCounter() {
    var taskListCountersDone = document.querySelector('.task-list__counters--done');
    var taskDoneAll = document.getElementsByClassName('task--done');
    return taskListCountersDone.textContent = taskDoneAll.length;
  })();
}
;

// обновление счетчиков Todos
},{}],"js/htmlCreateElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createButton = createButton;
exports.createDiv = createDiv;
exports.createInput = createInput;
exports.createLabel = createLabel;
// создание элемента - div
function createDiv(classList) {
  var element = document.createElement('div');
  element.classList = classList;
  return element;
}

// создание элемента - label
function createLabel(classList) {
  var element = document.createElement('label');
  element.classList = classList;
  return element;
}

// создание элемента - button
function createButton(classList, textContent) {
  var element = document.createElement('button');
  element.classList = classList;
  element.type = 'button';
  element.textContent = textContent;
  return element;
}

// создание элемента - input
function createInput(classList, name, placeholder) {
  var element = document.createElement('input');
  element.classList = classList;
  element.type = 'text';
  element.name = name;
  element.placeholder = placeholder;
  return element;
}

// создание элементов html
},{}],"js/localStorage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;
exports.setData = setData;
// получить
function getData(key) {
  var _JSON$parse;
  return (_JSON$parse = JSON.parse(localStorage.getItem(key))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];
}
;

// записать
function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
;

// запись-чтение данных localStorage
},{}],"js/functionEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boardClear = boardClear;
exports.editTodo = editTodo;
exports.elementMovement = elementMovement;
exports.relocateDoneInProgress = relocateDoneInProgress;
exports.relocateDoneInTodo = relocateDoneInTodo;
exports.relocateProgressInDone = relocateProgressInDone;
exports.relocateProgressInTodo = relocateProgressInTodo;
exports.relocateTodoInDone = relocateTodoInDone;
exports.relocateTodoInProgress = relocateTodoInProgress;
exports.scrollСheck = scrollСheck;
exports.showAllCards = showAllCards;
exports.statusTaskСhange = statusTaskСhange;
var _getData = require("./getData.js");
var _updateCounter = require("./updateCounter.js");
var _htmlCreateElement = require("./htmlCreateElement.js");
var _localStorage = require("./localStorage.js");
var _refs = require("./refs.js");
// получить текущую дату и время
// обновление счетчиков Todos
// создание элементов html
// запись-чтение данных localStorage

// получение переменных

// удалить все карточки дел
function boardClear() {
  var allTask = document.querySelectorAll('.task');
  allTask.forEach(function (task) {
    return task.remove();
  });
  (0, _updateCounter.updateCounter)();
  localStorage.clear();
}

// изменение статуса карточки при переносе
function statusTaskСhange(activeElementId, todosGetData, status) {
  for (var i = 0; i < todosGetData.length; i++) {
    if (todosGetData[i].todo.id === activeElementId) {
      todosGetData[i].todo.completed = status;
      todosGetData[i].todo.time = (0, _getData.getTime)();
      todosGetData[i].todo.day = (0, _getData.getDay)();
      (0, _localStorage.setData)('todos', todosGetData);
    }
    ;
  }
  ;
}

//редакрирование todo
function editTodo() {
  var idTask = event.target.closest('.task');
  var taskTitleText = idTask.querySelector('.task__title').textContent;
  var taskDescriptionText = idTask.querySelector('.task__description').textContent;
  var taskUserText = idTask.querySelector('.task__user').textContent;
  _refs.formAddTodo.id = idTask.id;
  _refs.formВtnConfirm.classList.add('form-add-todo__btn-confirm--edit');
  _refs.formAddTodo.classList.toggle('form-add-todo--vis');
  _refs.formInputTitle.value = taskTitleText;
  _refs.formInputDescription.value = taskDescriptionText;
  _refs.formSelectUser.value = taskUserText;
}
;

// перемещение элемента DnD
function elementMovement(activeElement) {
  // Элемент перед которым нужно разместить activeElement
  var currentElement = event.target;
  // Находим элемент, перед которым будем вставлять
  var nextElement = currentElement === activeElement.nextElementSibling ? currentElement.nextElementSibling : currentElement;
  // Вставяем activeElement
  setTimeout(function () {
    if (currentElement.classList.contains("task")) {
      currentElement.closest('.task-list__body').insertBefore(activeElement, nextElement);
    } else if (currentElement.classList.contains("task-list__body")) {
      currentElement.prepend(activeElement);
    }
  }, 100);
}

// перенос карточки из ProgressInTodo
function relocateProgressInTodo(elem) {
  elem.classList = 'task task--todo';
  elem.querySelector('.task__btn--back').textContent = 'EDIT';
  elem.querySelector('.task__btn--back').classList = 'task__btn task__btn--edit';
  elem.querySelector('.task__btn--complete').textContent = 'DELETE';
  elem.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
  elem.querySelector('.task__time').textContent = (0, _getData.getTime)();
  elem.querySelector('.task__date').textContent = (0, _getData.getDay)();
  var elTaskBtnRelocate = (0, _htmlCreateElement.createButton)('task__btn task__btn--relocate', '>');
  elem.querySelector('.task__body').append(elTaskBtnRelocate);
}

// перенос карточки из TodoInProgress
function relocateTodoInProgress(elem) {
  elem.classList = 'task task--in-progress';
  elem.querySelector('.task__btn--relocate').remove();
  elem.querySelector('.task__btn--edit').textContent = 'BACK';
  elem.querySelector('.task__btn--edit').classList = 'task__btn task__btn--back';
  elem.querySelector('.task__btn--del').textContent = 'COMPLETE';
  elem.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
  elem.querySelector('.task__time').textContent = (0, _getData.getTime)();
  elem.querySelector('.task__date').textContent = (0, _getData.getDay)();
}

// перенос карточки из ProgressInDone
function relocateProgressInDone(elem) {
  elem.classList = 'task task--done';
  elem.querySelector('.task__btn--back').remove();
  elem.querySelector('.task__btn--complete').textContent = 'DELETE';
  elem.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
  elem.querySelector('.task__time').textContent = (0, _getData.getTime)();
  elem.querySelector('.task__date').textContent = (0, _getData.getDay)();
}

// перенос карточки из DoneInTodo
function relocateDoneInTodo(elem) {
  elem.classList = 'task task--todo';
  var elTaskBtnRelocate = (0, _htmlCreateElement.createButton)('task__btn task__btn--relocate', '>');
  elem.querySelector('.task__body').append(elTaskBtnRelocate);
  var elTaskBtnEdit = (0, _htmlCreateElement.createButton)('task__btn task__btn--edit', 'EDIT');
  elem.querySelector('.task__btn-container').prepend(elTaskBtnEdit);
  elem.querySelector('.task__time').textContent = (0, _getData.getTime)();
  elem.querySelector('.task__date').textContent = (0, _getData.getDay)();
}

// перенос карточки из DoneInProgress
function relocateDoneInProgress(elem) {
  elem.classList = 'task task--in-progress';
  var elTaskBtnBack = (0, _htmlCreateElement.createButton)('task__btn task__btn--back', 'BACK');
  elem.querySelector('.task__btn-container').prepend(elTaskBtnBack);
  elem.querySelector('.task__btn--del').textContent = 'COMPLETE';
  elem.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
  elem.querySelector('.task__time').textContent = (0, _getData.getTime)();
  elem.querySelector('.task__date').textContent = (0, _getData.getDay)();
}

// перенос карточки из TodoInDone
function relocateTodoInDone(elem) {
  elem.classList = 'task task--done';
  elem.querySelector('.task__btn--relocate').remove();
  elem.querySelector('.task__btn--edit').remove();
  elem.querySelector('.task__time').textContent = (0, _getData.getTime)();
  elem.querySelector('.task__date').textContent = (0, _getData.getDay)();
}

// проверка наличие скролла
function scrollСheck() {
  if (_refs.taskListBodyInProgress.scrollHeight > _refs.taskListBodyInProgress.clientHeight) {
    _refs.taskListBtnShowAllInProgress.style.display = 'block';
  } else {
    _refs.taskListBtnShowAllInProgress.style.display = 'none';
  }
  if (_refs.taskListBodyTodo.scrollHeight > _refs.taskListBodyTodo.clientHeight) {
    _refs.taskListBtnShowAllTodo.style.display = 'block';
  } else {
    _refs.taskListBtnShowAllTodo.style.display = 'none';
  }
  if (_refs.taskListBodyDone.scrollHeight > _refs.taskListBodyDone.clientHeight) {
    _refs.taskListBtnShowAllDone.style.display = 'block';
  } else {
    _refs.taskListBtnShowAllDone.style.display = 'none';
  }
}

// показать/скрыть карточки
function showAllCards(taskList) {
  if (event.target.getAttribute('data-show') === "true") {
    taskList.style.height = 'auto';
    event.target.textContent = 'Show all ▲';
    event.target.setAttribute('data-show', "false");
  } else {
    taskList.style.height = '600px';
    event.target.textContent = 'Show all ▼';
    event.target.setAttribute('data-show', "true");
  }
}

// functionEvent
},{"./getData.js":"js/getData.js","./updateCounter.js":"js/updateCounter.js","./htmlCreateElement.js":"js/htmlCreateElement.js","./localStorage.js":"js/localStorage.js","./refs.js":"js/refs.js"}],"js/clock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startTime = startTime;
function startTime() {
  var headerTime = document.querySelector('.header__time');
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  headerTime.innerHTML = h + ':' + m + ':' + s;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  ;
  return i;
}

// часы
},{}],"js/createTodoCard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTodoCard = createTodoCard;
var _refs = require("./refs.js");
var _htmlCreateElement = require("./htmlCreateElement.js");
// получение переменных
// создание элементов html

function createTodoCard(todosGetData) {
  var _todosGetData$todo = todosGetData.todo,
    id = _todosGetData$todo.id,
    title = _todosGetData$todo.title,
    body = _todosGetData$todo.body,
    time = _todosGetData$todo.time,
    day = _todosGetData$todo.day,
    completed = _todosGetData$todo.completed,
    name = todosGetData.user.name;
  var lengthTaskInProgress = document.getElementsByClassName('task--in-progress').length;
  if (completed === 'inProgress' && lengthTaskInProgress < 6) {
    // if (completed === 'inProgress') {
    var elTask = (0, _htmlCreateElement.createDiv)('task task--in-progress');
    elTask.draggable = true; // Drag'n'drop ON
    elTask.id = id;
    var elTaskBtnContainer = (0, _htmlCreateElement.createDiv)('task__btn-container');
    var elTaskBody = (0, _htmlCreateElement.createDiv)('task__body');
    var elTaskHeaer = (0, _htmlCreateElement.createDiv)('task__header');
    var elTaskFooter = (0, _htmlCreateElement.createDiv)('task__footer');
    var elTaskTitle = (0, _htmlCreateElement.createDiv)('task__title');
    elTaskTitle.textContent = title;
    var elTaskDescription = (0, _htmlCreateElement.createDiv)('task__description');
    elTaskDescription.textContent = body;
    var elTaskUser = (0, _htmlCreateElement.createDiv)('task__user');
    elTaskUser.textContent = name;
    var elTaskDateContainer = (0, _htmlCreateElement.createDiv)('task__date-container');
    var elTaskTime = (0, _htmlCreateElement.createDiv)('task__time');
    elTaskTime.textContent = time;
    var elTaskDate = (0, _htmlCreateElement.createDiv)('task__date');
    elTaskDate.textContent = day;
    var elTaskBtnBack = (0, _htmlCreateElement.createButton)('task__btn task__btn--back', 'BACK');
    var elTaskBtnComplete = (0, _htmlCreateElement.createButton)('task__btn task__btn--complete', 'COMPLETE');
    _refs.taskListBodyInProgress.append(elTask);
    elTask.append(elTaskHeaer, elTaskBody, elTaskFooter);
    elTaskHeaer.append(elTaskBtnContainer, elTaskTitle);
    elTaskBtnContainer.append(elTaskBtnBack, elTaskBtnComplete);
    elTaskBody.append(elTaskDescription);
    elTaskFooter.append(elTaskUser, elTaskDateContainer);
    elTaskDateContainer.append(elTaskTime, elTaskDate);
  } else if (completed === 'done') {
    var _elTask = (0, _htmlCreateElement.createDiv)('task task--done');
    _elTask.draggable = true; // Drag'n'drop ON
    _elTask.id = id;
    var elTaskBtnDel = (0, _htmlCreateElement.createButton)('task__btn task__btn--del', 'DELETE');
    var _elTaskBtnContainer = (0, _htmlCreateElement.createDiv)('task__btn-container');
    var _elTaskBody = (0, _htmlCreateElement.createDiv)('task__body');
    var _elTaskHeaer = (0, _htmlCreateElement.createDiv)('task__header');
    var _elTaskFooter = (0, _htmlCreateElement.createDiv)('task__footer');
    var _elTaskTitle = (0, _htmlCreateElement.createDiv)('task__title');
    _elTaskTitle.textContent = title;
    var _elTaskDescription = (0, _htmlCreateElement.createDiv)('task__description');
    _elTaskDescription.textContent = body;
    var _elTaskUser = (0, _htmlCreateElement.createDiv)('task__user');
    _elTaskUser.textContent = name;
    var _elTaskDateContainer = (0, _htmlCreateElement.createDiv)('task__date-container');
    var _elTaskTime = (0, _htmlCreateElement.createDiv)('task__time');
    _elTaskTime.textContent = time;
    var _elTaskDate = (0, _htmlCreateElement.createDiv)('task__date');
    _elTaskDate.textContent = day;
    _refs.taskListBodyDone.append(_elTask);
    _elTask.append(_elTaskHeaer, _elTaskBody, _elTaskFooter);
    _elTaskHeaer.append(_elTaskBtnContainer, _elTaskTitle);
    _elTaskBtnContainer.append(elTaskBtnDel);
    _elTaskBody.append(_elTaskDescription);
    _elTaskFooter.append(_elTaskUser, _elTaskDateContainer);
    _elTaskDateContainer.append(_elTaskTime, _elTaskDate);
  } else if (completed === 'todo') {
    var _elTask2 = (0, _htmlCreateElement.createDiv)('task task--todo');
    _elTask2.draggable = true; // Drag'n'drop ON
    _elTask2.id = id;
    var elTaskBtnEdit = (0, _htmlCreateElement.createButton)('task__btn task__btn--edit', 'EDIT');
    var _elTaskBtnDel = (0, _htmlCreateElement.createButton)('task__btn task__btn--del', 'DELETE');
    var elTaskBtnRelocate = (0, _htmlCreateElement.createButton)('task__btn task__btn--relocate', '>');
    var _elTaskBtnContainer2 = (0, _htmlCreateElement.createDiv)('task__btn-container');
    var _elTaskBody2 = (0, _htmlCreateElement.createDiv)('task__body');
    var _elTaskHeaer2 = (0, _htmlCreateElement.createDiv)('task__header');
    var _elTaskFooter2 = (0, _htmlCreateElement.createDiv)('task__footer');
    var _elTaskTitle2 = (0, _htmlCreateElement.createDiv)('task__title');
    _elTaskTitle2.textContent = title;
    var _elTaskDescription2 = (0, _htmlCreateElement.createDiv)('task__description');
    _elTaskDescription2.textContent = body;
    var _elTaskUser2 = (0, _htmlCreateElement.createDiv)('task__user');
    _elTaskUser2.textContent = name;
    var _elTaskDateContainer2 = (0, _htmlCreateElement.createDiv)('task__date-container');
    var _elTaskTime2 = (0, _htmlCreateElement.createDiv)('task__time');
    _elTaskTime2.textContent = time;
    var _elTaskDate2 = (0, _htmlCreateElement.createDiv)('task__date');
    _elTaskDate2.textContent = day;
    _refs.taskListBodyTodo.append(_elTask2);
    _elTask2.append(_elTaskHeaer2, _elTaskBody2, _elTaskFooter2);
    _elTaskHeaer2.append(_elTaskBtnContainer2, _elTaskTitle2);
    _elTaskBtnContainer2.append(elTaskBtnEdit, _elTaskBtnDel);
    _elTaskBody2.append(_elTaskDescription2, elTaskBtnRelocate);
    _elTaskFooter2.append(_elTaskUser2, _elTaskDateContainer2);
    _elTaskDateContainer2.append(_elTaskTime2, _elTaskDate2);
  }
}

// создание новой карточки дел
},{"./refs.js":"js/refs.js","./htmlCreateElement.js":"js/htmlCreateElement.js"}],"js/getRandom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateUUID = generateUUID;
exports.randomCompleted = randomCompleted;
exports.randomDay = randomDay;
exports.randomTime = randomTime;
// рандомный статус
function randomCompleted() {
  var completedTodo = ['todo', 'done'];
  return completedTodo[Math.floor(Math.random() * completedTodo.length)];
}

// рандомный день
function randomDay(start, end) {
  var rDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return "".concat(('0' + rDate.getDate()).slice(-2), "-").concat(('0' + (rDate.getMonth() + 1)).slice(-2), "-").concat(rDate.getFullYear());
}

// рандомное время
function randomTime(start, end) {
  var rDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return "".concat(('0' + rDate.getHours()).slice(-2), ":").concat(('0' + rDate.getMinutes()).slice(-2), ":").concat(('0' + rDate.getSeconds()).slice(-2));
}
function generateUUID() {
  // Получаем текущее время в миллисекундах
  var d = new Date().getTime();
  // Если доступна производительность, то добавляем ее значение к времени
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now();
  }
  // Генерируем UUID в формате 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
}

// рандом статуса Todo, даты, времени
},{}],"js/createTodoObj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTodoObj = createTodoObj;
var _refs = require("./refs.js");
var _getData = require("./getData.js");
var _getRandom = require("./getRandom.js");
// получение переменных
// получить текущую дату и время
// рандом статуса Todo, даты, времени

function createTodoObj() {
  var userId = (0, _getRandom.generateUUID)();
  var todo = {
    todo: {
      id: (0, _getRandom.generateUUID)(),
      time: (0, _getData.getTime)(),
      day: (0, _getData.getDay)(),
      completed: 'todo',
      userId: userId,
      title: _refs.formInputTitle.value,
      body: _refs.formInputDescription.value
    },
    user: {
      id: userId,
      name: _refs.formSelectUser.value
    }
  };
  return todo;
}
;

//создать объект Todo
},{"./refs.js":"js/refs.js","./getData.js":"js/getData.js","./getRandom.js":"js/getRandom.js"}],"js/modalFormTodo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.pressCancel = pressCancel;
exports.pressConfirmAddNewTask = pressConfirmAddNewTask;
exports.pressConfirmEdit = pressConfirmEdit;
var _refs = require("./refs.js");
var _getData = require("./getData.js");
var _htmlCreateElement = require("./htmlCreateElement.js");
var _localStorage = require("./localStorage.js");
var _createTodoCard = require("./createTodoCard.js");
var _createTodoObj = require("./createTodoObj.js");
var _updateCounter = require("./updateCounter.js");
var _functionEvent = require("./functionEvent.js");
// получение переменных
// получить текущую дату и время
// создание элементов html
// запись-чтение данных localStorage
// создание новой карточки дел
//создать объект Todo
// обновление счетчиков Todos
// functionEvent

//вызов формы создания карточки дел
function addTodo() {
  _refs.formВtnConfirm.classList.add('form-add-todo__btn-confirm--add-new-task');
  _refs.formAddTodo.classList.toggle('form-add-todo--vis');
  _refs.formInputTitle.value = '';
  _refs.formInputDescription.value = '';
  _refs.formSelectUser.value = '';
}
;

//закрыть форму создания карточки дел
function pressCancel() {
  _refs.formAddTodo.classList.toggle('form-add-todo--vis');
  _refs.formInputDescription.classList.remove('invalid-control');
  _refs.formInputTitle.classList.remove('invalid-control');
  _refs.formSelectUser.classList.remove('invalid-control');
  _refs.formВtnConfirm.classList.remove('form-add-todo__btn-confirm--edit');
  _refs.formВtnConfirm.classList.remove('form-add-todo__btn-confirm--add-new-task');
  _refs.formAddTodo.removeAttribute('id');
}
;

//создать карточку дел
function pressConfirmAddNewTask(todosGetData) {
  //если обязательные для заполнения поля не содержат данных - сигнализировать
  _refs.controls.forEach(function (control) {
    if (control.classList.contains('required') && !control.value) {
      control.classList.add('invalid-control');
    }
  });
  //проверка обязательных для заполнения полей и вызов функции создания карточки
  if (_refs.formInputTitle.value && _refs.formInputDescription.value && _refs.formSelectUser.value) {
    _refs.formAddTodo.classList.toggle('form-add-todo--vis');
    _refs.formВtnConfirm.classList.remove('form-add-todo__btn-confirm--add-new-task');
    todosGetData = (0, _localStorage.getData)('todos');
    var todoObj = (0, _createTodoObj.createTodoObj)();
    (0, _createTodoCard.createTodoCard)(todoObj, _htmlCreateElement.createDiv, _htmlCreateElement.createButton, _getData.getDay, _getData.getTime);
    todosGetData.push(todoObj);
    (0, _localStorage.setData)('todos', todosGetData);
    // updateCounterCards(paramsUpdateCounterCards);
    _refs.formAddTodo.removeAttribute('id');
    (0, _updateCounter.updateCounter)();
    (0, _functionEvent.scrollСheck)();
  }
}
;

//сохранить отредактированную карточку дел
function pressConfirmEdit(todosGetData) {
  //если обязательные для заполнения поля не содержат данных - сигнализировать
  _refs.controls.forEach(function (control) {
    if (control.classList.contains('required') && !control.value) {
      control.classList.add('invalid-control');
    }
  });
  //проверка обязательных для заполнения полей и вызов функции создания карточки
  if (_refs.formInputTitle.value && _refs.formInputDescription.value && _refs.formSelectUser.value) {
    _refs.formAddTodo.classList.toggle('form-add-todo--vis');
    _refs.formВtnConfirm.classList.remove('form-add-todo__btn-confirm--edit');
    var taskListBodyTodo = document.querySelectorAll('.task--todo');
    var currentTask = null;
    for (var i = 0; i < taskListBodyTodo.length; i++) {
      if (taskListBodyTodo[i].id === _refs.formAddTodo.id) {
        currentTask = taskListBodyTodo[i];
      }
    }
    ;
    var taskTitleText = currentTask.querySelector('.task__title');
    var taskDescriptionText = currentTask.querySelector('.task__description');
    var taskUserText = currentTask.querySelector('.task__user');
    var taskTime = currentTask.querySelector('.task__time');
    var taskDay = currentTask.querySelector('.task__date');
    taskTitleText.textContent = _refs.formInputTitle.value;
    taskDescriptionText.textContent = _refs.formInputDescription.value;
    taskUserText.textContent = _refs.formSelectUser.value;
    taskTime.textContent = (0, _getData.getTime)();
    taskDay.textContent = (0, _getData.getDay)();
    for (var _i = 0; _i < todosGetData.length; _i++) {
      if (todosGetData[_i].todo.id === _refs.formAddTodo.id) {
        todosGetData[_i].todo.title = taskTitleText.textContent;
        todosGetData[_i].todo.body = taskDescriptionText.textContent;
        todosGetData[_i].todo.name = taskUserText.textContent;
        todosGetData[_i].todo.time = taskTime.textContent;
        todosGetData[_i].todo.day = taskDay.textContent;
        (0, _localStorage.setData)('todos', todosGetData);
      }
      ;
    }
    ;
    _refs.formAddTodo.removeAttribute('id');
    (0, _functionEvent.scrollСheck)();
  }
}
;

//модальное окно FormTodo
},{"./refs.js":"js/refs.js","./getData.js":"js/getData.js","./htmlCreateElement.js":"js/htmlCreateElement.js","./localStorage.js":"js/localStorage.js","./createTodoCard.js":"js/createTodoCard.js","./createTodoObj.js":"js/createTodoObj.js","./updateCounter.js":"js/updateCounter.js","./functionEvent.js":"js/functionEvent.js"}],"js/getTrelloData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTrelloData = getTrelloData;
var _localStorage = require("./localStorage.js");
var _getRandom = require("./getRandom.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; } // запись-чтение данных localStorage
// рандом статуса Todo, даты, времени
function getTrelloData() {
  return _getTrelloData.apply(this, arguments);
}
function _getTrelloData() {
  _getTrelloData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var fetchData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          fetchData = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(type) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", fetch("https://jsonplaceholder.typicode.com/".concat(type)).then(function (r) {
                      return r.json();
                    }));
                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function fetchData(_x) {
              return _ref.apply(this, arguments);
            };
          }();
          _context2.next = 3;
          return Promise.all(['users', 'posts'].map(fetchData)).then(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
              users = _ref3[0],
              posts = _ref3[1];
            var usersObj = Object.fromEntries(users.map(function (n) {
              return [n.id, n];
            }));
            return posts.map(function (n) {
              return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
                todo: n.id = (0, _getRandom.generateUUID)()
              }, "todo", n.time = (0, _getRandom.randomTime)(new Date(2020, 0, 1), new Date())), "todo", n.day = (0, _getRandom.randomDay)(new Date(2020, 0, 1), new Date())), "todo", n.completed = (0, _getRandom.randomCompleted)()), "todo", n), "user", usersObj[n.userId]);
            });
          }).then(function (todos) {
            return (0, _localStorage.setData)('todos', todos);
          });
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getTrelloData.apply(this, arguments);
} // получение данных с jsonplaceholder
},{"./localStorage.js":"js/localStorage.js","./getRandom.js":"js/getRandom.js"}],"js/addNameInForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNameInForm = addNameInForm;
var _refs = require("./refs.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// получение переменных

function addNameInForm(todosGetData) {
  var userArr = todosGetData.map(function (el) {
    return el.user.name;
  });
  var countUser = {};
  var _iterator = _createForOfIteratorHelper(userArr),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var user = _step.value;
      countUser[user] = countUser[user] ? countUser[user] + 1 : 1;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var result = Object.keys(countUser).filter(function (user) {
    return countUser[user] > 1;
  }).forEach(function (name) {
    var elOption = document.createElement('option');
    elOption.value = name;
    elOption.textContent = name;
    _refs.formSelectUser.append(elOption);
  });
  return result;
}

//добавить имена из загружаемых данных в форму
},{"./refs.js":"js/refs.js"}],"js/trackScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goTop = goTop;
exports.trackScroll = trackScroll;
var _refs = require("./refs.js");
// получение переменных

function trackScroll() {
  // вычисляем положение от верхушки страницы
  var scrolled = window.pageYOffset;
  // считаем высоту окна браузера
  var coords = document.documentElement.clientHeight;
  // если вышли за пределы первого окна
  if (scrolled > coords) {
    // кнопка появляется
    _refs.goTopBtn.classList.add("go-top--show");
  } else {
    // иначе исчезает
    _refs.goTopBtn.classList.remove("go-top--show");
  }
}
function goTop() {
  // пока не вернулись в начало страницы
  if (window.pageYOffset > 0) {
    // скроллим наверх
    window.scrollBy(0, -75); // второй аргумент - скорость
    setTimeout(goTop, 0); // входим в рекурсию
  }
}

//кнопка вверх
},{"./refs.js":"js/refs.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _refs = require("./refs.js");
var _functionEvent = require("./functionEvent.js");
var _clock = require("./clock.js");
var _getData = require("./getData.js");
var _updateCounter = require("./updateCounter.js");
var _htmlCreateElement = require("./htmlCreateElement.js");
var _modalFormTodo = require("./modalFormTodo.js");
var _getTrelloData = require("./getTrelloData.js");
var _localStorage = require("./localStorage.js");
var _createTodoCard = require("./createTodoCard.js");
var _addNameInForm = require("./addNameInForm.js");
var _trackScroll = require("./trackScroll.js");
var _createTodoObj = require("./createTodoObj.js");
var _getRandom = require("./getRandom.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; } // получение переменных
// functionEvent
// часы
// import { v4 as uuidv4 } from 'uuid'; // рандом id
// получить текущую дату и время
// обновление счетчиков Todos
// создание элементов html
//модальное окно FormTodo
// получение данных с jsonplaceholder
// запись-чтение данных localStorage
// создание новой карточки дел
//добавить имена из загружаемых данных в форму
//кнопка вверх
//создать объект Todo
// рандом статуса Todo, даты, времени

var runTrelloApplication = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var todosGetData, activeElement, activeElementId;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // часы
          (0, _clock.startTime)();

          // загрузаем данные в localStorage с сервера, если их нету
          if (!(!localStorage.length || !(0, _localStorage.getData)('todos')[0])) {
            _context.next = 4;
            break;
          }
          _context.next = 4;
          return (0, _getTrelloData.getTrelloData)();
        case 4:
          ;

          // получаем массив данных из localStorage
          _context.next = 7;
          return (0, _localStorage.getData)('todos');
        case 7:
          todosGetData = _context.sent;
          // загрузка имен юзеров в модальную форму добавления дел
          (0, _addNameInForm.addNameInForm)(todosGetData);

          // отрисовка карточек дел из localStorage
          _context.next = 11;
          return todosGetData.forEach(function (todo) {
            (0, _createTodoCard.createTodoCard)(todo);
          });
        case 11:
          // обновление счетчиков
          (0, _updateCounter.updateCounter)();
          (0, _functionEvent.scrollСheck)();

          // скролл возврата к началу страницы
          // обработчик скролл вверх
          window.addEventListener('scroll', function (event) {
            (0, _trackScroll.trackScroll)();
          });

          // вернуться в начало
          _refs.goTopBtn.addEventListener("click", _trackScroll.goTop);

          // модальное окно формы Todo
          _refs.trelloWrapper.addEventListener('click', function (event) {
            // удалить все карточки дел
            if (event.target.classList.contains('board-clear')) {
              (0, _functionEvent.boardClear)(_updateCounter.updateCounter);
            }
          });
          _refs.formAddTodo.addEventListener('click', function (event) {
            // убрать стили для проверки заполненного поля
            if (event.target.classList.contains('form-add-todo__input-title')) {
              event.target.closest('.form-add-todo__input-title').classList.remove('invalid-control');
            }
            if (event.target.classList.contains('form-add-todo__input-description')) {
              event.target.closest('.form-add-todo__input-description').classList.remove('invalid-control');
            }
            if (event.target.classList.contains('form-add-todo__user')) {
              event.target.closest('.form-add-todo__user').classList.remove('invalid-control');
            }
            // закрыть модальное окно создания/редактирования карточки
            if (event.target.classList.contains('form-add-todo__btn-cancel') || event.target.classList.contains('form-add-todo')) {
              (0, _modalFormTodo.pressCancel)();
            }
            // подтвердить и созать новую карточку
            if (event.target.classList.contains('form-add-todo__btn-confirm--add-new-task')) {
              (0, _modalFormTodo.pressConfirmAddNewTask)(todosGetData);
            }
            // подтвердить и сохранить редакрированные данные в карточку
            if (event.target.classList.contains('form-add-todo__btn-confirm--edit')) {
              (0, _modalFormTodo.pressConfirmEdit)(todosGetData);
            }
          });

          // события Drag'n'drop
          // элемент который перетаскиваем
          activeElement = null; // id элемента который перетаскиваем
          activeElementId = null; // срабатывает в начале операции перетаскивания элемента
          _refs.board.addEventListener('dragstart', function (event) {
            event.target.classList.add('active-element');
            activeElement = event.target;
            activeElementId = event.target.id;
          });

          // срабатывает, когда элемент перемещают над допустимой зоной для переноса
          _refs.board.addEventListener('dragover', function (event) {
            event.preventDefault();
            (0, _functionEvent.elementMovement)(activeElement);
          });

          // срабатывает, когда пользователь закончил перетаскивание элемента
          _refs.board.addEventListener('dragend', function (event) {
            event.target.classList.remove('active-element');
            if (event.target.closest('.task-list__body--todo')) {
              // перемещение в Todo
              if (event.target.classList.contains('task--in-progress')) {
                (0, _functionEvent.relocateProgressInTodo)(event.target);
                (0, _functionEvent.statusTaskСhange)(activeElementId, todosGetData, 'todo');
              } else if (event.target.classList.contains('task--done')) {
                (0, _functionEvent.relocateDoneInTodo)(event.target);
                (0, _functionEvent.statusTaskСhange)(activeElementId, todosGetData, 'todo');
              }
              // перемещение в InProgress
            } else if (event.target.closest('.task-list__body--in-progress')) {
              if (event.target.classList.contains('task--todo')) {
                (0, _functionEvent.relocateTodoInProgress)(event.target);
                (0, _functionEvent.statusTaskСhange)(activeElementId, todosGetData, 'inProgress');
              } else if (event.target.classList.contains('task--done')) {
                (0, _functionEvent.relocateDoneInProgress)(event.target);
                (0, _functionEvent.statusTaskСhange)(activeElementId, todosGetData, 'inProgress');
              }
              // перемещение в Done
            } else if (event.target.closest('.task-list__body--done')) {
              if (event.target.classList.contains('task--todo')) {
                (0, _functionEvent.relocateTodoInDone)(event.target);
                (0, _functionEvent.statusTaskСhange)(activeElementId, todosGetData, 'done');
              } else if (event.target.classList.contains('task--in-progress')) {
                (0, _functionEvent.relocateProgressInDone)(event.target);
                (0, _functionEvent.statusTaskСhange)(activeElementId, todosGetData, 'done');
              }
            }
            (0, _updateCounter.updateCounter)();
            (0, _functionEvent.scrollСheck)();
          });

          // запрет переноса в InProgress если дел 6 или больше
          _refs.board.addEventListener('dragenter', function (event) {
            event.preventDefault();
            if (event.target.closest('.task-list__body--in-progress')) {
              var lengthTaskInProgress = document.getElementsByClassName('task--in-progress').length;
              if (!activeElement.classList.contains('task--in-progress') && lengthTaskInProgress >= 6) {
                _refs.warning.classList.toggle('warning--vis');
                _refs.warningBtnConfirm.classList.add('warning__btn-confirm--none');
                _refs.warningText.textContent = 'Before you can add a new task, you must complete at least one current task!';
              }
            }
          });

          // события по клику в области board
          _refs.board.addEventListener('click', function (event) {
            // удаление карточки кнопкой DELETE
            if (event.target.classList.contains('task__btn--del')) {
              var task = event.target.closest('.task');
              // удаление дела из разметки
              task.remove();
              // удаление дела из массива дел и обновление localStorage
              todosGetData = (0, _localStorage.getData)('todos');
              var taskDel = todosGetData.filter(function (_ref2) {
                var id = _ref2.todo.id;
                return id !== task.id;
              });
              (0, _localStorage.setData)('todos', taskDel);
              (0, _updateCounter.updateCounter)();
              (0, _functionEvent.scrollСheck)();
            }
            // перемещение из Todo в InProgress
            if (event.target.classList.contains('task__btn--relocate')) {
              var lengthTaskInProgress = document.getElementsByClassName('task--in-progress').length;
              if (lengthTaskInProgress >= 6) {
                _refs.warning.classList.toggle('warning--vis');
                _refs.warningBtnConfirm.classList.add('warning__btn-confirm--none');
                _refs.warningText.textContent = 'Before you can add a new task, you must complete at least one current task!';
              } else {
                var _task = event.target.closest('.task');
                var taskId = _task.id;
                // клонирование карточки
                var cloneTask = _task.cloneNode(true);
                // удаление оригинальной карточки
                _task.remove();
                // перемещение склонированной карточки в новое место
                (0, _functionEvent.relocateTodoInProgress)(cloneTask);
                _refs.taskListBodyInProgress.prepend(cloneTask);
                // изменение статуса карточки
                (0, _functionEvent.statusTaskСhange)(taskId, todosGetData, 'inProgress');
                (0, _updateCounter.updateCounter)();
                (0, _functionEvent.scrollСheck)();
              }
            }
            // перемещение из InProgress в Todo
            if (event.target.classList.contains('task__btn--back')) {
              var _task2 = event.target.closest('.task');
              var _taskId = _task2.id;
              var _cloneTask = _task2.cloneNode(true);
              _task2.remove();
              (0, _functionEvent.relocateProgressInTodo)(_cloneTask);
              _refs.taskListBodyTodo.prepend(_cloneTask);
              (0, _functionEvent.statusTaskСhange)(_taskId, todosGetData, 'todo');
              (0, _updateCounter.updateCounter)();
              (0, _functionEvent.scrollСheck)();
            }
            // перемещение из InProgress в Done
            if (event.target.classList.contains('task__btn--complete')) {
              var _task3 = event.target.closest('.task');
              var _taskId2 = _task3.id;
              var _cloneTask2 = _task3.cloneNode(true);
              _task3.remove();
              (0, _functionEvent.relocateProgressInDone)(_cloneTask2);
              _refs.taskListBodyDone.prepend(_cloneTask2);
              (0, _functionEvent.statusTaskСhange)(_taskId2, todosGetData, 'done');
              (0, _updateCounter.updateCounter)();
              (0, _functionEvent.scrollСheck)();
            }
            // вызов окна подтверждения удаления всех карточек
            if (event.target.classList.contains('task-list__btn-del-all')) {
              _refs.warning.classList.toggle('warning--vis');
              _refs.warningText.textContent = 'Delete all done cards?';
            }
            // редакрирование Todo
            if (event.target.classList.contains('task__btn--edit')) {
              (0, _functionEvent.editTodo)(_refs.formAddTodo, _refs.formInputTitle, _refs.formInputDescription, _refs.formВtnConfirm, _refs.formSelectUser);
            }
            // добавить новый Todo
            if (event.target.classList.contains('task-list__btn-add-todo')) {
              (0, _modalFormTodo.addTodo)();
            }
            // показать/скрыть карточки
            if (event.target.classList.contains('task-list__btn-show-all--todo')) {
              (0, _functionEvent.showAllCards)(_refs.taskListBodyTodo);
            }
            if (event.target.classList.contains('task-list__btn-show-all--in-progress')) {
              (0, _functionEvent.showAllCards)(_refs.taskListBodyInProgress);
            }
            if (event.target.classList.contains('task-list__btn-show-all--done')) {
              (0, _functionEvent.showAllCards)(_refs.taskListBodyDone);
            }
          });

          // модальное окно Warning
          // подтвердить и удалить все карточки done
          _refs.warning.addEventListener('click', function (event) {
            if (event.target.classList.contains('warning__btn-confirm')) {
              _refs.warning.classList.toggle('warning--vis');
              var taskDoneAll = _refs.taskListBodyDone.querySelectorAll('.task--done');
              taskDoneAll.forEach(function (elem) {
                return elem.remove();
              });
              // удаление дела из массива дел и обновление localStorage
              var taskDoneDelAll = todosGetData.filter(function (_ref3) {
                var completed = _ref3.todo.completed;
                return completed !== 'done';
              });
              (0, _localStorage.setData)('todos', taskDoneDelAll);
              (0, _updateCounter.updateCounter)();
            }
            // отменить удаление всех карточек done
            if (event.target.classList.contains('warning') || event.target.classList.contains('warning__btn-cancel')) {
              _refs.warning.classList.toggle('warning--vis');
              _refs.warningBtnConfirm.classList.remove('warning__btn-confirm--none');
            }
          });
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function runTrelloApplication() {
    return _ref.apply(this, arguments);
  };
}();
runTrelloApplication();
},{"./refs.js":"js/refs.js","./functionEvent.js":"js/functionEvent.js","./clock.js":"js/clock.js","./getData.js":"js/getData.js","./updateCounter.js":"js/updateCounter.js","./htmlCreateElement.js":"js/htmlCreateElement.js","./modalFormTodo.js":"js/modalFormTodo.js","./getTrelloData.js":"js/getTrelloData.js","./localStorage.js":"js/localStorage.js","./createTodoCard.js":"js/createTodoCard.js","./addNameInForm.js":"js/addNameInForm.js","./trackScroll.js":"js/trackScroll.js","./createTodoObj.js":"js/createTodoObj.js","./getRandom.js":"js/getRandom.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51353" + '/');
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