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
        :icon="icon"
        @click="selectFountain(fountain)"
      />
    </l-map>
  </div>
</template>

<script>
import L, { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
// eslint-disable-next-line
import { AwesomeMarkers } from "leaflet.awesome-markers";

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
      showMap: true,
      icon: L.AwesomeMarkers.icon({
        icon: "tint",
        prefix: "fa",
        markerColor: "cadetblue"
      })
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

<style>
@import "../../node_modules/leaflet/dist/leaflet.css";
@import "../../node_modules/leaflet.awesome-markers/dist/leaflet.awesome-markers.css";
@import "https://netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css";
</style>