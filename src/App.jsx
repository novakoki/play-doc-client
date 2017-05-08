import React, { Component } from 'react'
// import Card from './components/Card'
import ApiList from './components/ApiList'
import 'normalize.css'
import './App.css'

class App extends Component {
  render() {
    const apis = [
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
      }
    ]
    return (
      <div className="App">
        <ApiList apis={apis} />
      </div>
    )
  }
}

export default App
