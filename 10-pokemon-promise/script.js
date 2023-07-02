'use strict';

const POKEMON_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

function getData (url, messageError) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`You catch error ${response.status}`)
      }
      return response.json();
    })
    .catch(error => console.log(error.message));
}
function requestPokemon (name) {
  return getData(`${POKEMON_BASE_URL}/${name}`)
    .then(data => getData(data.abilities[0].ability.url))
    .then((data) => {
      return data.effect_entries
    })
    .then((effectEntries) => {
      let answer;
      for (const el of effectEntries) {
        if (el.language.name === 'en') {
          answer = el.effect
        }
      }
      return answer;
    })
}

requestPokemon('ditto')
  .then(answer => console.log(answer))
  .catch(error => console.error(error))
