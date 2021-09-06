var mapOptions = {
    center: [50.473964, 30.327277],
    zoom: 15
  }
var map = new L.map('map', mapOptions);
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
var marker = L.marker([50.473964, 30.327277]);
marker.addTo(map);