'use strict';

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
function requestPokemon (url) {
  return getData(url)
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

requestPokemon('https://pokeapi.co/api/v2/pokemon/ditto').then(answer => console.log(answer));
