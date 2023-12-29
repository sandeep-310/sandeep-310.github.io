let ham = document.querySelector(".hamburger")
let menu = document.querySelector(".menu")
let bar = document.querySelectorAll(".bar")
ham.addEventListener("click", ()=>{
    menu.classList.toggle("active")
    bar[0].classList.toggle("upperBar")
    bar[1].classList.toggle("middleBar")
    bar[2].classList.toggle("lowerBar")
})
let menuObj = document.querySelectorAll(".menu")
menuObj.forEach(element => {
    element.addEventListener("click", ()=>{
        menu.classList.remove("active")
        bar[0].classList.toggle("upperBar")
        bar[1].classList.toggle("middleBar")
        bar[2].classList.toggle("lowerBar")
    })
});
