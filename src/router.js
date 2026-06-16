import { setupChat } from "./chat.js";
import { getAboutView } from "./views/about.js";
import { getChatView } from "./views/chatView.js";
import { getHomeView } from "./views/home.js";


const app = document.querySelector("#app");

export function renderRoute() {
    const path = window.location.pathname;

    if (path === "/home" || path === "/") {
        app.innerHTML = getHomeView();
    } 
    else if (path === "/about"){
        app.innerHTML = getAboutView();
    } else if (path === "/chat"){
        app.innerHTML = getChatView();
        setupChat();
    }
}

