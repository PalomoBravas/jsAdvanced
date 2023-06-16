"use strict";

const birthday = '1975-01-27';

function checkAge (birthday, checkAge) {
  const now = Date.now();
  const [birthYear, birthMonth, birthDate] = birthday.split('-');
  const birthdayAddAge = [+birthYear + checkAge, birthMonth, birthDate].join('-');
  return now > Date.parse(birthdayAddAge);
}

console.log(checkAge(birthday, 48));
console.log(checkAge(birthday, 49));
