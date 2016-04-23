var express = require('express');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var router = express.Router();

//Schema
var ghost = require('../api_specifications/models/ghost_json_api.js')

mongoose.connect('mongodb://localhost:27017/fishackathon');
/* POST users listing. */
app.post('/ghostgear', function(req, res) {
    var newNet = new ghost();
     newNet.source =  req.body.id;


     newNet.save(function(err, savedobject) {
        if (err) {
            console.log(err);
        } else {
            //console.log(savedobject)

            console.log(" req.body " +  req.body.id + " successfully pulled from api");
            sensors[ req.body.id] = true;
        }

});

module.exports = router;
