import React from 'react'

function Card(props) {

  return (
    <li className={'concept'+ (props.className?' '+props.className:'')}>
        {props.children}
    </li>
  )
}

export default Card