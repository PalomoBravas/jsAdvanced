"use strike";

function random (diceType) {
  const typeVsValue = {
    d4: 4, d6: 6, d8: 8, d10: 10, d12: 12, d16: 16, d20: 20
  }
  const max = typeVsValue[diceType]
  console.log(max)
  return Math.floor(Math.random() * max + 1)
}

console.log(random('d20'))
