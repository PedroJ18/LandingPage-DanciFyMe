const caracteristicas =document.querySelector("#caracteristicas");
const contacto =document.querySelector("#contacto");

/*Menu Caracteristicas */

caracteristicas.addEventListener("click", (c) =>{
    c.preventDefault();
    const sectionC =document.querySelector(".caracteristicas");
    sectionC.scrollIntoView({behavior: "smooth"});
})

/*Menu Contacto */

contacto.addEventListener("click", (cn) =>{
    cn.preventDefault();
    const sectionCN =document.querySelector(".contacto");
    sectionCN.scrollIntoView({behavior: "smooth"});
})