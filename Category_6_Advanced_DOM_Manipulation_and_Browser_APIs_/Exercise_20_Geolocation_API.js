
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(
position => {
console.log('Latitude:', position.coords.latitude);
console.log('Longitude:', position.coords.longitude);
},
error => console.error('Geolocation error:', error)
);
} else {
console.error('Geolocation not supported.');
}

Explanation:
This API retrieves the device’s location coordinates, which can be used for mapping or location-based services.
