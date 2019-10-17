<template>
  <div id="app">
    <app-header />
    <main class="container">
      <div class="section">
        <div class="columns">
          <div class="column is-two-thirds">
            <fountain-map v-bind:fountains="fountains" v-bind:selectFountain="setFountain" />
          </div>
          <div class="column">
            <fountain v-if="selectedFountain" v-bind:fountain="selectedFountain"></fountain>
          </div>
        </div>
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script>
import Fountain from "./components/Fountain";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FountainMap from "./components/FountainMap";

import API from "./service/api";

export default {
  name: "app",
  components: {
    Fountain,
    "app-footer": Footer,
    "app-header": Header,
    "fountain-map": FountainMap
  },
  data() {
    return {
      fountains: null,
      selectedFountain: null
    };
  },
  mounted() {
    API.get().then(response => (this.fountains = response.data));
  },
  methods: {
    setFountain(fountain) {
      this.selectedFountain = fountain;
    }
  }
};
</script>

<style lang="scss">
@import "./styles/global.scss";
</style>
