const MapView = require('./views/mapView');
const Request = require('./services/request.js');

const mapView = new MapView();
const request1 = new Request('http://localhost:3000/api/bucketlist');
const request2 = new Request('https://restcountries.eu/rest/v2/all');

const getPlacesRequestComplete = function(allplaces){
  console.log(allplaces);
  allplaces.forEach(function(place){
    mapView.addplace(place);
  });
}

  const getCountriesRequestComplete = function(countries){
    console.log(countries);
    mapView.populateSelect(countries);
  }



const appStart = function(){
  debugger;
  request1.get(getPlacesRequestComplete);
  request2.get(getCountriesRequestComplete);

}


document.addEventListener('DOMContentLoaded', appStart);
