<template>
  <div class="container">
    <h1>FIRE Calculator</h1>
    <section>
      <Assets />
      <Liabilities />
      <Worth />
    </section>
  </div>
</template>

<script>
import Assets from '@/components/Financial/Assets';
import Liabilities from '@/components/Financial/Liabilities';
import Worth from '@/components/Financial/Worth';

export default {
  components: {
    Assets,
    Liabilities,
    Worth,
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

  section {
    display: flex;
    flex-flow: column nowrap;
  }
}
</style>
