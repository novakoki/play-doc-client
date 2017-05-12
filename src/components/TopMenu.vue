<template>
  <el-row class="header" type="flex">
    <el-col class="logo">
      <img src="../assets/logo.png">
    </el-col>
    <el-col>
      <el-menu theme="dark" class="el-menu-demo" mode="horizontal" :router="true">
        <el-menu-item index="/repositories">Repositories</el-menu-item>
        <el-menu-item index="/apis">APIs</el-menu-item>
        <el-menu-item index="/settings">Settings</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .header {
    background: #324157;
  }

  .logo {
    width: 300px;
  }

  img {
    width: 120px;
    margin: 0 64px;
  }
</style>

