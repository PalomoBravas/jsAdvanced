"use strike";

const DICE_SIDE_AMOUNT = {
  d4: 4,
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
  d16: 16,
  d20: 20,
};

function play(diceType) {
  return Math.floor(Math.random() * DICE_SIDE_AMOUNT[diceType] + 1);
}

console.log(play('d20'));
