"use strict";

export default class Task {
  constructor(message) {
    this.message = message;
  }
  run(){
    console.log(this.message)
  }
}


