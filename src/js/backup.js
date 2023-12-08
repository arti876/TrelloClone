// // ------------------------------------------------------------------------------
// // Drag'n'drop

// const board = document.querySelector('.board');
// const taskListBody = document.querySelector('.task-list__body');
// // const taskListBody = document.querySelector('.task-list__body');
// // const trello = document.querySelector('.trello');

// board.addEventListener('dragstart', (event) => {
//   event.target.classList.add('selected');
// })

// board.addEventListener('dragend', (event) => {
//   event.target.classList.remove('selected');
// });

// board.addEventListener(`dragover`, (event) => {
//   // Разрешаем сбрасывать элементы в эту область
//   event.preventDefault();

//   // Находим перемещаемый элемент
//   const activeElement = board.querySelector(`.selected`);
//   // Находим элемент, над которым в данный момент находится курсор
//   const currentElement = event.target;
//   // Проверяем, что событие сработало:
//   // 1. не на том элементе, который мы перемещаем,
//   // 2. именно на элементе списка
//   const isMoveable = activeElement !== currentElement &&
//     currentElement.classList.contains(`task`);

//   // Если нет, прерываем выполнение функции
//   if (!isMoveable) {
//     return;
//   }

//   // Находим элемент, перед которым будем вставлять
//   const nextElement = (currentElement === activeElement.nextElementSibling) ?
//     currentElement.nextElementSibling :
//     currentElement;

//   // Вставляем activeElement перед nextElement
//   taskListBody.insertBefore(activeElement, nextElement);
// });




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



// // ------------------------------------------------------------------------------
// // Drag'n'drop

// const board = document.querySelector('.board');
// // const taskListBodyTodo = document.querySelector('.task-list__body--todo');
// const taskListBodyInProgress = document.querySelector('.task-list__body--in-progress');
// const taskListBodyDone = document.querySelector('.task-list__body--done');

// board.addEventListener('dragstart', (event) => {
//   event.target.classList.add('selected-drag');
//   event.dataTransfer.setData('id-drag', event.target.id);
// })

// board.addEventListener('dragend', (event) => {
//   event.target.classList.remove('selected-drag');
// });

// // срабатывает, когда элемент перемещают над допустимой зоной для переноса
// taskListBodyTodo.ondragover = allowDrop
// taskListBodyInProgress.ondragover = allowDrop
// taskListBodyDone.ondragover = allowDrop

// function allowDrop(event) {
//   event.preventDefault();
//   event.target.classList.add('selected-drop');
//   event.dataTransfer.setData('id-drag-drop', event.target.id);

//     // // Находим перемещаемый элемент
//     // const activeElement = board.querySelector(`.selected`);
//     // // Находим элемент, над которым в данный момент находится курсор
//     // const currentElement = event.target;
//     // // Проверяем, что событие сработало:
//     // // 1. не на том элементе, который мы перемещаем,
//     // // 2. именно на элементе списка
//     // const isMoveable = activeElement !== currentElement &&
//     //   currentElement.classList.contains(`task`);
  
//     // // Если нет, прерываем выполнение функции
//     // if (!isMoveable) {
//     //   return;
//     // }
  
//     // // Находим элемент, перед которым будем вставлять
//     // const nextElement = (currentElement === activeElement.nextElementSibling) ?
//     //   currentElement.nextElementSibling :
//     //   currentElement;
  
//     // // Вставляем activeElement перед nextElement
//     // taskListBodyDone.insertBefore(activeElement, nextElement);
// }

// // срабатывает после того, как перетаскиваемый элемент опустился на объект перетаскивания
// taskListBodyTodo.ondrop = drop;
// taskListBodyInProgress.ondrop = drop;
// taskListBodyDone.ondrop = drop;

// function drop(event) {
//   let itemIdDrag = event.dataTransfer.getData('id-drag');
//   let itemIdDrop = event.dataTransfer.getData('id-drop');
//   // console.log(itemIdDrag);
//   event.target.append(document.getElementById(itemIdDrag));
//   event.target.classList.remove('selected-drop');
//   // event.target.insertBefore(document.getElementById(itemIdDrag), itemIdDrop);
// }

// // срабатывает, когда элемент выходит из допустимой зоны для переноса
// taskListBodyTodo.ondragleave = leave;
// taskListBodyInProgress.ondragleave = leave;
// taskListBodyDone.ondragleave = leave;

// function leave(event){
//   event.target.classList.remove('selected-drop');
// }