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

export { updateCounter } // обновление счетчиков Todos