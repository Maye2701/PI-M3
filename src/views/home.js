import tonyImage from "../assets/tony-stark.png";
export function getHomeView() {
    return `
        <section class="home-view">
            <div class="home-content">
                <div class="home-text">
                    <h1>Hola, soy Tony Stark</h1>
                    <p>Tony Stark es un genio, multimillonario y superhéroe. Creó una poderosa armadura tecnológica y se convirtió en Iron Man para salvar al mundo. Es inteligente, carismático y algo presumido.</p>
                    <a class="primary-link" href="/chat">Iniciar conversación</a>
                </div>

                <img class="home-image" src="${tonyImage}" alt="Tony Stark en estilo tecnológico">
            </div>
        </section>
    `;
}