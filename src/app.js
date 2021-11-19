import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './home'
import Css from './css'
import './app.scss'
import Layout from "./layout"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="css/*" element={<Css />} />
        </Route>
      </Routes>
    </Router>
  )
}
