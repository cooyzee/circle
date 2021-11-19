import React from 'react'
import {Routes, Route, NavLink} from 'react-router-dom'
import {setActiveClass} from "../../com"
import Gradient from './Gradient'
import Border from './Border'
import './css.scss'

const cssNav = [
  'gradient',
  'border',
]

export default function CssRoute() {
  return (
    <div className="css-demos">
      <nav className="menu">
        {cssNav.map((nav, i) => (
          <NavLink key={i} to={`${nav}`} className={setActiveClass}>{nav}</NavLink>
        ))}
      </nav>
      <Routes>
        <Route path="gradient" element={<Gradient />} />
        <Route path="border" element={<Border />} />
      </Routes>
    </div>
  )
}
