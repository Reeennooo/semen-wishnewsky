import Swiper from 'swiper'

let cards = document.querySelectorAll('.card')
let modalProject = document.querySelector('.modal-project')
let modalText = document.querySelectorAll('.project-slide__info-text')
let controller = document.querySelector('.controller')

// Закртие модалки при клике вне ёё контента.
modalProject.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.modal-project__content')) {
        modalProject.classList.remove('is-active')
        noScroll.enableScroll()
    }
    // else if(target.closest(".modal-project__back")){
    //   modalProject.classList.remove("is-active")
    //   noScroll.enableScroll()
    // }
})
let projectBack = document.querySelectorAll('.modal-project__back')
projectBack.forEach(el => {
    el.addEventListener('click', () => {
        modalProject.classList.remove('is-active')
        noScroll.enableScroll()
        controller.style.display = 'none'
    })
})

//Появление зафиксированной навигации навигация(controller)
window.addEventListener('resize', () => {
    if (
        window.innerWidth > 767 &&
        modalProject.classList.contains('is-active')
    ) {
        controller.style.display = 'none'
    } else if (
        window.innerWidth < 767 &&
        modalProject.classList.contains('is-active') &&
        controller.style.display !== 'block'
    ) {
        controller.style.display = 'block'
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const projectSlider = document.querySelector('.modal-project__swiper')
    if (projectSlider) {
        let slider = new Swiper(projectSlider, {
            loop: true,
            speed: 1,
            navigation: {
                nextEl: '.project-slide__next',
                prevEl: '.project-slide__prev'
            },
            breakpoints: {
                575: {
                    allowTouchMove: false
                }
            }
        })

    cards.forEach((el, index) => {
      el.addEventListener("click", () => {
        modalProject.classList.add("is-active")
        slider.slideTo(index+1, 50, false)
        modalProject.scrollTo(0, 0);
        noScroll.disableScroll()
        if(window.innerWidth < 767){
          controller.style.display = "block";
        }
    })
    })
  }

})
