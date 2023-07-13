'use strict';

const ROOT_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';

function consoleDate(data) {
  console.log(data);
}

function getPokemonEffect(name, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', `${ROOT_POKEMON_URL}/${name}`);
  request.send();
  request.addEventListener('load', function () {
    const url = (JSON.parse(this.responseText).abilities)[0].ability.url;
    if (!url) {
      return null;
    } else {
      const request = new XMLHttpRequest();
      request.open('GET',url );
      request.send();
      request.addEventListener('load', function () {
        const effectEntries = JSON.parse(this.responseText).effect_entries;
        for (const el of effectEntries) {
          if (el.language.name === 'en') {
           if (typeof callback === 'function') {
             callback(el.effect);
           }
          }
        }
      })
    }
  })
}

getPokemonEffect('ditto', consoleDate);
