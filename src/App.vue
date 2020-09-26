<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background: #efefef;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background: #fff;
}
/*公用css*/
.topBySelect{
  padding-top: 45px;
  text-align: center;
}
.TsheadBox{
  height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #fff;
}
.TshowListBox{
  height: calc( 100% - 44px );
  overflow: auto;
}
.showTxt{
  text-align: center;
  line-height: 44px;
}
.showTxt span{
  margin-right: 15px;
}
</style>
