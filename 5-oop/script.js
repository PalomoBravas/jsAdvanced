"use strict";

const Character = function (race, personName, language) {
  this.race = race;
  this.personName = personName;
  this.language = language;
}

Character.prototype.speak = function() {
  console.log(`I'm ${this.race}. My name is ${this.personName}. I mother language is ${this.language}.`)
}

const Orc = function (race, personName, language, weapon) {
  Character.call(this, race, personName, language)
  this.race = 'orc';
  this.weapon = weapon;
}

Orc.prototype = Object.create(Character.prototype);
// Orc.prototype.constructor = Orc;

Orc.prototype.strike = function () {
  console.log(`I strike of a ${this.weapon}.`);
}

const Elf = function (race, personName, language, mantra) {
  Character.call(this, race, personName, language)
  this.race = 'elf';
  this.mantra = mantra;
}

Elf.prototype = Object.create(Character.prototype)
// Elf.prototype.constructor = Elf
Elf.prototype.wiz = function () {
  console.log(`I wiz of a ${this.mantra}`);
}

const orc1 = new Orc('orc', 'Vladimir', 'rus', 'big nuke');
const elf1 = new Elf('elf', 'John', 'en', 'Red Fog');

orc1.speak();
orc1.strike();

elf1.speak();
elf1.wiz();
