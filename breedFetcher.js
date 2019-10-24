const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=sib`, (error, response, body) => {
  console.log(typeof error);
  console.log(typeof response);
  console.log(typeof response.statusCode);

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);

});


