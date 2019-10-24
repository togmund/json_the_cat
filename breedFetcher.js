const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=sib`, (error, response, body) => {
  console.log(typeof body);
  console.log(typeof error);
  console.log(typeof response);
  console.log(typeof response.statusCode);
});


