const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=sib`, (error, response, body) => {
  // Response Types
  console.log(`Typeof body: ${typeof body}`);
  console.log(`Typeof error: ${typeof error}`);
  console.log(`Typeof response: ${typeof response}`);
  console.log(`Typeof status code: ${typeof response.statusCode}`);

  // Parsed body
  const data = JSON.parse(body);

  // Human Readable output
  console.log(`Description:\n${data[0].description}`);
});


