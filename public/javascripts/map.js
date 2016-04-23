/**
 * Created by edsan on 4/23/16.
 */

function initMap() {
    var initialLocation = new google.maps.LatLng(36.617906, -121.901943);
    var browserSupportFlag = new Boolean();
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17
    });

    // Try W3C Geolocation (Preferred)
    if(navigator.geolocation) {
        browserSupportFlag = true;
        navigator.geolocation.getCurrentPosition(function(position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            map.setCenter(initialLocation);
        }, function() {
            handleNoGeolocation(browserSupportFlag);
        });
    }
    // Browser doesn't support Geolocation
    else {
        browserSupportFlag = false;
        map.setCenter(initialLocation);
    }
    window.map = map;

}