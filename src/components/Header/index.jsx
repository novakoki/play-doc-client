import React from 'react'
import { Layout, Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import Logo from '../../../assets/play_reverse.png'

function Header(props) {
  return (
    <Layout.Header className="header">
      <img src={Logo} alt="logo" style={{width: 120, marginRight: 36}} />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ fontSize: 14, lineHeight: '64px', display: 'inline-block' }}
      >
        <Menu.Item key="1"><Link to="/repositores">Repositories</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/apis">APIs</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/settings">Settings</Link></Menu.Item>
      </Menu>
    </Layout.Header>
  )
}

export default withRouter(Header)