// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  console.log(`Index Fetch initiated for ${breedName}`)
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(`Description:\r\n${desc}`);
  }
});