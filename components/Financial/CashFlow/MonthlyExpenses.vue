<template>
  <div>
    <form>
      <label for="expenses">Enter All Monthly Expenses:</label>
      <input v-model="expenses" @keyup.enter="sumExpenses" type="text" name="expenses" />
      <button @click.prevent="sumExpenses">Get Total</button>
    </form>
    <p>Total Monthly Expenses: {{ totalMonthlyExpenses }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      expenses: 0,
    };
  },
  computed: mapState(['totalMonthlyExpenses']),
  methods: {
    sumExpenses() {
      this.$store.commit('SUM_MONTHLY_EXPENSES', this.expenses);
      this.expenses = 0;
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
