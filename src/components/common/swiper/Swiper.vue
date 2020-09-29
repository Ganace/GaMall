<template>
  <div class="ga-swiper">
    <div class="swiper" ref="swiper" @touchstart="ts" @touchmove="tm" @touchend="te">
      <slot></slot>
    </div>
    <div class="pagination" v-if="showPagination">
      <slot name="pagination">
        <div class="pt0" v-if="paginationType == 0">
          <div>{{currentIndex}} / {{slideCount}}</div>
        </div>
      </slot>
    </div>
    <div class="arrows">
      <slot name="arrows"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Swiper',
    data() {
      return {
        slideCount: 0, //元素个数
        swiperWidth: 0, //swiper的宽度
        swiperStyle: 0, //swiper的样式
        currentIndex: 1, //当前index
        sliding: true, //是否正在滚动
      }
    },
    props: {
      // 是否显示分页器
      showPagination: {
        type: Boolean,
        default: true
      },
      // 分页器类型
      paginationType: {
        type: Number,
        default: 0
      },
      // 是否自动切换
      autoPlay: {
        type: Boolean,
        default: true
      },
      // 切换时间间隔
      delay: {
        type: Number,
        default: 3000
      },
      // 切换动画速度
      speed: {
        type: Number,
        default: 500
      },
      // 手指滑动切换比例
      moveRatio: {
        type: Number,
        default: 0.25
      }
    },
    mounted() {
      setTimeout(() => {
        // 操作swiper的Dom元素
        this._handleDom()
        // 加入滚动效果
        this._initSwiper()
      }, 1000)
    },
    methods: {
      _initSwiper() {
        // 自动切换，添加定时器
        if (this.autoPlay) {
          this.setTimer()
        }
      },
      _handleDom() {
        let sp = this.$refs.swiper
        let slides = this.$refs.swiper.children
        this.slideCount = slides.length;
        //为了循环轮播，轮播个数大于1，前后各添加一个slide
        if (this.slideCount > 1) {
          let clone0 = slides[0].cloneNode(true);
          let clone1 = slides[this.slideCount - 1].cloneNode(true)
          sp.insertBefore(clone1, slides[0])
          sp.appendChild(clone0)
          this.swiperWidth = sp.offsetWidth
          this.swiperStyle = sp.style
        }
        this.setTransform(-this.swiperWidth)
      },
      // 触摸开始事件
      ts(e) {
        if(!this.scrolling) {
          this.endTimer()
          // 记录触摸起始位置
          this.tsX = e.touches[e.touches.length - 1].pageX
        }
      } ,
      // 接触点改变事件
      tm(e) {
        // 计算拖动距离
        this.distance = e.touches[e.touches.length - 1].pageX - this.tsX
        let tmX = this.distance + (-this.currentIndex * this.swiperWidth)
        // 设置当前位置
        this.setTransform(tmX)
      } ,
      // 触摸结束事件
      te(e) {
        // 获取移动距离
        let dist = Math.abs(this.distance)
        // 计算切换方向
        if(dist == 0) {
          return
        }else if(this.distance > 0 && dist > this.swiperWidth * this.moveRatio) { // this.distance > 0 向右切换
          this.currentIndex--
        }else if(this.distance < 0 && dist > this.swiperWidth * this.moveRatio) { // this.distance < 0 向左切换
          this.currentIndex++
        }
        // 滚正位置，开始定时
        this.scroll()
        this.setTimer()
      } ,
      // 开始定时
      setTimer() {
        this.timer = window.setInterval(() => {
          this.currentIndex++
          this.scroll()
        }, this.delay)
      },
      // 停止定时
      endTimer() {
        window.clearInterval(this.timer)
      },
      // 切换动画
      scroll() {
        this.scrolling = true;
        this.setTransition(this.speed);
        this.setTransform(-this.currentIndex * this.swiperWidth)
        this.checkPosition()
        this.scrolling = false
      },
      // 位置校验
      checkPosition() {
        if (this.currentIndex > this.slideCount + 1) {
          this.currentIndex = 1
          this.setTransition(0)
          this.setTransform(-this.currentIndex * this.swiperWidth)
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.swiperWidth)
        }
        this.$emit('transitionEnd', this.currentIndex - 1)
      },
      setTransition(speed) {
        this.swiperStyle.webkitTransition = 'transform ' + speed + 'ms'
        this.swiperStyle.msTransition = 'transform ' + speed + 'ms'
        this.swiperStyle.OTransition = 'transform ' + speed + 'ms'
        this.swiperStyle.transition = 'transform ' + speed + 'ms'
      },
      setTransform(x) {
        this.swiperStyle.webkitTransform = `translate3d(${x}px, 0, 0)`
        this.swiperStyle.msTransform = `translate3d(${x}px, 0, 0)`
        this.swiperStyle.OTransform = `translate3d(${x}px, 0, 0)`
        this.swiperStyle.transform = `translate3d(${x}px, 0, 0)`
      }
    },
  }
</script>

<style scoped>
  .ga-swiper {
    position: relative;
    overflow: hidden;

    width: 100%;
    z-index: 1;
  }

  .swiper {
    display: flex;
  }

  .pagination {
    display: flex;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }
  .pt0{
    position: absolute;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    bottom: 0;
    right: 0;
    width: 32px;
    height: 16px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: rgba(0,0,0,.25);
    color: #fff;
    -webkit-border-top-left-radius: 8px;
    -moz-border-radius-topleft: 8px;
    border-top-left-radius: 8px;
    -webkit-border-bottom-right-radius: 8px;
    -moz-border-radius-bottomright: 8px;
    border-bottom-right-radius: 8px;
    font-size: 12px;
    text-align: center;
    font-weight: 400;
  }
  .pt0{
    right: 9px;
  }
</style>