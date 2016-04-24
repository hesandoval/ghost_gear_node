var express = require('express');
var router = express.Router();
var configs = require('../config.js');
var express = require('express');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var netContr = require('../api_specifications/models/netCounter.js');
var multer = require('multer');
var uuid = require('node-uuid');
//var imgUpload = multer({dest : '../public/img'})
var ghost = require('../api_specifications/models/ghost_json_api.js');
var netCounter = require('../api_specifications/models/netCounter');

var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Fishackathon Works', API_KEY:configs.api });
});

router.post('/ghostgear', function(req, res, next) {
    // console.log(req);
    // console.log(res);

    console.log(req.body);
    var payload = JSON.parse(req.body.payload);

    console.log(typeof payload);

    var animals = payload.wildlife_data;

    console.log(typeof animals);

    console.log(animals);

    console.log('After animals');

	if (!(0 < animals.length)) {
		animals = [];
	}

    console.log('Before ghost');
	var newNet = new ghost();

    console.log('New Ghost');

	newNet.image = req.file.path;
	newNet.source = payload.source;
	newNet.location = payload.location;
	newNet.net_data = payload.net_data;
	newNet.wildlife_data = payload.wildlife_data;

	newNet.save(function(err, savedobject) {
		if (err) {
			console.log(err);
		} else {
			//console.log(savedobject)
			netCounter.findOne({'net_code': payload.net_data.net_code}, 'net_code count', function(err, netCont) {
				if (err) return handleError(err);

				if(netCont == null){
					var ghostCntr = new netCounter({net_code:payload.net_data.net_code});
					ghostCntr.save(function(err, savedobject){
						if(err){
							console.log(err);
						} else {
							res.status(200).end();
							console.log('successfull counter created');
						}

					});
				} else {
                    var newVal = netCont.count + 1;

    				netCounter.update({'net_code': netCont.net}, { $set: { count: newVal } });

                }
                return res.status(200).end();
			});
			console.log("Data successfully stored");
		}
	});

});


module.exports = router;
