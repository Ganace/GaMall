<template>
  <div class="nav-bar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center">GaMall</slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      msg: 'NavBar'
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .nav-bar{
    position: fixed;
    display: flex;
    z-index: 980;
    height: 44px;
    line-height: 44px;
    text-align: center;
    width: 100vw;
  }
  .nav-left{
    width: 44px;
  }
  .nav-center{
    flex: 1;
  }
  .nav-right{
    width: 44px;
  }
</style>
