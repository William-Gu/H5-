const hambuger_menu = document.querySelector(".hambuger-menu")
const container = document.querySelector(".container")


hambuger_menu.addEventListener("click",()=>{
  container.classList.toggle("active")
})