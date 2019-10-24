// Outside Dependencies
const request = require('request');
const breedSearchEndpoint = `https://api.thecatapi.com/v1/breeds/search?q=`;
const cliSearchTerm = process.argv.slice(2,3);

// Function Calls & Rendering new state
request(`${breedSearchEndpoint}${cliSearchTerm}`, (error, response, body) => {
  // Response Types
  // console.log(`Typeof body: ${typeof body}`);
  // console.log(`Typeof error: ${typeof error}`);
  // console.log(`Typeof response: ${typeof response}`);
  // console.log(`Typeof status code: ${typeof response.statusCode}`);
  if (error)  {
    throw error;
  }
  if (response !== 200) {
    return `Expected "Status Code: 200", received "Status Code:${response.statusCode}"\r\nTry another search term.`
  }
  // Parsed body
  const data = JSON.parse(body);

  // Human Readable output
  console.log(`Description:\n${data[0].description}`);
});