var express = require('express');
var app = express();

app.listen(3000);

var requestTime = function(req, res, next){
    req.requestTime = Date.now();
    next();
};
app.use(requestTime)

app.get('/greet', function(req, res){
    console.log('GET recieved ' + req.requestTime);
    res.send('Hello World! from GET');
});

app.post('/greet', function(req, res){
    console.log('POST recieved ' + req.requestTime);
    res.send('Hello World! from POST');
});

app.put('/greet', function(req, res){
    console.log('PUT recieved ' + req.requestTime);
    res.send('Hello World! from PUT');
});

app.delete('/greet', function(req, res){
    console.log('DELETE recieved ' + req.requestTime);
    res.send('Hello World! from DELETE');
});