var express = require('express');
var proxy = require('http-proxy-middleware');

var options = {
    target: 'localhost:3000',
    changeOrigin: true
};

var exampleProxy = proxy(options);

var app = express();
var port = 4000;

app.use('/api', exampleProxy);
app.listen(port, () => console.log(`Listening on port ${port}!`));