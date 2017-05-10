import React, {Component} from 'react'
import { Layout, Menu, Breadcrumb, Input, Icon } from 'antd'
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom'
import ApiList from '../List'
import ApiDetail from '../Detail'
const { Sider, Content } = Layout
const { SubMenu } = Menu
const { Search } = Input

class ApiLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repo: this.getRepoById("1"),
      api: {id: ""}
    }
  }

  getRepoById(id) {
    return this.props.repositories.find(r => r.id.toString() === id)
  }

  getApiById(id) {
    return this.state.repo.apis.find(api => api.id.toString() === id)
  }

  getApiName(api) {
    return `${api.method} ${api.resource}`
  }

  render() {
    return (
      <Router>
        <Layout>
          <Sider width={240} style={{ background: '#fff' }}>
            <Search
              placeholder="Search API..."
              style={{width: 200, margin: 20}}
              onSearch={v => console.log(v)}
            />
            <Menu
              mode="inline"
              defaultOpenKeys={['1']}
              style={{ border: 'none' }}
            >
            {this.props.repositories.map(repo => {
              return (
                <SubMenu
                  key={repo.id}
                  title={<span><Icon type="folder" /><Link to={`/repositories/${repo.id}/apis`}>{repo.name}</Link></span>}
                >
                  {repo.apis.map(api => {
                    return (
                      <Menu.Item key={api.id}>
                        <Link to={`/repositories/${repo.id}/apis/${api.id}`}>
                          {this.getApiName(api)}
                        </Link>
                      </Menu.Item>
                    )
                  })}
                </SubMenu>
              )
            })}
            </Menu>
          </Sider>
          <Switch>
            <Route exact path="/repositories/:id/apis">
              <Layout style={{padding:'0 24px 24px'}}>
                  <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.repo.name}</Breadcrumb.Item>
                  </Breadcrumb>
                  <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <ApiList apis={this.state.repo.apis}/>
                  </Content>
              </Layout>
            </Route>
            <Route exact path="/repositories/:repoId/apis/:id">
              <Layout style={{padding:'0 24px 24px'}}>
                  <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.repo.name}</Breadcrumb.Item>
                    <Breadcrumb.Item>Api</Breadcrumb.Item>
                  </Breadcrumb>
                  <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <ApiDetail />
                  </Content>
              </Layout>
            </Route>
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default withRouter(ApiLayout)