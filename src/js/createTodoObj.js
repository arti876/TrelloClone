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
import { randomCompleted, randomDate } from './randomStatusTodo.js' // рандом статуса Todo и даты
import { getDate } from './getData.js' // получить текущую дату и время
import { updateCounter } from './updateCounter.js' // обновление счетчиков Todos
import { createDiv, createLabel, createButton, createInput } from './htmlCreateElement.js' // создание элементов html
import { addTodo, pressCancel, pressConfirm } from './modalFormTodo.js' //модальное окно FormTodo
import { getTrelloData } from './getTrelloData.js' // получение данных с jsonplaceholder
import { getData, setData } from './localStorage.js'// запись-чтение данных localStorage
import { createTodoCard } from './createTodoCard.js' // создание новой карточки дел
import { addNameInForm } from './addNameInForm.js' //добавить имена из загружаемых данных в форму

function createTodoObj() {
  const todo = {
    id: uuidv4(),
    date: headerTime.textContent,
    completed: 'todo',
    todo: {
      // userId: user.id,
      title: formInputTitle.value,
      body: formInputDescription.value,
    },
    user: {
      // id: todo.userId,
      name: formSelectUser.value,
    },
  }

  return todo
};

export { createTodoObj } //создать объект Todo

