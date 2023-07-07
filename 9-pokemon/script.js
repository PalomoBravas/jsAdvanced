'use strict';

const ROOT_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/'

function useDate(effect, callback) {
  callback(effect)
}

function printToConsole(data) {
  console.log(data)
}

function requestPokemon(name, callback_one, callback_two) {
  callback_one(`${ROOT_POKEMON_URL}${name}`, callback_two)
}

function getPokemonEngEffect(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url );
  request.send();

  request.addEventListener('load', function () {
    const url = (JSON.parse(this.responseText).abilities)[0].ability.url;
    if (!url) {
      return null
    } else {
      const request = new XMLHttpRequest();
      request.open('GET',url );
      request.send()

      request.addEventListener('load', function () {
        const effectEntries = JSON.parse(this.responseText).effect_entries

        for (const el of effectEntries) {
          if (el.language.name === 'en') {
            useDate(el.effect, callback);
          }
        }
      })
    }
  })
}

requestPokemon('ditto', getPokemonEngEffect, printToConsole)
