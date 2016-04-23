/**
 * Created by edsan on 4/23/16.
 */
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 36.617906, lng: -121.901943},
        zoom: 17
    });
    window.map = map;
}