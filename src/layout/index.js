import React, {useRef} from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import {setActiveClass, toggleClass} from "../../com"
import './layout.scss'

export default function Layout() {
  return (
    <div className="layout">
      <nav className="nav">
        <NavLink to="home" className={setActiveClass}>Home</NavLink>
        <NavLink to="css" className={setActiveClass}>CSS demos</NavLink>
        <ThemeSwitch />
      </nav>
      <Outlet />
    </div>
  )
}

function ThemeSwitch() {
  const _btn = useRef(null)

  function switchTheme() {
    const _body = document.querySelector('body')
    const className = toggleClass('dark', _body.className)

    if (className === '') {
      _body.removeAttribute('class')
    } else {
      _body.className = className
    }
    _btn.current.className = toggleClass('right', _btn.current.className)
  }

  return (
    <div className="theme-switch" onClick={switchTheme}>
      <div className="btn" ref={_btn} />
    </div>
  )
}


