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

const textMom = document.querySelector(".pengantar-desc")

textMom.onclick = (event) => {
    const current = event.target

    const btnSelengkapnya = current.className.includes("read-more-btn")
    if (! btnSelengkapnya) return;

    const currentText = event.target.parentNode.querySelector(".read-more-text")

    currentText.classList.toggle('read-more-text--show')

    current.textContent = current.textContent.includes('Selengkapnya') ? 
    "Sembunyikan..." : "Selengkapnya..."
    
}