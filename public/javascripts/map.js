/**
 * Created by edsan on 4/23/16.
 */

function initMap() {
    var initialLocation = new google.maps.LatLng(36.617906, -121.901943);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: initialLocation,
        zoom: 5
    });
    var mc = new MarkerClusterer(map);
    // Try W3C Geolocation (Preferred)
    //if(navigator.geolocation) {
    //    browserSupportFlag = true;
    //    navigator.geolocation.getCurrentPosition(function(position) {
    //        initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    //        map.setCenter(initialLocation);
    //    }, function() {
    //        handleNoGeolocation(browserSupportFlag);
    //    });
    //}
    //// Browser doesn't support Geolocation
    //else {
    //    browserSupportFlag = false;
    //    map.setCenter(initialLocation);
    //}
    window.map = map;
    window.markerCluster = mc;

}