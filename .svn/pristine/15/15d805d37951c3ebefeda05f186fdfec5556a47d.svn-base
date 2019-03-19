<template>
  <div id="app">
    <router-view />
  </div>
  <!--<div style="height: 100%;" id="app">
  顶部
  <div id="app-header" class="app-header">
    <app-header class="inline-content"></app-header>
  </div>
  <div id="app-container" class="app-container">
    <div class="router-view-clz">
      <router-view class="content-view inline-content"></router-view>
    </div>
  </div>
   底部

  <div id="app-footer" class="app-footer">
    <app-footer class="inline-content"></app-footer>
  </div>

</div> -->

</template>

<script>
import AppHeader from '@/components/common/AppHeader'
import AppFooter from '@/components/common/AppFooter'
export default {
  name: 'App',
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter
  },
  data () {
    return {
    }
  },
  created () {
    // this.$router.push('/company_config');
  },
  computed: {
  }
}
</script>

<!--
<style>
 -->
<style lang="scss">
body {
  margin: 0px;
  overflow-x: hidden !important;
}

#app {
  .inline-content {
    width: 1366px !important;
    margin: 0 auto;
  }
  .app-header {
    height: 68px !important;
    width: 100%;
    position: absolute;
    z-index: 900;
    top: 0px;
    background-color: #ffffff;
  }
  /*
  .app-footer {
    height: 50px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    background-color: #3A60C9;
  }
  */
  .app-container {
    padding-top: 68px;
    // padding-bottom: 50px;
    box-sizing: border-box;
    height: 100%;
  }
  .router-view-clz {
    box-sizing: border-box;
    // width: 1366px !important;
    // margin: auto;
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
    overflow-y: auto;
    .content-view {
      width: 1366px !important;
      margin: auto;
      // padding: 30px;
      padding-top: 16px;
    }
  }
}
</style>
