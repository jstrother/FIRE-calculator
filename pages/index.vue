<template>
  <div class="container">
    <TabCard :tabs="tabs" :initialTab="initialTab">
      <template slot="tab-head-netWorth">Net Worth</template>
      <template slot="tab-panel-netWorth">
        <NetWorth />
      </template>
      <template slot="tab-head-cashFlow">Cash Flow</template>
      <template slot="tab-panel-cashFlow">
        <CashFlow />
      </template>
      <template slot="tab-head-fireNumbers">FIRE Numbers</template>
      <template slot="tab-panel-fireNumbers">
        <FireNumbers />
      </template>
    </TabCard>
  </div>
</template>

<script>
import NetWorth from '@/components/Financial/NetWorth/NetWorth';
import CashFlow from '@/components/Financial/CashFlow/CashFlow';
import FireNumbers from '@/components/Financial/Fire/FireNumbers';
import TabCard from '@/components/Structural/TabCard';

export default {
  components: {
    NetWorth,
    CashFlow,
    FireNumbers,
    TabCard,
  },
  data() {
    return {
      initialTab: 'netWorth',
      tabs: ['netWorth', 'cashFlow', 'fireNumbers'],
    };
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  max-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  text-align: center;
}
</style>
