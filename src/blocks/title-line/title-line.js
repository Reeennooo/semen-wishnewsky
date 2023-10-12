
let isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
|| (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

if(isIOS) {
  document.querySelector('.sub-title-line').addClass('sub-title-line__ios')
}