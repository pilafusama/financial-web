<template>
  <div style="height: 100%;" id="main-app">
    <ul class="app-list">
      <li v-for="(item, index) in list" :key="index" @click="toPage(item.page)">
        <span class="app-name">{{ item.name }}</span>
        <img class="app-img" :src="item.icon" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      list: [{
        name: '审批流付款',
        icon: './static/img/approve-app.png',
        page: 'list'
      }]
    }
  },
  created () {
    // this.$router.push('/company_config');
  },
  computed: {
  },
  methods: {
    toPage (url) {
      this.$router.push('/list')
    }
  }
}
</script>

<style lang="scss">
#main-app {
  .app-list {
    list-style: none;
    padding-left: 0px;
    margin-top: 20px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    background: #ffffff;
    li {
      height: 36px;
      padding: 15px;
      .app-name {
        font-family: PingFangHK-Regular;
        font-size: 16px;
        line-height: 36px;
        color: #000000;
        position: relative;
        left: 15px;
      }
      .app-img {
        width: 36px;
        height: 36px;
        float: left;
      }
    }
  }
}
</style>
