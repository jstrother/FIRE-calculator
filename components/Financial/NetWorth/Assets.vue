<template>
  <div>
    <form>
      <label for="assets">Enter Assets Value:</label>
      <input v-model="assets" @keyup.enter="sumAssets" type="text" name="assets" />
      <button @click.prevent="sumAssets">Get Total</button>
    </form>
    <p>Total Assets: {{ totalAssets }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      assets: '',
    };
  },
  computed: mapState(['totalAssets']),
  methods: {
    sumAssets() {
      this.$store.commit('TOTAL_ASSETS', this.assets);
      this.assets = '';
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: 0.5em;
}
</style>
