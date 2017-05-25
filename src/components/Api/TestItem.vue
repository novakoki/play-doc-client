<template>
  <div class="api-detail">
    <section>
      <h4>Parameters</h4>
      <el-table :data="test.parameters" style="width: 100%" empty-text="No data">
        <el-table-column prop="name" label="Name" width="120">
           <template scope="scope">
              <el-input v-model="scope.row.name" v-if="edit" />
              <span v-else>{{scope.row.name}}</span>
           </template>
        </el-table-column>
        <el-table-column prop="location" label="Located in" width="120">
          <template scope="scope">
            <el-select v-model="scope.row.location" v-if="edit">
              <el-option v-for="item in paraLocations" :value="item.value" />
            </el-select>
            <span v-else>{{scope.row.location}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="value" label="Value">
           <template scope="scope">
              <el-input v-model="scope.row.value" v-if="edit" />
              <span v-else>{{scope.row.value}}</span>
           </template>
        </el-table-column>
      </el-table>
    </section>
    <section>
      <h4>Expect Responses</h4>
      <el-table :data="test.expectResponses" style="width: 100%" empty-text="No data">
        <el-table-column prop="name" label="Name" width="200">
           <template scope="scope">
              <el-input v-model="scope.row.name" v-if="edit" />
              <span v-else>{{scope.row.name}}</span>
           </template>
        </el-table-column>
        <el-table-column prop="value" label="Value">
           <template scope="scope">
              <el-input v-model="scope.row.value" v-if="edit" />
              <span v-else>{{scope.row.value}}</span>
           </template>
        </el-table-column>
      </el-table>
    </section>
    <section>
      <h4>Actual Responses</h4>
      <el-table :data="test.actualResponses" style="width: 100%" empty-text="No data">
        <el-table-column prop="name" label="Name" width="200" />
        <el-table-column prop="value" label="Value" />
      </el-table>
    </section>
    <el-row type="flex" justify="end">
      <el-button @click="switchMode" class="switch-btn">
        <span v-if="edit">Done</span>
        <span v-else>Edit</span>
      </el-button>
    </el-row>
  </div>
</template>

<script>
import { paraLocations } from '@/data'
export default {
  data() {
    return {
      edit: false,
      paraLocations
    }
  },
  props: {
    test: {
      type: Object
    }
  },
  methods: {
    switchMode() {
      if (this.edit) {
        this.updateTest().then(res => {
          if (res.ok) {
            this.edit = false
          } else {
            this.failed()
          }
        }).catch(e => console.error(e))
      } else {
        this.edit = true
      }
    },
    updateTest() {
      return window.fetch('/api/update-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.test)
      })
    },
    failed() {
      this.$notify.error({
        title: 'Network Error',
        message: 'Request failed'
      })
    }
  }
}
</script>

<style scoped>
</style>
