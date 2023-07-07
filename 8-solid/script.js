'use strict';

class Billing {
  constructor(amount) {
    this.amount = amount
  }
  calculateTotal () {
    console.log(this.amount)
  }
}

class FixBilling extends Billing {}

class HourBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
  calculateTotal(hours) {
    console.log(this.amount * hours)
  }
}

class ItemBilling extends Billing {
  constructor(itemsPrice, amount) {
    super(amount);
    this.itemsPrice = itemsPrice
  }

  calculateTotal(item) {
    console.log(this.itemsPrice[item] * this.amount);
  }
}

const bill = new FixBilling(100);
const bill1 = new HourBilling(50);
const bill2 = new ItemBilling({
  item1: 100,
  item2: 200,
  item3: 300,
},4);

bill.calculateTotal();
bill1.calculateTotal(20);
bill2.calculateTotal('item3');
