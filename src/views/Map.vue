<template>
  <div id="map" class="h-screen"></div>
</template>

<script>

import leaflet from "leaflet";
import {onMounted} from "vue";

export default {
  setup() {
    let myMap;
    onMounted(() => {
      myMap = leaflet.map('map').setView([47.47899027118699, -0.5670550262303574], 13);

      leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2LWJlbm9pdCIsImEiOiJjbDE4NXcyOXkxYmJuM2lxem83MHdyNnVlIn0.ZkE5O39Ky1g8e_GQ50hYTA', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZGV2LWJlbm9pdCIsImEiOiJjbDE4NXcyOXkxYmJuM2lxem83MHdyNnVlIn0.ZkE5O39Ky1g8e_GQ50hYTA'
      }).addTo(myMap);
    });
  },
}
</script>


