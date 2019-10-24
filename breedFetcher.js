// Outside Dependencies
const request = require('request');

// Function Calls & Rendering new state
const fetchBreedDescription = (breedName, callback) => {
  const breedSearchEndpoint = `https://api.thecatapi.com/v1/breeds/search?q=`;
  // console.log(`breedFetcher Fetch Initiated for ${breedName}`);
  request(`${breedSearchEndpoint}${breedName}`, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      if (body !== "[]") {
        const data = JSON.parse(body);
        callback(error, `Description:\r\n${data[0].description}`);
      } else {
        callback(error, `I didn't find anything with that search term.`);
      }
    } else {
      callback(error, `error`);
    }
  });
};

module.exports = { fetchBreedDescription };