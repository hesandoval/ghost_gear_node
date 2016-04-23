/**
 * Created by edsan on 4/23/16.
 */
var socket = io();
socket.emit('get_point_cloud', function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});