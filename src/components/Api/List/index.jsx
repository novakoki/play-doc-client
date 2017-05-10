import React from 'react'
import { Card } from 'antd'
import './style.css'

function ApiList ({ apis = [] }) {
  return (
    <ul className="api-list">
      {apis.map( ({ id, method, resource, summary, status }) => {
        return (
          <li className="api-list-item" key={id}>
            <Card title={`${method} ${resource}`}
              extra={<a href={`/apis/${id}`}>More</a>}
              style={{width: 300}}>
              {summary}
            </Card>
          </li>
        )
      })}
    </ul>
  )
}

export default ApiList
