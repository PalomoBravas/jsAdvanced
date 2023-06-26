'use strict';

const timerBody = document.querySelector('.timer__body')
const pluralRules = new Intl.PluralRules('ru');
const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24
const PLURAL = {
  month: ['месяцев', 'месяца', 'месяц'],
  day: ['дней', 'дня', 'день'],
  hour: ['часов', 'часа', 'час'],
  minute: ['минут', 'минуты', 'минута'],
  second: ['секунд', 'секунды', 'секунда'],
}

function howManyLeft() {
  const now = new Date()
  const nowMonth = now.getMonth() + 1
  const nextMonth = new Date(Number(now.getFullYear()), nowMonth, 1 )
  console.log(nextMonth.getDate())
  return {
    month: 12 - nowMonth,
    day: Math.ceil((nextMonth - now) / DAY_IN_MILLISECONDS) - 1 ,
    hour: 24 - now.getHours(),
    minute: 60 - now.getMinutes(),
    second: 60 - now.getSeconds()
  }
}

function getTimerText(obj) {
  const result = []
  for (const [key, value] of Object.entries(obj)) {
    const denotationArr = PLURAL[key]
    const grammaticalNumber = pluralRules.select(Number(value));
    switch (grammaticalNumber) {
      case 'one':
        result.push(`${value} ${denotationArr[2]}`);
        break;
      case 'few':
        result.push(`${value} ${denotationArr[1]}`);
        break;
      default:
        result.push(`${value} ${denotationArr[0]}`);
    }
  }
  return result.join(' ')
}

function timer() {
  const diff = howManyLeft()
  return getTimerText(diff)
}

const startTimer = setInterval(() => {
  timerBody.innerText = timer()
}, 1000)

if (new Date('2024-01-01') - Date.now() === 0) {
  clearInterval(startTimer)
}
