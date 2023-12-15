function getDate() {
  const data = new Date();
  const Year = data.getFullYear();
  const Month = data.getMonth();
  const Day = data.getDate();
  const Hour = data.getHours();
  const Minutes = data.getMinutes();
  const Seconds = data.getSeconds();

  return `Time: ${Hour}:${Minutes}:${Seconds}
Data: ${Day}.${Month}.${Year}`
}

export { getDate } // получить текущую дату и время