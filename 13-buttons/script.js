"use strict";

const state = {count: 0, pressedButtonId: '', buttonsState: []};
const counter = document.querySelector('.counter-output');
const buttonsBlock = document.querySelector('.button__wrapper');

function updateCommonCounter() {
  counter.innerHTML = state.count;
}

function initButtonsState(length) {
  for(let i = 1; i<= length; i++){
    state.buttonsState.push({id: i.toString(), count: 0,})
  }
}

function renderButtons() {
  const btnArr = [];
  const pressedButtonId = state.pressedButtonId;
  const buttonsState = state.buttonsState;
  for (const buttonState of buttonsState) {
    const button = createButton(pressedButtonId, buttonState)
    btnArr.push(button)
  }
  buttonsBlock.innerHTML =  btnArr.join("\n")
}

function createButton(pressedButtonId, buttonsState) {
  const className = pressedButtonId === buttonsState.id ? 'pressed' : '';
  const buttonText = pressedButtonId === buttonsState.id ? 'Pressed' : 'Press Me';
  return `
      <button id="${buttonsState.id}" class="button ${className}">
         ${buttonText}<br/>${buttonsState.count}
      </button>`;
}

function onPressButton(e) {
  if(e.target.id === state.pressedButtonId) {
    return;
  }
  state.pressedButtonId = e.target.id
  state.count ++;
  state.buttonsState[e.target.id-1].count ++;
  rerender()
}

function rerender() {
  updateCommonCounter()
  renderButtons()
}

function buttonsAmount(numberOfButtons) {
  updateCommonCounter();
  initButtonsState(numberOfButtons);
  renderButtons();
  buttonsBlock.addEventListener('click', onPressButton);
}

buttonsAmount(5);







