<template>
  <el-collapse v-model="activeTest" accordion>
    <el-collapse-item v-for="test in tests" :name="test.id" :key="test.id">
      <template slot="title">
        <span>Test{{test.id}} </span>
        <el-tag>已通过</el-tag>
      </template>
      <test-item :test="test" />
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import TestItem from './TestItem'
export default {
  components: {
    TestItem
  },
  props: {
    tests: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            apiId: 1,
            parameters: [
              {
                name: 'id',
                location: 'url',
                value: 1
              }
            ],
            expectResponses: [
              {
                name: 'result',
                value: 100
              }
            ],
            actualResponses: [
              {
                name: 'result',
                value: 200
              }
            ]
          }
        ]
      }
    }
  },
  data() {
    return {
      activeTest: ""
    }
  }
}
</script>

<style scoped>
 
</style>
