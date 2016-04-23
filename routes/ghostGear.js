var express = require('express');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var netContr = require('../api_specifications/models/netCounter.js');
var multer = require('multer');
//var imgUpload = multer({dest : '../public/img'})
var ghost = require('../api_specifications/models/ghost_json_api.js');

var router = express.Router();

var options = {
	// Return the document after updates are applied
	new: true,
	// Create a document if one isn't found. Required
	// for `setDefaultsOnInsert`
	upsert: true,
	setDefaultsOnInsert: true
};
var query = {};
var update = 1;

mongoose.connect('mongodb://localhost:27017/fishackathon');

/* POST new ghost equipment document */
router.post('/ghostgear', function(req, res) {

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
			query = req.body.net_data.net_code;
			var ghostCntr = new netCounter();

			ghostCntr.findOneAndUpdate(query, update, options, function(error, doc) {
				assert.ifError(error);
				assert.equal(doc.net_code, req.body.net_data.net_code);

			});
			console.log("Data successfully stored");
		}
	});

});

module.exports = router;
