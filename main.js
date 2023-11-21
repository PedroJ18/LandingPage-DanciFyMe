const characteristics =document.querySelector("#characteristics");
const contact =document.querySelector("#contact");
const button =document.querySelector("#buttonC");

/*Menu Caracteristicas */

characteristics.addEventListener("click", (c) =>{
    c.preventDefault();
    const sectionC =document.querySelector(".characteristics");
    sectionC.scrollIntoView({behavior: "smooth"});
})

/*Botón Caracteristicas */

button.addEventListener("click", (b) =>{
    b.preventDefault();
    const sectionB =document.querySelector(".characteristics");
    sectionB.scrollIntoView({behavior: "smooth"});
})

/*Menu Contacto */

contact.addEventListener("click", (s) =>{
    s.preventDefault();
    const sectionS =document.querySelector(".contact");
    sectionS.scrollIntoView({behavior: "smooth"});
})