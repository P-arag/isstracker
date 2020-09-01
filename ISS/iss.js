const map = document.getElementById("issMap");
const attribution =
  '&copy; <a href= "https://openstreetmap.org/copywright">OpenStreetMap</a> contributors';
const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
// const url = "https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js";

// https://api.wheretheiss.at/v1/satellites/25544
async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data.latitude);
  console.log(data.longitude);
  document.getElementById("lat").innerHTML = data.latitude;
  document.getElementById("long").innerHTML = data.longitude;
  L.marker([data.latitude, data.longitude], { icon: Icon }).addTo(mymap);
  //   L.marker.setLatLng([data.latitude, data.longitude]).addTo(mymap);
}
getISS();
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const mymap = L.map(map).setView([0, 0], 2);
const Icon = L.icon({
  iconUrl: "ISS.png",
  iconSize: [50, 32],
  iconAnchor: [25, 16],
});
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);
