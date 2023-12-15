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
import { createDiv, createLabel, createButton, createInput } from './htmlCreateElement.js' // создание элементов html

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
function pressConfirm(createTodoCard) {
  //если обязательные для заполнения поля не содержат данных - сигнализировать
  controls.forEach(control => {
    if (control.classList.contains('required') && !control.value) {
      control.classList.add('invalid-control');
    }
  });
  //проверка обязательных для заполнения полей и вызов функции создания карточки
  if (formInputTitle.value && formInputDescription.value && formSelectUser.value) {
    formAddTodo.classList.toggle('form-add-todo--vis');
    createTodoCard(createDiv, createButton)
  }
};

export { addTodo, pressCancel, pressConfirm } //модальное окно FormTodo