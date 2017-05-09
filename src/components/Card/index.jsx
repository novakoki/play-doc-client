import React from 'react'
import './style.css'

function Card ({ title = 'title', more = '#', children }) {
  return (
    <div className="card">
      <div className="card-head">
        <h3 className="card-title">{ title }</h3>
        <a className="card-more" href={ more }>More</a>
      </div>
      <div className="card-content">{ children }</div>
    </div>
  )
}

export default Card
