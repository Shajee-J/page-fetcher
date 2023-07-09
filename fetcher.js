const request = require('request');
const fs = require('fs');

const content = body;


request('http://www.google.com', (error, response, body) => {

  console.log('error:', error); // Print the error if one occurred

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  console.log('body:', content); // Print the HTML for the Google homepage.

});



fs.writeFile('./Body.html', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});