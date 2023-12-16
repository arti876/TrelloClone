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
exports.taskListBtnAddTodo = exports.taskListBodyTodo = exports.taskListBodyInProgress = exports.taskListBodyDone = exports.taskListBody = exports.headerTime = exports.formВtnConfirm = exports.formВtnCancel = exports.formSelectUser = exports.formInputTitle = exports.formInputDescription = exports.formAddTodo = exports.controls = exports.board = void 0;
var headerTime = exports.headerTime = document.querySelector('.header__time');
var taskListBodyTodo = exports.taskListBodyTodo = document.querySelector('.task-list__body--todo');
var taskListBodyInProgress = exports.taskListBodyInProgress = document.querySelector('.task-list__body--in-progress');
var taskListBodyDone = exports.taskListBodyDone = document.querySelector('.task-list__body--done');
var taskListBtnAddTodo = exports.taskListBtnAddTodo = document.querySelector('.task-list__btn--add-todo');
var formAddTodo = exports.formAddTodo = document.querySelector('.form-add-todo');
var formInputTitle = exports.formInputTitle = document.querySelector('.form-add-todo__input-title');
var formInputDescription = exports.formInputDescription = document.querySelector('.form-add-todo__input-description');
var formВtnCancel = exports.formВtnCancel = document.querySelector('.form-add-todo__btn-cancel');
var formВtnConfirm = exports.formВtnConfirm = document.querySelector('.form-add-todo__btn-confirm');
var formSelectUser = exports.formSelectUser = document.querySelector('.form-add-todo__user');
var controls = exports.controls = document.querySelectorAll('.form-control');
var board = exports.board = document.querySelector('.board');
var taskListBody = exports.taskListBody = document.querySelector('.task-list__body');
},{}],"js/updateCounter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCounter = updateCounter;
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
},{}],"js/DragAndDrop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editTodo = editTodo;
exports.relocateDoneInProgress = relocateDoneInProgress;
exports.relocateDoneInTodo = relocateDoneInTodo;
exports.relocateProgressInDone = relocateProgressInDone;
exports.relocateProgressInTodo = relocateProgressInTodo;
exports.relocateTodoInDone = relocateTodoInDone;
exports.relocateTodoInProgress = relocateTodoInProgress;
var _updateCounter = require("./updateCounter.js");
var _htmlCreateElement = require("./htmlCreateElement.js");
var _refs = require("./refs.js");
// обновление счетчиков Todos
// создание элементов html

// получение переменных

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

