'use strict';

class Character {
  race;
  personName;
  language;
  constructor(race, personName, language) {
    this.race = race;
    this.personName = personName;
    this.language = language;
  }
  speak() {
    console.log(`I'm ${this.race}. My name is ${this.personName}. I mother language is ${this.language}.`);
  }
}

class Orc extends Character {
  weapon;
  constructor(personName, language, weapon) {
    super(personName, language);
    this.race = 'orc';
    this.personName = personName;
    this.language = language;
    this.weapon = weapon;
  }
  strike() {
    console.log(`I strike of a ${this.weapon}.`);
  }
}

class Elf extends Character {
  mantra;
  constructor(personName, language, mantra) {
    super(personName, language);
    this.race = 'elf'
    this.personName = personName;
    this.language = language;
    this.mantra = mantra;
  }

  wiz() {
    console.log(`I wiz of a ${this.mantra}`);
  }
}

const orc1 = new Orc('Vladimir', 'rus', 'Big Nuke');
const elf1 = new Elf('John', 'en', 'Red Fog');

console.log(orc1);
console.log(elf1);

orc1.speak();
orc1.strike();

elf1.speak();
elf1.wiz();
