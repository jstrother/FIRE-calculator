<template>
  <div class="card">
    <header class="card-header">
      <ul class="tab-heads">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{
            'tab-head--active': activeTab === tab,
          }"
          @click="switchTab(tab)"
          class="tab-head"
        >
          <slot :name="tabHeadSlotName(tab)">{{ tab }}</slot>
        </li>
      </ul>
    </header>
    <main class="card-body">
      <div class="tab-panel">
        <slot :name="tabPanelSlotName"></slot>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    initialTab: {
      type: String,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeTab: this.initialTab,
    };
  },
  computed: {
    tabPanelSlotName() {
      return `tab-panel-${this.activeTab}`;
    },
  },
  methods: {
    tabHeadSlotName(tabName) {
      return `tab-head-${tabName}`;
    },
    switchTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-header {
  background-color: #000000;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #fff;
  padding: 15px 8px 0;
}

.tab-heads {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: 6px;
  margin-top: -4px;
}

.tab-head {
  padding: 5px 18px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
  cursor: pointer;
}

.tab-head--active {
  background-color: #fff;
  color: #000000;
  transition: 0.4s;
}

.card-body {
  padding: 20px 16px;
}
</style>
