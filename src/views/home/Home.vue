<template>
  <div class="home">
    <main-nav-bar></main-nav-bar>
    <home-swiper :banners="banners" ref="hSwiper"></home-swiper>
    <home-icons :icons="icons"></home-icons>
  </div>
</template>

<script>
  import MainNavBar from './modules/MainNavBar.vue'
  import HomeSwiper from './modules/HomeSwiper.vue'
  import HomeIcons from './modules/HomeIcons.vue'

  import {
    getHomeMultidata,
    getHomeData,
    Multidata
  } from "@/api/home";

  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        icons: []
      }
    },
    components: {
      MainNavBar,
      HomeSwiper,
      HomeIcons
    },
    created() {
      // 请求主要数据
      this.getMultiData()
    },
    // 离开home页轮播停止
    activated: function () {
      this.$refs.hSwiper.setTimer()
    },
    deactivated: function () {
      this.$refs.hSwiper.endTimer()
    },
    methods: {
      getMultiData() {
        getHomeMultidata().then(res => {
          // console.log(res);
          let data = new Multidata(res);
          // console.log(data);
          this.banners = data.banners;
          this.icons = data.icons;
          // console.log(this.banners);
        })
      }
    },
  }
</script>