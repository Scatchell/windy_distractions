var static = require('node-static'),
http = require('http'),
util = require('util');
fallback_port = 8888;
var file = new(static.Server)({
    cache: 600,
    headers: { 'X-Powered-By': 'node-static' }
});
http.createServer(function(req, res) {
    req.addListener('end', function() {
        file.serve(req, res);
    });
}).listen(process.env.PORT || fallback_port);
