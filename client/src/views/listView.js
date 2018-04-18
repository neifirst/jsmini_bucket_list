const ListView = function(){
  this.places = []
};

const populateSelect = function(countries){
  const select = document.getElementById('country-list')
  countries.forEach(function(country, index) {
    let option = document.createElement('option')
    option.innerText = country.name;
    option.value = index
    select.appendChild(option);
    console.log(country);
  })
  displayFurtherInfo(countries);
};

const displayFurtherInfo = function () {
  const selectedCountry = document.querySelector('select')
  selectedCountry.addEventListener('change', function() {
    let country = countries[this.value]
  })
}


module.exports = ListView;
