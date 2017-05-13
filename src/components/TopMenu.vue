<template>
  <el-row class="header" type="flex">
    <el-col class="logo">
      <img src="../assets/logo.png">
    </el-col>
    <el-col>
      <el-menu theme="dark" class="el-menu-demo" mode="horizontal" :router="true">
        <el-menu-item index="/repositories">
          <i class="el-icon-document"></i>
          <span>Repositories</span>
        </el-menu-item>
        <el-menu-item index="/apis">
          <i class="el-icon-share"></i>
          <span>APIs</span>
        </el-menu-item>
        <el-menu-item index="/settings">
          <i class="el-icon-setting"></i>
          <span>Settings</span>
        </el-menu-item>
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

  i {
    margin-right: 5px;
  }
</style>

