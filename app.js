const card = document.querySelector(".card")
const container = document.querySelector(".container")
const title = document.querySelector(".title")
const sneaker = document.querySelector(".sneaker > img")
const purchaseBtn = document.querySelector(".purchase > button")
const description = document.querySelector(".info > h3")
const sizes = document.querySelector(".sizes")

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

container.addEventListener("mouseenter", () => {
    card.style.transition = "none";

    title.style.transform = `translateZ(150px)`
    sneaker.style.transform = `translateZ(100px) rotate(-45deg)`
    purchaseBtn.style.transform = `translateZ(120px)`
    description.style.transform = `translateZ(80px)`
    sizes.style.transform = `translateZ(80px)`
})

container.addEventListener("mouseleave", () => {
    card.style.transition = "all .5s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = `translateZ(0px)`
    sneaker.style.transform = `translateZ(0px)`
    purchaseBtn.style.transform = `translateZ(0px)`
    description.style.transform = `translateZ(0px)`
    sizes.style.transform = `translateZ(0px)`
})