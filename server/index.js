var express = require('express');
var proxy = require('http-proxy-middleware');
var path = require('path');

var options = {
    target: 'localhost:4000',
    changeOrigin: true,
    router: {
        'localhost:3000/api'
    }
};

var exampleProxy = proxy(options);

var app = express();
var port = 4000;

app.use(express.static(path.join(__dirname, '../client/public')))

app.use('/api', exampleProxy);
app.listen(port, () => console.log(`Listening on port ${port}!`));