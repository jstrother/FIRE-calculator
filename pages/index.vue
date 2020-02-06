<template>
  <div class="container">
    <h1>FIRE Calculator</h1>
    <section>
      <NetWorth />
      <CashFlow />
    </section>
  </div>
</template>

<script>
import NetWorth from '@/components/Financial/NetWorth/NetWorth';
import CashFlow from '@/components/Financial/CashFlow/CashFlow';

export default {
  components: {
    NetWorth,
    CashFlow,
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  text-align: center;
}
</style>
