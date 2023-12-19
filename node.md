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

// Редактируем скрипт build и добавляем --public-url /имя_репозитория/
// Редактрируем в package.json поле "homepage": "https://ваше_имя.github.io/имя_репозитория"
// Устанавливаем пакет npm install gh-pages
// Добавляем npm-скрипты
// "deploy": "gh-pages -d dist"
// "predeploy": "npm run build"