Альбина Борикова - Trello
Павел Бритько - Pinterest
Никита Вагин - Pinterest
Александра Городницкая - Wildberries
Артем Данько - Pinterest
Артур Дроздов - Wildberries
Артём Ерёменко - Trello
Роман Качанов - Pinterest
Анастасия Колмычевская - Wildberries
Надежда Концева - Pinterest
Елизавета Котова - Trello
Анастасия Сергиеня - Trello
Игорь Сечинов - Wildberries
Кирилл Смирнов - Wildberries
Владислав Терешонок - Trello
Инна Хилько - Wildberries
Евгений Шейко - Pinterest
Ирина Юганова - Trello
Шаги для начала выполнения задания

Заходим в папку template, открываем файл нужного вам проекта
Создаём в своей ветке index.js
Копируем содержимое нужного файла из template в ваш index.js
Выполняем подготовительный этап с настройкой и установкой parcel
Выполняем задание
Полезные ссылки:

Как сделать Drag'n'drop https://learn.javascript.ru/mouse-drag-and-drop
Как создать часы https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
Скрипты async/defer https://learn.javascript.ru/script-async-defer

Создаем файл package.json
npm init -y

Устанавливаем Parcel
npm install parcel-bundler --save-dev

Создаем папку src

Создаем скрипт для запуска
"dev": "parcel ./src/index.html"

Запускаем проект!
npm run dev

Собираем финальный проект
"build": "parcel build ./src/index.html --no-source-maps"
npm run build

математический рандом
npm install uuid

import { v4 as uuidv4 } from 'uuid';
uuidv4();

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

import {
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
  warning,
  warningBtnConfirm,
  warningText,
  goTopBtn,
  trelloWrapper,
} from './refs.js'; // получение переменных
import {
  statusTaskСhange,
  relocateProgressInTodo,
  relocateTodoInProgress,
  relocateProgressInDone,
  relocateDoneInTodo,
  relocateDoneInProgress,
  relocateTodoInDone,
  boardClear,
  editTodo,
  elementMovement,
} from './functionEvent.js' // functionEvent
import { startTime, } from './clock.js'; // часы
import { v4 as uuidv4 } from 'uuid'; // рандом id
import { randomCompleted, randomDay, randomTime } from './getRandom.js' // рандом статуса Todo, даты, времени
import { getDay, getTime } from './getData.js' // получить текущую дату и время
import { updateCounter } from './updateCounter.js' // обновление счетчиков Todos
import { createDiv,createButton, } from './htmlCreateElement.js' // создание элементов html
import { addTodo, pressCancel, pressConfirmAddNewTask, pressConfirmEdit } from './modalFormTodo.js' //модальное окно FormTodo
import { getTrelloData } from './getTrelloData.js' // получение данных с jsonplaceholder
import { getData, setData } from './localStorage.js'// запись-чтение данных localStorage
import { createTodoCard } from './createTodoCard.js' // создание новой карточки дел
import { addNameInForm } from './addNameInForm.js' //добавить имена из загружаемых данных в форму
import { trackScroll, goTop } from './goTod.js' //кнопка вверх
import { createTodoObj } from './createTodoObj.js' //создать объект Todo