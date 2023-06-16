"use strict";

const arr = [
  {id: 1, name: 'Vasya'},
  {id: 2, name: 'Petya'},
  {id: 1, name: 'Vasya'},
]



const cleanArr = [...new Set(arr.map(item => JSON.stringify(item)))]
  .map(item => JSON.parse(item));

console.log(cleanArr)



