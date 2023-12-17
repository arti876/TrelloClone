import { v4 as uuidv4 } from 'uuid'; // рандом id
import { randomCompleted, randomDay, randomTime } from './getRandom.js' // рандом статуса Todo, даты, времени
import { setData } from './localStorage.js'// запись-чтение данных localStorage

async function getTrelloData() {
  const fetchData = async (type) => fetch(`https://jsonplaceholder.typicode.com/${type}`).then(r => r.json());

  await Promise.all(['users', 'posts'].map(fetchData))
    .then(([users, posts]) => {
      const usersObj = Object.fromEntries(users.map(n => [n.id, n]))
      return posts.map(n => ({
        todo: n.id = uuidv4(),
        todo: n.time = randomTime(new Date(2020, 0, 1), new Date()),
        todo: n.day = randomDay(new Date(2020, 0, 1), new Date()),
        todo: n.completed = randomCompleted(),
        todo: n,
        user: usersObj[n.userId],
      }))
    })
    .then(todos => {
      // todos.length = 10;
      return setData('todos', todos)
    })
}

export { getTrelloData } // получение данных с jsonplaceholder