<template>
  <div>
    <mt-popup v-model="regionVisible" position="bottom" class="region-popup">
      <el-row>
        <el-col :span="6" :offset="4">
          <button style="background: #ffffff;border: 1px solid white;font-size: 2.5vh;color: #d6d3d3;padding-top: 2vh;" @click="cancel">取消</button>
        </el-col>
        <el-col :span="6" :offset="6">
          <button style="background: #ffffff;border: 1px solid white;font-size: 2.5vh;color: #2f7dcd;padding-top: 2vh;" @click="confirm">确定</button>
        </el-col>
      </el-row>
      <mt-picker :slots="myAddressSlots" valueKey="name" :visibleItemCount="3" :itemHeight="40" :show-toolbar="true" @change="addressChange" ref="picker">
      </mt-picker>
    </mt-popup>
  </div>
</template>
<script>
import Vue from 'vue'
import { getCityReceiver } from '@/api/getData'
import { Popup, Picker } from 'mint-ui'
Vue.component(Popup.name, Popup)
Vue.component(Picker.name, Picker)
export default {
  name: 'SelectCity',
  props: {
    regionVisible: false
  },
  data () {
    return {
      regionInit: false,
      cityInfo: {
        regionInit: false,
        region: '', // 三级地址
        province: '', // 省
        city: '' // 市
      },
      threeLevelAddress: [],
      myAddressSlots: [],
      middleIndex: ''

    }
  },
  methods: {
    back () {
      history.back()
    },
    async loadData () {
      let cities = await getCityReceiver()
      this.threeLevelAddress = cities.province_list
      this.set()
    },
    set () {
      this.myAddressSlots = [
        {
          flex: 1,
          values: this.getProvinceArr(),
          className: 'slot1',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '',
          className: 'slot2'
        },
        {
          flex: 1,
          values: this.getCityArr(this.middleIndex),
          className: 'slot3',
          textAlign: 'center'
        }
      ]
    },
    addressChange (picker, values) {
      if (this.cityInfo.regionInit) {
        picker.setSlotValues(1, this.getCityArr(values[0]['name']))
      } else {
        this.cityInfo.regionInit = true
      }
    },
    getProvinceArr () {
      let provinceArr = []
      this.threeLevelAddress.forEach(function (item) {
        let obj = {}
        obj.name = item.name
        obj.code = item.code
        provinceArr.push(obj)
      })
      this.middleIndex = provinceArr[0].name
      return provinceArr
    },
    getCityArr (province) {
      let cityArr = []
      this.threeLevelAddress.forEach(function (item) {
        if (item.name === province) {
          item.cities.forEach(function (args) {
            let obj = {}
            obj.name = args.name
            obj.code = args.code
            cityArr.push(obj)
          })
        }
      })
      return cityArr
    },
    confirm () {
      this.$store.commit('setReceiveInfo', {account_area: this.$refs.picker.getValues()[0]['name']})
      this.cityInfo.bank_citycode = this.$refs.picker.getValues()[1]['code']
      this.cityInfo.bank_city = this.$refs.picker.getValues()[1]['name']
      this.cityInfo.bank_bnkcode = ''
      this.cityInfo.bank_lname = ''
      this.$emit('cityInfo', this.cityInfo)
      this.$store.commit('setReceiveInfo', {
        account_city: this.cityInfo.bank_city,
        account_city_code: this.cityInfo.bank_citycode,
        account_subbank: this.cityInfo.bank_lname,
        account_subbank_code: this.cityInfo.bank_bnkcode
      })
    },
    cancel () {
      this.$emit('cancel', 'close')
    }
  },
  watch: {
    regionVisible: function (val) {
      if (val) {
        this.loadData()
      }
    }
  },
  computed: {
  }

}
</script>
<style>
body {
  background-color: #f5f5f5;
}
.region-popup {
  width: 100%;
  height: 40%;
}
</style>
