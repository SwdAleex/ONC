import React from 'react'

function NavLinkItem(props) {
  return (
    <div>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a className="" href={props.to}>{props.text}</a>
        </li>
      </ul>
    </div>
  )
}

export default NavLinkItem
