<template>
  <p>Total Monthly Variance: {{ (totalMonthlyIncome - totalMonthlyExpenses).toFixed(2) }}</p>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['totalMonthlyIncome', 'totalMonthlyExpenses']),
};
</script>

<style lang="scss" scoped></style>
