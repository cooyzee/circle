// common function to set active class for nav link of react router dom
function setActiveClass({isActive}) {
  return isActive ? 'active' : ''
}

function toggleClass(tar, source) {
  const tarArray = []
  let flag = true
  source.split(' ').forEach(item => {
    if (item) {
      if (item === tar) {
        flag = false
      } else {
        tarArray.push(item)
      }
    }
  })
  if (flag) {
    tarArray.push(tar)
  }
  return tarArray.join(' ')
}

export {
  setActiveClass,
  toggleClass,
}
