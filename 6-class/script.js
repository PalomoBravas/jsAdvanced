"use strict";

class Car {
  #brand;
  #model;
  #mileage = 0;

  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model
  }

  get mileageGet () {
    console.log(this.#mileage);
  }

  set mileageSet (mileage) {
    this.#mileage = mileage;
  }

  info() {
    console.log(`This ${this.#brand} ${this.#model} with mileage ${this.#mileage}`);
  }
}

const car1 = new Car('BMV', 'X5');
car1.mileageGet;
car1.mileageSet = 40000;
car1.info();