function relocateProgressInTodo(elem) {
  elem.classList = 'task task--todo';
  elem.querySelector('.task__btn--back').textContent = 'EDIT';
  elem.querySelector('.task__btn--back').classList = 'task__btn task__btn--edit';
  elem.querySelector('.task__btn--complete').textContent = 'DELETE';
  elem.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
  var elTaskBtnRelocate = (0, _htmlCreateElement.createButton)('task__btn task__btn--relocate', '>');
  elem.querySelector('.task__body').append(elTaskBtnRelocate);
  (0, _updateCounter.updateCounter)();
}
function relocateTodoInProgress(elem) {
  elem.classList = 'task task--in-progress';
  elem.querySelector('.task__btn--relocate').remove();
  elem.querySelector('.task__btn--edit').textContent = 'BACK';
  elem.querySelector('.task__btn--edit').classList = 'task__btn task__btn--back';
  elem.querySelector('.task__btn--del').textContent = 'COMPLETE';
  elem.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
  (0, _updateCounter.updateCounter)();
}
function relocateProgressInDone(elem) {
  elem.classList = 'task task--done';
  // elem.classList.remove('task--in-progress');
  elem.querySelector('.task__btn--back').remove();
  elem.querySelector('.task__btn--complete').textContent = 'DELETE';
  elem.querySelector('.task__btn--complete').classList = 'task__btn task__btn--del';
  (0, _updateCounter.updateCounter)();
}
function relocateDoneInTodo(elem) {
  elem.classList = 'task task--todo';
  var elTaskBtnRelocate = (0, _htmlCreateElement.createButton)('task__btn task__btn--relocate', '>');
  elem.querySelector('.task__body').append(elTaskBtnRelocate);
  var elTaskBtnEdit = (0, _htmlCreateElement.createButton)('task__btn task__btn--edit', 'EDIT');
  elem.querySelector('.task__btn-container').prepend(elTaskBtnEdit);
  (0, _updateCounter.updateCounter)();
}
function relocateDoneInProgress(elem) {
  elem.classList = 'task task--in-progress';
  var elTaskBtnBack = (0, _htmlCreateElement.createButton)('task__btn task__btn--back', 'BACK');
  elem.querySelector('.task__btn-container').prepend(elTaskBtnBack);
  elem.querySelector('.task__btn--del').textContent = 'COMPLETE';
  elem.querySelector('.task__btn--del').classList = 'task__btn task__btn--complete';
  (0, _updateCounter.updateCounter)();
}
function relocateTodoInDone(elem) {
  elem.classList = 'task task--done';
  elem.querySelector('.task__btn--relocate').remove();
  elem.querySelector('.task__btn--edit').remove();
  (0, _updateCounter.updateCounter)();
}
function editTodo() {
  var idTask = event.target.closest('.task');
  var taskTitleText = idTask.querySelector('.task__title').textContent;
  var taskDescriptionText = idTask.querySelector('.task__description').textContent;
  var taskUserText = idTask.querySelector('.task__user').textContent;
  _refs.formAddTodo.classList.toggle('form-add-todo--vis');
  _refs.formInputTitle.value = taskTitleText;
  _refs.formInputDescription.value = taskDescriptionText;
  _refs.formSelectUser.value = taskUserText;
}
;

// Drag'n'drop
},{"./updateCounter.js":"js/updateCounter.js","./htmlCreateElement.js":"js/htmlCreateElement.js","./refs.js":"js/refs.js"}],"js/clock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startTime = startTime;
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

// часы
},{}],"../node_modules/uuid/dist/esm-browser/rng.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}
},{}],"../node_modules/uuid/dist/esm-browser/regex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
},{}],"../node_modules/uuid/dist/esm-browser/validate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regex = _interopRequireDefault(require("./regex.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}
var _default = exports.default = validate;
},{"./regex.js":"../node_modules/uuid/dist/esm-browser/regex.js"}],"../node_modules/uuid/dist/esm-browser/stringify.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.unsafeStringify = unsafeStringify;
var _validate = _interopRequireDefault(require("./validate.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
var _default = exports.default = stringify;
},{"./validate.js":"../node_modules/uuid/dist/esm-browser/validate.js"}],"../node_modules/uuid/dist/esm-browser/v1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _rng = _interopRequireDefault(require("./rng.js"));
var _stringify = require("./stringify.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;
let _clockseq; // Previous uuid creation time

let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.

  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval

  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested

  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }
  return buf || (0, _stringify.unsafeStringify)(b);
}
var _default = exports.default = v1;
},{"./rng.js":"../node_modules/uuid/dist/esm-browser/rng.js","./stringify.js":"../node_modules/uuid/dist/esm-browser/stringify.js"}],"../node_modules/uuid/dist/esm-browser/parse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _validate = _interopRequireDefault(require("./validate.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }
  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}
