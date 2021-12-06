import React from 'react'

export default function Gradient() {
  return (
    <div className="gradient-page">
      <p>Declare the <u>background</u> to be a gradient in CSS rather than a actual image file, is better for control and performance.</p>
      <strong>linear gradient</strong>
      <div className="gradient linear-1" />
      <div className="gradient linear-2" />
      <div className="gradient linear-3">
        <div className="progress" />
      </div>
      <p>
        <strong>radial gradient</strong>
      </p>
      <div className="gradient radial" />
      <div className="gradient radial-circle" />
      <p>
        <strong>Conic gradient</strong>
      </p>
      <div className="gradient conic" />
      <p>
        <strong>Coupon Card</strong>
      </p>
      <div className="coupon-card" />
    </div>
  )
}
