<template>
  <div class="topBySelect">
    <div v-if="classData.length>0" class="TsheadBox">
      <moneyClassSelect v-model="selectId" :classdata="classData"></moneyClassSelect>
    </div>

    <div class="TshowListBox">
      <div v-for="(item,index) in dataList" :key="index">
        <listItem :data="item">
          <mt-button type="primary" @click="buyGoods(item)" size="small">出售</mt-button>
        </listItem>
      </div>
    </div>

  </div>
</template>

<script>
import moneyClassSelect from '@/components/monyClassSelect'
import listItem from '@/components/listItem'
export default {
  name: 'index',
  components: {moneyClassSelect, listItem},
  data () {
    return {
      popupVisible: false,
      selectId: '0',
      classData: [
        {asseta: 'QKI', assetb: 'CCT', id: '0'},
        {asseta: 'UZF', assetb: 'USDT', id: '1'},
        {asseta: 'C2T', assetb: 'CCT', id: '2'},
        {asseta: 'CCT', assetb: 'USDT', id: '3'},
        {asseta: 'QKI', assetb: 'USDT', id: '4'},
        {asseta: 'USDT', assetb: 'CNY', id: '5'}
      ],
      dataList: [
        {
          'id': 'id',
          'suid': '该发布广告用户id',
          'real_name': '真实姓名',
          'amount': '数量',
          'quota': '限额',
          'price': '单价',
          'coinsa': 'A资产',
          'coinsb': 'A资产',
          'coinsa_name': 'A资产名称',
          'coinsb_name': 'B资产名称',
          'cny': 'CNY'
        },
        {
          'id': 'id2',
          'suid': '该发布广告用户id',
          'real_name': '真实姓名',
          'amount': '数量',
          'quota': '限额',
          'price': '单价',
          'coinsa': 'A资产',
          'coinsb': 'A资产',
          'coinsa_name': 'A资产名称',
          'coinsb_name': 'B资产名称',
          'cny': 'CNY'
        }
      ]
    }
  },
  watch: {
    selectId () {
      console.log('2222' + '_______' + this.selectId)
    }
  },
  methods: {
    buyGoods (item) {
      console.log(item)
    }
  }
}
</script>

<style scoped>
</style>
