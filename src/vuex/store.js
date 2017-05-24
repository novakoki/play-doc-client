import { Store } from 'vuex'

const store = new Store({
  state: {
    repositories: {
      allIds: [],
      byId: {}
    },
    apis: {
      allIds: [],
      byId: {}
    }
  },
  mutations: {
    setApis(state, rawApis) {
      if (rawApis) {
        state.apis.allIds = rawApis.map(api => api.id)
        rawApis.forEach(api => state.apis.byId[api.id] = api)
      }
    },
    setRepos(state, rawRepos) {
      if (rawRepos) {
        state.repositories.allIds = rawRepos.map(repo => repo.id)
        rawRepos.forEach(repo => state.repositories.byId[repo.id] = repo)
      }
    }
  },
  actions: {
    loadApiOverview(context) {
      window.fetch('/api/apis')
        .then(res => res.json())
        .catch(e => console.log(e))
        .then(rawApis => context.commit('setApis', rawApis))
    },
    loadRepos(context) {
      window.fetch('/api/repos')
        .then(res => res.json())
        .catch(e => console.log(e))
        .then(rawRepos => context.commit('setRepos', rawRepos))
    }
  }
})

export default store