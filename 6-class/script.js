"use strict";

class Car {
  #brand;
  #model;
  #mileage = 0;

  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model
  }

  get mileage () {
    return this.#mileage;
  }

  set mileage (mileage) {
    this.#mileage = mileage;
  }

  info() {
    console.log(`This ${this.#brand} ${this.#model} with mileage ${this.mileage}`);
  }
}

const car1 = new Car('BMV', 'X5');
car1.mileage;
car1.mileage = 40000;
car1.info();
