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
import { randomCompleted } from './randomStatusTodo.js' // рандом статуса Todo
import { getDate } from './getData.js' // получить текущую дату и время
import { updateCounter } from './updateCounter.js' // обновление счетчиков Todos
import { createDiv, createLabel, createButton, createInput } from './htmlCreateElement.js' // создание элементов html
import { addTodo, pressCancel, pressConfirm } from './modalFormTodo.js' //модальное окно FormTodo
import { getTodoObj } from './createTodoObj.js' //создать объект Todo
import { getTrelloData } from './getTrelloData.js' // получение данных с jsonplaceholder
import { getData, setData } from './localStorage.js'// запись-чтение данных localStorage

// ------------------------------------------------------------------------------
startTime();
updateCounter();

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


  // todos.forEach(todo => {
  //   createTodoCard(todo);
  // });

  // addEventListener ---------------------------------------------------------------------------------------------------
  // модальное окно формы Todo ------------------------------------------------------------------------------------------



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

  // Drag'n'drop ------------------------------------------------------------------------------------------

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

  // Board ------------------------------------------------------------------------------------------

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
  
}

runTrelloApplication()