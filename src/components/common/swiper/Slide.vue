<template>
  <div class="ga-slide" @click="slideClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Slide',
    data () {
      return {
        msg: 'Slide'
      }
    },
    methods: {
      slideClick() {
        this.$emit('slideClick')
      }
    },
  }
</script>

<style scoped>
  .ga-slide {
    width: 100%;
    flex-shrink: 0;
    z-index: 9;
  }

  .ga-slide >>> img{
    width: 100%;
  }
</style>
