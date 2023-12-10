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
let draggedItem = null;
// элемент куда перетаскиваем
let droppeZone = null;
// элемент над которым перетаскиваемый элемент
let droppedItem = null;


const board = document.querySelector('.board');
const taskListBody = document.querySelector('.task-list__body');
// const taskListBodyTodo = document.querySelector('.task-list__body--todo');
const taskListBodyInProgress = document.querySelector('.task-list__body--in-progress');
const taskListBodyDone = document.querySelector('.task-list__body--done');

// срабатывает в начале операции перетаскивания элемента
board.addEventListener('dragstart', (event) => {
  event.target.classList.add('selected');
  draggedItem = event.target;
})

// срабатывает, когда пользователь закончил перетаскивание элемента
board.addEventListener('dragend', (event) => {
  event.target.classList.remove('selected');
  draggedItem = null;
});

// когда элемент будет перенесен на заданную зону (цель для переноса)
board.addEventListener('dragenter', (event) => {
  event.preventDefault();
  if (draggedItem !== droppedItem) {
    droppedItem = event.target;
  }
});

// срабатывает, когда элемент выходит из допустимой зоны для переноса
board.addEventListener('dragleave', (event) => {
  event.target.classList.remove('selected-drop');
  // droppeZone = null;
  // droppedItem = null;
});

// срабатывает, когда элемент перемещают над допустимой зоной для переноса
board.addEventListener('dragover', (event) => {
  event.preventDefault();
  event.target.classList.add('selected-drop');
  droppeZone = event.target;
});



const TaskList = document.querySelector('.task-list')
// с помощью этого можно получить данные зоны куда перетаскиваем "event.target",
// значит сравнить ее с классом таск листа и в зависимости от совпадения
// задавать стили и удалять\добавлять элементы тому объекту
// который перетаскиваем
board.addEventListener('drop', (event) => {
  event.target.classList.remove('selected-drop');

  // Находим перемещаемый элемент
  const activeElement = draggedItem;
  // Находим элемент, над которым в данный момент находится курсор
  const currentElement = droppeZone;
  // Проверяем, что событие сработало:
  // 1. не на том элементе, который мы перемещаем,
  // 2. именно на элементе списка
  const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains(`task`);

  // Если нет, прерываем выполнение функции
  // if (!isMoveable) {
  //   return;
  // }

  // Находим элемент, перед которым будем вставлять
  const nextElement = (currentElement === activeElement.nextElementSibling) ?
    currentElement.nextElementSibling :
    currentElement;

    

  // Вставляем activeElement
  if (!currentElement.classList.contains(`task`)) {
    event.target.append(activeElement);
  }

  if (currentElement.classList.contains(`task-list__body`)) {
    event.target.append(activeElement);
  } else if (currentElement.classList.contains(`task`)) {
    event.target.closest('.task-list__body').insertBefore(activeElement, nextElement);
  }
});