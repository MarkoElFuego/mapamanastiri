// Initialize the map
var map = L.map('map').setView([44.0165, 21.0059], 7); // Centered on Serbia

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Monasteries data (example)
var monasteries = [
    { name: "Studenica Monastery", lat: 43.4817, lon: 20.5251, description: "Studenica Monastery is a 12th-century Serbian Orthodox monastery." },
    { name: "Žiča Monastery", lat: 43.6844, lon: 20.6861, description: "Žiča Monastery is an early 13th-century Serb Orthodox monastery." },
    // Add more monasteries here
];

// Add markers for each monastery
monasteries.forEach(function(monastery) {
    var marker = L.marker([monastery.lat, monastery.lon]).addTo(map);
    marker.bindPopup("<b>" + monastery.name + "</b><br>" + monastery.description);
});
