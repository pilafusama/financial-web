<template>

  <el-dialog :visible.sync="showDialog" @close="closeDialog" width="84%" height="44%" :show-close="false">
    <!--<el-form>-->
    <el-row>
      <img src="@/../src/assets/success.png">
    </el-row>
    <el-row>
      <el-col style="font-size: large">付款申请提交成功！</el-col>
    </el-row>
    <!--</el-form>-->
    <el-button class="close" @click="closeDialog">关闭</el-button>
  </el-dialog>

</template>

<script>
export default {
  name: 'PaySuccessDialog',
  props: { value: {
    type: Boolean,
    default: false
  } },
  data () {
    return {
      showDialog: false
    }
  },
  watch: {
    value: {
      handler: function (val) {
        this.showDialog = val
      }
    }
  },
  methods: {
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style lang="scss">
.el-dialog {
  background: #f5f5f5;
  text-align: center;
}
img {
  width: 21vw;
  height: 12vh;
}
.close {
  width: 45vw;
  height: 6.7vh;
  color: #f5f5f5;
  background: #2f7dcd;
  border-radius: 10px;
  margin-top: 7.9vh;
}
</style>
