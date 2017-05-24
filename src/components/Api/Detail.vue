<template>
  <div v-if="api !== null">
    <el-row type="flex" justify="space-between">
      <div v-if="edit">
        <el-select v-model="api.method" style="width: 100px;">
          <el-option v-for="item in httpMethods" :value="item.value" />
        </el-select>
        <el-input v-model="api.resource" style="width: 300px;">
          <template slot="prepend">Resource</template>
        </el-input>
      </div>
      <h3 v-else>
        <span>{{api.method}}</span>
        <span>{{api.resource}}</span>
      </h3>
      <el-button @click="switchMode">
        <span v-if="edit">Done</span>
        <span v-else>Edit</span>
      </el-button>
    </el-row>
    <section>
      <h4>Summary</h4>
      <el-input v-if="edit" v-model="api.summary" />
      <p v-else>{{api.summary}}</p>
    </section>
    <section>
      <h4>Description</h4>
      <el-input v-if="edit" type="textarea" v-model="api.description" />
      <p v-else>{{api.description}}</p>
    </section>
    <section>
      <h4>Predefined Parameters</h4>
      <el-table :data="api.expectParameters" style="width: 100%" empty-text="No data">
        <el-table-column prop="name" label="Name" width="120">
           <template scope="scope">
              <el-input v-model="scope.row.name" v-if="edit" />
              <span v-else>{{scope.row.name}}</span>
           </template>
        </el-table-column>
        <el-table-column prop="location" label="Located in" width="120">
          <template scope="scope">
            <el-select v-model="scope.row.location" v-if="edit">
              <el-option v-for="item in locations" :value="item.value" />
            </el-select>
            <span v-else>{{scope.row.location}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="Type" width="180">
          <template scope="scope">
            <el-select v-model="scope.row.type" v-if="edit">
              <el-option v-for="item in types" :value="item.value" />
            </el-select>
            <span v-else>{{scope.row.type}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="optional" label="Optional" width="100">
          <template scope="scope">
            <el-checkbox v-model="scope.row.optional" v-if="edit"/>
            <span v-else>{{scope.row.optional}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="desc" label="Description">
          <template scope="scope">
              <el-input v-model="scope.row.desc" v-if="edit" />
              <span v-else>{{scope.row.desc}}</span>
           </template>
        </el-table-column>
      </el-table>
    </section>
    <section>
      <h4>Actual Parameters</h4>
      <el-table :data="api.actualParameters" style="width: 100%" empty-text="No data">
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="location" label="Located in" width="120" />
        <el-table-column prop="type" label="Type" />
      </el-table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
      httpMethods: [
        {
          value: 'GET'
        },
        {
          value: 'POST'
        },
        {
          value: 'PUT'
        },
        {
          value: 'DELETE'
        },
        {
          value: 'OPTION'
        },
        {
          value: 'PATCH'
        }
      ],
      locations: [
        {
          value: 'url'
        },
        {
          value: 'query'
        },
        {
          value: 'body'
        }
      ],
      types: [
        {
          value: 'text'
        },
        {
          value: 'nonEmptyText'
        },
        {
          value: 'number'
        },
        {
          value: 'longNumber'
        },
        {
          value: 'bigDecimal'
        },
        {
          value: 'boolean'
        },
        {
          value: 'date'
        }
      ]
    }
  },
  methods: {
    switchMode() {
      if (this.edit) {
        this.updateApi().then(res => {
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
    updateApi() {
      return window.fetch('/api/update-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.api)
      })
    },
    failed() {
      this.$notify.error({
        title: 'Network Error',
        message: 'Request failed'
      })
    }
  },
  props: {
    api: {
      type: Object,
      default() {
        return {
          id: 1,
          method: 'GET',
          resource: '/:id',
          summary: 'Test',
          description: 'Test',
          expectParameters: [
            {
              name: 'id',
              location: 'url',
              type: 'longNumber',
              desc: 'Default id',
              optional: true
            },
            {
              name: 'lat',
              location: 'body',
              type: 'longNumber',
              desc: 'latitude',
              optional: true
            }
          ],
          actualParameters: [
            {
              name: 'id',
              location: 'url',
              type: 'longNumber',
              desc: 'Default id'
            }
          ]
        }
      }
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
