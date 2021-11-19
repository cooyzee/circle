import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import {setActiveClass} from "../../com"
import './layout.scss'

export default function Layout() {
  return (
    <div className="layout">
      <nav className="nav">
        <NavLink to="home" className={setActiveClass}>Home</NavLink>
        <NavLink to="css" className={setActiveClass}>CSS demos</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}


