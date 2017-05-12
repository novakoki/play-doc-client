<template>
  <el-row class="api">
    <api-nav class="api-nav" />
  </el-row>
</template>

<script>
import ApiNav from './ApiNav'
export default {
  name: 'Api',
  components: {
    ApiNav
  }
}
</script>

<style scoped>
  .api {
    height: 100%;
    overflow: hidden;
  }
</style>
