function getTrelloData(uuidv4, randomCompleted, setData) {
  const fetchData = (type) => fetch(`https://jsonplaceholder.typicode.com/${type}`).then(r => r.json());

  Promise.all(['users', 'posts'].map(fetchData))
    .then(([users, posts]) => {
      const usersObj = Object.fromEntries(users.map(n => [n.id, n]))
      return posts.map(n => ({
        id: uuidv4(),
        todo: n,
        user: usersObj[n.userId],
        completed: randomCompleted,
      }))
    })
    .then(todos => setData('todos', todos))
}

export { getTrelloData } // получение данных с jsonplaceholder