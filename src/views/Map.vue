<template>
  <div class="flex space-x-2 h-screen mt-16">
    <div class="w-3/12 my-5 ml-36 mr-2 bg-white rounded-lg">
      <div class="flex items-center justify-around my-5">
        <h1 class="font-semibold text-xl">Vos lieux enregistrés</h1>
        <button class="rounded h-8 w-36 bg-sky-700 text-white">
          Ajouter un lieu
        </button>
      </div>
      <div
        v-for="point in 5"
        :key="point"
        class="bg-gray-100 my-2 w-11/12 flex mx-auto rounded-lg h-24"
      >
        <div class="flex items-center pl-10">
          <f-icon class="h-8 w-8 text-sky-700" name="map-pin" />
        </div>
        <div class="flex flex-col justify-center text-left px-4">
          <h2 class="font-semibold">Visite de maisonen ruine en Bretagne</h2>
          <p class="line-clamp-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ornare, justo eget laoreet pellentesque, turpis lorem euismod lorem,
            vitae lacinia odio quam non nibh. Sed sit amet eleifend eros, vitae
            accumsan lorem. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas.
          </p>
          <button
            class="text-sky-700 font-medium text-sm flex items-center px-4 mt-2"
          >
            Voir plus en détails <f-icon class="h-5 w-5" name="chevron-down" />
          </button>
        </div>
      </div>
    </div>
    <div id="map" class="w-9/12 my-5 rounded-lg relative flex"></div>
    <Modal :isOpen="isOpen" @close="setIsOpen" class="z-[9999]" />
  </div>
</template>

<script setup>
import leaflet from "leaflet";
import { onMounted, ref } from "vue";
import Modal from "@/components/modal/Modal.vue";

const isOpen = ref(false);

function setIsOpen(value) {
  isOpen.value = value;
}

let myMap;
const coordinate = ref([]);

onMounted(() => {
  myMap = leaflet
    .map("map")
    .setView([47.47899027118699, -0.5670550262303574], 13);

  myMap.on("click", function (e) {
    coordinate.value = e.latlng;
    setIsOpen(true);
    leaflet.marker(e.latlng).addTo(myMap);
  });

  leaflet
    .tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2LWJlbm9pdCIsImEiOiJjbDE4NXcyOXkxYmJuM2lxem83MHdyNnVlIn0.ZkE5O39Ky1g8e_GQ50hYTA",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiZGV2LWJlbm9pdCIsImEiOiJjbDE4NXcyOXkxYmJuM2lxem83MHdyNnVlIn0.ZkE5O39Ky1g8e_GQ50hYTA",
      }
    )
    .addTo(myMap);
});
</script>


