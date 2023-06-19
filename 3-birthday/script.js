"use strict";

const birthday = '1975-01-27';

function checkAge(birthday, checkAge) {
  const [birthYear, birthMonth, birthDate] = birthday.split('-');
  const birthdayAddAge = [Number(birthYear) + checkAge, birthMonth, birthDate].join('-');
  return Date.now() > Date.parse(birthdayAddAge);
}

console.log(checkAge(birthday, 48));
console.log(checkAge(birthday, 49));
