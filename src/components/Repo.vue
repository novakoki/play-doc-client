<template>
  <div class="container">
    <el-row class="add-repo" type="flex">
      <el-col :span="4">
      <el-button icon="plus" type="primary">
        New Repository
      </el-button>
      </el-col>
      <el-col :span="15"></el-col>
      <el-col :span="5">
        <el-input placeholder="Search repositories..." icon="search" />
      </el-col>
    </el-row>
    <ul>
      <li v-for="id in repos.allIds">
        <el-row type="flex" align="middle">
          <el-col :span="8">
            <h4>{{repos.byId[id].name}}</h4>
            <p>{{repos.byId[id].description}}</p>
          </el-col>
          <el-col :span="8">
            8 months ago
          </el-col>
          <el-col :span="8">
            <el-button-group>
              <el-button icon="setting">Setting</el-button>
              <el-button icon="more">API Overview</el-button>
            </el-button-group>
          </el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    repos: state => state.repositories
  })
}
</script>

<style scoped>
  .add-repo {
    padding-bottom: 20px;
  }

  .container {
    height: calc(100% - 70px);
    padding: 36px;
    background: #eee;
  }

  ul {
    min-width: 800px;
    padding: 30px;
    background: #fff;
    min-height: 600px;
    border-radius: 10px;
  }

  li {
    width: 100%;
    padding: 30px;
    border-bottom: 2px solid #eee;
  }

  li>.info {
    display: inline-block;
  }
</style>
