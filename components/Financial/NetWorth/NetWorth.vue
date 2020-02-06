<template>
  <section>
    <h3>Total Net Worth</h3>
    <Assets />
    <Liabilities />
    <Worth />
  </section>
</template>

<script>
import Assets from '@/components/Financial/NetWorth/Assets';
import Liabilities from '@/components/Financial/NetWorth/Liabilities';
import Worth from '@/components/Financial/NetWorth/Worth';

export default {
  components: {
    Assets,
    Liabilities,
    Worth,
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 2em;
}
</style>
