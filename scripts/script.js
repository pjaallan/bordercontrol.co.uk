/**
 * @author Peter
 */
 //accoridan for faqs
  
//fuctions loaded on page load
function siteFunctions() {
	$(".accordion").accordion({
      collapsible: true
      
    });
};
	
// when the document loads
 window.onload =  function() {
 	siteFunctions();
 	
 };
 
 
//Google map for contacts page

function initMap() {
  var myLatLng = {lat: 50.808081, lng: -0.383365};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng,
    disableDoubleClickZoom: true,
    draggable: false,
    mapTypeControl: false,
    panControl: true,
    });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Border Control'
  });
}
 
 