<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar',
    data() {
      return {
        msg: 'TabBar'
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .tab-bar {
    background-color: var(--color-high-bg);
    border-top: 1px solid #e4e4e4;
    height: 49px;
    z-index: 980;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
  }
</style>