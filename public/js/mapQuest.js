function initMap() {
	// add your code here
  L.mapquest.key = 'XcsdwhfojweV5wBAfhbbQCBUWB959hlG';

  var map = L.mapquest.map('map', {
    center: [32.879186, -117.235870],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.879186, -117.235870]).addTo(map);
}
