

var Bucketlist = function(){
  this.places_list = [];
}

Bucketlist.prototype.addPlace = function(bucketlistObject) {

  this.places_list.push(bucketlistObject);
}



Bucketlist.prototype.clear = function() {
  this.places_list = [];
  const ul = document.querySelector('#places_list');
  ul.innerHTML = '';
}

Bucketlist.prototype.remove = function (place) {
  this.places_list.splice()

};


 module.exports = Bucketlist;
