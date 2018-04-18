const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require("mongodb").ObjectID;



MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if(err) {
    console.log(err);
    return;
  }

  const db = client.db('bucketlistdb');


  app.get("/api/bucketlist", function (req, res) {
    const placesCollection = db.collection("places_list");
    placesCollection.find().toArray(function (err, allPlaces) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      res.json(allPlaces);
    });
  })


  app.post("/api/bucketlist", function (req, res) {
    const placesCollection = db.collection("places_list");
    const placeToSave = req.body;

    placesCollection.save(placeToSave, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      console.log("Save successful!");
      res.status(201);
      res.json(placeToSave);
    })
  });


  app.delete("/api/bucketlist", function (req, res) {
    const placesCollection = db.collection("places_list");
    const filterObject = {};

    placesCollection.deleteMany(filterObject, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      console.log("Delete successful!");
      res.status(204);
      res.json(result);
    });
  })


  app.put("/api/bucketlist/:id", function (req, res) {
    const placesCollection = db.collection("places_list");
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    const updatedData = req.body;

    placesCollection.update(filterObject, updatedData, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      console.log("Update successful!");
      res.status(204);
      res.send();
    })
  })



  app.listen(3000, function () {
    console.log('Listening for requests on port 3000.');
  });

});
