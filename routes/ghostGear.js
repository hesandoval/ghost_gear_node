var express = require('express');
var mongodb = require('mongodb');
var mongoose = require('mongoose');

var multer = require('multer');
//var imgUpload = multer({dest : '../public/img'})
var ghost = require('../api_specifications/models/ghost_json_api.js');

var router = express.Router();

mongoose.connect('mongodb://localhost:27017/fishackathon');

/* POST new ghost equipment document */
app.post('/ghostgear', function(req, res) {

	var animals = JSON.parse(req.body.animals);

	if (!(0 < animals.length)) {
		animals = [];
	}

	var newNet = new ghost();


	newNet.image = req.file.path;
	newNet.source = req.body.source;
	newNet.location = req.body.location;
	newNet.net_data = req.body.net_data;
	newNet.wildlife_data = req.body.wildlife_data;

	newNet.save(function(err, savedobject) {
		if (err) {
			console.log(err);
		} else {
			//console.log(savedobject)
			console.log("Data successfully stored");
		}));

});

module.exports = router;
