/**
 * Created by Max on 06.10.2015.
 */
var http = require('http');



http.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("Hi from HTTP");
}).listen(process.env.VCAP_APP_PORT || 3000);


