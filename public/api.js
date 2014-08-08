 var geocoder;
 window.map;
 function initialize() {
 	geocoder = new google.maps.Geocoder();
 	var latlng = new google.maps.LatLng(-34.397, 150.644);
 	var mapOptions = {
 		zoom: 8,
 		center: latlng
 	}
 	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
 }

 function codeAddress(callback) {
  console.log('Hey yall');
  var address = $($(event.target).siblings()[0]).val();
  console.log(address);
  geocoder.geocode( { 'address': address}, function(results, status) {
  	position = results[0].geometry.location
    console.log(position);
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(position);
      var marker = new google.maps.Marker({
          map: map,
          position: position
      });
      callback(position);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
};
  function placeMarker(lat, lng) {
    
    new google.maps.Marker({
      map: map,
      position: {lat: lat, lng: lng}
    });
  };

google.maps.event.addDomListener(window, 'load', initialize);