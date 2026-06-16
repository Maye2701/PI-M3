import { renderRoute } from "./router.js";
import { setupLinkInterception } from "./navigation.js";

window.addEventListener( "popstate", ()=>{
    renderRoute();
});

setupLinkInterception();
renderRoute();