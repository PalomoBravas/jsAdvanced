'use strict';

function requestPokemon(url) {
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
            console.log(el.effect)
          }
        }
      })
    }
  })
}

requestPokemon('https://pokeapi.co/api/v2/pokemon/ditto')
