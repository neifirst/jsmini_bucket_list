var Bucketlist = function(){
  this.places_list = [];
}

Bucketlist.prototype.addPlace = function(place) {
  this.places_list.push(place);
  this.render(place);
}

Bucketlist.prototype.clear = function() {
  this.places_list = [];
  const ul = document.querySelector('#places_list');
  ul.innerHTML = '';
}

Bucketlist.prototype.render = function(place){
    const ul = document.querySelector('#places_list');
    const li = document.createElement('li');
    const text = document.createElement('p');
    text.innerText = `Location: ${place.name}`;
    li.appendChild(text);
    ul.appendChild(li);
}

 module.exports = Bucketlist;
