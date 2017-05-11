import React, { Component } from 'react'
import { Layout } from 'antd'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import ApiLayout from './components/Api/Layout'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header />
          <Route path="/repositories/:repoId/apis/:apiId?">
            <ApiLayout />
          </Route>
        </Layout>
      </Router>
    )
  }
}

export default App
