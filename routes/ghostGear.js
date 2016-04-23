var express = require('express');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var netContr = require('../api_specifications/models/netCounter.js');
var multer = require('multer');
//var imgUpload = multer({dest : '../public/img'})
var ghost = require('../api_specifications/models/ghost_json_api.js');

var router = express.Router();



mongoose.connect('mongodb://localhost:27017/fishackathon');

/* POST new ghost equipment document */
router.post('/ghostgear', function(req, res) {
    console.log(req);
    console.log(res);
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
			netCounter.findOne({'net_code': req.body.net_data.net_code}, 'net_code count', function(err, netCont) {
				if (err) return handleError(err);

				if(netCont == null){
					var ghostCntr = new netCounter({net_code:req.body.net_data.net_code});
					ghostCntr.save(function(err, savedobject){
						if(err){
							console.log(err);
						} else {
							console.log('successfull counter created');
						}

					})
				}
				var newVal = netCont.count + 1;

				netCounter.update({'net_code': netCont.net}, { $set: { count: newVal } });

			});
			console.log("Data successfully stored");
		}
	});

});

module.exports = router;
