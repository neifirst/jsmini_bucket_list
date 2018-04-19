const container = document.querySelector('#world-map');

const MapMaker = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = []
}

MapMaker.prototype.addMarker = function (lat, lng) {
  const lat = country.latlng[0];
  const lng = country.latlng[1];
  const marker = new google.maps.Marker({
    position: {lat: lat, lng: lng}
    map: this.googleMap
  })
  this.markers.push(marker)
};


module.exports = MapMaker;
