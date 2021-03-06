var map = new google.maps.Map(document.getElementById("map"), {
  center: new google.maps.LatLng(53.3478, -6.2597),
  zoom: 18,
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infoWindow = new google.maps.InfoWindow({
  map: map
});
// Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    // infoWindow.setPosition(pos);
    // infoWindow.setContent('<b>You are here.</b>');
    map.setCenter(pos);
    var marker = new google.maps.Marker({
      position: pos,
      map: map,
      title: String(pos.lat) + ", " + String(pos.lng),
    });
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}
