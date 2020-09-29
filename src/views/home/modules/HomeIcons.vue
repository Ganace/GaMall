<template>
  <div class="home-icons">
    <icon-scroll>
      <icon-column :style="style" v-for="(column, index) in columnList">
        <a v-for="item in column" :href="item.link" >
          <img :src="item.img" alt="">
          <div class="title">{{item.title}}</div>
        </a>
      </icon-column>
    </icon-scroll>
  </div>
</template>

<script>
  import {
    IconColumn,
    IconScroll
  } from '@common/iconscroll'
  export default {
    name: 'HomeIcons',
    data(){
      return{}
    },
    props: {
      icons: {
        type: Array,
        default: []
      },
      row: {
        type: Number,
        default: 2
      },
      column: {
        type: Number,
        default: 5
      }
    },
    components: {
      IconColumn,
      IconScroll
    },
    computed: {
      columnList() {
        let columnList = []
        for (var i = 0; i < this.icons.length; i += this.row) {
          columnList.push(this.icons.slice(i, i + this.row));
        }
        return columnList
      },
      style(){
        return {
          width: '20%'
        }
      }
    },
  }
</script>

<style scoped>
</style>