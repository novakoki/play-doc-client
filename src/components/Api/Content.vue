<template>
  <div class="container">
    <el-tabs type="border-card" class="tabs">
      <el-tab-pane label="Documentation">
        <detail />
      </el-tab-pane>
      <el-tab-pane label="Test Cases">
        <test-case />
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
    load(url) {
      return window.fetch(url)
        .then(res => {
          return res.json()
        })
        .catch(e => console.error(e))
    },
    loadApiAndTests(apiId, vm) {
      if (apiId) {
        // vm.load(`/api/apis/${apiId}`).then(res => vm.api = res)
        // vm.load(`/api/apis/${apiId}/tests`).then(res => vm.tests = res)
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.loadApiAndTests(to.params.apiId, vm))
  },
  beforeRouteUpdate(to, from, next) {
    this.loadApiAndTests(to.params.apiId, this)
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
