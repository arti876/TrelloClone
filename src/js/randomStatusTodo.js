const completedTodo = ['todo', 'inProgress', 'done']
const randomCompleted = completedTodo[Math.floor(Math.random() * completedTodo.length)];

export { randomCompleted } // рандом статуса Todo