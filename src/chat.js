import { isEmptyMessage } from "./utils.js";


const messages = [];

async function getTonyReply(messages) {
    const recentMessages = messages.slice(-8);

    const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: recentMessages }),
    });

    if (!response.ok) {
        throw new Error("No se pudo obtener respuesta de Tony.");
    }

    const data = await response.json();

    if (!data.reply) {
        throw new Error(data.error || "Respuesta inválida del servidor.");
    }

    return data.reply;
}


export function setupChat (){
    const chatForm = document.querySelector("#chat-form");
    const messageInput = document.querySelector("#message-input");
    const chatMessages = document.querySelector("#chat-messages");
    const chatStatus = document.querySelector("#chat-status");

    messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        chatForm.requestSubmit();
    }
    });

    chatForm.addEventListener ("submit", async (event) =>{
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

        try{
            const reply = await getTonyReply(messages);
                messages.push({
                    role:"assistant",
                    content : reply,
                });

                renderMessages();
                chatStatus.textContent="";

        } catch (error){
            chatStatus.textContent = "No se pudo contactar a Tony. Intenta de nuevo";
        }

        messageInput.value="";
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
