<template>
  <div>
    <div class="search">
      <el-input placeholder="Search API..." icon="search" />
    </div>
    <el-menu default-active="2" class="el-menu-vertical" :router="true">
      <el-submenu v-for="repoId in repos.allIds" :key="repoId" :index="repoId">
        <template slot="title">{{repos.byId[repoId].name}}</template>
        <el-menu-item v-for="apiId in apis.allIds.filter(id => apis.byId[id].repoId === repoId)"
          :key="apiId" :index="`/apis/${apiId}`">
          <span class="method">{{apis.byId[apiId].method}}</span>
          <span>{{apis.byId[apiId].resource}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    apis: state => state.apis,
    repos: state => state.repositories
  })
}
</script>

<style scoped>
  .search {
    margin: 0 auto 10px auto;
    width: 200px;
  }

  .method {
    display: inline-block;
    width: 40px;
    margin-right: 10px;
  }
</style>
