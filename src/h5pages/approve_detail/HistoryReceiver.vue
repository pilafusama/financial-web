<template>
  <el-container>
    <el-header>
      <img class="back" src="../../assets/back.png" @click="back"> 历史收款人
    </el-header>
    <el-row class="receiver" v-for="item in list" :key="item.receive_name">
      <el-row class="receiver-name">
        <el-col :offset="2" :span="22">{{item.receive_name}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <hr class="spliter" />
        </el-col>
      </el-row>
      <el-row class="receiver-card" v-for="(card, index) in item.cards" :key="card.receive_account" @click.native="chooseReceiver(card,item.receive_name)">
        <el-row v-if="index != 0">
          <el-col :offset="2" :span="22">
            <hr class="spliter" />
          </el-col>
        </el-row>
        <el-col :offset="2" :span="11">{{card.account_bank}}</el-col>
        <el-col :span="11">{{card.receive_account |formatAccId}}</el-col>
      </el-row>
    </el-row>
  </el-container>

</template>

<script>
import { getHistoryReceiver } from '@/api/getData'
import { MessageBox } from 'mint-ui'
export default {
  name: 'HistoryReceiver',
  data () {
    return {
      list: []
    }
  },
  created () {
    getHistoryReceiver({ user_id: this.$route.params.user_id }).then(result => {
      if (result.retCode !== '0') {
        if (result.errMsg) {
          MessageBox('提示', result.errMsg)
        } else {
          MessageBox('提示', '数据异常')
        }
      } else {
        this.list = result.receive_list
      }
    })
  },
  methods: {
    back () {
      history.go(-1)
    },
    chooseReceiver (card, receiveName) {
      this.$store.commit('setReceiveInfo', {
        receive_name: receiveName,
        receive_account: card.receive_account.replace(/\s/g, '').replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, '$1 '),
        account_bank_code: card.account_bank_code,
        account_bank: card.account_bank,
        account_area: card.account_area === null ? '' : card.account_area,
        account_city_code: card.account_city_code === null ? '' : card.account_city_code,
        account_city: card.account_city === null ? '' : card.account_city,
        account_subbank_code: card.account_subbank_code === null ? '' : card.account_subbank_code,
        account_subbank: card.account_subbank === null ? '' : card.account_subbank
      })
      this.$router.push({ name: '收款信息' })
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
}
.receiver .el-row {
  background-color: white;
}

.receiver-name {
  font-weight: bold;
  font-size: 5vw;
  color: #000000;
  margin-top: 4vh;
  line-height: 11vw;
}
.receiver-card {
  font-size: 4vw;
  color: #888888;
  line-height: 11vw;
}
.spliter {
  margin: 0;
  background-color: #d9d9d9;
  height: 1px;
  border: none;
}
</style>
