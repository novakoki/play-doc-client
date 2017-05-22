<template>
  <el-collapse v-model="activeTest" accordion>
        <el-collapse-item v-for="test in tests" :title="`Test${test.id}`" :name="test.id" :key="test.id">
          <section>
        <h4>Parameters</h4>
        <el-table :data="parameters" style="width: 100%" empty-text="No data">
          <el-table-column prop="name" label="Name" width="120" />
          <el-table-column prop="location" label="Located in" width="120" />
          <el-table-column prop="type" label="Type" width="200" />
          <el-table-column prop="desc" label="Value" />
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
            label="Value">
          </el-table-column>
        </el-table>
      </section>
        </el-collapse-item>
      </el-collapse>
</template>

<script>
export default {
  props: {
    tests: {
      type: Array
    }
  },
  data() {
    return {
      activeTest: ""
    }
  }
}
</script>

<style>

</style>
