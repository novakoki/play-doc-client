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
        <el-table :data="parameters"
          style="width: 100%"
          empty-text="No data">
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
            width="200">
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
          style="width: 100%"
          empty-text="No data">
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
  data() {
    return {
      api: {},
      parameters: []
    }
  },
  // computed: mapState({
  //   api(state) {
  //     return state.apis.byId[this.$route.params.apiId]
  //   }
  // }),
  methods: {
    setApi(to, vm = this) {
      if (to.params.apiId) {
        window.fetch(`/api/apis/${to.params.apiId}`)
        .then(res => {
          return res.json()
        })
        .catch(e => console.log(e))
        .then(json => {
          vm.api = json
          const parameters = JSON.parse(vm.api.parameters)
          vm.parameters = []
          for (const index in parameters.query) {
            vm.parameters.push({
              name: index,
              type: parameters.query[index],
              location: 'url'
            })
          }
          for (const index in parameters.body) {
            vm.parameters.push({
              name: index,
              type: parameters.body[index],
              location: 'body'
            })
          }
        })
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.setApi(to, vm))
  },
  beforeRouteUpdate(to, from, next) {
    this.setApi(to)
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
