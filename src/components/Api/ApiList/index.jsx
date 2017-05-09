import React from 'react'
import Card from '../common/Card'
import './style.css'

function ApiList ({ apis = [] }) {
  return (
    <ul className="api-list">
      {apis.map( ({ id, method, resource, summary, status }) => {
        return (
          <li className="api-list-item" key={id}>
            <Card title={`${method} ${resource}`} more={`/apis/${id}`}>
              {summary}
            </Card>
          </li>
        )
      })}
    </ul>
  )
}

export default ApiList
