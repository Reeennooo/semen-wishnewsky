document.addEventListener('DOMContentLoaded', () => {
  let blockBtns = document.querySelector(".projects__view");

  if(blockBtns) {
    let btnColumn = blockBtns.querySelector(".projects__column");
    let btnSquare = blockBtns.querySelector(".projects__square");
    let projectsWrapper = document.querySelector(".projects__wrapper");
    let allCards = projectsWrapper.querySelectorAll(".card");

  blockBtns.addEventListener("click", (e) => {
    const target = e.target;
    if(target.closest(".projects__column")){
      if(!btnColumn.classList.contains("active")){
        btnColumn.classList.add("active")
        btnSquare.classList.remove("active")
        projectsWrapper.classList.remove("square-style")
        allCards.forEach(el => {
          el.classList.remove("square-style")
        })
      }
    } 
    else {
      btnSquare.classList.add("active")
      btnColumn.classList.remove("active")
      projectsWrapper.classList.add("square-style")
      allCards.forEach(el => {
        el.classList.add("square-style")
      })
    }
  })
}

})


