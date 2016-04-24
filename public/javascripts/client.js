/**
 * Created by edsan on 4/23/16.
 */
var socket = io();
socket.emit('get_point_cloud', function(err, data){
    if(err){
        console.log(err);
    }else{
        $.each(data, function(index, value){
            var marker = new google.maps.Marker({
                position: value['location']['reported_location']
            });
            window.markerCluster.addMarker(marker);
        })
    }
});