import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import apis from './reducers'
// import { Map } from 'immutable' 
import App from './App'
import './index.css'

const initState = {
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

const store = createStore(apis, initState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
