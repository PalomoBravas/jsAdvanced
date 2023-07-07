"use strict";

const count = document.querySelector('.counter')
const buttons = document.querySelector('.button__wrapper')
let countNumber = 0
count.innerHTML = countNumber.toString();

buttons.addEventListener('click', (e) => {
  const button = document.getElementById(e.target.id)
  if (button.classList.contains('unpressed')) {
    button.className = 'pressed'
    button.innerHTML = 'PRESSED'
    countNumber = countNumber + 1
    count.innerHTML = countNumber.toString();
  }
})
