<template>
  <div class="container">
  <el-tabs type="border-card" class="tabs">
    <el-tab-pane label="Documentation">
      <h3>
        {{api.method}} {{api.resource}}
      </h3>
      <section>
        <h4>Summary</h4>
        <p>{{api.summary}}</p>
      </section>
      <section>
        <h4>Description</h4>
        <p>{{api.description}}</p>
      </section>
      <section>
        <h4>Parameters</h4>
        <el-table
          style="width: 100%">
          <el-table-column
            prop="name"
            label="Name"
            width="120">
          </el-table-column>
          <el-table-column
            prop="location"
            label="Located in"
            width="120">
          </el-table-column>
          <el-table-column
            prop="type"
            label="Type"
            width="180">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="Description">
          </el-table-column>
        </el-table>
      </section>
      <section>
        <h4>Responses</h4>
        <el-table
          style="width: 100%">
          <el-table-column
            prop="name"
            label="Name"
            width="120">
          </el-table-column>
          <el-table-column
            prop="type"
            label="Type"
            width="180">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="Description">
          </el-table-column>
        </el-table>
      </section>
    </el-tab-pane>
    <el-tab-pane label="Test Cases"></el-tab-pane>
    <el-tab-pane label="Q&A"></el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    api(state) {
      return state.apis.byId[this.$route.params.apiId]
    }
  })
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

  h3, section>h4 {
    color: #20a0ff;
  }

  section {
    padding: 24px 0 0 24px;
  }

  section>h4 {
    margin-bottom: 12px;
  }
</style>
