const http = require('http');
const staticSuperHeroes = require('./static.js');

const handler = (request, response) => {
  let staticData = JSON.stringify(staticSuperHeroes);
    response.writeHead(200,{
      'content-type': 'application/json'
    });
    response.end(staticData);
};

module.exports = handler;
