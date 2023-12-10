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
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector('.header__time').innerHTML = h + ':' + m + ':' + s;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  ;
  return i;
}

// вызов
startTime();

// ------------------------------------------------------------------------------
// создание элементов

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

// ------------------------------------------------------------------------------
// модальное окно формы Todo

var headerTime = document.querySelector('.header__time');
var taskListBodyTodo = document.querySelector('.task-list__body--todo');
var taskListBtnAddTodo = document.querySelector('.task-list__btn--add-todo');
var formAddTodo = document.querySelector('.form-add-todo');
var formInputTitle = document.querySelector('.form-add-todo__input-title');
var formInputDescription = document.querySelector('.form-add-todo__input-description');
var formВtnCancel = document.querySelector('.form-add-todo__btn-cancel');
var formВtnConfirm = document.querySelector('.form-add-todo__btn-confirm');
var formSelectUser = document.querySelector('.form-add-todo__user');
var controls = document.querySelectorAll('.form-control');
function addTodo() {
  formAddTodo.classList.toggle('form-add-todo--vis');
  formInputTitle.value = '';
  formInputDescription.value = '';
  formSelectUser.value = '';
}
;
function pressCancel() {
  formAddTodo.classList.toggle('form-add-todo--vis');
  formInputDescription.classList.remove('invalid-control');
  formInputTitle.classList.remove('invalid-control');
  formSelectUser.classList.remove('invalid-control');
}
;
function pressConfirm() {
  controls.forEach(function (control) {
    if (control.classList.contains('required') && !control.value) {
      control.classList.add('invalid-control');
    }
  });
  if (formInputTitle.value && formInputDescription.value && formSelectUser.value) {
    formAddTodo.classList.toggle('form-add-todo--vis');
    var elTask = createDiv('task task--todo');
    elTask.draggable = true; // Drag'n'drop ***
    elTask.id = Math.random().toString(36).slice(2);
    taskListBodyTodo.append(elTask);
    var elTaskHeaer = createDiv('task__header');
    var elTaskBody = createDiv('task__body');
    var elTaskFooter = createDiv('task__footer');
    elTask.append(elTaskHeaer, elTaskBody, elTaskFooter);
    var elTaskBtnContainer = createDiv('task__btn-container');
    var elTaskTitle = createDiv('task__title');
    elTaskTitle.textContent = formInputTitle.value;
    elTaskHeaer.append(elTaskBtnContainer, elTaskTitle);
    var elTaskBtnEdit = createButton('task__btn task__btn--edit', 'EDIT');
    var elTaskBtnDel = createButton('task__btn task__btn--del', 'DELETE');
    elTaskBtnContainer.append(elTaskBtnEdit, elTaskBtnDel);
    var elTaskDescription = createDiv('task__description');
    elTaskDescription.textContent = formInputDescription.value;
    var elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');
    elTaskBody.append(elTaskDescription, elTaskBtnRelocate);
    var elTaskUser = createDiv('task__user');
    elTaskUser.textContent = formSelectUser.value;
    var elTaskTime = createDiv('task__time');
    elTaskTime.textContent = headerTime.textContent;
    elTaskFooter.append(elTaskUser, elTaskTime);
  }
}
;
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
});

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
var activeElement = null;
// элемент над которым перетаскиваемый элемент
// let currentElement = null;
// элемент куда перетаскиваем
// let droppeZone = null;

var board = document.querySelector('.board');
var taskListBody = document.querySelector('.task-list__body');
var taskListBodyInProgress = document.querySelector('.task-list__body--in-progress');
var taskListBodyDone = document.querySelector('.task-list__body--done');

// срабатывает в начале операции перетаскивания элемента
board.addEventListener('dragstart', function (event) {
  event.target.classList.add('selected');
  activeElement = event.target;
});

// срабатывает, когда элемент перемещают над допустимой зоной для переноса
board.addEventListener('dragover', function (event) {
  event.preventDefault();
  // event.target.classList.add('selected-drop');
  // if (activeElement !== currentElement) {
  //   currentElement = event.target;
  // }
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
  }, 150);
});

// срабатывает, когда элемент выходит из допустимой зоны для переноса
board.addEventListener('dragleave', function (event) {
  // event.target.classList.remove('selected-drop');
  // currentElement = null;
});

// срабатывает, когда пользователь закончил перетаскивание элемента
board.addEventListener('dragend', function (event) {
  // activeElement = null;
  event.target.classList.remove('selected');
});
var TaskList = document.querySelector('.task-list');
// с помощью этого можно получить данные зоны куда перетаскиваем "event.target",
// значит сравнить ее с классом таск листа и в зависимости от совпадения
// задавать стили и удалять\добавлять элементы тому объекту
// который перетаскиваем
board.addEventListener('drop', function (event) {
  // применяем новые стили
  // if (event.target.classList.contains('.task-list__body--todo')) {
  //   activeElement.classList.remove('task--done')
  //   activeElement.classList.add('task--todo')
  // }
});
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51509" + '/');
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