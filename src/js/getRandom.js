// рандомный статус
function randomCompleted() {
  const completedTodo = ['todo', 'inProgress', 'done'];
  return completedTodo[Math.floor(Math.random() * completedTodo.length)];
}

// рандомный день
function randomDay(start, end) {
  const rDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return `${('0' + rDate.getDate()).slice(-2)}-${('0' + (rDate.getMonth() + 1)).slice(-2)}-${rDate.getFullYear()}`
}

// рандомное время
function randomTime(start, end) {
  const rDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return `${('0' + rDate.getHours()).slice(-2)}:${('0' + rDate.getMinutes()).slice(-2)}:${('0' + rDate.getSeconds()).slice(-2)}`
}

// console.log(randomDay(new Date(2023, 0, 1), new Date()))
// console.log(randomTime(new Date(2023, 0, 1), new Date()))

export { randomCompleted, randomDay, randomTime } // рандом статуса Todo и даты