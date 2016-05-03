function initMap() {
  var myLatLng = {lat: 50.808081, lng: -0.383365};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Border Control'
  });
}