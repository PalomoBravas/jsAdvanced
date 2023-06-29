'use strict';

const promise_1 = new Promise((resolve) =>
  setTimeout(() => resolve('slow'), 1000)
);

const promise_2 = new Promise((resolve) =>
  setTimeout(() => resolve('fast'), 900)
);

function race(arr) {
  return new Promise((resolve, reject) => {
    for (const el of arr) {
      el.then(resolve)
        .catch(reject);
    }
  })
}

race([promise_1, promise_2])
  .then(data => console.log(data))
  .catch(err => console.error(err));
