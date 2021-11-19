// common function to set active class for nav link of react router dom
function setActiveClass({isActive}) {
  return isActive ? 'active' : ''
}

export {
  setActiveClass,
}
