"use strict";

const OPTIONS = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
}

const timerBody = document.querySelector('.timer__body')

const deadline = new Date('2023-07-26')

function formatDateToArr (dateAndTime) {
  const date = new Intl.DateTimeFormat("ru-RU", OPTIONS).format(dateAndTime)
    .split(',')[0]
    .split('.')
    .reverse()
  const time = new Intl.DateTimeFormat("ru-RU", OPTIONS).format(dateAndTime)
    .split(',')[1]
    .split(':')
  return {date, time}
}


function howManyLeft(deadline) {

  const [nowYear, nowMonth] = formatDateToArr(Date.now()).date
  const [deadlineYear, deadlineMonth] = formatDateToArr(deadline).date
  const nextMonth = new Date(Number(nowYear), Number(nowMonth), 1 )
  const [nowHour, nowMin, nowSec] = formatDateToArr(Date.now()).time

  return {
    years: deadlineYear - nowYear,
    months: deadlineMonth - nowMonth,
    days: Math.round((nextMonth - Date.now()) / 1000 / 3600 / 24),
    hour: 24 - nowHour,
    min: 60 - nowMin,
    sec: 60 - nowSec
  }
}

function timer() {
  const left = howManyLeft(deadline)
  let seconds;
  switch (true) {
    case left.sec < 5 && left.sec > 1:
      seconds = 'секунды';
      break;
    case left.sec === 1:
      seconds = 'секунда';
      break;
    default:
        seconds = 'секунд';
        break;
  }
  return `${left.months} месяцев ${left.days} дней ${left.hour} часов ${left.min} минут ${left.sec} ${seconds}`
}


const startTimer = setInterval(() => {
  timerBody.innerText = timer()
}, 1000)

if (deadline - Date.now() === 0) {
  clearInterval(startTimer)
}



