var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cntr = new Schema({
    net_code: String,
    count: {type : Number , default : 1}
});

var netCounter = mongoose.model('ghostCounter', cntr);

module.exports = netCounter;
