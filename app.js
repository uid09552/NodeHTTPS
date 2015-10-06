/**
 * Created by Max on 06.10.2015.
 */
var https = require('https');
var fs = require('fs');

var hskey = fs.readFileSync('key.pem');
var hscert = fs.readFileSync('cert.pem')

var options = {
    key: hskey,
    cert: hscert
};

https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("Hi from HTTPS");
}).listen(process.env.VCAP_APP_PORT || 3000);


