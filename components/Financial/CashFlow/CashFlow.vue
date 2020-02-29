<template>
  <section>
    <MonthlyIncome />
    <MonthlyExpenses />
    <MonthlyVariance />
  </section>
</template>

<script>
import MonthlyIncome from '@/components/Financial/CashFlow/MonthlyIncome';
import MonthlyExpenses from '@/components/Financial/CashFlow/MonthlyExpenses';
import MonthlyVariance from '@/components/Financial/CashFlow/MonthlyVariance';

export default {
  components: {
    MonthlyIncome,
    MonthlyExpenses,
    MonthlyVariance,
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-flow: column nowrap;
}
</style>
