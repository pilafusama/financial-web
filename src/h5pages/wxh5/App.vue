<template>

  <div style="height: 100%;">
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
    }
  },
  created () {
    // this.$router.push('/');
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
  background-color: #f5f5f5;
  overflow-x: hidden !important;
}
</style>