var _default = exports.default = parse;
},{"./validate.js":"../node_modules/uuid/dist/esm-browser/validate.js"}],"../node_modules/uuid/dist/esm-browser/v35.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URL = exports.DNS = void 0;
exports.default = v35;
var _stringify = require("./stringify.js");
var _parse = _interopRequireDefault(require("./parse.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
const DNS = exports.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = exports.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }
    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`

    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return (0, _stringify.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)

  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support

  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
},{"./stringify.js":"../node_modules/uuid/dist/esm-browser/stringify.js","./parse.js":"../node_modules/uuid/dist/esm-browser/parse.js"}],"../node_modules/uuid/dist/esm-browser/md5.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);
    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */

function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';
  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }
  return output;
}
/**
 * Calculate output length with padding and bit length
 */

function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */

function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */

function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));
  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }
  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */

function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */

function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */

function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
var _default = exports.default = md5;
},{}],"../node_modules/uuid/dist/esm-browser/v3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _v = _interopRequireDefault(require("./v35.js"));
var _md = _interopRequireDefault(require("./md5.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = exports.default = v3;
},{"./v35.js":"../node_modules/uuid/dist/esm-browser/v35.js","./md5.js":"../node_modules/uuid/dist/esm-browser/md5.js"}],"../node_modules/uuid/dist/esm-browser/native.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default = exports.default = {
  randomUUID
};
},{}],"../node_modules/uuid/dist/esm-browser/v4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _native = _interopRequireDefault(require("./native.js"));
var _rng = _interopRequireDefault(require("./rng.js"));
var _stringify = require("./stringify.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0, _stringify.unsafeStringify)(rnds);
}
var _default = exports.default = v4;
},{"./native.js":"../node_modules/uuid/dist/esm-browser/native.js","./rng.js":"../node_modules/uuid/dist/esm-browser/rng.js","./stringify.js":"../node_modules/uuid/dist/esm-browser/stringify.js"}],"../node_modules/uuid/dist/esm-browser/sha1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
}
function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}
function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];
    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);
  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);
    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }
    M[i] = arr;
  }
  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);
    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }
    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];
    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }
  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}
var _default = exports.default = sha1;
},{}],"../node_modules/uuid/dist/esm-browser/v5.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _v = _interopRequireDefault(require("./v35.js"));
var _sha = _interopRequireDefault(require("./sha1.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = exports.default = v5;
},{"./v35.js":"../node_modules/uuid/dist/esm-browser/v35.js","./sha1.js":"../node_modules/uuid/dist/esm-browser/sha1.js"}],"../node_modules/uuid/dist/esm-browser/nil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = '00000000-0000-0000-0000-000000000000';
},{}],"../node_modules/uuid/dist/esm-browser/version.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _validate = _interopRequireDefault(require("./validate.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }
  return parseInt(uuid.slice(14, 15), 16);
}
var _default = exports.default = version;
},{"./validate.js":"../node_modules/uuid/dist/esm-browser/validate.js"}],"../node_modules/uuid/dist/esm-browser/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NIL", {
  enumerable: true,
  get: function () {
    return _nil.default;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function () {
    return _parse.default;
  }
});
Object.defineProperty(exports, "stringify", {
  enumerable: true,
  get: function () {
    return _stringify.default;
  }
});
Object.defineProperty(exports, "v1", {
  enumerable: true,
  get: function () {
    return _v.default;
  }
});
Object.defineProperty(exports, "v3", {
  enumerable: true,
  get: function () {
    return _v2.default;
  }
});
Object.defineProperty(exports, "v4", {
  enumerable: true,
  get: function () {
    return _v3.default;
  }
});
Object.defineProperty(exports, "v5", {
  enumerable: true,
  get: function () {
    return _v4.default;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function () {
    return _version.default;
  }
});
var _v = _interopRequireDefault(require("./v1.js"));
var _v2 = _interopRequireDefault(require("./v3.js"));
var _v3 = _interopRequireDefault(require("./v4.js"));
var _v4 = _interopRequireDefault(require("./v5.js"));
var _nil = _interopRequireDefault(require("./nil.js"));
var _version = _interopRequireDefault(require("./version.js"));
var _validate = _interopRequireDefault(require("./validate.js"));
var _stringify = _interopRequireDefault(require("./stringify.js"));
var _parse = _interopRequireDefault(require("./parse.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./v1.js":"../node_modules/uuid/dist/esm-browser/v1.js","./v3.js":"../node_modules/uuid/dist/esm-browser/v3.js","./v4.js":"../node_modules/uuid/dist/esm-browser/v4.js","./v5.js":"../node_modules/uuid/dist/esm-browser/v5.js","./nil.js":"../node_modules/uuid/dist/esm-browser/nil.js","./version.js":"../node_modules/uuid/dist/esm-browser/version.js","./validate.js":"../node_modules/uuid/dist/esm-browser/validate.js","./stringify.js":"../node_modules/uuid/dist/esm-browser/stringify.js","./parse.js":"../node_modules/uuid/dist/esm-browser/parse.js"}],"js/getRandom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomCompleted = randomCompleted;
exports.randomDay = randomDay;
exports.randomTime = randomTime;
// рандомный статус
function randomCompleted() {
  var completedTodo = ['todo', 'inProgress', 'done'];
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

// console.log(randomDay(new Date(2023, 0, 1), new Date()))
// console.log(randomTime(new Date(2023, 0, 1), new Date()))

// рандом статуса Todo и даты
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
  return "".concat(Day, "-").concat(Month, "-").concat(Year);
}
function getTime() {
  var data = new Date();
  var Hour = ('0' + data.getHours()).slice(-2);
  var Minutes = ('0' + data.getMinutes()).slice(-2);
  var Seconds = ('0' + data.getSeconds()).slice(-2);
  return "".concat(Hour, ":").concat(Minutes, ":").concat(Seconds);
}

// получить текущую дату и время
},{}],"js/getTrelloData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTrelloData = getTrelloData;
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
function getTrelloData(uuidv4, randomCompleted, randomDay, randomTime, setData) {
  var fetchData = function fetchData(type) {
    return fetch("https://jsonplaceholder.typicode.com/".concat(type)).then(function (r) {
      return r.json();
    });
  };
  Promise.all(['users', 'posts'].map(fetchData)).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      users = _ref2[0],
      posts = _ref2[1];
    var usersObj = Object.fromEntries(users.map(function (n) {
      return [n.id, n];
    }));
    return posts.map(function (n) {
      return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        todo: n.id = uuidv4()
      }, "todo", n.time = randomTime(new Date(2020, 0, 1), new Date())), "todo", n.day = randomDay(new Date(2020, 0, 1), new Date())), "todo", n.completed = randomCompleted()), "todo", n), "user", usersObj[n.userId]);
    });
  }).then(function (todos) {
    return setData('todos', todos);
  });
}

// получение данных с jsonplaceholder
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
},{}],"js/createTodoCard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTodoCard = createTodoCard;
var _refs = require("./refs.js");
var _localStorage = require("./localStorage.js");
// let [{id, todo: { id: idTodo, title, body}, user: { id: idUser, name, username }, completed }] = todosGetData

// получение переменных
// запись-чтение данных localStorage

function createTodoCard(todosGetData, createDiv, createButton, getDay, getTime) {
  var _todosGetData$todo = todosGetData.todo,
    id = _todosGetData$todo.id,
    title = _todosGetData$todo.title,
    body = _todosGetData$todo.body,
    time = _todosGetData$todo.time,
    day = _todosGetData$todo.day,
    completed = _todosGetData$todo.completed,
    name = todosGetData.user.name;
  if (completed === 'inProgress') {
    var elTask = createDiv('task task--in-progress');
    elTask.draggable = true; // Drag'n'drop ON
    elTask.id = id;
    var elTaskBtnContainer = createDiv('task__btn-container');
    var elTaskBody = createDiv('task__body');
    var elTaskHeaer = createDiv('task__header');
    var elTaskFooter = createDiv('task__footer');
    var elTaskTitle = createDiv('task__title');
    elTaskTitle.textContent = title;
    var elTaskDescription = createDiv('task__description');
    elTaskDescription.textContent = body;
    var elTaskUser = createDiv('task__user');
    elTaskUser.textContent = name;
    var elTaskDateContainer = createDiv('task__date-container');
    var elTaskTime = createDiv('task__time');
    elTaskTime.textContent = time;
    var elTaskDate = createDiv('task__date');
    elTaskDate.textContent = day;
    var elTaskBtnBack = createButton('task__btn task__btn--back', 'BACK');
    var elTaskBtnComplete = createButton('task__btn task__btn--complete', 'COMPLETE');
    _refs.taskListBodyInProgress.append(elTask);
    elTask.append(elTaskHeaer, elTaskBody, elTaskFooter);
    elTaskHeaer.append(elTaskBtnContainer, elTaskTitle);
    elTaskBtnContainer.append(elTaskBtnBack, elTaskBtnComplete);
    elTaskFooter.append(elTaskUser, elTaskDateContainer);
    elTaskDateContainer.append(elTaskTime, elTaskDate);
  } else if (completed === 'done') {
    var _elTask = createDiv('task task--done');
    _elTask.draggable = true; // Drag'n'drop ON
    _elTask.id = id;
    var elTaskBtnDel = createButton('task__btn task__btn--del', 'DELETE');
    var _elTaskBtnContainer = createDiv('task__btn-container');
    var _elTaskBody = createDiv('task__body');
    var _elTaskHeaer = createDiv('task__header');
    var _elTaskFooter = createDiv('task__footer');
    var _elTaskTitle = createDiv('task__title');
    _elTaskTitle.textContent = title;
    var _elTaskDescription = createDiv('task__description');
    _elTaskDescription.textContent = body;
    var _elTaskUser = createDiv('task__user');
    _elTaskUser.textContent = name;
    var _elTaskDateContainer = createDiv('task__date-container');
    var _elTaskTime = createDiv('task__time');
    _elTaskTime.textContent = time;
    var _elTaskDate = createDiv('task__date');
    _elTaskDate.textContent = day;
    _refs.taskListBodyDone.append(_elTask);
    _elTask.append(_elTaskHeaer, _elTaskBody, _elTaskFooter);
    _elTaskHeaer.append(_elTaskBtnContainer, _elTaskTitle);
    _elTaskBtnContainer.append(elTaskBtnDel);
    _elTaskFooter.append(_elTaskUser, _elTaskDateContainer);
    _elTaskDateContainer.append(_elTaskTime, _elTaskDate);
  } else {
    var _elTask2 = createDiv('task task--todo');
    _elTask2.draggable = true; // Drag'n'drop ON
    _elTask2.id = id;
    var elTaskBtnEdit = createButton('task__btn task__btn--edit', 'EDIT');
    var _elTaskBtnDel = createButton('task__btn task__btn--del', 'DELETE');
    var elTaskBtnRelocate = createButton('task__btn task__btn--relocate', '>');
    var _elTaskBtnContainer2 = createDiv('task__btn-container');
    var _elTaskBody2 = createDiv('task__body');
    var _elTaskHeaer2 = createDiv('task__header');
    var _elTaskFooter2 = createDiv('task__footer');
    var _elTaskTitle2 = createDiv('task__title');
    _elTaskTitle2.textContent = _refs.formInputTitle.value;
    var _elTaskDescription2 = createDiv('task__description');
    _elTaskDescription2.textContent = _refs.formInputDescription.value;
    var _elTaskUser2 = createDiv('task__user');
    _elTaskUser2.textContent = _refs.formSelectUser.value;
    var _elTaskDateContainer2 = createDiv('task__date-container');
    var _elTaskTime2 = createDiv('task__time');
    _elTaskTime2.textContent = getTime();
    var _elTaskDate2 = createDiv('task__date');
    _elTaskDate2.textContent = getDay();
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
},{"./refs.js":"js/refs.js","./localStorage.js":"js/localStorage.js"}],"js/addNameInForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNameInForm = addNameInForm;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function addNameInForm(todosGetData) {
  var formAddTodoUser = document.querySelector('.form-add-todo__user');
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
    formAddTodoUser.append(elOption);
  });
}

//добавить имена из загружаемых данных в форму
},{}],"js/createTodoObj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTodoObj = createTodoObj;
var _refs = require("./refs.js");
var _DragAndDrop = require("./DragAndDrop.js");
var _clock = require("./clock.js");
var _uuid = require("uuid");
var _getRandom = require("./getRandom.js");
var _getData = require("./getData.js");
var _updateCounter = require("./updateCounter.js");
var _htmlCreateElement = require("./htmlCreateElement.js");
var _modalFormTodo = require("./modalFormTodo.js");
var _getTrelloData = require("./getTrelloData.js");
var _localStorage = require("./localStorage.js");
var _createTodoCard = require("./createTodoCard.js");
var _addNameInForm = require("./addNameInForm.js");
// получение переменных

// Drag'n'drop
// часы
// рандом id
// рандом статуса Todo и даты
// получить текущую дату и время
// обновление счетчиков Todos
// создание элементов html
//модальное окно FormTodo
// получение данных с jsonplaceholder
// запись-чтение данных localStorage
// создание новой карточки дел
//добавить имена из загружаемых данных в форму

function createTodoObj() {
  var userId = (0, _uuid.v4)();
  var todo = {
    todo: {
      id: (0, _uuid.v4)(),
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
},{"./refs.js":"js/refs.js","./DragAndDrop.js":"js/DragAndDrop.js","./clock.js":"js/clock.js","uuid":"../node_modules/uuid/dist/esm-browser/index.js","./getRandom.js":"js/getRandom.js","./getData.js":"js/getData.js","./updateCounter.js":"js/updateCounter.js","./htmlCreateElement.js":"js/htmlCreateElement.js","./modalFormTodo.js":"js/modalFormTodo.js","./getTrelloData.js":"js/getTrelloData.js","./localStorage.js":"js/localStorage.js","./createTodoCard.js":"js/createTodoCard.js","./addNameInForm.js":"js/addNameInForm.js"}],"js/modalFormTodo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.pressCancel = pressCancel;
exports.pressConfirm = pressConfirm;
var _refs = require("./refs.js");
var _DragAndDrop = require("./DragAndDrop.js");
var _clock = require("./clock.js");
var _uuid = require("uuid");
var _getRandom = require("./getRandom.js");
var _getData = require("./getData.js");
var _updateCounter = require("./updateCounter.js");
var _htmlCreateElement = require("./htmlCreateElement.js");
var _createTodoObj = require("./createTodoObj.js");
var _getTrelloData = require("./getTrelloData.js");
var _localStorage = require("./localStorage.js");
var _createTodoCard = require("./createTodoCard.js");
// получение переменных

// Drag'n'drop
// часы
// рандом id
// рандом статуса Todo
// получить текущую дату и время
// обновление счетчиков Todos
// создание элементов html
//создать объект Todo
// получение данных с jsonplaceholder
// запись-чтение данных localStorage
// создание новой карточки дел

//вызов формы создания карточки дел
function addTodo() {
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
}
;

//создать карточку дел
function pressConfirm() {
  //если обязательные для заполнения поля не содержат данных - сигнализировать
  _refs.controls.forEach(function (control) {
    if (control.classList.contains('required') && !control.value) {
      control.classList.add('invalid-control');
    }
  });
  //проверка обязательных для заполнения полей и вызов функции создания карточки
  if (_refs.formInputTitle.value && _refs.formInputDescription.value && _refs.formSelectUser.value) {
    _refs.formAddTodo.classList.toggle('form-add-todo--vis');
    var todosGetData = (0, _localStorage.getData)('todos');
    var todoObj = (0, _createTodoObj.createTodoObj)();
    (0, _createTodoCard.createTodoCard)(todoObj, _htmlCreateElement.createDiv, _htmlCreateElement.createButton, _getData.getDay, _getData.getTime);
    todosGetData.push(todoObj);
    (0, _localStorage.setData)('todos', todosGetData);
    // updateCounterCards(paramsUpdateCounterCards);
  }
}
;

//модальное окно FormTodo
},{"./refs.js":"js/refs.js","./DragAndDrop.js":"js/DragAndDrop.js","./clock.js":"js/clock.js","uuid":"../node_modules/uuid/dist/esm-browser/index.js","./getRandom.js":"js/getRandom.js","./getData.js":"js/getData.js","./updateCounter.js":"js/updateCounter.js","./htmlCreateElement.js":"js/htmlCreateElement.js","./createTodoObj.js":"js/createTodoObj.js","./getTrelloData.js":"js/getTrelloData.js","./localStorage.js":"js/localStorage.js","./createTodoCard.js":"js/createTodoCard.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _refs = require("./refs.js");
var _DragAndDrop = require("./DragAndDrop.js");
var _clock = require("./clock.js");
var _uuid = require("uuid");
var _getRandom = require("./getRandom.js");
var _getData = require("./getData.js");
var _updateCounter = require("./updateCounter.js");
var _htmlCreateElement = require("./htmlCreateElement.js");
var _modalFormTodo = require("./modalFormTodo.js");
var _createTodoObj = require("./createTodoObj.js");
var _getTrelloData = require("./getTrelloData.js");
var _localStorage = require("./localStorage.js");
var _createTodoCard = require("./createTodoCard.js");
var _addNameInForm = require("./addNameInForm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; } // получение переменных
// Drag'n'drop
// часы
// рандом id
// рандом статуса Todo и даты
// получить текущую дату и время
// обновление счетчиков Todos
// создание элементов html
//модальное окно FormTodo
//создать объект Todo
// получение данных с jsonplaceholder
// запись-чтение данных localStorage
// создание новой карточки дел
//добавить имена из загружаемых данных в форму

// ------------------------------------------------------------------------------

if (!localStorage.length) {
  (0, _getTrelloData.getTrelloData)(_uuid.v4, _getRandom.randomCompleted, _getRandom.randomDay, _getRandom.randomTime, _localStorage.setData);
  console.log("Data in localStorage is loaded");
}
var todosGetData = (0, _localStorage.getData)('todos');
(0, _clock.startTime)();
(0, _updateCounter.updateCounter)();
(0, _addNameInForm.addNameInForm)(todosGetData); // ПОФИКСИТЬ - ЗАГРУЗКА ДАННЫХ ПРОИСХОДИТ НЕ СРАЗУ

var runTrelloApplication = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var activeElement;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // todosGetData.forEach(todo => {
          //   createTodoCard(todo, createDiv, createButton);
          // });

          // addEventListener ------------------------------------------------------------------------------------
          // модальное окно формы Todo ---------------------------------------------------------------------------

          _refs.formAddTodo.addEventListener('click', function (event) {
            if (event.target.classList.contains('form-add-todo__input-title')) {
              event.target.closest('.form-add-todo__input-title').classList.remove('invalid-control');
            }
            if (event.target.classList.contains('form-add-todo__input-description')) {
              event.target.closest('.form-add-todo__input-description').classList.remove('invalid-control');
            }
            if (event.target.classList.contains('form-add-todo__user')) {
              event.target.closest('.form-add-todo__user').classList.remove('invalid-control');
            }
            if (event.target.classList.contains('form-add-todo__btn-cancel')) {
              (0, _modalFormTodo.pressCancel)();
            }
            if (event.target.classList.contains('form-add-todo__btn-confirm')) {
              (0, _modalFormTodo.pressConfirm)(todosGetData, _htmlCreateElement.createDiv, _htmlCreateElement.createButton);
            }
          });

          // события Drag'n'drop -------------------------------------------------------------------------

          // элемент который перетаскиваем
          activeElement = null; // срабатывает в начале операции перетаскивания элемента
          _refs.board.addEventListener('dragstart', function (event) {
            event.target.classList.add('active-element');
            activeElement = event.target;
          });

          // срабатывает, когда элемент перемещают над допустимой зоной для переноса
          _refs.board.addEventListener('dragover', function (event) {
            event.preventDefault();
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
          });

          // срабатывает, когда пользователь закончил перетаскивание элемента
          _refs.board.addEventListener('dragend', function (event) {
            event.target.classList.remove('active-element');
            // перемещение в TodoList
            if (event.target.closest('.task-list__body--todo')) {
              if (event.target.classList.contains('task--in-progress')) {
                (0, _DragAndDrop.relocateProgressInTodo)(event.target);
              } else if (event.target.classList.contains('task--done')) {
                (0, _DragAndDrop.relocateDoneInTodo)(event.target);
              }
              // перемещение в InProgress
            } else if (event.target.closest('.task-list__body--in-progress')) {
              if (event.target.classList.contains('task--todo')) {
                (0, _DragAndDrop.relocateTodoInProgress)(event.target);
              } else if (event.target.classList.contains('task--done')) {
                (0, _DragAndDrop.relocateDoneInProgress)(event.target);
              }
              // перемещение в Done
            } else if (event.target.closest('.task-list__body--done')) {
              if (event.target.classList.contains('task--todo')) {
                (0, _DragAndDrop.relocateTodoInDone)(event.target);
              } else if (event.target.classList.contains('task--in-progress')) {
                (0, _DragAndDrop.relocateProgressInDone)(event.target);
              }
            }
          });

          // события по клику в области board -------------------------------------------------------

          _refs.board.addEventListener('click', function (event) {
            // удаление карточки кнопкой DELETE
            if (event.target.classList.contains('task__btn--del')) {
              var task = event.target.closest('.task');
              task.remove();
              (0, _updateCounter.updateCounter)();
            }
            // перемещение из Todo в InProgress
            if (event.target.classList.contains('task__btn--relocate')) {
              var _task = event.target.closest('.task');
              var cloneTask = _task.cloneNode(true);
              _task.remove();
              (0, _DragAndDrop.relocateTodoInProgress)(cloneTask);
              document.querySelector('.task-list__body--in-progress').prepend(cloneTask);
            }
            // перемещение из InProgress в Todo
            if (event.target.classList.contains('task__btn--back')) {
              var _task2 = event.target.closest('.task');
              var _cloneTask = _task2.cloneNode(true);
              _task2.remove();
              (0, _DragAndDrop.relocateProgressInTodo)(_cloneTask);
              document.querySelector('.task-list__body--todo').prepend(_cloneTask);
            }
            // перемещение из InProgress в Done
            if (event.target.classList.contains('task__btn--complete')) {
              var _task3 = event.target.closest('.task');
              var _cloneTask2 = _task3.cloneNode(true);
              _task3.remove();
              (0, _DragAndDrop.relocateProgressInDone)(_cloneTask2);
              document.querySelector('.task-list__body--done').prepend(_cloneTask2);
            }
            // удаление всех карточек
            if (event.target.classList.contains('task-list__btn--del-all')) {
              _refs.taskListBodyDone.querySelectorAll('.task--done').forEach(function (elem) {
                return elem.remove();
              });
              (0, _updateCounter.updateCounter)();
            }
            // редакрирование Todo
            if (event.target.classList.contains('task__btn--edit')) {
              (0, _DragAndDrop.editTodo)();
            }
            // добавить новый Todo
            if (event.target.classList.contains('task-list__btn--add-todo')) {
              (0, _modalFormTodo.addTodo)();
            }
            // очистить localStorage
            if (event.target.classList.contains('task-list__header--done')) {
              localStorage.clear();
            }
          });
        case 6:
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
},{"./refs.js":"js/refs.js","./DragAndDrop.js":"js/DragAndDrop.js","./clock.js":"js/clock.js","uuid":"../node_modules/uuid/dist/esm-browser/index.js","./getRandom.js":"js/getRandom.js","./getData.js":"js/getData.js","./updateCounter.js":"js/updateCounter.js","./htmlCreateElement.js":"js/htmlCreateElement.js","./modalFormTodo.js":"js/modalFormTodo.js","./createTodoObj.js":"js/createTodoObj.js","./getTrelloData.js":"js/getTrelloData.js","./localStorage.js":"js/localStorage.js","./createTodoCard.js":"js/createTodoCard.js","./addNameInForm.js":"js/addNameInForm.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59749" + '/');
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