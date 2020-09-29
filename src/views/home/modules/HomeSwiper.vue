<template>
  <div class="home-swiper">
    <swiper ref="swiper" v-if="banners.length">
      <slide v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.bgImg" alt="item.title">
        </a>
      </slide>
    </swiper>
  </div>
</template>

<script>
  import {
    Swiper,
    Slide
  } from '@common/swiper'

  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default: []
      }
    },
    components: {
      Swiper,
      Slide
    },
    methods: {
      endTimer() {
        this.$refs.swiper.endTimer()
      },
      setTimer() {
        if (this.$refs.swiper) {
          this.$refs.swiper.setTimer()
        }
      }
    },
  }
</script>

<style scoped>
  .home-swiper{
    margin-top: 10px;
  }
.ga-slide >>> img{
  border-radius: 12px;
  padding: 0 1.71% 0 1.71%;
}
</style>