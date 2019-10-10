<template>
  <div id="app">
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">Water Fountains</h1>
        </div>
      </div>
    </section>
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
import Footer from "./components/Footer";

import API from "./service/api";

export default {
  name: "app",
  components: {
    Fountain,
    "app-footer": Footer
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
