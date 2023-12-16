// рандомный статус
function randomCompleted() {
  const completedTodo = ['todo', 'inProgress', 'done'];
  return completedTodo[Math.floor(Math.random() * completedTodo.length)];
}

// // рандомная дата
// function randomDate(start, end) {
//   const rDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

//   return `${('0' + rDate.getHours()).slice(-2)}:${('0' + rDate.getMinutes()).slice(-2)}:${('0' + rDate.getSeconds()).slice(-2)}
// ${rDate.getFullYear()}-${('0' + (rDate.getMonth() + 1)).slice(-2)}-${('0' + rDate.getDate()).slice(-2)}`
// }

// рандомная дата
function randomDate(start, end) {
  const rDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return `${rDate.getFullYear()}-${('0' + (rDate.getMonth() + 1)).slice(-2)}-${('0' + rDate.getDate()).slice(-2)}`
}

// рандомное время
function randomDate(start, end) {
  const rDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return `${('0' + rDate.getHours()).slice(-2)}:${('0' + rDate.getMinutes()).slice(-2)}:${('0' + rDate.getSeconds()).slice(-2)}
${rDate.getFullYear()}-${('0' + (rDate.getMonth() + 1)).slice(-2)}-${('0' + rDate.getDate()).slice(-2)}`
}

// console.log(randomDate(new Date(2012, 0, 1), new Date()))

export { randomCompleted, randomDate } // рандом статуса Todo и даты