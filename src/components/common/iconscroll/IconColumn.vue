<template>
  <div class="icon-column">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'IconColumn',
    data() {
      return {
        msg: 'IconColumn'
      }
    },
    components: {

    }
  }
</script>

<style scoped>
  .icon-column {
    -ms-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    display: -webkit-box;
    display: -ms-flexbox;
    flex-direction: column;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    text-align: center;
  }
  .icon-column>>>a{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    margin-top: 6px;
  }
  .icon-column>>>img {
    width: 68%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: relative;
  }
  .icon-column>>>.title{
    margin-top: 3px;
    font-size: 13px;
    line-height: 18px;
    color: var(--color-text)
  }
</style>