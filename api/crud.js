var express = require('express');
var crud = express();
var mongo = require('mongodb');
var variables = require('../variables/variables');
var Server = mongo.Server,
    Db = mongo.Db;

var server = new Server(variables.host, 27017, {auto_reconnect: true});
db = new Db(variables.database, server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to " + variables.database + " database");
        db.collection(variables.vocabCollection, {strict:true}, function(err, collection) {
            if(err) {
                console.log("The " + variables.vocabCollection + " collection doesn't exist. Creating it with sample data...");
            }
        });
    }
});

crud.get('/api/vocabAll', function(req, res, next)  {
  db.collection(variables.vocabCollection).find({type: 'vocab'}).toArray(function(err, data)  {
  	if(err) return console.log(err)
  	res.send(data);
  });
});
crud.get('/api/vocabByTheme/:name', function(req, res, next)  {
  db.collection(variables.vocabCollection).find({theme: req.params.name, type: 'vocab'}).toArray(function(err, data)  {
  	if(err) return console.log(err)
  	res.send(data);
  });
});
crud.get('/api/themes', function(req, res, next)  {
  db.collection(variables.vocabCollection).find({type: 'theme'}).toArray(function(err, data)  {
  	if(err) return console.log(err)
  	res.send(data);
  });
});
crud.get('/api/oneTheme/:name', function(req, res, next)  {
  db.collection(variables.vocabCollection).find({type: 'theme', name: req.params.name}).toArray(function(err, data)  {
    if(err) return console.log(err)
    res.send(data);
  });
});
crud.post('/api/addTheme', function(req, res, next)  {
	var newData = req.body;
  db.collection(variables.vocabCollection).insert(newData, function(err, data)  {
  	if(err) return console.log(err)
  	res.send(data);
  });
});
crud.post('/api/deleteTheme', function(req, res, next)  {
  var theme = req.body;
  db.collection(variables.vocabCollection).remove(theme, function(err, data)  {
    if(err) return console.log(err)
    res.send(data);
  });
});
crud.post('/api/addVocab', function(req, res, next)  {
	var newData = req.body;
  db.collection(variables.vocabCollection).insert(newData, function(err, data)  {
  	if(err) return console.log(err)
  	res.send(data);
  });
});
crud.post('/api/deleteVocab', function(req, res, next)  {
	var vocab = req.body;
  db.collection(variables.vocabCollection).remove({en: vocab.en, vn: vocab.vn, type: vocab.type, theme: vocab.theme},function(err, data)  {
  	if(err) return console.log(err)
  	res.send(data);
  });
});
module.exports = crud;
