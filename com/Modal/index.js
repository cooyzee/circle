import React, { useRef, useEffect } from 'react'
import ReactDom from 'react-dom'

export default function Modal(props) {
  const el = useRef(null)
  const mount = useRef(false)
  if (el.current === null) {
    el.current = document.createElement('div')
    el.current.className = 'g-modal'
  } else {
    mount.current = true
  }

  useEffect(function () {
    const body = document.querySelector('body')
    if (props.isShow) {
      body.appendChild(el.current)
    } else {
      mount.current && body.removeChild(el.current)
    }
  }, [props.isShow])

  return ReactDom.createPortal(props.children, el.current)
}
