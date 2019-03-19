<template>
  <el-container>
    <el-header>
      <a @click="back"><img class="back" src="../../assets/back.png"></a>选择开户银行
    </el-header>
    <el-form>
      <el-row type="flex" justify="space-around">
        <el-col class="searchBackground" :span="24">
          <el-input v-model="searchName" placeholder="请输入关键字搜索" class="searchInput" prefix-icon="el-icon-search" size="medium">
          </el-input>
        </el-col>
      </el-row>
    </el-form>
    <el-row class="receiver-card" :key="index" v-for="(item ,index) in bankList" @click.native="chooseReceiver(item)">
      <el-col>{{item.bank_name}}
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import { queryBank } from '@/api/getData'
import { MessageBox } from 'mint-ui'
export default {
  name: 'SelectBank',
  data () {
    return {
      searchName: '',
      bankList: [],
      mysrl: ''
    }
  },
  created: function () {
    this.getBankList()
  },
  methods: {
    back () {
      history.back()
    },
    async getBankList () {
      let param = {
        key: this.searchName
      }
      let result = await queryBank(param)
      if (result.retCode !== '0') {
        if (result.errMsg) {
          MessageBox('提示', result.errMsg)
        } else {
          MessageBox('提示', '数据异常')
        }
      } else {
        if (result.retCode === '0' && result.errMsg === 'ok') {
          this.bankList = result.bank_list
        }
      }
    },
    chooseReceiver (item) {
      this.$store.commit('setReceiveInfo', {
        account_bank: item.bank_name,
        account_bank_code: item.bank_code,
        account_area: '',
        account_city: '',
        account_city_code: '',
        account_subbank: '',
        account_subbank_code: ''
      })
      this.$router.push({ name: '收款信息' })
    }

  },
  watch: {
    searchName: function () {
      this.getBankList()
    }
  }
}
</script>
<style scoped>
.searchBackground {
  /*width: 750px;*/
  height: 60px;
  background: #dfdfe2;
}
.searchInput {
  text-align: center;
  display: inline-block;
  margin: 2vw 5%;
  padding: auto;
  width: 90%;
  font-size: 4vw;
  color: #9d9d9e;
}
.searchClass {
  display: none;
}
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
  border-bottom: 1px solid #d9d9d9;
  margin-left: 5vw;
}
.spliter {
  margin: 0;
  background-color: #d9d9d9;
  height: 1px;
  border: none;
}
.img {
  width: 4vw;
  height: 4vw;
}
</style>
