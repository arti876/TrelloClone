function getTrelloData(uuidv4, randomCompleted, randomDay, randomTime, setData) {
  const fetchData = (type) => fetch(`https://jsonplaceholder.typicode.com/${type}`).then(r => r.json());

  Promise.all(['users', 'posts'].map(fetchData))
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
    .then(todos => setData('todos', todos))
}

export { getTrelloData } // получение данных с jsonplaceholder