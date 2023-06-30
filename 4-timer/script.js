'use strict';

const timerBody = document.querySelector('.timer__body')
const timerBody2 = document.querySelector('.timer__body-2')
const pluralRules = new Intl.PluralRules('ru');
const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MONTH = 60 * 60 * 24 * 30;
const SECONDS_IN_DAY = 60 * 60 * 24;
const SECONDS_IN_HOUR = 60 * 60;
const SECONDS_IN_MINUTE = 60;
const MOUTH_IN_YEAR = 12;
const DAY_IN_MONTH = 30;
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

function getDatesDiff_1() {
  const datesDiffInSeconds = (newYear - new Date()) / MILLISECONDS_IN_SECOND
  return {
    month: Math.floor(datesDiffInSeconds / SECONDS_IN_MONTH),
    day: Math.floor(datesDiffInSeconds / SECONDS_IN_DAY) % DAY_IN_MONTH,
    hour: Math.floor(datesDiffInSeconds / SECONDS_IN_HOUR) % HOURS_IN_DAY,
    minute: Math.floor(datesDiffInSeconds / SECONDS_IN_MINUTE) % MINUTES_IN_HOUR,
    second: Math.floor(datesDiffInSeconds) % SECONDS_IN_MINUTE,
  }
}

//На мой взгляд этот вариант более точный так как учитывает количество дней в месяце,
// не зависит от округления и читается легко
// Или возможно я не понял идею с преобразованием из разницы
//или можно по разнице получать только часы минуты секунды...
//я если честно не совсем понимаю почему этот вариант избыточен

function getDatesDiff_2() {
  const nextMonth = new Date(Number(new Date().getFullYear()), new Date().getMonth() + 1, 1 )
  return {
    month: MOUTH_IN_YEAR - (new Date().getMonth() + 1),
    day: Math.floor((nextMonth - new Date()) / (SECONDS_IN_DAY * MILLISECONDS_IN_SECOND)),
    hour: HOURS_IN_DAY - new Date().getHours(),
    minute: MINUTES_IN_HOUR - new Date().getMinutes(),
    second: SECONDS_IN_MINUTE - new Date().getSeconds(),
  }
}

function pluralizeText(count, arr) {
  const result = []
    const grammaticalNumber = pluralRules.select(Number(count));
    switch (grammaticalNumber) {
      case 'one':
        result.push(`${count} ${arr[2]}`);
        break;
      case 'few':
        result.push(`${count} ${arr[1]}`);
        break;
      case 'many':
        result.push(`${count} ${arr[0]}`);
        break;
      default:
        throw new Error('Error in pluralizeTimerText');
    }
  return result.join(' ')
}

function getTimerText_1() {
  const diff = getDatesDiff_1()
  const timerText = []
  for ( const key in diff) {
    timerText.push(pluralizeText(diff[key], PLURAL[key]))
  }
  return timerText.join(' ')
}
function getTimerText_2() {
  const diff = getDatesDiff_2()
  const timerText = []
  for (const key in diff) {
    timerText.push(pluralizeText(diff[key], PLURAL[key]))
  }
  return timerText.join(' ')
}

const runNewYearTimer = setInterval(() => {
  timerBody.innerText = getTimerText_1()
  timerBody2.innerText = getTimerText_2()
}, 1000);

if (newYear - Date.now() <= 0) {
  clearInterval(runNewYearTimer);
}
