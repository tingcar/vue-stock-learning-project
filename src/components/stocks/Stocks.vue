<template>
  <div class="container">
    <div class="row row-cols-2">
      <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>
