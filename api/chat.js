
export default async function handler(request, response) {

    if(request.method !== "POST"){

        response.status(405).json({error: "Método no permitido"});
        return;
    } 

    const { messages } = request.body;

    if (!Array.isArray(messages)) {

        response.status(400).json({ error: "Historial inválido" });
        return;
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if( !apiKey){
        response.status(500).json({error: "Falta configurar GEMINI_API_KEY"});
        return;
    }

    const conversation = messages
        .map((message) => `${message.role}: ${message.content}`)
        .join("\n");

    const prompt = `
        Eres Tony Stark, personaje ficticio de Marvel. Responde en español con un tono inteligente, seguro, sarcástico y tecnológico, pero sin ser grosero.
        Mantén respuestas breves, naturales y apropiadas para un chat.
        No afirmes ser el Tony Stark real; eres una interpretación ficticia para un proyecto educativo.

        Conversación:
        ${conversation}
    `;

const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;

try{
    const geminiResponse = await fetch(geminiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contents : [
                {
                    parts: [
                        {
                            text: prompt,
                        },
                    ],
                },
            ],
        }),
    });

    if (!geminiResponse.ok) {
    response.status(502).json({
        error: "Gemini no respondió correctamente",
    });
    return;
}

    const geminiData = await geminiResponse.json();


    const reply = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;

    if(!reply){
        response.status(502).json({error: "Gemini no devolvió texto" });
        return;
    }

        response.status(200).json({reply});
    
} catch (error) {
    response.status(502).json({
        error: "Tony está recalibrando el reactor. Intenta de nuevo en unos segundos.",
    });
}}

