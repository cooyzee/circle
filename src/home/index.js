import React,{ useEffect } from 'react'
import './index.scss'

export default function index() {

  useEffect(function () {
    console.log('cmp did mount aa')
  }, [])

  return (
    <div className="container">
      <h4 className="h4">This is the index.</h4>
    </div>
  )
}
