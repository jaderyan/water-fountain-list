<template>
  <div class="card">
    <div class="card-content">
      <h3>{{fountain.name}}</h3>
      <p>{{fountain.address}}</p>
      <p>{{fountain.postcode}}</p>
      <p v-if="fountain.notes">{{fountain.notes}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "fountain",
  props: {
    fountain: Object
  }
};
</script>

<style scoped></style>
