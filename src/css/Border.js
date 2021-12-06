import React from 'react'

export default function Border() {
  return (
    <div className="border-page">
      <p>半透明边框，多重边框，边框内圆角</p>
      <div className="target"></div>
      <p>background-clip: border-box; padding-box; content-box</p>
      <p>1px border</p>
      <div className="border-one-px" />
      <div className="border-radius one" />
    </div>
  )
}
