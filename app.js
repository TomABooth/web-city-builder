/* Imports */

/* Get DOM Elements */
// city name changing with text box
const cityName = document.getElementById('city-name');
const cityDisplayName = document.getElementById('city-display-name');
// architecture changing with selection
const archSelect = document.getElementById('architecture-select');
const archDisplay = document.getElementById('architecture-image');
// climate changing with selection
const climateSelect = document.getElementById('climate-select');
const climateDisplay = document.getElementById('climate-image');
// attraction input box

/* State */
let city = {
    name: 'Portland',
    arch: 'metropolis',
    climate: 'temperate',
};

/* Events */
// city name change listener
cityName.addEventListener('input', () => {
    city.name = cityName.value;
    displayCity();
});
// architecture change listener
archSelect.addEventListener('change', () => {
    city.arch = archSelect.value;
    displayCity();
});
// climate change listener
climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});

/* Display Functions */
function displayCity() {
    // name change function
    cityDisplayName.textContent = city.name;
    // architecture change function
    archDisplay.src = 'assets/Arch/' + city.arch + '.jpeg';
    // climate change function
    climateDisplay.src = 'assets/climate/' city.climate + 'jpeg';
}

// (don't forget to call any display functions you want to run on page load!)
