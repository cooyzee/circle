import React,{ useEffect } from 'react'

export default function index() {

  useEffect(function () {
    console.log('cmp did mount aa')
  }, [])

  return (
    <div className="container">
      <h4 className="h4">This is index!</h4>
    </div>
  )
}
