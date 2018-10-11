var express = require('express');
var app = express();

app.listen(3000);

app.get('/html', function(req, res){
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');

});

app.get('/json', function (req, res){
    res.json({firstname: 'John', lastname: 'Smith'});
});

app.get('/toronto*team', function(req, res){
    res.send('<html><head></head><body><h1>Go Toronto!</h1></body></html>');
});

/*
*Exercises (from https://expressjs.com/en/guide/routing.html)
*Create a pattern to match the following routes.
There should be a wild card operator in some or one of the characters *, +, ?, to allow any text in
between the ‘toronto’ and ‘team’ route pattern.
/torontoraptorsteam
/torontomarliesteam
/torontoabcteam
/torontoteam

app.get('/toronto*team', [works, allows anything to pass between the two words]
app.get('/toronto?team', [works, allows a missed character preceding it]

*/


