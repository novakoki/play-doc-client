import React, { Component } from 'react'
import { connect } from 'react-redux'
import ApiMenu from '../Menu'
import { Input } from 'antd'
const { Search } = Input

class ApiNav extends Component {
  render() {
    const { repositories, apis } = this.props
    return (
      <div>
        <Search
            placeholder="Search API..."
            style={{width: 200, margin: 20}}
            onSearch={v => console.log(v)}
          />
        <ApiMenu repositories={repositories} apis={apis} />
      </div>
    )
  }
}

export default connect(state => {
  return {
    repositories: state.repositories,
    apis: state.apis
  }
})(ApiNav)
