import React, { useState, useEffect, useRef} from 'react'

function HorizontalNav({children, className = '', index = 0, setIndex}) {
  const [state, setState] = useState(null)
  const _nav = useRef(null)
  const _wrap = useRef(null)

  useEffect(function () {
    // 如果重复点击当前激活菜单则取消更新
    if (state && state.index === index) {
      return
    }
    // 设置浮标位置
    const _tar = _wrap.current.children[index]
    setState({
      index,
      direction: (state && state.index < index) ? 'forward' : 'backward',
      left: _tar.offsetLeft,
      right: Math.round(_wrap.current.clientWidth - _tar.clientWidth - _tar.offsetLeft)
    })
    // 目标滚动位置
    const toScrollLeft = Math.max(Math.round(_tar.offsetLeft - _nav.current.clientWidth / 2 + _tar.clientWidth / 2), 0)
    // 当前位置
    let scrollLeft = _nav.current.scrollLeft
    // 同时为0，不需要滚动
    if (toScrollLeft !== scrollLeft) {
      // 滚动动画间隙，默认大约在1s内完成动画
      let gap = Math.round((toScrollLeft - scrollLeft) / 16)
      // 间隙太小，则不需要动画
      if (gap === 0) {
        _nav.current.scrollLeft = toScrollLeft
        return
      }
      // 使用raf实现滚动动画
      function scroll() {
        scrollLeft = Math.round(scrollLeft + gap)
        if (gap > 0) { // 向后滚动
          scrollLeft = Math.min(scrollLeft, toScrollLeft)
        } else { // 向前滚动
          scrollLeft = Math.max(scrollLeft, toScrollLeft)
        }
        _nav.current.scrollLeft = scrollLeft
        if (scrollLeft !== toScrollLeft) {
          window.requestAnimationFrame(scroll)
        }
      }
      const handlerId = window.requestAnimationFrame(scroll)
      return () => {
        window.cancelAnimationFrame(handlerId)
      }
    }
  }, [index])

  return (
    <div className={`com-horizontal-nav ${className}`} ref={_nav}>
      <div className="com-horizontal-wrap" ref={_wrap}>
        {React.Children.map(children, (navItem, i) => (
          <NavItem key={i} index={i} {...navItem.props} setIndex={setIndex}/>
        ))}
        {state && <div className={`com-horizontal-active ${state.direction}`} style={{left: state.left + 'px', right: state.right + 'px'}} />}
      </div>
    </div>
  )
}

function NavItem({children, index, onClick, setIndex}) {
  function _onClick(e) {
    setIndex(index)
    onClick && onClick(e)
  }
  return (
    <div className="com-horizontal-item" onClick={_onClick}>
      {children}
    </div>
  )
}

export default HorizontalNav
