
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ghostSchema = new Schema({
            image: String,
            source: {
                first_name: String,
                last_name: String,
                email: String,
                contact_number: Number,
                role: String,
            },
            location: {
                detail: String,
                location: {
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
            },
            wildlife_data: {
                animals: [{
                    code: Number,
                    condition: String,
                    length_size: Number
                }]
            }
        }

var ghostSchema = mongoose.model('ghostSchema', ghostSchema);

export.models = ghostSchema;
