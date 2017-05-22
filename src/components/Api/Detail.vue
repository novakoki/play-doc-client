<template>
  <div v-if="api !== null">
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
      <el-table :data="parameters" style="width: 100%" empty-text="No data">
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="location" label="Located in" width="120" />
        <el-table-column prop="type" label="Type" width="200" />
        <el-table-column prop="desc" label="Description" />
      </el-table>
    </section>
    <section>
      <h4>Responses</h4>
      <el-table style="width: 100%" empty-text="No data" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="type" label="Type" width="180" />
        <el-table-column prop="desc" label="Description" />
      </el-table>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    api: {
      type: Object
    },
    parameters: {
      type: Array
    }
  }
}
</script>

<style scoped>
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
