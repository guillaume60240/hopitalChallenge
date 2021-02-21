
const indexLien = document.getElementById("index-lien")
const servicesLien = document.getElementById("services-lien")
const aboutLien = document.getElementById("about-lien")
const appointmentLien = document.getElementById("appointment-lien")
const applicationLien = document.getElementById("application-lien")
const doctorsLien = document.getElementById("doctors-lien")
const contactLien = document.getElementById("contact-lien")

indexLien.addEventListener("click",()=>{
    document.getElementById("accueil").style.display = "block"
    document.getElementById("services").style.display = "none"    
    document.getElementById("appointment").style.display = "none"
    document.getElementById("application").style.display = "none"
    document.getElementById("doctors").style.display = "none"
    document.getElementById("news").style.display = "none"
    document.getElementById("contact").style.display = "none"
})

servicesLien.addEventListener("click",()=>{
    document.getElementById("services").style.display = "block"
    document.getElementById("accueil").style.display = "none"    
    document.getElementById("appointment").style.display = "none"
    document.getElementById("application").style.display = "none"
    document.getElementById("doctors").style.display = "none"
    document.getElementById("news").style.display = "none"
    document.getElementById("contact").style.display = "none"
})


applicationLien.addEventListener("click",()=>{
    document.getElementById("application").style.display = "block"
    document.getElementById("accueil").style.display = "none"
    document.getElementById("services").style.display = "none"    
    document.getElementById("appointment").style.display = "none"
    document.getElementById("doctors").style.display = "none"
    document.getElementById("news").style.display = "none"
    document.getElementById("contact").style.display = "none"
})
appointmentLien.addEventListener("click",()=>{
    document.getElementById("appointment").style.display = "block"
    document.getElementById("accueil").style.display = "none"
    document.getElementById("services").style.display = "none"    
    document.getElementById("application").style.display = "none"
    document.getElementById("doctors").style.display = "none"
    document.getElementById("news").style.display = "none"
    document.getElementById("contact").style.display = "none"
})

doctorsLien.addEventListener("click",()=>{
    document.getElementById("appointment").style.display = "none"
    document.getElementById("accueil").style.display = "none"
    document.getElementById("services").style.display = "none"    
    document.getElementById("application").style.display = "none"
    document.getElementById("doctors").style.display = "block"
    document.getElementById("news").style.display = "none"
    document.getElementById("contact").style.display = "none"
})
contactLien.addEventListener("click",()=>{
    document.getElementById("accueil").style.display = "none"
    document.getElementById("services").style.display = "none"    
    document.getElementById("appointment").style.display = "none"
    document.getElementById("application").style.display = "none"
    document.getElementById("doctors").style.display = "none"
    document.getElementById("news").style.display = "none"
    document.getElementById("contact").style.display = "block"
})



document.getElementById("index-lien2").addEventListener("click",()=>{
    document.getElementById("accueil").style.display = "block"
    document.getElementById("services").style.display = "none"    
    document.getElementById("appointment").style.display = "none"
    document.getElementById("application").style.display = "none"
    document.getElementById("doctors").style.display = "none"
    document.getElementById("news").style.display = "none"
    document.getElementById("contact").style.display = "none"
})
document.getElementById("services-lien2").addEventListener("click",()=>{
    document.getElementById("accueil").style.display = "none"
    document.getElementById("services").style.display = "block"    
    document.getElementById("appointment").style.display = "none"
    document.getElementById("application").style.display = "none"
    document.getElementById("doctors").style.display = "none"
    document.getElementById("news").style.display = "none"
    document.getElementById("contact").style.display = "none"
})
document.getElementById("news-lien2").addEventListener("click",()=>{
    document.getElementById("accueil").style.display = "none"
    document.getElementById("services").style.display = "none"    
    document.getElementById("appointment").style.display = "none"
    document.getElementById("application").style.display = "none"
    document.getElementById("doctors").style.display = "none"
    document.getElementById("news").style.display = "block"
    document.getElementById("contact").style.display = "none"
})
document.getElementById("contact-lien2").addEventListener("click",()=>{
    document.getElementById("accueil").style.display = "none"
    document.getElementById("services").style.display = "none"    
    document.getElementById("appointment").style.display = "none"
    document.getElementById("application").style.display = "none"
    document.getElementById("doctors").style.display = "none"
    document.getElementById("news").style.display = "none"
    document.getElementById("contact").style.display = "block"
})
document.getElementById("doctors-lien2").addEventListener("click",()=>{
    document.getElementById("appointment").style.display = "none"
    document.getElementById("accueil").style.display = "none"
    document.getElementById("services").style.display = "none"    
    document.getElementById("application").style.display = "none"
    document.getElementById("doctors").style.display = "block"
    document.getElementById("news").style.display = "none"
    document.getElementById("contact").style.display = "none"
})
document.getElementById("doctors-lien3").addEventListener("click",()=>{
    document.getElementById("appointment").style.display = "none"
    document.getElementById("accueil").style.display = "none"
    document.getElementById("services").style.display = "none"    
    document.getElementById("application").style.display = "none"
    document.getElementById("doctors").style.display = "block"
    document.getElementById("news").style.display = "none"
    document.getElementById("contact").style.display = "none"
})
document.getElementById("doctors-lien4").addEventListener("click",()=>{
    document.getElementById("appointment").style.display = "none"
    document.getElementById("accueil").style.display = "none"
    document.getElementById("services").style.display = "none"    
    document.getElementById("application").style.display = "none"
    document.getElementById("doctors").style.display = "block"
    document.getElementById("news").style.display = "none"
    document.getElementById("contact").style.display = "none"
})