'use strict';

class Billing {
  amount;
  calculateTotal () {
    console.log(this.amount)
  }
}

class fixBilling extends Billing {
  amount = 100;
}

class hourBilling extends Billing {
  hour;
  amount = 10;
  constructor(hour) {
    super();
    this.hour = hour;
  }
  calculateTotal() {
    console.log(this.hour * this.amount)
  }
}

class itemBilling extends Billing {
  items = {
    item1: 100,
    item2: 200,
    item3: 300,
  }
  constructor(item, count) {
    super();
    this.item = item;
    this.count = count;
  }

  calculateTotal() {
    console.log(this.items[this.item] * this.count );
  }
}

const bill = new fixBilling();
const bill1 = new hourBilling(50);
const bill2 = new itemBilling('item2', 4);

bill.calculateTotal();
bill1.calculateTotal();
bill2.calculateTotal();
