<template>
  <div class="flex space-x-2">
    <div class="w-3/12 h-full my-5 ml-36 mr-2  bg-white rounded-lg">
      <div class="flex items-center justify-around my-5">
        <h1 class="font-semibold text-xl">Vos lieux enregistrés</h1>
        <button class="rounded h-8 w-36 bg-indigo-800 text-white">Ajouter un lieu</button>
      </div>
    </div>
    <div id="map" class="w-9/12 my-5 rounded-lg relative flex">
    </div>
  </div>
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


