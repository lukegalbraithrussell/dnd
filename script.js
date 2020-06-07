
var cityIcon = L.icon({
    iconUrl: 'icon.svg',

    iconSize: [38, 95], // size of the icon
    // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    // popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var customPopup = "Mozilla Toronto Offices<br/><img src='http://joshuafrazier.info/images/maptime.gif' alt='maptime logo gif' width='350px'/>";

// specify popup options 
var customOptions =
{
    'minWidth': '500',
    'className': 'custom'
}

var cities = L.layerGroup();

var scheria = L.latLng([910, 130]);
var ithaka = L.latLng([620, 260]);
var elis = L.latLng([480, 550]);
var sparta = L.latLng([200,750]);
var argos = L.latLng([370, 820]);
var pylos = L.latLng([200, 570]);
var corinth = L.latLng([500,920]);

L.marker(scheria, { icon: cityIcon }).bindPopup('Scheria', customOptions).addTo(cities);
L.marker(ithaka, { icon: cityIcon }).bindPopup('Ithaka').addTo(cities);
L.marker(elis, { icon: cityIcon }).bindPopup('Elis').addTo(cities);
L.marker(sparta, { icon: cityIcon }).bindPopup('Sparta').addTo(cities);
L.marker(argos, { icon: cityIcon }).bindPopup('Argos').addTo(cities);
L.marker(pylos, { icon: cityIcon }).bindPopup('Pylos').addTo(cities);
L.marker(corinth, { icon: cityIcon }).bindPopup('Corinth').addTo(cities);


var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxZoom: 2,
    layers: [cities]
});

var bounds = [[0, 0], [1000, 1000]];
var image = L.imageOverlay('simple.png', bounds).addTo(map);

var tides = L.layerGroup();
var tidemap = L.imageOverlay('hightide.png', bounds).addTo(tides);


var overlays = {
    "Cities": cities,
    "High Tide": tides
};

L.control.layers(null, overlays).addTo(map);

map.fitBounds(bounds);