Array.prototype.forEach.call(document.querySelectorAll('.bb-nav li'), function (li) {
  li.addEventListener('click', handleNavToggle)
})

function handleNavToggle(ev) {
  var currentToggle = ev.target
    , targetBoxSelector = currentToggle.hash || currentToggle.href.match(/(#[^\s]+)$/)[1]

    , currentLi = document.querySelector('.bb-nav .active')
    , currentBox = document.querySelector('.bb-active')

    , targetLi = currentToggle.parentElement
    , targetBox = document.querySelector(targetBoxSelector)

  ev.preventDefault()

  if (currentLi === targetLi ) return


  removeClass(currentLi, 'active')
  removeClass(currentBox, 'bb-active')

  addClass(targetLi, 'active')
  addClass(targetBox, 'bb-active')
}

function addClass(el, className) { return el.classList.add(className) }
function removeClass(el, className) { return el.classList.remove(className) }