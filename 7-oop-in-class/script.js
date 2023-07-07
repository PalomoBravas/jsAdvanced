'use strict';

class Character {
  _race;
  constructor(personName, language) {
    this.personName = personName;
    this.language = language;
  }
  speak() {
    console.log(`I'm ${this._race}. My name is ${this.personName}. I mother language is ${this.language}.`);
  }
  hit(){
  }
}

class Orc extends Character {
  _race = 'orc'
  constructor(personName, language, weapon) {
    super(personName, language);
    this.weapon = weapon;
  }
  hit() {
    console.log(`I strike of a ${this.weapon}.`);
  }
}

class Elf extends Character {
  _race = 'elf'
  constructor(personName, language, mantra) {
    super(personName, language);
    this.mantra = mantra;
  }
  hit() {
    console.log(`I wiz of a ${this.mantra}`);
  }
}

const orc1 = new Orc( 'Vladimir', 'rus', 'Big Nuke');
const elf1 = new Elf( 'John', 'en', 'Red Fog');

console.log(orc1);
console.log(elf1);

orc1.speak();
orc1.hit();

elf1.speak();
elf1.hit();
