<template>
  <div class="lineBlock">
    <div class="showDetails">
      <div class="leftPhoto">
        匿
      </div>
      <div class="rightConts">
        <div class="line1">
          <span class="name">匿名用户</span>
          <div class="price">0.2235CTO</div>
        </div>
        <div class="line2">限额：1 -  200 C2T</div>
      </div>
    </div>
    <div class="lineButtons">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: ['data']
}
</script>

<style scoped>
.lineBlock{
  text-align: left;
  height: 82px;
  padding: 11px 15px;
  position: relative;
}
.leftPhoto{
  position: absolute;
  top: 11px;
  left: 15px;
  width: 28px;
  height: 28px;
  border-radius: 14px;
  font-size: 14px;
  background: #adadad;
  color: #dcdcdc;
  text-align: center;
  line-height: 28px;
}
.rightConts{
  margin-left: 40px;
  font-size: 14px;
  line-height: 25px;
}
.price{
  float: right;
  color: #26a2ff;
}
.line2{
  height: 20px;
  line-height: 20px;
  font-size: 12px;
}
.lineButtons{
  text-align: right;
  padding-bottom: 10px;
  border-bottom: 1px solid #dcdcdc;
}
</style>
