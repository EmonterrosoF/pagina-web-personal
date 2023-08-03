



const navLinks = document.querySelectorAll(".header-link")


navLinks.forEach(link => {

    link.addEventListener("click", ()=> {
        navLinks.forEach(link => {
            link.classList.remove("header-link__active")
        })
        
        link.classList.add("header-link__active")
    })
})