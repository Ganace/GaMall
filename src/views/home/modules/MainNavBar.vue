<template>
  <div id="main-nav-bar">
    <nav-bar>
      <template v-slot:left>
        <div class="icon">
          <img src="~@assets/img/logo.svg" alt="logo">
        </div>
      </template>
      <template v-slot:center><h3 class="title">GAMALL</h3></template>
      <template v-slot:right>
        <div class="icon">
          <img src="~@assets/img/navbar/cart.svg" alt="购物车">
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@common/navbar/NavBar'

  export default {
    name: 'MainNavBar',
    data() {
      return {
        msg: 'MainNavBar'
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .nav-bar{
    position: static;
    width: 100vw;
    background-color: var(--color-high-bg);
  }
  .title{
    color: var(--color-high-text);
    /* text-align: left; */
  }
  .icon img{
    width: 22px;
    height: 22px;
  }
  .icon{
    height: 44px;
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }
</style>