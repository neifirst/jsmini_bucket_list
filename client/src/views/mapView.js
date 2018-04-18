const MapView = function(){
  this.places = []
}

MapView.prototype.addPlace = function(place) {
  this.places.push(place);
}

module.exports = MapView;
