import type { Tool } from '../types/Tool';

export const categoryDescription = {
    title: "Texto E Investigación",
    description: `📚 Escribe, investiga y optimiza tu productividad con inteligencia artificial. Desde generación de contenido hasta análisis de información, estas herramientas de IA te ayudarán a escribir mejor, verificar fuentes, crear resúmenes y automatizar procesos de investigación. Si eres estudiante, creador de contenido o profesional, aquí encontrarás IAs que potencian tu trabajo.`
};

export const textTools: Tool[] = [
    {
        name: "ChatGPT",
        url: "https://chat.openai.com/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png",
        description: "Asistente inteligente de OpenAI que redacta artículos, responde preguntas, genera ideas y más."
    },
    {
        name: "Gemini",
        url: "https://gemini.google.com/?hl=es",
        logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
        description: "IA de Google que ayuda a escribir, organizar y mejorar textos con asistencia inteligente."
    },
    {
        name: "Perplexity",
        url: "https://www.perplexity.ai/",
        logo: "https://www.perplexity.ai/favicon.ico",
        description: "Asistente de IA diseñado para la investigación, proporcionando información basada en fuentes verificables."
    },
    {
        name: "Claude AI",
        url: "https://claude.ai/",
        logo: "https://claude.ai/favicon.ico",
        description: "IA de Anthropic que ofrece respuestas detalladas y naturales, ideal para investigación y generación de contenido."
    },
    {
        name: "ChatPDF",
        url: "https://www.chatpdf.com/",
        logo: "https://www.chatpdf.com/favicon.ico",
        description: "Permite analizar documentos PDF y extraer información relevante sin necesidad de leerlos completos."
    },
    {
        name: "Mistral AI",
        url: "https://chat.mistral.ai/",
        logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/mistral-color.png",
        description: "Chatbot avanzado que proporciona respuestas precisas en múltiples temas."
    },
    {
        name: "Writesonic",
        url: "https://writesonic.com/",
        logo: "https://cdn.prod.website-files.com/671f9e6bc06267864b5770e6/671fa1c6a241f5cf851f5e15_logo.svg",
        description: "IA diseñada para escribir textos optimizados para SEO, marketing y blogs."
    },
    {
        name: "Hugging Face Chat",
        url: "https://huggingface.co/chat/",
        logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        description: "Plataforma con múltiples herramientas de IA que permiten desde la generación de texto hasta análisis de datos."
    }
]; 