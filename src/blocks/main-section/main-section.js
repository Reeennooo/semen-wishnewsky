import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

//Общий код
document.querySelectorAll('.initial-hidden').forEach(el => {
    el.classList.remove('initial-hidden')
})

const tl = gsap.timeline({ defaults: { duration: 1 } })

document.querySelectorAll('.animation').forEach(el => {
    let subtitle = el
    gsap.fromTo(
        subtitle,
        { opacity: 0, y: -50 },
        {
            opacity: 1,
            duration: 0.7,
            y: 0,
            scrollTrigger: {
                trigger: subtitle,
                start: 'top bottom'
            }
        }
    )
})

//Главная
if (document.querySelector('.main-section')) {
    gsap.fromTo(
        document.querySelector('.main-section__title'),
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.7 }
    )
    gsap.fromTo(
        '.main-section__image',
        { scale: 0 },
        { scale: 1, duration: 0.5 }
    )
    gsap.fromTo(
        '.main-section__item',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
    )
}

//Про меня

if (document.querySelector('.previous-jobs')) {
    let blockJobs = document.querySelectorAll('.previous-jobs__block')
    blockJobs.forEach(el => {
        let icon = el.querySelector('.previous-jobs__item')
        let text = el.querySelector('.animate-el')
        gsap.fromTo(
            icon,
            { opacity: 0, x: '20%' },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                scrollTrigger: {
                    trigger: el,
                    start: '50% bottom'
                }
            }
        )
        gsap.fromTo(
            text,
            { opacity: 0, y: 50 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                scrollTrigger: {
                    trigger: el,
                    start: '50% bottom'
                }
            }
        )
    })

    // document.querySelectorAll('.animate-el').forEach(el => {
    //     let animateEl = el
    //     gsap.fromTo(
    //         animateEl,
    //         { opacity: 0, x: '20%' },
    //         {
    //             x: 0,
    //             opacity: 1,
    //             duration: 0.7,
    //             scrollTrigger: {
    //                 trigger: animateEl,
    //                 start: '80% bottom'
    //             }
    //         }
    //     )
    // })
    let howWork = document.querySelectorAll('.how-work__column')
    howWork.forEach(el => {
        let howItem = el.querySelectorAll('.how-work__items')
        gsap.fromTo(
            howItem,
            { x: '20%' },
            {
                opacity: 1,
                x: 0,
                duration: 0.7,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: 'center bottom'
                }
            }
        )
    })
}

//Проекты
if (document.querySelector('.projects')) {
    gsap.fromTo(
        '.card',
        { opacity: 0, scale: 0 },
        {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: {
                amount: 0.4
            },
            scrollTrigger: {
                trigger: '.card',
                start: 'bottom bottom'
            }
        }
    )
    gsap.fromTo(
        '.small-card',
        { opacity: 0, x: '20%' },
        {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.small-card',
                start: 'bottom bottom'
            }
        }
    )
}

//Контакты
if (document.querySelector('.contacts-section')) {
    gsap.fromTo(
        '.contacts-section__item',
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            stagger: 0.1
        }
    )
}

//Эмодзи при клике на главной
let mainImage = document.querySelector('.main-section__image')
if (mainImage) {
    mainImage.addEventListener('click', function () {
        mainImage.classList.toggle('main-section__emoji')
    })
}
