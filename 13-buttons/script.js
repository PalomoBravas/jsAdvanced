"use strict";

const state = {count: 0, pressedButtonId: '', buttonsState: []};
const counter = document.querySelector('.counter-output');
const buttonsBlock = document.querySelector('.button__wrapper');

function updateCommonCounter() {
  counter.innerHTML = state.count;
}

function initButtonsState(length) {
  for(let i = 0; i < length; i++){
    state.buttonsState.push({id: i.toString(), count: 0,})
  }
}

function renderButtons() {
  buttonsBlock.innerHTML = state.buttonsState
    .map(buttonState => createButton(buttonState.id === state.pressedButtonId, buttonState))
    .join("");
}

function createButton(isPressed, buttonsState) {
  const className = isPressed ? 'pressed' : '';
  const buttonText = isPressed ? 'Pressed' : 'Press Me';
  return `
      <button id="${buttonsState.id}" class="button ${className}">
         ${buttonText}<br/>${buttonsState.count}
      </button>`;
}

function onPressButton(e) {
  state.pressedButtonId = e.target.id
  state.count ++;
  state.buttonsState[e.target.id].count ++;
  updateLayout()
}

function updateLayout() {
  updateCommonCounter()
  renderButtons()
}

function initButtons(buttonsAmount) {
  updateCommonCounter();
  initButtonsState(buttonsAmount);
  renderButtons();
  buttonsBlock.addEventListener('click', onPressButton);
}

initButtons(5);
