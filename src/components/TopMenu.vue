<template>
  <el-row class="header">
    <el-col :span="6">
      <img src="../assets/logo.png">
    </el-col>
    <el-col :span="18">
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/repositories">
          <router-link to="/repositories">Repositories</router-link>
        </el-menu-item>
        <el-menu-item index="/apis">
          <router-link to="/apis">APIs</router-link>
        </el-menu-item>
        <el-menu-item index="/settings">
          <router-link to="/settings">Settings</router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: `/${this.$route.path.split('/')[1]}`
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key)
    }
  }
}
</script>

<style scoped>
  .header {
    background: #324157;
  }

  img {
    width: 120px;
    margin: 0 64px;
  }
</style>

