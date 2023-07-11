"use strict";
const buttonsState = [];
const countState = {count: 0};
const counter = document.querySelector('.counter-output');
counter.innerHTML = countState.count
const buttonsBlock = document.querySelector('.button__wrapper');

function buttonsStateInit(length) {
  for(let i = 1; i<= length; i++){
    buttonsState.push({id: i, numberOfClicks: 0, toggle: false,})
  }
}

function renderButtons() {
  buttonsBlock.innerHTML = ''
  for (const buttonState of buttonsState) {
    const button = document.createElement("button")
    button.classList.add('button')
    button.id = buttonState.id.toString()
    if(buttonState.toggle) {
      button.classList.remove('unpressed')
      button.classList.add('pressed')
      button.innerHTML = `Pressed <br> ${buttonState.numberOfClicks}`
    } else {
      button.classList.add('unpressed')
      button.classList.remove('pressed')
      button.innerHTML = `Press Me <br> ${buttonState.numberOfClicks}`
    }
    buttonsBlock.append(button)
  }
}

function pressButton(e) {
  const buttonId = e.target.id
  for (const button of buttonsState) {
    if(button.id === Number(buttonId)) {
      if(button.toggle === true) {
        return null
      }
      button.numberOfClicks ++;
      button.toggle = true
      countState.count ++;
    } else {
      button.toggle = false
    }
  }
  rerender()
}

function rerender() {
  counter.innerHTML = countState.count
  renderButtons()
}

function run(numberOfButtons) {
  buttonsStateInit(numberOfButtons)
  renderButtons()
  buttonsBlock.addEventListener('click', (e) => pressButton(e))
}

run(5);







