const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

const MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if(err) {
    console.log(err);
    return;
  }

  const db = client.db('bucketlistdb');


  app.listen(3000, function () {
    console.log('Listening for requests on port 3000.');
  });

});
