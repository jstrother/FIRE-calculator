<template>
  <p>Total Worth: {{ (totalAssets - totalLiabilities).toFixed(2) }}</p>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['totalAssets', 'totalLiabilities']),
};
</script>

<style lang="scss" scoped></style>
