import {
  headerTime,
  taskListBodyTodo,
  taskListBtnAddTodo,
  formAddTodo,
  formInputTitle,
  formInputDescription,
  formВtnCancel,
  formВtnConfirm,
  formSelectUser,
  controls,
  board,
  taskListBody,
  taskListBodyInProgress,
  taskListBodyDone,
} from './refs.js'; // получение переменных
import {
  relocateProgressInTodo,
  relocateTodoInProgress,
  relocateProgressInDone,
  relocateDoneInTodo,
  relocateDoneInProgress,
  relocateTodoInDone,
  editTodo,
} from './DragAndDrop.js' // Drag'n'drop
import { startTime, } from './clock.js'; // часы
import { v4 as uuidv4 } from 'uuid'; // рандом id
import { randomCompleted, randomDay, randomTime } from './getRandom.js' // рандом статуса Todo и даты
import { getDay, getTime } from './getData.js' // получить текущую дату и время
import { updateCounter } from './updateCounter.js' // обновление счетчиков Todos
import { createDiv, createLabel, createButton, createInput } from './htmlCreateElement.js' // создание элементов html
import { addTodo, pressCancel, pressConfirm } from './modalFormTodo.js' //модальное окно FormTodo
import { createTodoObj } from './createTodoObj.js' //создать объект Todo
import { getTrelloData } from './getTrelloData.js' // получение данных с jsonplaceholder
import { getData, setData } from './localStorage.js'// запись-чтение данных localStorage
import { createTodoCard } from './createTodoCard.js' // создание новой карточки дел
import { addNameInForm } from './addNameInForm.js' //добавить имена из загружаемых данных в форму
import { trackScroll, goTop } from './goTod.js' //кнопка вверх

// ------------------------------------------------------------------------------
startTime();

// const run = async () => {

// if (!localStorage.length) {
// getTrelloData(uuidv4, randomCompleted, randomDay, randomTime, setData)
// }

// let todosGetData = getData('todos');

// return {
// todosGetData
//   }
// }

if (!localStorage.length) {
  getTrelloData(uuidv4, randomCompleted, randomDay, randomTime, setData)
}

let todosGetData = getData('todos');

document.addEventListener("DOMContentLoaded", function () {
  addNameInForm(todosGetData);

  todosGetData.forEach(todo => {
    createTodoCard(todo, createDiv, createButton, getDay, getTime);
  });

  updateCounter();
});



const runTrelloApplication = async () => {

  // const { todosGetData } = await run();

  // addNameInForm(todosGetData);

  // todosGetData.forEach(todo => {
  //   createTodoCard(todo, createDiv, createButton, getDay, getTime);
  // });

  // updateCounter();

  // addEventListener ------------------------------------------------------------------------------------
  // кнопка - скролл вверх -------------------------------------------------------------------------------

  const goTopBtn = document.querySelector(".go-top");
  // обработчик на скролл окна
  window.addEventListener('scroll', function (event) {
    trackScroll(goTopBtn);
  })
  // обработчик на нажатии
  goTopBtn.addEventListener("click", goTop);

  // модальное окно формы Todo ---------------------------------------------------------------------------

  function boardClear() {
    const allTask = document.querySelectorAll('.task');
    allTask.forEach(task => task.remove())
    updateCounter();
    localStorage.clear()
    // location. reload()
  }

  const boardClearBtn = document.querySelector('.board-clear');
  boardClearBtn.addEventListener('click', boardClear);

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

    if (event.target.classList.contains('form-add-todo__btn-cancel')) {
      pressCancel()
    }

    if (event.target.classList.contains('form-add-todo__btn-confirm')) {
      pressConfirm(todosGetData, createDiv, createButton)
    }
  })

  // события Drag'n'drop -------------------------------------------------------------------------

  // элемент который перетаскиваем
  let activeElement = null;

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

  // события по клику в области board -------------------------------------------------------

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
    // добавить новый Todo
    if (event.target.classList.contains('task-list__btn--add-todo')) {
      addTodo()
    }
  });

  //редакрирование todo
  function editTodo() {
    formAddTodo.classList.toggle('form-add-todo--vis');

    const idTask = event.target.closest('.task')
    const taskTitleText = idTask.querySelector('.task__title').textContent
    const taskDescriptionText = idTask.querySelector('.task__description').textContent
    const taskUserText = idTask.querySelector('.task__user').textContent

    formInputTitle.value = taskTitleText;
    formInputDescription.value = taskDescriptionText;
    formSelectUser.value = taskUserText;

    const currentTaskLocalStorage = todosGetData.filter(({ todo: { id } }) => id === idTask.id)

    currentTaskLocalStorage

    todos.splice(cardDel, 1);
    setName(todos);

    updateCounterCards(paramsUpdateCounterCards);
  };

}

runTrelloApplication()