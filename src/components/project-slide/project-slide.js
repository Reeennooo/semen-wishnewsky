import Swiper from "swiper";

document.addEventListener('DOMContentLoaded', () => {
  const projecSlidePhoto = document.querySelectorAll(".project-slide__photo")
  if(projecSlidePhoto){
    projecSlidePhoto.forEach((el) => {
      let slider = new Swiper(el.querySelector(".project-img-slider"), {
        loop: true,
        speed: 800,
        navigation: {
          nextEl: el.querySelector(".project-img-slider__next"),
          prevEl: el.querySelector(".project-img-slider__prev"),
        },
        pagination: {
          el: el.querySelector(".project-img-slider__pagination"),
          type: "bullets",
          clickable: true
        },
        // breakpoints: {
        //   575: {
        //     allowTouchMove: false,
        //   }
        // }
      })
    })
  }
})