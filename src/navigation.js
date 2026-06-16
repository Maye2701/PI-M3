import { renderRoute } from "./router.js";


export function setupLinkInterception(){

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link)=>{

    link.addEventListener("click", (event) =>{

        event.preventDefault();

    const path = link.getAttribute("href");
        window.history.pushState({}, "", path);
        renderRoute();

    });

});
}

