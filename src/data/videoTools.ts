import type { Tool } from '../types/Tool';

export const categoryDescription = {
    title: "Video Y Edición De Videos",
    description: `🎬 Transforma tus ideas en videos impactantes con IA 🚀

La creación y edición de videos nunca ha sido tan fácil. Con herramientas de IA, puedes generar videos a partir de texto, transformar imágenes en secuencias animadas, traducir contenido en tiempo real y optimizar la edición con un solo clic. Si eres creador de contenido, estudiante o profesional del audiovisual, estas herramientas te permitirán producir videos con calidad profesional sin esfuerzo. ¡Explora y potencia tu creatividad!`
};

export const videoTools: Tool[] = [
    {
        name: "Sora",
        url: "https://openai.com/sora",
        logo: "https://openai.com/favicon.ico",
        description: "La revolucionaria IA de OpenAI para crear videos realistas y cinematográficos a partir de descripciones de texto."
    },
    {
        name: "Genmo AI",
        url: "https://www.genmo.ai/",
        description: "Convierte imágenes estáticas en videos animados con fluidez y gran calidad visual."
    },
    // ... resto de herramientas ...
    {
        name: "InVideo",
        url: "https://invideo.io/",
        logo: "https://web-assets.invideo.io/common/prod/logos/invideo-ai-light.svg",
        description: "Plataforma especializada en la creación de videos cortos y contenido viral."
    }
]; 