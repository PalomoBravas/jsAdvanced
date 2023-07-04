'use strict';

const timerBody = document.querySelector('.timer__body')
const pluralRules = new Intl.PluralRules('ru');

const SECONDS_IN_MINUTE = 60;
const MOUTH_IN_YEAR = 12;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

const newYear = new Date(`${new Date().getFullYear() + 1}-01-01`);
const PLURAL = {
  month: ['месяцев', 'месяца', 'месяц'],
  day: ['дней', 'дня', 'день'],
  hour: ['часов', 'часа', 'час'],
  minute: ['минут', 'минуты', 'минута'],
  second: ['секунд', 'секунды', 'секунда'],
}

function getDatesDiff() {
  const dateNow = new Date()
  const currentMonthDaysAmount = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0 ).getDate();
  return {
    month: MOUTH_IN_YEAR - (dateNow.getMonth() + 1),
    day: currentMonthDaysAmount - (dateNow.getDate() + 1),
    hour: HOURS_IN_DAY - dateNow.getHours(),
    minute: MINUTES_IN_HOUR - dateNow.getMinutes(),
    second: SECONDS_IN_MINUTE - dateNow.getSeconds(),
  }
}

function pluralizeText(count, arr) {
    const grammaticalNumber = pluralRules.select(Number(count));
    switch (grammaticalNumber) {
      case 'one':
        return `${count} ${arr[2]}`;
      case 'few':
        return `${count} ${arr[1]}`;
      case 'many':
        return `${count} ${arr[0]}`
      default:
        throw new Error('Error in pluralizeTimerText');
    }
}

function getTimerText() {
  const diff = getDatesDiff()
  const timerText = []
  for (const key in diff) {
    timerText.push(pluralizeText(diff[key], PLURAL[key]))
  }
  return timerText.join(' ')
}

const runNewYearTimer = setInterval(() => {
  timerBody.innerText = getTimerText()
}, 1000);

if (newYear - Date.now() <= 0) {
  clearInterval(runNewYearTimer);
}
