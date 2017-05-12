<template>
  <el-row class="api" type="flex">
    <el-col class="nav">
      <api-nav />
    </el-col>
    <el-col>
      <router-view />
    </el-col>
  </el-row>
</template>

<script>
import ApiNav from './Nav'
export default {
  name: 'Api',
  components: {
    ApiNav
  }
}
</script>

<style scoped>
  .api {
    height: calc(100% - 70px);
  }

  .nav {
    height: 100%;
    width: 300px;
    padding-top: 16px;
    background: #eef1f6;
  }
</style>
