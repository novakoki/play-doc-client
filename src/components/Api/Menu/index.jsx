import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
const { SubMenu } = Menu

function ApiMenu({repositories = [], apis = []}) {
  return (
    <Menu
        mode="inline"
        defaultOpenKeys={['1']}
        style={{ border: 'none' }}
      >
      {repositories.allIds.map(repoId => {
        return (
          <SubMenu key={repoId} title={
            <span>
              <Icon type="folder" />
              <Link to={`/repositories/${repoId}/apis`}>{repositories.byId[repoId].name}</Link>
            </span>
          }>
            {
              apis.allIds.filter(apiId => apis.byId[apiId].repoId === repoId).map(apiId => {
                return (
                  <Menu.Item key={apiId}>
                    <Link to={`/repositories/${repoId}/apis/${apiId}`}>
                      {apis.byId[apiId].resource}
                    </Link>
                  </Menu.Item>
                )
              })
            }
          </SubMenu>
        )
      })}
    </Menu>
  )
}

export default ApiMenu