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

// formAddTodo.addEventListener('click', function (event) {
//   const controls = this.querySelectorAll('.form-control');
//   let isValid = true;

//   controls.forEach(control => {
//     if (control.classList.contains('required') && control.value) {
//       control.classList.remove('invalid-control');
//       isValid = true;
//     }
//   });

//   if (event.target.classList.contains('form-add-todo__btn-confirm')) {
//     controls.forEach(control => {
//       // control.classList.remove('invalid-control');
//       if (control.classList.contains('required') && !control.value) {
//         control.classList.add('invalid-control');
//         isValid = false;
//       }
//     });

//     if (isValid) {
//       pressConfirm()
//     }
//   }
// });