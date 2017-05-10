import React, { Component } from 'react'
import { Layout } from 'antd'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import ApiLayout from './components/Api/Layout'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repositories: [
        {
          id: 1,
          name: "play-doc-server",
          apis: [
            {
              id: 1,
              method: "GET",
              resource: "/apis/id",
              summary: "Get some API by id",
              status: 1
            },
            {
              id: 2,
              method: "GET",
              resource: "/apis",
              summary: "Get all APIs",
              status: 1
            },
            {
              id: 3,
              method: "POST",
              resource: "/apis",
              summary: "Add an API",
              status: 1
            }
          ]
        }
      ]
    }
  }
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header />
          <Route path="/repositories/:repoId/apis">
            <ApiLayout repositories={this.state.repositories} />
          </Route>
        </Layout>
      </Router>
    )
  }
}

export default App
