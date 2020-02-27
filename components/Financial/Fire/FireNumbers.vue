<template>
  <div>
    <p>Amount needed for FIRE: {{ amountNeededForFire }}</p>
    <p>Annual Income after FIRE: {{ annualPostFireIncome }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['amountNeededForFire', 'annualPostFireIncome']),
};
</script>

<style lang="scss" scoped></style>
