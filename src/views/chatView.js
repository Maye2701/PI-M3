

export function getChatView (){
    return (
    `
    <section class="chat-view">

    <h1>Chat con Tony Stark </h1>
    <div id="chat-messages"> </div>

    <form id="chat-form">
    <textarea id="message-input" name="message"  placeholder="..."></textarea>
    <button type="submit">Enviar</button>
    </form>

    <p id="chat-status"></p>

    </section>
    `);
    
    
}