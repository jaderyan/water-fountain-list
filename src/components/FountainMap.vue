<template>
  <div style="height: 600px; width: 100%">
    <l-map
      style="borderRadius: 17px"
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" />
      <l-marker
        v-for="fountain in fountains"
        v-bind:key="fountain.id"
        :lat-lng="latLang(fountain)"
        @click="selectFountain(fountain)"
      />
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "fountain-map",
  props: {
    fountains: Array,
    selectFountain: Function
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 14,
      center: latLng(53.797959, -1.543412),
      url:
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
      currentZoom: 8,
      currentCenter: latLng(47.41322, -1.219482),
      mapOptions: {
        zoomSnap: 0.5,
        attributionControl: false
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    latLang(fountain) {
      return latLng(fountain.latitude, fountain.longitude);
    }
  }
};
</script>

<style scoped>
@import "../../node_modules/leaflet/dist/leaflet.css";
</style>