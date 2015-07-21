var encToggles = document.querySelectorAll('input[id^="enc-"]')
var allToggle = document.querySelector('#enc-all')
var forEach = Array.prototype.forEach

// apply bb nav-toggles
forEach.call(document.querySelectorAll('.bb-nav li'), function (li) {
  li.addEventListener('click', handleNavToggle)
})

// apply Encompass search toggles
forEach.call(encToggles, function (input) { 
  input.addEventListener('change', handleEncToggles) 
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

function handleEncToggles(ev) {
  var which = ev.target
  var isAll = function (t) { return t === allToggle }
  var isChecked = !!which.checked

  if (isAll(which) && isChecked) {
    forEach.call(encToggles, function (t) {
      if (t !== allToggle) return t.checked = false
    })
  } 

  else if (isChecked && allToggle.checked) {
    allToggle.checked = false
  }

}
