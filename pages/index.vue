<template>
  <div class="container">
    <h1>FIRE Calculator</h1>
    <Assets />
  </div>
</template>

<script>
import Assets from '../components/Financial/Assets';
export default {
  components: {
    Assets,
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
</style>
