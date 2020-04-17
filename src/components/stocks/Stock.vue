<template>
  <div class="col">
    <div class="card bg-light mb-3">
      <div class="card-heading">
        <h5 class="card-header">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h5>
      </div>
      <div class="card-body text-success">
        <div class="float-left">
          <input
            type="number"
            step="1"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientFunds}"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0"
          >{{ insufficientFunds ? 'Insufficient Funds': 'buy'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>


<style scoped>
.danger {
  border: 1px solid red;
}
</style>