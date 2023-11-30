// variable
const navigation    = document.getElementById("navigation")
const navHumbergur  = document.querySelector(".nav-responsive input") 
const navSlide      = document.querySelector("nav ul")

window.onscroll = () => {
    navigation.classList.toggle("scrolling", window.scrollY > 0)
}

navHumbergur.onclick = () => {
    navSlide.classList.toggle("slide")
} 

