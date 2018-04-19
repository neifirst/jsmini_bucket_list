const container = document.querySelector('#world-map');

const MapMaker = function(container, latlng, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: {latlng},
    zoom: zoom
  });
  this.markers = []
}

MapMaker.prototype.addMarker = function (lat, long) {
  const marker = new google.maps.Marker({
    position: {lat: lat, lng: long},
    map: this.googleMap
  })
  this.markers.push(marker)
};
