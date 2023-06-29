'use strict';

function getCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({
          latitude: coords.latitude,
          longitude: coords.longitude,
        })
      },
      (err) => {
        reject(err);
      }
    );
  });
}

getCoordinates().then((data) => {
  console.log(`Latitude: ${data.latitude}`);
  console.log(`Longitude: ${data.longitude}`);
});
