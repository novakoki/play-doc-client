import React, {Component} from 'react'
import { Layout } from 'antd'
import ApiNav from '../Nav'
const { Sider } = Layout

class ApiLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider style={{background:'#fff'}} width={240}>
          <ApiNav />
        </Sider>
      </Layout>
    )
  }
}

export default ApiLayout