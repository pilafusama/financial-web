<template>

  <div style="height: 100%;" id="app">
    <!-- 顶部-->
    <div id="app-header" class="app-header">
      <app-header></app-header>
    </div>
    <div id="app-container" class="app-container">
      <div class="router-view-clz">
        <router-view></router-view>
      </div>
    </div>
    <!-- 底部 -->
    <div id="app-footer" class="app-footer">
      <app-footer></app-footer>
    </div>
  </div>

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
* {
  font-family: 'MicrosoftYaHei';
}
body {
  margin: 0px;
  /*overflow-y: hidden;*/
}

#app {
  .app-header {
    height: 50px;
    width: 100%;
    position: fixed;
    z-index: 900;
    top: 0px;
    background-color: red;
  }
  .app-footer {
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0px;
    background-color: red;
  }
  .app-container {
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: lightblue;
  }
  .router-view-clz {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background-color: lightyellow;
  }
}
</style>
