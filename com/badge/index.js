import React from 'react'

const defaultStyle = {
  boxShadow: '0px 3px 6px 0px rgba(149, 157, 165, 0.15)',
  display: 'flex',
  overflow: 'hidden',
}

function Badge({className, style, circle, children}) {
  const css = {...defaultStyle, ...style, borderRadius: circle ? '50%' : '20px'}
  return <div className={className} style={css} >{children}</div>
}

function CircleBadge(props) {
  return <Badge circle style={{
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
  }} {...props}/>
}

export {
  Badge,
  CircleBadge,
}


