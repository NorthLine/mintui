<template>
  <div class="layoutsBox">
    <div class="pageContent">
      <router-view />
    </div>
    <div class="bottomBanner">
      <mt-tabbar v-model="selected">
        <mt-tab-item v-for="(item,index) in tabList" :key="index" :id="item.name">
          <router-link :to="item.link">
            <img  :src="item.icon" />
            <p>{{item.name}}</p>
          </router-link>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      selected: '',
      tabList: [
        {
          name: '首页',
          link: '/',
          icon: require('@/assets/logo.png')
        },
        {
          name: '物品',
          link: '/goods',
          icon: require('@/assets/logo.png')
        },
        {
          name: '卖货',
          link: '/sales',
          icon: require('@/assets/logo.png')
        },
        {
          name: '列表',
          link: '/list',
          icon: require('@/assets/logo.png')
        },
        {
          name: '我的',
          link: '/user',
          icon: require('@/assets/logo.png')
        }
      ]
    }
  },
  mounted () {
    this.selected = this.$route.name
  }
}
</script>

<style scoped>
.bottomBanner img{
  width: 30%;
}
</style>
