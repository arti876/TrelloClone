function getDate() {
  const data = new Date();
  const Year = data.getFullYear();
  const Month = data.getMonth();
  const Day = data.getDate();

  return `${Day}-${Month}-${Year}`
}

function getTime() {
  const data = new Date();
  const Hour = data.getHours();
  const Minutes = data.getMinutes();
  const Seconds = data.getSeconds();

  return `${Hour}:${Minutes}:${Seconds}`
}

export { getDate, getTime } // получить текущую дату и время