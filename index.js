const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const httpPort = 3000;
const httpsPort = 5000;
app = express()

var key = fs.readFileSync(__dirname + '/certsFiles/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/certsFiles/selfsigned.crt');

var credentials = {
  key: key,
  cert: cert
};

//GET home route
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
   res.send('Hello World.');
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


httpServer.listen(httpPort, () => {
  console.log("Http server listing on port : " + httpPort)
});

httpsServer.listen(httpsPort, () => {
  console.log("Https server listing on port : " + httpsPort)
});
