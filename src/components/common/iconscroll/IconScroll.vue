<template>
  <div class="icon-scroll">
    <div class="scroll" ref="scroll">
      <slot></slot>
    </div>
    <div ref="scrollnav" class="scroll-nav" v-if="scrollNav"><i ref="i" class="scroll-nav-i"></i></div>
  </div>
</template>

<script>
  export default {
    name: 'IconScroll',
    data() {
      return {
        msg: ""
      }
    },
    props: {
      scrollNav: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      //在mounted钩子函数绑定滚动条事件
      this.$refs.scroll.addEventListener('scroll', this.scroll);
    },
    methods: {
      scroll(e) {
        // 计算拖动距离
        this.navW = this.$refs.scrollnav.offsetWidth - this.$refs.i.offsetWidth
        this.scrollL = this.$refs.scroll.scrollLeft
        this.scrollW = this.$refs.scroll.offsetWidth
        let mX = this.navW * (this.scrollL / this.scrollW)
        // 设置当前位置
        this.setTransform(mX)
      },
      setTransform(x) {
        this.$refs.i.style.webkitTransform = `translate3d(${x}px, 0, 0)`
        this.$refs.i.style.msTransform = `translate3d(${x}px, 0, 0)`
        this.$refs.i.style.OTransform = `translate3d(${x}px, 0, 0)`
        this.$refs.i.style.transform = `translate3d(${x}px, 0, 0)`
      }
    },
  }
</script>

<style scoped>
  .icon-scroll {
    position: relative;
    overflow: hidden;
  }

  .scroll {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    padding-bottom: 42px;
    margin-bottom: -31px;
  }

  .scroll-nav {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -24px;
    width: 48px;
    height: 2px;
    display: block;
    background: var(--color-high-bg);
    border-radius: 2px;
    overflow: hidden;
  }

  .scroll-nav-i {
    display: block;
    width: 24px;
    height: 2px;
    margin: 0 3px 0 0;
    background-color: var(--color-high-text);
    border-radius: 2px;
  }
</style>