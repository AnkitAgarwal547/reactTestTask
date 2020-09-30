import React from 'react'
import './sidebar.css'

const href="#";

export default function SideBar() {
    return (
        <div className="col-md-2 mx-150 lightBlue">
        <ul className="leftMenu">
          <li><a href={href}> <i className="far fa-user" /> Expert</a></li>
          <li><a href={href}> Make a Reservation</a></li>
          <li><a href={href}> <i className="far fa-th-large" /> Inventory</a></li>
          <li><a href={href}> <i className="far fa-star" /> Achievement</a></li>
          <li><a href={href}> <i className="far fa-check-circle" /> Quests</a></li>
          <li><a href={href}> <i className="far fa-cogs" /> Setting</a></li>
          <li><a href={href}> <i className="far fa-shopping-cart" /> Cart</a></li>
          <li><a href={href}> <i className="fas fa-plus" /></a></li>         
        </ul>
      </div>
    )
}
