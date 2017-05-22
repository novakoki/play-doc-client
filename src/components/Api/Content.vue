<template>
  <div class="container">
    <el-tabs type="border-card" class="tabs">
      <el-tab-pane label="Documentation">
        <detail :api="api"/>
      </el-tab-pane>
      <el-tab-pane label="Test Cases">
        <test-case :tests="tests"/>
      </el-tab-pane>
      <el-tab-pane label="Q&A"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TestCase from './TestCase'
import Detail from './Detail'
export default {
  components: {
    TestCase,
    Detail
  },
  data() {
    return {
      api: null,
      tests: null
    }
  },
  methods: {
    load(to, field, url) {
      if (to.params.apiId) {
        window.fetch(url)
          .then(res => {
            return res.json()
          })
          .catch(e => console.error(e))
          .then(json => {
            field = json
          })
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.load(to, vm.api, `/api/apis/${to.params.apiId}`)
      vm.load(to, vm.tests, `/api/apis/${to.params.apiId}/tests`)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.load(to, this.api, `/api/apis/${to.params.apiId}`)
    this.load(to, this.tests, `/api/apis/${to.params.apiId}/tests`)
    next()
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
    padding: 16px;
  }
  
  .tabs {
    height: 100%;
  }
</style>
