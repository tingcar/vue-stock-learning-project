<template>
  <div>
    <h1>Trade or View Your Protfolio</h1>
    <h6>You may Save or Load your data</h6>
    <h6>Click on 'End Day' to bein a new day.</h6>
    <hr />
    <p>Your Funds: {{funds}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>