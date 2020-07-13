import React from 'react'

const Test = props => {
  let flag = 'edit'
  return (
    <div>
      {flag === 'edit' ? <span>balbalba</span> : <input />}
    </div>
  )
}