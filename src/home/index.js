import React,{ useState } from 'react'
import './index.scss'
import HorizontalNav from '../../com/HorizontalNav'
import '../../com/HorizontalNav/style.scss'

const navItems= [
  'Nav One',
  'Nav Two',
  'Nav Three',
  'Nav Four',
  'Nav Five',
  'Nav Six',
  'Nav Seven',
  'Nav Eight',
  'Nav Nine',
]

export default function index() {
  const [navIndex, setNavIndex] = useState(0)

  return (
    <div className="container">
      <p>Exploring React tech and all the new things accompany:</p>
      <ol>
        <li>React 17</li>
        <li>Fast refresh for react hot load</li>
        <li>React router 6</li>
        <li>Server side render with koa</li>
        <li>CSS tricks</li>
      </ol>
      <h4>Auto horizontal navigation</h4>
      <HorizontalNav index={navIndex} setIndex={index => setNavIndex(index)} className="custom-nav">
        {navItems.map((nav, i) => <li key={i}>{nav}</li>)}
      </HorizontalNav>
    </div>
  )
}
