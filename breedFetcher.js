// Outside Dependencies
const request = require('request');
const breedSearchEndpoint = `https://api.thecatapi.com/v1/breeds/search?q=`;

// Function Calls & Rendering new state
const fetchBreedDescription = (breedName, callback) => {
  console.log(`breedFetcher Fetch Initiated for ${breedName}`);
  request(`${breedSearchEndpoint}${breedName}`, (error, response, body) => {
    if (error) { throw error; }
    if (response.statusCode !== 200) {
      console.log(`Expected a 200-series status code, received "Status Code: ${response.statusCode}"\r\nTry another search term.`);
      return;
    }
    if (body === `[]`) { console.log(`Couldn't find that, try another search term.`); return; }
    else {
      // Parsed body
      const data = JSON.parse(body);
      // Return Human Readable output
      callback(error, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };