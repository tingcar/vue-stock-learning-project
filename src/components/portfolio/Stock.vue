<template>
  <div class="col">
    <div class="card bg-light mb-3">
      <div class="card-heading">
        <h5 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price}} | Quantity: {{stock.quantity}} )</small>
        </h5>
      </div>
      <div class="card-body text-info">
        <div class="float-left">
          <input
            type="number"
            step="1"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientQuantity}"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-info"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0"
          >{{insufficientQuantity ? 'Not Enough': 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity * 1 > this.stock.quantity * 1;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
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