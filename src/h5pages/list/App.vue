<template>

  <div style="height: 100%;" id="app">
    <div v-if="showList">
    <div v-if="list.length === 0" style="text-align: center;margin-top: 20px;">暂时没有审批单数据~</div>
    <ul class="order-list" infinite-scroll-disabled="loading" infinite-scroll-distance="10" v-if="list.length > 0">
      <li v-for="(item, index) in list" :key="index" @click="toDetail(item.orderId, item.state)">
        <div>
          <span class="order-id">{{ item.orderId }}</span>
          <span class="state" :class="{'danger': item.state === 10 && item.payment_state === 'FAIL'}">{{ transferStatus(item.state, item.payment_state) }}</span>
        </div>
        <div>
          <span class="type">{{ transferType(item.type) }}</span>
          <span class="date">{{ item.date }}</span>
        </div>
      </li>
    </ul>
    </div>

  </div>

</template>

<script>
import { MessageBox } from 'mint-ui'
import { getApprovalList } from '@/api/getData'
import cookieUtils from '@/utils/CookieUtils'
import { gotoH5Login } from '@/utils/common'
import { getH5UserInfo } from '@/api/getData'
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      showList: false,
      topStatus: '',
      list: [],
      form: {
        corp_id: '',
        sign: '',
        timeStamp: '33555',
        nonce: 'random',
        approval_state: 0,
        user_id: ''
      }
    }
  },
  created () {
    // console.info(this.$route.query.code)
    if (process.env.NODE_ENV === 'development') {
      this.form.corp_id = 'wwab433cc997fe7ff3'
      this.form.sign = '93cd4d4f-c68f-4454-8b60-214e2e6ecf89'
      this.form.logSsid = '93cd4d4f-c68f-4454-8b60-214e2e6ecf89'
      this.form.user_id = 'unknown'
    } else {
      this.form.corp_id = cookieUtils.getCookie('corpid')
      this.form.sign = cookieUtils.getCookie('logSsid')
      this.form.logSsid = cookieUtils.getCookie('logSsid')
      this.form.user_id = cookieUtils.getCookie('userid')
    }
    if (this.form.corp_id === '' || this.form.sign === '') {
      if (this.$route.query.code === undefined || this.$route.query.code === '' 
        || this.$route.query.state === undefined || this.$route.query.state === '') {
          gotoH5Login()
          return
        } else {
          this.getUser()

          this.form.corp_id = cookieUtils.getCookie('corpid')
          this.form.sign = cookieUtils.getCookie('logSsid')
          this.form.logSsid = cookieUtils.getCookie('logSsid')
          this.form.user_id = cookieUtils.getCookie('userid')
        }
    }
    this.loadData()
  },
  computed: {
  },
  methods: {
    async loadData () {
      let result = await getApprovalList(this.form)
      if (result.retCode !== '0') {
        if (result.errMsg) {
          MessageBox('提示', result.errMsg)
        } else {
          MessageBox('提示', '数据异常')
          this.$router.push({ path: '/' })
        }
      } else {
        let list = result.approval_list
        this.list = []
        list.forEach((data) => {
          this.list.push({
            orderId: data.id,
            state: data.status,
            type: data.type,
            date: data.apply_time,
            payment_state: data.payment_state
          })
        })
        this.showList = true
      }
    },
    async getUser () {
      let userInfo = await getH5UserInfo({code: this.$route.query.code})
      if (userInfo.user !== null && userInfo.user.userId) {
        cookieUtils.setCookie('code', code, 1)
        cookieUtils.setCookie('userid', userInfo.user.userId, 1)
      } else {
        gotoH5Login()
      }
      if (userInfo.user !== null && userInfo.user.corpId) {
        cookieUtils.setCookie('corpid', userInfo.user.corpId, 1)
      } else {
        gotoH5Login()
      }
      cookieUtils.setCookie('logSsid', userInfo.logSsid, 1)
    },
    transferType (type = '1001') {
      switch (type) {
        case '1001': return '报销'
        case '1002': return '费用'
        default: return '未知费用'
      }
    },
    transferStatus (status = 2, paymentState = 'INIT') {
      switch (status) {
        case 1: return '审批中'
        case 2: return '已通过'
        case 3: return '已驳回'
        case 4: return '已取消'
        case 6: return '通过后撤销'
        case 10: {
          if (paymentState === 'SUCC') {
            return '支付成功'
          } else if (paymentState === 'FAIL') {
            return '支付失败'
          } else if (paymentState === 'INIT') {
            return '已提交银行'
          } else {
            return '未知状态'
          }
        }
        default: return '审批中'
      }
    },
    toDetail (approvalId, state) {
      if (state === 2) {
        this.$router.push({ path: '/approve_detail', query: { approvalId: approvalId } })
      }
    },
    loadMore () {
      console.log('xxxx')
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
  background-color: #f5f5f5;
  overflow-x: hidden !important;
}

#app {
  font-family: PingFangHK-Regular;
  .order-list {
    list-style: none;
    background: #ffffff;
    margin-top: 20px;
    padding-left: 0px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 0.5px solid #e5e5e5;
    padding-left: 15px;
    li {
      padding-top: 15px;
      padding-bottom: 15px;
      padding-right: 15px;
      border-bottom: 0.5px solid #e5e5e5;
      div:nth-child(1) {
        line-height: 22.5px;
        margin-bottom: 5px;
      }
      div:nth-child(2) {
        line-height: 20px;
      }
    }
    li:nth-last-child(1) {
      border-bottom: unset;
    }
    .order-id {
      font-size: 17px;
      color: #000000;
      letter-spacing: 0;
      line-height: 22.5px;
    }
    .state {
      font-size: 16px;
      color: #000000;
      letter-spacing: 0;
      text-align: right;
      float: right;
    }
    .type {
      font-size: 14px;
      color: #888888;
      letter-spacing: 0;
      text-align: right;
    }
    .date {
      font-size: 14px;
      color: #888888;
      letter-spacing: 0;
      text-align: right;
      float: right;
    }
    .danger {
      color: red;
    }
  }
}
</style>
