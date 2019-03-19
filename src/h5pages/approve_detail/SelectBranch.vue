<template>
  <el-container>
    <el-header>
      <a @click="back"><img class="back" src="../../assets/back.png"></a>选择支行
    </el-header>
    <el-form>
      <el-row type="flex" justify="space-around">
        <el-col class="searchBackground" :span="24">
          <el-input v-model="branchName" placeholder="请输入关键字搜索" class="searchInput" prefix-icon="el-icon-search" size="medium">
            <!--<i class="el-icon-search" slot="prefix"></i>-->
          </el-input>
        </el-col>
      </el-row>
    </el-form>
    <div v-if="showList">
      <div v-if="sub_bank_list_before.length === 0" style="text-align: center;margin-top: 20px;">暂时没有相关支行~</div>
      <el-row class="receiver-card" v-for="item in sub_bank_list_after" :key="item.subbank_code" @click.native="chooseReceiver(item)">
        <!--<img class="img" :src="mysrl " width="22 " height="22 " style="padding-right:15px; " />-->{{item.subbank_name}}
      </el-row>
    </div>
  </el-container>
</template>
<script>
import { getBranchReceiver, getCityNameReceiver } from '@/api/getData'
import { MessageBox } from 'mint-ui'
export default {
  name: 'SelectBranch',
  data () {
    return {
      reqData: {
        account_bank_code: '',
        key: '',
        account_city_code: ''
      },
      sub_bank_list_before: [],
      sub_bank_list_after: [],
      branchName: '',
      showList: false
    }
  },
  mounted: function () {
    this.getBranchList()
  },
  methods: {
    back () {
      history.back()
    },
    async getBranchList () {
      this.reqData.account_bank_code = this.$store.state.receiveInfo.account_bank_code
      this.reqData.account_city_code = this.$store.state.receiveInfo.account_city_code
      let result = await getBranchReceiver(this.reqData)
      if (result.retCode !== '0') {
        if (result.errMsg) {
          MessageBox('提示', result.errMsg)
        } else {
          MessageBox('提示', '数据异常')
        }
      } else {
        let list1 = result.sub_bank_list
        let list2 = []
        list1.forEach(function (item) {
          let obj = {}
          obj.subbank_code = item.subbank_code
          // obj.account_bank_code = item.account_bank_code
          obj.subbank_name = item.subbank_name
          // obj.account_city = item.account_city
          obj.subbank_city_code = item.subbank_city_code
          list2.push(obj)
        })
        this.sub_bank_list_before = list2
        this.sub_bank_list_after = list2
      }
      this.showList = true
    },
    querySearch (branchName) {
      let subBankList = this.sub_bank_list_before
      this.sub_bank_list_after = branchName ? subBankList.filter(this.createFilter(branchName)) : subBankList
    },
    createFilter (branchName) {
      return (subBankList) => {
        return (subBankList.subbank_name.toLowerCase().indexOf(branchName.toLowerCase()) > -1)
      }
    },
    async chooseReceiver (item) {
      this.$store.commit('setReceiveInfo', {
        account_subbank: item.subbank_name,
        account_subbank_code: item.subbank_code
      })
      this.$router.push({ name: '收款信息' })
    }
  },
  watch: {
    branchName: function (val) {
      this.querySearch(val)
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
  width: 3vw;
  height: 3vw;
}
</style>
