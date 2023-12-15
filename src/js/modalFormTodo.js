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
import { createTodoObj } from './createTodoObj.js' //создать объект Todo
import { getTrelloData } from './getTrelloData.js' // получение данных с jsonplaceholder
import { getData, setData } from './localStorage.js'// запись-чтение данных localStorage
import { createTodoCard } from './createTodoCard.js' // создание новой карточки дел

//вызов формы создания карточки дел
function addTodo() {
  formAddTodo.classList.toggle('form-add-todo--vis');
  formInputTitle.value = '';
  formInputDescription.value = '';
  formSelectUser.value = '';
};

//закрыть форму создания карточки дел
function pressCancel() {
  formAddTodo.classList.toggle('form-add-todo--vis');
  formInputDescription.classList.remove('invalid-control');
  formInputTitle.classList.remove('invalid-control');
  formSelectUser.classList.remove('invalid-control');
};

//создать карточку дел
function pressConfirm(todosGetData, createDiv, createButton) {
  //если обязательные для заполнения поля не содержат данных - сигнализировать
  controls.forEach(control => {
    if (control.classList.contains('required') && !control.value) {
      control.classList.add('invalid-control');
    }
  });
  //проверка обязательных для заполнения полей и вызов функции создания карточки
  if (formInputTitle.value && formInputDescription.value && formSelectUser.value) {
    formAddTodo.classList.toggle('form-add-todo--vis');
    
    const todoObj = createTodoObj();
    createTodoCard(todoObj, createDiv, createButton);
    todosGetData.push(todoObj);
    setName(todosGetData);
    // updateCounterCards(paramsUpdateCounterCards);

    // createTodoCard(todosGetData, createDiv, createButton);
  }
};

export { addTodo, pressCancel, pressConfirm } //модальное окно FormTodo