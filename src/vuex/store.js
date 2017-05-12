import { Store } from 'vuex'

const store = new Store({
  state: {
    repositories: {
      byId: {
        "1": {
          id: "1",
          name: "play-doc-server"
        }
      },
      allIds: ["1"]
    },
    apis: {
      byId: {
        "1": {
          id: "1",
          method: "GET",
          resource: "/apis/id",
          summary: "Get some API by id",
          status: 1,
          repoId: "1"
        },
        "2": {
          id: "2",
          method: "GET",
          resource: "/apis",
          summary: "Get all APIs",
          status: 1,
          repoId: "1"
        },
        "3": {
          id: "3",
          method: "POST",
          resource: "/apis",
          summary: "Add an API",
          status: 1,
          repoId: "1"
        }
      },
      allIds: ["1", "2", "3"]
    }
  }
})

export default store