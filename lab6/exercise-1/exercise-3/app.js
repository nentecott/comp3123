var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://<admin>:<password123>@ds229373.mlab.com:29373/bibliotheque');

var port = process.env.PORT || 3000;
app.listen(port);

var Schema = mongoose.Schema;

var userSchema = new Schema({name: String, status: String});

var User = mongoose.model('User', userSchema);

var john = User({name: 'John', status: 'active'});

john.save(function(err){
    if(err) throw err;

    console.log('**** User saved! ****');
});

var User = mongoose.model('User', userSchema);

var jane = User({name: 'Jane', status: 'active'});
