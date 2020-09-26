<template>
  <div class="moneyClass">
      <div class="showTxt" @click="showChange">
        <span>{{ text }}</span><svg-icon icon-class="open"></svg-icon>
      </div>
      <div class="selectListBg" @click="showSelect=false" v-if="showSelect">
          <div class="selectList">
            <div class="selectArrow"></div>
            <div class="selectVi" v-for="(item,index) in classdata" :key="index" @click.prevent="selectThis(item)">{{item.asseta + '/' + item.assetb}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'monyClassSelect',
  props: ['value', 'classdata'],
  data () {
    return {
      showSelect: false,
      thisvalue: this.value
    }
  },
  computed: {
    text () {
      var txt = ''
      this.classdata.forEach((a) => {
        if (a.id === this.thisvalue) {
          txt = a.asseta + '/' + a.assetb
        }
      })
      return txt
    }
  },
  methods: {
    showChange () {
      this.showSelect = true
    },
    selectThis (item) {
      this.thisvalue = item.id
      this.showSelect = false
      this.$emit('input', this.thisvalue)
    }
  }
}
</script>

<style scoped>
.showTxt{
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.showTxt span{
  margin-right: 15px;
}
.selectListBg{
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.4);
  width: 100vw;
  height: 100vh;
}
.selectList{
  position: absolute;
  top: 70px;
  width: 150px;
  left: calc( 50vw - 75px );
  border-radius: 4px;
  background: #fff;
  padding: 10px;
}
.selectVi{
  padding: 10px 15px;
  border-bottom: 1px solid #dcdcdc;
}
.selectVi:last-child{
  border-bottom: none;
}
.selectArrow{
  position: absolute;
  z-index: 1000;
  top: -25px;
  left: 69px;
  overflow: hidden;
  width: 26px;
  height: 26px;
}
.selectArrow:after {
  position: absolute;
  top: 19px;
  left: 0;
  width: 26px;
  height: 26px;
  content: ' ';
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  border-radius: 3px;
  background: #fff;
}
</style>
