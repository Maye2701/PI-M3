# Chat con Tony Stark

## Descripción

Chat con Tony Stark es una Single Page Application (SPA) que permite conversar con una versión ficticia del personaje Tony Stark mediante inteligencia artificial. La aplicación utiliza la API de Gemini y realiza la conexión de forma segura a través de Vercel Functions, evitando exponer la API key en el frontend.

## Funcionalidades

1. Navegación interactiva entre las vistas Home, Chat y About mediante routing SPA.
2. Chat con una versión ficticia de Tony Stark utilizando inteligencia artificial.
3. Historial de conversación visible durante la sesión.
4. Envío limitado de los últimos 8 mensajes a Gemini para optimizar el uso de tokens.
5. Mensajes de carga y error para mejorar la experiencia del usuario.
6. Diseño responsive adaptable a diferentes tamaños de pantalla.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- Vite
- Vitest
- Vercel
- Vercel Functions
- Gemini API

## Instalación

1. Clonar el repositorio.
2. Instalar dependencias:

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
GEMINI_API_KEY=tu_api_key_de_gemini
```

El archivo `.env` no debe subirse al repositorio. Para documentar las variables necesarias se incluye el archivo `.env.example`.

## Ejecución local

Para ejecutar solo el frontend con Vite:

```bash
npm run dev
```

Para ejecutar la aplicación con Vercel Functions en local:

```bash
npx vercel dev
```

## Tests

El proyecto incluye pruebas unitarias con Vitest para validar funciones utilitarias del chat.

Para ejecutar los tests:

```bash
npm test
```

## Despliegue

La aplicación está preparada para desplegarse en Vercel.

Para que el chat funcione en producción, se debe configurar la variable de entorno `GEMINI_API_KEY` en el panel del proyecto en Vercel.

Pasos generales:

1. Conectar el repositorio de GitHub con Vercel.
2. Configurar `GEMINI_API_KEY` en las variables de entorno del proyecto.
3. Ejecutar el despliegue.
4. Probar la URL pública generada por Vercel.

## Uso de IA durante el desarrollo

Durante el desarrollo se utilizó inteligencia artificial como apoyo para comprender conceptos, organizar la estructura del proyecto, revisar errores y mejorar la documentación. Las decisiones finales de implementación fueron revisadas y adaptadas según los requisitos del Proyecto Integrador.

## Aviso legal / educativo

Tony Stark es un personaje ficticio perteneciente al universo de Marvel. Este proyecto tiene fines educativos y no está afiliado oficialmente con Marvel, Disney ni sus marcas relacionadas.

## Demo en producción

La aplicación desplegada en Vercel está disponible en:

https://pi-m3-tony-stark-chat.vercel.app

## Repositorio

https://github.com/Maye2701/PI-M3