import React,{ useEffect } from 'react'
import './index.scss'

export default function index() {

  useEffect(function () {
    console.log('cmp did mount aa')
  }, [])

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
    </div>
  )
}
