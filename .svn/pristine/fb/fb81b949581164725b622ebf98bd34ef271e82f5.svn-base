<template>
  <el-container>
    <el-header>
      <a @click="back"><img class="back" src="../../assets/back.png"></a>拍照识别银行卡
    </el-header>
    <div class="div">上传银行卡</div>
    <el-form>
      <el-row type="flex" justify="space-around">
        <el-col>
          <photo-view class="photo" v-on:postImgData="postImageData" v-bind:bgImageURL="backgroundImage " v-bind:imageShowFlag="imgShowFlag"></photo-view>
        </el-col>
      </el-row>
      <div class="divCenter">银行卡正面照片</div>
    </el-form>
    <div class="div ">以下为自动识别结果</div>
    <el-form class="auto">
      <el-row>
        <el-col :span="7 " class="left">银行卡号</el-col>
        <el-col :span="17 ">
          <el-input v-model="user.receiveAccount" type="tel" pattern="[0-9]*" v-on:input="accFilter"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7" class="left">银行</el-col>
        <el-col :span="17 ">
          <el-input v-model="user.bankName" readonly="readonly" placeholder="请上传识别或在收款信息页面输入"></el-input>
        </el-col>
      </el-row>
    </el-form>
    <el-button @click=" next(user.receiveAccount,user.bankName,user.bankDreccode) " class="el-btn ">下一步</el-button>
  </el-container>
</template>
<script>
import PhotoView from '@/h5pages/approve_detail/PhotoView'
import { MessageBox } from 'mint-ui'
import { getBankCardPhotos, queryBankname } from '@/api/getData'
export default {
  name: 'Photo',
  data () {
    return {
      user: {
        bankName: '',
        bankDreccode: '',
        receiveAccount: ''
      },
      backgroundImage: 'bank.png',
      idCardPhoto: '',
      imgShowFlag: 'Y'
    }
  },
  methods: {
    async next (value1, value2, value3) {
      let reg = /^[1-9]\d*$/
      if (value1 !== '') {
        if (new RegExp(reg).test(value1.replace(/\s/g, '')) === false) {
          MessageBox('提示', '银行卡号只能为数字')
        } else {
          let vm = this
          this.$store.commit('setReceiveInfo', {
            receive_account: value1,
            account_bank: value2,
            account_bank_code: value3,
            account_area: '',
            account_city: '',
            account_city_code: '',
            account_subbank: '',
            account_subbank_code: ''
          })
          vm.$router.push({ name: '收款信息' })
        }
      } else {
        MessageBox('提示', '银行卡号不能为空')
      }
    },
    back () {
      history.back()
    },
    postImageData (imageData) {
      imageData = imageData.substring(imageData.indexOf(',') + 1)
      getBankCardPhotos({ bank_card_front_photo: imageData }).then(result => {
        if (result.retCode !== '0') {
          if (result.errMsg) {
            MessageBox('提示', result.errMsg)
          } else {
            MessageBox('提示', '数据异常')
          }
        } else {
          if (result.bank_card_number !== '' && result.bank_card_number !== undefined) {
            this.user.receiveAccount = result.bank_card_number.replace(/\s/g, '').replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
            if (result.bank_name !== '' && result.bank_name !== undefined && result.bank_name !== null) {
              queryBankname({bank_sname: result.bank_name}).then(result2 => {
                if (result2.retCode !== '0') {
                      if (result2.errMsg) {
                        MessageBox('提示', result2.errMsg)
                      } else {
                        MessageBox('提示', '数据异常')
                      }
                } else {
                  if (result2.bank.bank_code !== '' && result2.bank.bank_code !== undefined) {

                    this.user.bankDreccode = result2.bank.bank_code
                    this.user.bankName = result2.bank.bank_name
                  } else {
                    this.user.bankName = ''
                    MessageBox('提示', '银行名识别失败，请在收款信息页面选择')
                  }
                }
              })
            } else {
              this.user.bankName = ''
              MessageBox('提示', '银行名识别失败，请在收款信息页面选择')
            }
          } else {
            this.user.receiveAccount = ''
            this.user.bankName = ''
            MessageBox('提示', '银行卡识别失败，请重新上传或手动填写银行卡号')
          }
        }
      })
    },
    accFilter () {
      this.user.receiveAccount = this.user.receiveAccount.replace(/\s/g, '').replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
    }
  },
  components: {
    PhotoView
  },
  computed: {
  }
}
</script>
<style>
/* Form CSS */
.el-form {
  height: 100% !important;
  text-align: center;
  font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
  background: #ffffff;
  letter-spacing: 1px;
  overflow: hidden;
  display: table;
  width: 100vw;
  margin: auto;
}
.auto input.el-input__inner {
  border: 0;
  font-size: 4vw;
  padding: 0;
  line-height: 6vw;
  height: 6vw;
}
.el-form-item {
  height: 11vw;
  line-height: 11vw;
  font-size: 5vw;
  margin: 0 !important;
  font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
  border-bottom: 1px solid #d9d9d9;
}
.el-form-item__label,
.auto .el-input {
  text-align: left;
  padding-left: 5vw;
  font-size: 5vw;
  color: #000000;
}
.el-form-item.is-required .el-form-item__label:before {
  content: '';
}
</style>
<style scoped>
input.el-input__inner {
  border: 0;
  font-size: 5vw;
  padding: 0;
  line-height: 6vw;
  height: 6vw;
}
.div {
  color: #777e8a;
  margin: 5vw 0 3vw 5vw;
  font-size: 4.5vw;
  text-align: left;
  font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
}
.photo {
  padding-top: 3vh;
  margin: auto;
  margin-bottom: 5vw;
  width: 60vw;
}
.divCenter {
  text-align: center;
  color: #9f9f9f;
  margin: 3vw auto;
  font-size: 4.5vw;
  font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
}
.left {
  text-align: left;
  font-size: 5vw;
  color: #000000;
  font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
}
.auto {
  padding: 0 0 0 5vw;
}
.auto .el-row {
  border-bottom: 1px solid #d9d9d9;
}
.auto .el-row .el-col {
  height: 11vw;
  line-height: 11vw;
  font-size: 5vw;
  font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
}
</style>
