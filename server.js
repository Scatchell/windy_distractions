var static = require('node-static'),
http = require('http'),
util = require('util');
port = 8080;
var file = new(static.Server)({
    cache: 600,
    headers: { 'X-Powered-By': 'node-static' }
});
http.createServer(function(req, res) {
    req.addListener('end', function() {
        file.serve(req, res);
    });
}).listen(port);
console.log('node-static running at http://localhost:%d', port);
