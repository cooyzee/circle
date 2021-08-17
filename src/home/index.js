import React,{ useEffect } from 'react'
import { CircleBadge, Badge } from '../../com/badge'
import './index.scss'

export default function index() {

  useEffect(function () {
    console.log('cmp did mount aa')
  }, [])

  return (
    <div className="container">
      <h4 className="h4">This is index.</h4>
      <CircleBadge>C</CircleBadge>
      <Badge>Cooyzee</Badge>
    </div>
  )
}
