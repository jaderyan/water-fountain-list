<template>
  <div id="app">
    <app-header />
    <main class="section">
      <div class="container">
        <div v-for="fountain in fountains" v-bind:key="fountain.id">
          <fountain v-bind:fountain="fountain"></fountain>
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

import API from "./service/api";

export default {
  name: "app",
  components: {
    Fountain,
    "app-footer": Footer,
    "app-header": Header
  },
  data() {
    return {
      fountains: null
    };
  },
  mounted() {
    API.get().then(response => (this.fountains = response.data));
  }
};
</script>

<style lang="scss">
</style>
