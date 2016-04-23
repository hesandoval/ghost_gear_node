function setup(io){

    io.on("connection", function(socket) {
        console.log("A user has connected to the page");
        //socket.emti("")
    });
}

module.exports = {setup:setup};
