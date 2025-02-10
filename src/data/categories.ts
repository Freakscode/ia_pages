interface Category {
    title: string;
    description: string;
    icon: string;
    cardClass: string;
    url: string;
    logo: string;
}

export const categories: Category[] = [
    {
        title: "Creación Y Edición De Imágenes",
        description: "Imagen Y Fotografía",
        icon: "🖼️",
        cardClass: "card-1",
        url: "/categories/image-editing",
        logo: "/images/logos/image-editing.png"
    },
    {
        title: "Animación",
        description: "Animación Digital y Motion Graphics",
        icon: "🎬",
        cardClass: "card-2",
        url: "/categories/animacion",
        logo: "/images/logos/animacion.png"
    },
    {
        title: "Video Y Edición",
        description: "Edición y Producción de Videos",
        icon: "🎥",
        cardClass: "card-3",
        url: "/categories/video",
        logo: "/images/logos/video.png"
    },
    {
        title: "Audio Y Música",
        description: "Producción y Edición de Audio",
        icon: "🎵",
        cardClass: "card-4",
        url: "/categories/audio",
        logo: "/images/logos/audio.png"
    },
    {
        title: "Diseño Gráfico",
        description: "Diseño Visual y Branding",
        icon: "🎨",
        cardClass: "card-5",
        url: "/categories/diseno",
        logo: "/images/logos/diseno.png"
    },
    {
        title: "Texto E Investigación",
        description: "Contenido y Análisis",
        icon: "📝",
        cardClass: "card-6",
        url: "/categories/texto",
        logo: "/images/logos/texto.png"
    },
    {
        title: "Mercado Y Análisis",
        description: "Investigación y Estrategia",
        icon: "📊",
        cardClass: "card-7",
        url: "/categories/mercado",
        logo: "/images/logos/mercado.png"
    },
    {
        title: "Tareas Multipropósito",
        description: "Herramientas versátiles para diversas tareas",
        icon: "🛠️",
        cardClass: "multi",
        url: "/categories/multi/",
        logo: "/images/logos/multi.png"
    }
]; 