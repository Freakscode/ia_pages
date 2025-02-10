import type { Tool } from '../types/Tool';

export const categoryDescription = {
    title: "Animación",
    description: `🎥 Pon tu creatividad en movimiento con IA ✨

Convierte dibujos en secuencias animadas, transforma texto en videos impresionantes y haz que tus creaciones cobren vida con facilidad. Ya seas un creador de contenido, diseñador o estudiante, estas herramientas te ayudarán a animar tus ideas con rapidez y calidad profesional. ¡Explora, experimenta y déjate sorprender!`
};

export const animationTools: Tool[] = [
    {
        name: "LeiaPix",
        url: "https://convert.leiapix.com/upload",
        description: "Genera efectos 3D asombrosos a partir de imágenes estáticas, añadiendo profundidad y movimiento."
    },
    {
        name: "Immersity AI",
        url: "https://www.immersity.ai/",
        logo: "https://cdn.prod.website-files.com/6639cdf0b2b3923e2887386c/663b75945d28eb9753991c50_IAI_Word_Default.svg",
        description: "Convierte imágenes en animaciones envolventes con efectos visuales inmersivos."
    },
    {
        name: "Runway ML",
        url: "https://runwayml.com/",
        description: "Plataforma de IA para generar imágenes y videos con efectos sorprendentes, ideal para cineastas y creadores."
    },
    {
        name: "Luma Labs",
        url: "https://lumalabs.ai/",
        description: "Convierte texto en video automáticamente, permitiendo generar contenido visual dinámico."
    },
    {
        name: "Sketch Metademolab",
        url: "https://sketch.metademolab.com/",
        logo: "data:image/png;base64,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",
        description: "Anima dibujos a mano y dales vida con facilidad."
    },
    {
        name: "Wonder Dynamics",
        url: "https://wonderdynamics.com/",
        description: "Anima personajes digitales con calidad cinematográfica, ideal para producciones avanzadas."
    },
    {
        name: "Hedra AI",
        url: "https://www.hedra.com/app/characters",
        description: "Convierte imágenes en personajes parlantes con sincronización labial realista."
    },
    {
        name: "Kling AI",
        url: "https://klingai.com/text-to-video/new",
        logo: "https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/images/kling-logo-en-gYSpat0A.png",
        description: "Crea videos a partir de imágenes estáticas, permitiendo animar ilustraciones y escenas."
    },
    {
        name: "ToonCrafter",
        url: "https://tooncrafter.net/es",
        logo: "https://tooncrafter.net/images/logo.jpg",
        description: "Transforma historietas y cómics en animaciones interactivas."
    },
    {
        name: "SadTalker AI",
        url: "https://sadtalkerai.com/",
        description: "Haz que tus personajes hablen con expresiones realistas y sincronización labial."
    },
    {
        name: "MiniMax AI",
        url: "https://www.minimaxi.com/",
        logo: "https://filecdn.minimax.chat/public/969d635c-cab6-45cc-8d61-47c9fe40c81f.png?x-oss-process=image/format,webp",
        description: "Generador de videos con IA que transforma imágenes en secuencias animadas."
    },
    {
        name: "Viggle AI",
        url: "https://viggle.ai/m-home",
        logo:"data:image/png;base64,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",
        description: "Crea personajes animados que bailan con sincronización fluida."
    },
    {
        name: "Krea AI",
        url: "https://www.krea.ai/home",
        description: "Explora la animación onírica generando secuencias fluidas a partir de imágenes clave."
    },
    {
        name: "LivePortrait",
        url: "https://liveportrait.org/es",
        logo:"https://liveportrait.org/logo.png",
        description: "Sincroniza los movimientos faciales en fotos para lograr animaciones realistas."
    },
    {
        name: "Adobe Express",
        url: "https://www.adobe.com/es/express/",
        description: "Herramienta accesible de Adobe para crear animaciones fácilmente."
    },
    {
        name: "BlinkShot",
        url: "https://www.blinkshot.io/",
        description: "Genera imágenes animadas automáticamente, ideal para contenido visual dinámico."
    },
    {
        name: "Scout Asseter AI",
        url: "https://scout.asseter.ai/",
        description: "Buscador de objetos 3D ideal para diseñadores y modeladores."
    },
    {
        name: "Mixamo",
        url: "https://www.mixamo.com/#/",
        description: "Anima personajes en 3D con una plataforma intuitiva y fluida."
    },
    {
        name: "Meshy AI",
        url: "https://www.meshy.ai/",
        description: "Crea modelos 3D desde cero con inteligencia artificial."
    },
    {
        name: "Tripo3D",
        url: "https://www.tripo3d.ai/app",
        logo:"https://www.tripo3d.ai/web/assets/new/common/tripo-text-menu.png",
        description: "Genera objetos tridimensionales a partir de descripciones de texto."
    },
    {
        name: "Anything World",
        url: "https://app.anything.world/mesh-generation",
        description: "Plataforma que permite crear entornos y mundos 3D automáticamente."
    },
    {
        name: "HyperHuman",
        url: "https://hyperhuman.deemos.com/",
        description: "Herramienta avanzada para desarrollar personajes animados en 3D, ideal para videojuegos y experiencias interactivas."
    }
]; 