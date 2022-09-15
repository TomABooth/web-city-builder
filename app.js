/* Imports */

/* Get DOM Elements */
const cityName = document.getElementById('city-name');
const cityDisplay = document.getElementById('city-display');
const cityDisplayName = document.getElementById('city-display-name');

/* State */
let city = {
    name: 'Portland',
};

/* Events */
cityName.addEventListener('input', () => {
    city.name = cityName.value;
    displayCity();
});

/* Display Functions */
function displayCity() {
    cityDisplayName.textContent = city.name;
}

// (don't forget to call any display functions you want to run on page load!)
