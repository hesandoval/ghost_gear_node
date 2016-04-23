var mongoose = require("mongoose");
var ghostSchema = require("./api_specifications/models/ghost_json_api.js");
function setup(io){

    io.on("connection", function(socket) {
        console.log("A user has connected to the page");
        socket.on("get_point_cloud", function(callback){
            ghostSchema.find({}, "location", callback);
        });
    });
}

module.exports = {setup:setup};
