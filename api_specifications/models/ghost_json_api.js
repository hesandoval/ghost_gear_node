
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gs = new Schema({
            image: String,
            timeStamp: { type : Date, default: Date.now },
            source: {
                first_name: String,
                last_name: String,
                email: String,
                contact_number: String,
                role: String
            },
            location: {
                detail: String,
                originating_location: {
                    lat: {type : Number, default : null},
                    lng: {type : Number, default : null}
                },
                reported_location:{
                    lat: Number,
                    lng: Number
                }
            },
            net_data: {
                color: String,
                mesh_size: Number,
                twine_size: Number,
                net_code: String,
                estimate_net_width: Number,
                estimate_net_length: Number,
                comments: String,
                num_strands: Number
            },
            wildlife_data: {
                animals: [{
                    code: Number,
                    condition: String,
                    length_size: Number
                }]
            }
});

var ghostSchema = mongoose.model('ghostSchema', gs);

module.exports = ghostSchema;
