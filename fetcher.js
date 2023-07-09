const request = require('request');
const fs = require('fs');
const argv = process.argv.slice(2) // will take info entered into the terminal. 


request(argv[0], (error, response, body) => { // sends a request to the website specified in argv[0]

  fs.writeFile(argv[1], body, err => {
    if (err) {
      console.error(err);    // if no errors are found, will write info requested from argv into the local path specified in argv[1]
    }
    console.log(`Downloaded and saved ${body.length} bytes to $${argv[1]}`) //loging how much is being downloaded and where.

  });
  console.log('error:', error);

  console.log('statusCode:', response && response.statusCode);

  console.log('body:', body);
});



