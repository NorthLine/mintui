<template>
  <div class="layoutsBox">
    <div class="pageContent">
      <router-view />
    </div>
    <div class="bottomBanner">
      <mt-tabbar v-model="selected">
        <mt-tab-item v-for="(item,index) in tabList" :key="index" :id="item.id">
          <router-link class="mainMenuTurn" :to="item.link">
            <p><svg-icon class-name="mainMenu" :icon-class="item.icon"></svg-icon></p>
            <p>{{item.name}}</p>
          </router-link>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>

var tabList = [
  {
    name: '购买',
    id: 'menu001',
    link: '/goods',
    icon: 'get'
  },
  {
    name: '出售',
    link: '/sales',
    id: 'menu002',
    icon: 'coupons'
  },
  {
    name: '币币',
    link: '/',
    id: 'menu003',
    icon: 'service'
  },
  {
    name: '成交记录',
    link: '/list',
    id: 'menu004',
    icon: 'list'
  },
  {
    name: '我的',
    link: '/user',
    id: 'menu005',
    icon: 'user'
  }
]

function getSelect (name) {
  console.log(name)
  var SetID = ''
  tabList.forEach((item, index) => {
    if (item.name === name) {
      SetID = item.id
    }
  })
  return SetID
}

export default {
  name: 'index',
  data () {
    return {
      tabList: tabList,
      selected: getSelect(this.$route.name)
    }
  },
  mounted () {
    console.log(this.selected)
  },
  methods: {

  }
}
</script>

<style scoped>
.layoutsBox{
  height: 100%;
}
.pageContent{
  height: calc( 100% - 52px );
}
.bottomBanner img{
  width: 30%;
}
.mainMenuTurn,
.mainMenuTurn:visited,
.mainMenuTurn:link,
.mainMenuTurn:active{
  font-size: 11px;
  text-decoration: none;
  color: #929292;
  padding: 0;
  margin: 0;
  background: transparent;
}
.mint-tab-item.is-selected .mainMenuTurn{
  color: #007aff;
}
.mainMenuTurn p{
  padding: 0;
  margin: 0;
}
.mainMenu{
  font-size: 18px;
  margin-bottom: 6px;
}

</style>
