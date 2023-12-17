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
  statusTaskСhange,
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
import { addTodo, pressCancel, pressConfirmAddNewTask, pressConfirmEdit } from './modalFormTodo.js' //модальное окно FormTodo
import { createTodoObj } from './createTodoObj.js' //создать объект Todo
import { getTrelloData } from './getTrelloData.js' // получение данных с jsonplaceholder
import { getData, setData } from './localStorage.js'// запись-чтение данных localStorage
import { createTodoCard } from './createTodoCard.js' // создание новой карточки дел
import { addNameInForm } from './addNameInForm.js' //добавить имена из загружаемых данных в форму
import { trackScroll, goTop } from './goTod.js' //кнопка вверх


// ------------------------------------------------------------------------------
const warning = document.querySelector('.warning');
const warningBtnConfirm = document.querySelector('.warning__btn-confirm');
const warningText = document.querySelector('.warning__text');

startTime();

if (!localStorage.length || !getData('todos')[0]) {
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

  // очистить все даные
  function boardClear() {
    const allTask = document.querySelectorAll('.task');
    allTask.forEach(task => task.remove())
    updateCounter();
    localStorage.clear()
  }

  const boardClearBtn = document.querySelector('.board-clear');
  boardClearBtn.addEventListener('click', boardClear);

  formAddTodo.addEventListener('click', function (event) {
    // убрать стиль для проверки заполненного поля
    if (event.target.classList.contains('form-add-todo__input-title')) {
      event.target.closest('.form-add-todo__input-title').classList.remove('invalid-control');
    }
    // убрать стиль для проверки заполненного поля
    if (event.target.classList.contains('form-add-todo__input-description')) {
      event.target.closest('.form-add-todo__input-description').classList.remove('invalid-control');
    }
    // убрать стиль для проверки заполненного поля
    if (event.target.classList.contains('form-add-todo__user')) {
      event.target.closest('.form-add-todo__user').classList.remove('invalid-control');
    }
    // закрыть модальное окно создания/редактирования карточки
    if (event.target.classList.contains('form-add-todo__btn-cancel')) {
      pressCancel()
    }
    // подтвердить и созать новую карточку
    if (event.target.classList.contains('form-add-todo__btn-confirm--add-new-task')) {
      pressConfirmAddNewTask(todosGetData, createDiv, createButton)
    }
    // подтвердить и сохранить редакрированные данные в карточку
    if (event.target.classList.contains('form-add-todo__btn-confirm--edit')) {
      pressConfirmEdit()
    }
  })

  // события Drag'n'drop -------------------------------------------------------------------------

  // элемент который перетаскиваем
  let activeElement = null;
  let activeElementId = null;

  // срабатывает в начале операции перетаскивания элемента
  board.addEventListener('dragstart', (event) => {
    event.target.classList.add('active-element');
    activeElement = event.target;
    activeElementId = event.target.id
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
    if (event.target.closest('.task-list__body--todo')) {
      // перемещение в Todo
      if (event.target.classList.contains('task--in-progress')) {
        relocateProgressInTodo(event.target, getDay, getTime);
        statusTaskСhange(activeElementId, todosGetData, 'todo', getDay, getTime);
        updateCounter();
      } else if (event.target.classList.contains('task--done')) {
        relocateDoneInTodo(event.target, getDay, getTime);
        statusTaskСhange(activeElementId, todosGetData, 'todo', getDay, getTime);
        updateCounter();
      }
      // перемещение в InProgress
    } else if (event.target.closest('.task-list__body--in-progress')) {
      if (event.target.classList.contains('task--todo')) {
        relocateTodoInProgress(event.target, getDay, getTime);
        statusTaskСhange(activeElementId, todosGetData, 'inProgress', getDay, getTime);
        updateCounter();
      } else if (event.target.classList.contains('task--done')) {
        relocateDoneInProgress(event.target, getDay, getTime);
        statusTaskСhange(activeElementId, todosGetData, 'inProgress', getDay, getTime);
        updateCounter();
      }
      // перемещение в Done
    } else if (event.target.closest('.task-list__body--done')) {
      if (event.target.classList.contains('task--todo')) {
        relocateTodoInDone(event.target, getDay, getTime);
        statusTaskСhange(activeElementId, todosGetData, 'done', getDay, getTime);
        updateCounter();
      } else if (event.target.classList.contains('task--in-progress')) {
        relocateProgressInDone(event.target, getDay, getTime);
        statusTaskСhange(activeElementId, todosGetData, 'done', getDay, getTime);
        updateCounter();
      }
    }
  });

  // запрет переноса в InProgress если дел 6 или больше
  board.addEventListener('dragenter', (event) => {
    event.preventDefault();
    if (event.target.closest('.task-list__body--in-progress')) {
      const lengthTaskInProgress = document.getElementsByClassName('task--in-progress').length
      if (lengthTaskInProgress >= 6) {
        warning.classList.toggle('warning--vis');
        warningBtnConfirm.classList.add('warning__btn-confirm--none');
        warningText.textContent = 'Before you can add a new task, you must complete at least one current task!';
      }
    }
  })

  // события по клику в области board -------------------------------------------------------

  board.addEventListener('click', function (event) {
    // удаление карточки кнопкой DELETE
    if (event.target.classList.contains('task__btn--del')) {
      const task = event.target.closest('.task');
      // удаление дела из разметки
      task.remove();
      // удаление дела из массива дел и обновление localStorage
      const taskDel = todosGetData.filter(({ todo: { id } }) => id !== task.id);
      setData('todos', taskDel);
      // обновление счетчиков
      updateCounter();
    }
    // перемещение из Todo в InProgress
    if (event.target.classList.contains('task__btn--relocate')) {
      const lengthTaskInProgress = document.getElementsByClassName('task--in-progress').length
      if (lengthTaskInProgress >= 6) {
        warning.classList.toggle('warning--vis');
        warningBtnConfirm.classList.add('warning__btn-confirm--none');
        warningText.textContent = 'Before you can add a new task, you must complete at least one current task!';
      } else {
        const task = event.target.closest('.task');
        const taskId = task.id;
        // клонирование карточки
        const cloneTask = task.cloneNode(true);
        // удаление оригинальной карточки
        task.remove();
        // перемещение склонированной карточки в новое место
        relocateTodoInProgress(cloneTask, getDay, getTime)
        document.querySelector('.task-list__body--in-progress').prepend(cloneTask);
        // изменение статуса карточки
        statusTaskСhange(taskId, todosGetData, 'inProgress', getDay, getTime)
        // обновление счетчиков
        updateCounter();
      }
    }
    // перемещение из InProgress в Todo
    if (event.target.classList.contains('task__btn--back')) {
      const task = event.target.closest('.task');
      const taskId = task.id;
      const cloneTask = task.cloneNode(true);
      task.remove();
      relocateProgressInTodo(cloneTask, getDay, getTime);
      document.querySelector('.task-list__body--todo').prepend(cloneTask);
      // изменение статуса карточки
      statusTaskСhange(taskId, todosGetData, 'todo', getDay, getTime)
      // обновление счетчиков
      updateCounter();
    }
    // перемещение из InProgress в Done
    if (event.target.classList.contains('task__btn--complete')) {
      const task = event.target.closest('.task');
      const taskId = task.id;
      const cloneTask = task.cloneNode(true);
      task.remove();
      relocateProgressInDone(cloneTask, getDay, getTime)
      document.querySelector('.task-list__body--done').prepend(cloneTask);
      // изменение статуса карточки
      statusTaskСhange(taskId, todosGetData, 'done', getDay, getTime)
      // обновление счетчиков
      updateCounter();
    }
    // вызов окна подтверждения удаления всех карточек
    if (event.target.classList.contains('task-list__btn--del-all')) {
      warning.classList.toggle('warning--vis');
      warningText.textContent = 'Delete all done cards?';
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
    // const formВtnConfirm = document.querySelector('.form-add-todo__btn-confirm');
    const idTask = event.target.closest('.task')
    const taskTitleText = idTask.querySelector('.task__title').textContent
    const taskDescriptionText = idTask.querySelector('.task__description').textContent
    const taskUserText = idTask.querySelector('.task__user').textContent

    formAddTodo.id = idTask.id;
    formВtnConfirm.classList.add('form-add-todo__btn-confirm--edit')
    formAddTodo.classList.toggle('form-add-todo--vis');

    formInputTitle.value = taskTitleText;
    formInputDescription.value = taskDescriptionText;
    formSelectUser.value = taskUserText;
  };

  // модальное окно Warning ---------------------------------------------------------------------------

  // подтвердить и удалить все карточки done
  warning.addEventListener('click', function (event) {
    if (event.target.classList.contains('warning__btn-confirm')) {
      warning.classList.toggle('warning--vis');
      const taskDoneAll = taskListBodyDone.querySelectorAll('.task--done');
      taskDoneAll.forEach(elem => elem.remove());
      // удаление дела из массива дел и обновление localStorage
      const taskDoneDelAll = todosGetData.filter(({ todo: { completed } }) => completed !== 'done');
      setData('todos', taskDoneDelAll);
      // обновление счетчиков
      updateCounter();
    }
    // отменить удаление всех карточек done
    if (event.target.classList.contains('warning__btn-cancel')) {
      warning.classList.toggle('warning--vis');
      warningBtnConfirm.classList.remove('warning__btn-confirm--none');
    }
  })
}

runTrelloApplication()