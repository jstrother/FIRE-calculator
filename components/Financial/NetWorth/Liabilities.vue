<template>
  <div>
    <form>
      <label for="liabilites">Enter Liabilities Value:</label>
      <input v-model="liabilites" @keyup.enter="sumLiabilities" type="text" name="liabilites" />
      <button @click.prevent="sumLiabilities">Get Total</button>
    </form>
    <p>Total Liabilities: {{ totalLiabilities }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      liabilites: '',
    };
  },
  computed: mapState(['totalLiabilities']),
  methods: {
    sumLiabilities() {
      this.$store.commit('TOTAL_LIABILITIES', this.liabilites);
      this.liabilites = '';
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-flow: column nowrap;
  padding: 0.5em;
}
</style>
