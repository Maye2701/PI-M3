import { isEmptyMessage } from "./utils.js";


const messages = [];

export function setupChat (){
    const chatForm = document.querySelector("#chat-form");
    const messageInput = document.querySelector("#message-input");
    const chatMessages = document.querySelector("#chat-messages");
    const chatStatus = document.querySelector("#chat-status");

    chatForm.addEventListener ("submit", (event) =>{
        event.preventDefault();

        const messageText = messageInput.value.trim();

        if(isEmptyMessage(messageText)){
            return;
            }

        messages.push({
            role:"user",
            content : messageText,

        });

        renderMessages();

        chatStatus.textContent="Tony está escribiendo...";
        messages.push({
            role:"assistant",
            content : "Claro. Intentaré explicarlo sin que explote nada... esta vez. ",

        });
        
        renderMessages();
        messageInput.value=""
        chatStatus.textContent="";
        messageInput.focus();

    }) 


    function renderMessages (){
        const messagesHTML = messages
            .map((message)=>{
                return `<div class="message ${message.role}">${message.content}</div>`;
            })
            .join("");

        chatMessages.innerHTML = messagesHTML;

}


}
