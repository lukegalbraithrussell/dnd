
var cityIcon = L.icon({
    iconUrl: 'icons/icon.svg',

    iconSize: [30, 30], // size of the icon
    // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    // popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var shrineIcon = L.icon({
    iconUrl: 'icons/acroplis.png',

    iconSize: [50, 40], // size of the icon
    // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    // popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});


// specify popup options 
var customOptions =
{
    'permanent': "true",
    'className': 'custom'
}

var cities = L.layerGroup();

var scheria = L.latLng([910, 150]);
var ithaka = L.latLng([640, 280]);
var elis = L.latLng([500, 500]);
var sparta = L.latLng([190,750]);
var argos = L.latLng([340, 870]);
var pylos = L.latLng([200, 570]);
var corinth = L.latLng([470,840]);
var arcadia = L.latLng([380,650]);

L.marker(scheria, { icon: cityIcon }).bindPopup('Scheria').addTo(cities);
L.marker(ithaka, { icon: cityIcon }).bindPopup('Ithaka').addTo(cities);
L.marker(elis, { icon: cityIcon }).bindPopup('Elis').addTo(cities);
L.marker(sparta, { icon: cityIcon }).bindPopup('Sparta').addTo(cities);
L.marker(argos, { icon: cityIcon }).bindPopup('Argos').addTo(cities);
L.marker(pylos, { icon: cityIcon }).bindPopup('Pylos').addTo(cities);
L.marker(corinth, { icon: cityIcon }).bindPopup('Corinth').addTo(cities);
L.marker(arcadia, { icon: shrineIcon}).bindPopup('Arcadia').addTo(cities);

// var marker = new L.marker([300,300], { opacity: 0.01 }); //opacity may be set to zero
// marker.bindTooltip("My Label", {permanent: true, className: "my-label", offset: [0, 0] });
// marker.addTo(cities);
var bounds = [[0, 0], [1000, 1000]];

var tides = L.layerGroup();
var tidemap = L.imageOverlay('images/tides.png', bounds).addTo(tides);

var borders = L.layerGroup();
var bordersmap = L.imageOverlay('images/outline.png', bounds).addTo(borders);
var city_names = L.imageOverlay('images/text.png', bounds).addTo(borders);

var routes = L.layerGroup();
var routemap = L.imageOverlay('images/route.png', bounds).addTo(routes);



var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxZoom: 2,
    layers: [borders, cities, routes] // default layers
});

var image = L.imageOverlay('images/fog.png', bounds).addTo(map);
bordersmap.addTo(map); // puts these on top of image on start
city_names.addTo(map);

var overlays = {
    "Borders" : borders,
    "Cities": cities,
    "Party Route": routes,
    "High Tide": tides

};

L.control.layers(null, overlays).addTo(map);

map.fitBounds(bounds);