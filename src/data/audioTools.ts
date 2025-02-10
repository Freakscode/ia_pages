import type { Tool } from '../types/Tool';

export const categoryDescription = {
    title: "Audio Y Música",
    description: `🎵 Descubre herramientas de IA para transformar la manera en que trabajas con sonido. Ya sea que necesites convertir texto en audio, mejorar tus podcasts o producir música desde cero, aquí encontrarás la IA perfecta para llevar tus ideas al siguiente nivel. ¡Experimenta y crea con facilidad!`
};

export const audioTools: Tool[] = [
    {
        name: "ElevenLabs",
        url: "https://elevenlabs.io/",
        logo: "https://eleven-public-cdn.elevenlabs.io/payloadcms/9trrmnj2sj8-logo-logo.svg",
        description: "Convierte texto en audio con voces naturales y expresivas, ideal para narraciones, doblajes y más."
    },
    {
        name: "GoodTape",
        url: "https://goodtape.io/",
        logo: "https://pbs.twimg.com/media/GNEZMFXWEAAPq9Z.jpg",
        description: "Transforma audios en texto de manera rápida y precisa, ideal para transcripciones de entrevistas y conferencias."
    },
    {
        name: "TTSMaker",
        url: "https://ttsmaker.com/",
        logo: "https://ttsmaker.com/static/v3_theme_01_asset/logo/expert_logo_v2.png",
        description: "Crea locuciones de alta calidad a partir de texto con múltiples opciones de personalización."
    },
    {
        name: "Suno",
        url: "https://suno.com/",
        logo: "https://suno.com/logos/Logo-4.svg",
        description: "Genera canciones originales con IA y experimenta con nuevas melodías y estilos musicales."
    },
    {
        name: "StableAudio",
        url: "https://www.stableaudio.com/",
        logo: "https://www.stableaudio.com/images/logo.svg",
        description: "Crea música de calidad profesional con inteligencia artificial, perfecta para productores y compositores."
    },
    {
        name: "AIVA",
        url: "https://creators.aiva.ai/",
        logo: "https://www.parentesis.media/wp-content/uploads/2024/11/icon-prod_smaller.png",
        description: "Diseñada para compositores, AIVA genera piezas musicales únicas en distintos géneros y estilos."
    },
    {
        name: "Podcastle",
        url: "https://podcastle.ai/editor/login",
        logo: "https://podcastle.ai/editor/static/6b6a5371fe04c40ca00e9d75a8b6a304.svg",
        description: "Crea y edita podcasts con herramientas impulsadas por IA para mejorar la calidad del sonido y la producción."
    }
]; 