<template>
  <div>
    <form>
      <label for="assets">Enter Assets Value:</label>
      <input v-model="assets" @keyup.enter="sumAssets" type="text" name="assets" />
      <button @click.prevent="sumAssets">Get Assets Total</button>
    </form>
    <p>Total Assets: ${{ totalAssets }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      assets: 0,
    };
  },
  computed: mapState(['totalAssets']),
  methods: {
    sumAssets() {
      this.$store.commit('SUM_ASSETS', this.assets);
      this.assets = 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
