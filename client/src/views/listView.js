const ListView = function(){
  this.places = []
};

ListView.prototype.populateCountriesList = function(countries){
  const select = document.getElementById('country-list')
  countries.forEach(function(country, index) {
    let option = document.createElement('option')
    option.innerText = country.name;
    option.value = country.name;
    select.appendChild(option);
  })
};

ListView.prototype.getCountry = function (countries) {
  const selectedCountry = document.querySelector('select')
  selectedCountry.addEventListener('change', function() {
    let country = countries[this.value]
    populateInfo(country);
  })
}


ListView.prototype.renderInfo = function(bucketlistObject){
    const ul1 = document.querySelector('#places_list');
    const li1 = document.createElement('li');
    const ul2 = document.createElement('ul');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    li1.innerText = `Location: ${bucketlistObject.name}`;
    li1.classList.add("firstli");
    li2.innerText = `Landmarks: ${bucketlistObject.landmarks}`;
    li3.innerText = `When: ${bucketlistObject.when}`;
    ul1.appendChild(li1);
    li1.appendChild(ul2);
    ul2.appendChild(li2);
    ul2.appendChild(li3);
}


module.exports = ListView;
