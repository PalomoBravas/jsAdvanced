"use strict";

const arr = [
  {id: 1, name: 'Vasya'},
  {id: 2, name: 'Petya'},
  {id: 1, name: 'Vasya'},
]

function unify(arr) {
  return [...new Set(arr.map(item => JSON.stringify(item)))]
    .map(item => JSON.parse(item));
}
console.log(unify(arr));
