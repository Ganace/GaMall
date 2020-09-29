<template>
  <div class="tab-bar-item" @click="itemClick">
    <div>
      <div class="item-icon" v-show="!active">
        <slot name="icon"></slot>
      </div>
      <div class="item-icon-active" v-show="active">
        <slot name="icon-active"></slot>
      </div>
      <div class="item-text">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      link: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        msg: 'TabBarItem'
      }
    },
    computed: {
      active() {
        return this.$route.path.indexOf(this.link) !== -1
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;

    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }

  .item-icon>>>img,
  .item-icon-active>>>img {
    width: 24px;
    height: 24px;
  }

  .item-text {
    font-size: 12px;
  }
</style>