<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item link="/home">
        <template v-slot:icon>
          <img src="~@assets/img/tabbar/home.svg" alt="首页">
        </template>
        <template v-slot:icon-active>
          <img src="~@assets/img/tabbar/homefill.svg" alt="首页">
        </template>
        <template v-slot:text>首页</template>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <template v-slot:icon>
          <img src="~@assets/img/tabbar/category.svg" alt="分类">
        </template>
        <template v-slot:icon-active>
          <img src="~@assets/img/tabbar/categoryfill.svg" alt="分类">
        </template>
        <template v-slot:text>分类</template>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <template v-slot:icon>
          <img src="~@assets/img/tabbar/cart.svg" alt="购物车">
        </template>
        <template v-slot:icon-active>
          <img src="~@assets/img/tabbar/cartfill.svg" alt="购物车">
        </template>
        <template v-slot:text>购物车</template>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <template v-slot:icon>
          <img src="~@assets/img/tabbar/profile.svg" alt="我的">
        </template>
        <template v-slot:icon-active>
          <img src="~@assets/img/tabbar/profilefill.svg" alt="我的">
        </template>
        <template v-slot:text>我的</template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import {TabBar, TabBarItem} from '@common/tabbar'

  export default {
    name: 'MainTabBar',
    data () {
      return {
        msg: 'MainTabBar'
      }
    },
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
