'use strict';

class Billing {
  constructor(amount) {
    this.amount = amount
  }
  calculateTotal () {
    console.log(this.amount)
  }
}

class fixBilling extends Billing {}

class hourBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
  calculateTotal(hours) {
    console.log(this.amount * hours)
  }
}

class itemBilling extends Billing {
  items = {
    item1: 100,
    item2: 200,
    item3: 300,
  }
  constructor(amount) {
    super(amount);
  }

  calculateTotal(item) {
    console.log(this.items[item] * this.amount);
  }
}

const bill = new fixBilling(100);
const bill1 = new hourBilling(50);
const bill2 = new itemBilling(4);

bill.calculateTotal();
bill1.calculateTotal(20);
bill2.calculateTotal('item3');
