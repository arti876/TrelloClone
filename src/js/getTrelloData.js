function getTrelloData(uuidv4, randomCompleted, randomDate, setData) {
  const fetchData = (type) => fetch(`https://jsonplaceholder.typicode.com/${type}`).then(r => r.json());

  Promise.all(['users', 'posts'].map(fetchData))
    .then(([users, posts]) => {
      const usersObj = Object.fromEntries(users.map(n => [n.id, n]))
      return posts.map(n => ({
        id: uuidv4(),
        date: randomDate(new Date(2020, 0, 1), new Date()),
        completed: randomCompleted(),
        todo: n,
        user: usersObj[n.userId],
      }))
    })
    .then(todos => setData('todos', todos))
}

export { getTrelloData } // получение данных с jsonplaceholder