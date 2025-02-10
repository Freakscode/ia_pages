import type { Tool } from '../types/Tool';

export const imageEditingTools: Tool[] = [
  { 
    name: "Midjourney", 
    url: "https://www.midjourney.com/home",
    logo: "https://cdn.document360.io/logo/3040c2b6-fead-4744-a3a9-d56d621c6c7e/778d06e9a335497ba965629e3b83a31f-MJ_Boat.png",
    description: "Crea imágenes impresionantes con IA"
  },
  { 
    name: "Vizcom", 
    url: "https://www.vizcom.ai/",
    logo: "https://framerusercontent.com/images/7uJsrddEOoQRxTERtTpCh9Cjyg.png?scale-down-to=512",
    description: "Convierte bocetos en diseños profesionales"
  },
  { 
    name: "Krea", 
    url: "https://www.krea.ai/home",
    description: "Generador de imágenes con IA enfocado en la creatividad y el arte digital"
  },
  { 
    name: "Playground AI",
    url: "https://playground.com/",
    logo: "https://cdn.playground.com/logo/Logo_monochrome.png",
    description: "Plataforma versátil para crear y editar imágenes con IA"
  },
  { name: "AI Comic Factory", url: "https://aicomicfactory.com/es/playground",
    logo: "https://imgc.cc/2023/11/12/6550ad84abe37.png",
    description: "Crea imágenes impresionantes con IA"
  },
  { 
    name: "Leonardo AI", 
    url: "https://app.leonardo.ai", 
    logo: "https://app.leonardo.ai/img/leonardo-logo-white-and-gradient.png",
    description: "Plataforma avanzada de generación de imágenes con modelos personalizables"
  },
  { 
    name: "Tengr AI", 
    url: "https://tengr.ai/en/image-ai",
    description: "Herramienta de edición de imágenes con IA especializada en retoques profesionales"
  },
  { 
    name: "Clipdrop", 
    url: "https://clipdrop.co/",
    description: "Suite completa de herramientas para edición y mejora de imágenes con IA"
  },
  {
      name: "Stylar y Dzine", url: "https://www.stylar.ai/ - https://www.dzine.ai/", logo: "https://static.dzine.ai/assets/dzine_logo_home-d8d4c1d3.svg",
      description: ''
  },
  { 
    name: "DreamStudio", 
    url: "https://beta.dreamstudio.ai/generate", 
    logo: "https://beta.dreamstudio.ai/logo.png",
    description: "Estudio creativo potenciado por IA para generar arte e ilustraciones únicas"
  },
  { 
    name: "Skybox", 
    url: "https://skybox.blockadelabs.com/",
    description: "Especializado en la creación de fondos y ambientes 360° con IA"
  },
  {
      name: "The Instaverse", url: "https://theinstaverse.com/", logo: "https://theinstaverse.com/i/logo-inst2.png",
      description: ''
  },
  {
      name: "Tripo3D", url: "https://www.tripo3d.ai/", logo: "https://cdn-web.tripo3d.ai/tripo-web/logo/tripo-logo2.webp",
      description: ''
  },
  { 
    name: "Meshy AI", 
    url: "https://www.meshy.ai/",
    description: "Plataforma para crear y editar modelos 3D y texturas con IA"
  },
  { 
    name: "Ideogram", 
    url: "https://ideogram.ai/login",
    description: "Generador de imágenes artísticas con control preciso sobre el estilo"
  },
  { 
    name: "Wonder AI", 
    url: "https://wonderai.app/home",
    description: "Creación de imágenes artísticas con estilos únicos y personalizables"
  },
  {
      name: "Google Image FX", url: "https://aitestkitchen.withgoogle.com/tools/image-fx",
      description: ''
  },
  { 
    name: "OpenArt AI", 
    url: "https://openart.ai/home",
    description: "Plataforma colaborativa para crear y compartir arte generado por IA"
  },
  { 
    name: "Pollinations AI", 
    url: "https://pollinations.ai/",
    description: "Generador de imágenes con enfoque en la diversidad y creatividad"
  },
  {
      name: "Vectorizer AI", url: "https://vectorizer.ai/", logo: "data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20512%20512%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%3Crect%20width%3D%22512%22%20height%3D%22512%22%20rx%3D%2250%22%20ry%3D%2250%22%20fill%3D%22%233659ff%22%2F%3E%0D%0A%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M322.5%2089h2.5c9%200%2017.5%201.9%2025.2%205.6%205.2%202.9%209.6%206.5%2013.3%2010.8%206.1%207.5%2010.5%2016.4%2013%2026.7%202.3%209%203.4%2019%203.5%2029.5.1%207%200%2013.9-.3%2020.6%200%20.2.4%200%201.3-.4%205.2-2.6%2010.2-5.5%2015-8.7%204.6-2%209-2%2012.7-.2%202%20.8%203%203%203%207%200%205-.9%209.4-2.6%2013.5-2.4%206-6.3%2011.5-11.8%2016.3-5%204.4-11%207.9-17.8%2010.5-.8.3-1.3.8-1.3%201.4l-2.4%2024.6c-2%2018.4-5%2036-9.3%2053-4.7%2016-10.5%2031.3-17.4%2046-6.3%2013.6-14.5%2026-24.8%2037-8.6%209-18%2016.5-28.4%2022.4-12.6%207.2-26.2%2012.2-40.7%2015-14.4%203-29.3%204-44.5%203.3-15.2-.6-29.3-4.3-42.4-11-7-4-13.2-8.8-18.3-14.5-7.9-9.7-12.8-21-14.9-33.6-1-5.6-1.6-11-1.7-16-.5-5-.2-10.4%201-16%202.8-14.6%206.3-29.5%2010.4-44.8l15.3-61c2.3-9.7%204.3-18.6%205.8-27%202.6-13%203.4-25.4%202.3-37-.4-7.3-2.5-13.8-6.3-19.4-2.9-3.2-6.3-5-10.2-5-4.7-.2-8.8%201-12.5%203.8l-18.8%2013.5c-3.6%202.6-7.4%204-11.4%204.3-2.9.2-5-.4-6.4-1.8-1.3-1.3-2-3.4-2.2-6.3-.7-11.8%202.4-22.2%209.3-31.2%204-5%209-9.5%2015.1-13.4%208.2-5.6%2017.2-9.6%2027.1-12%208.3-2%2017.3-2.6%2027-2.2%209.7.7%2018.3%203.6%2026%208.8%205.4%204%2010%209%2013.5%2014.8%208.7%2013.6%2012.6%2028.9%2011.8%2045.7-.3%2016.2-2.5%2032-6.5%2047.8l-15.2%2065c-2.9%2012.7-5.2%2024.8-7%2036.2-1.4%2011-1.6%2022-.8%2033.3.8%207%204.1%2012.7%209.8%2017.2%203.2%202.4%207%204%2011.2%205%203.8.8%208%201.3%2012.8%201.4%2015-.2%2028.5-4.6%2040.7-13.2%206-4.2%2011.6-9%2016.8-14.4%208-8.6%2014.5-18%2020-28.4%208.6-17%2015-35%2019-53.6%202.2-9.4%204.1-19.8%206-31.3-14.6-.7-28-4.4-40.5-11.1-5.2-3.1-10-7-14.5-11.8-5-5.5-9-11.4-11.8-17.8-4.4-10.2-6.8-21-7-32.7-.5-8.8.5-17.2%203-25.2%203.5-10.1%209.5-18.7%2018-26%206.1-5%2013.2-8.5%2021.2-10.6%205.5-1.4%2011.2-2.2%2017-2.3zm5.4%2038.5c-2.6%200-4.6%201-5.9%203.2-.5.8-.8%201.6-1.2%202.5l-.8%202.6-.4%202.8v3c0%202.2.1%204.2.3%206s.5%203.8%201%205.5l.6%203c.3%201%20.5%202%201%203%20.2%201%20.6%201.9%201%202.8l1.2%202.7%201.5%202.6c.5.9%201.1%201.6%201.7%202.4l2%202.3%202.2%202.2c1.4%201.4%203%202.6%204.4%203.7s3%202%204.6%202.9c.4-8.4.7-16.8.8-25.2v-5c0-1.6-.3-3.2-.5-4.7l-.7-4.5-1-4.3c-.2-.8-.5-1.6-1-2.4l-1.6-2.7c-1.4-2.1-3.3-3.5-5.5-4.2l-2.4-.4H328z%22%2F%3E%0D%0A%3C%2Fsvg%3E",
      description: ''
  },
  { 
    name: "PixAI", 
    url: "https://pixai.art/",
    description: "Especializado en la creación de arte estilo anime y manga con IA"
  },
  { 
    name: "Imagine AI", 
    url: "https://www.imagine.art/",
    description: "Herramienta intuitiva para transformar texto en arte visual"
  },
  { 
    name: "AutoDraw", 
    url: "https://www.autodraw.com/",
    description: "Herramienta de dibujo asistido por IA que mejora tus bocetos"
  },
  { 
    name: "Flux Realism", 
    url: "https://fal.ai/models/fal-ai/flux-realism",
    description: "Motor de IA especializado en generar imágenes fotorrealistas"
  },
  { 
    name: "Restore Photos", 
    url: "https://www.restorephotos.io/",
    description: "Restauración y mejora de fotos antiguas o dañadas usando IA"
  },
  {
      name: "Infography", url: "https://app.infography.in/login", logo: "https://app.infography.in/logo.png",
      description: ''
  },
  { 
    name: "Napkin AI", 
    url: "https://app.napkin.ai/signin",
    description: "Convierte bocetos rápidos en diseños profesionales con IA"
  },
  { 
    name: "Recraft AI", 
    url: "https://www.recraft.ai/",
    description: "Suite de herramientas para diseñadores que integra IA en el flujo de trabajo"
  },
  { 
    name: "Glif AI", 
    url: "https://glif.app/glifs",
    description: "Creación de gráficos e ilustraciones vectoriales con IA"
  },
  { 
    name: "BlinkShot", 
    url: "https://www.blinkshot.io/",
    description: "Editor de imágenes instantáneo con efectos y mejoras automáticas"
  },
  { 
    name: "DeepAI", 
    url: "https://deepai.org/",
    description: "Plataforma versátil de IA con múltiples herramientas de procesamiento de imágenes"
  },
  {
      name: "Letz AI", url: "https://letz.ai/", logo: "https://letz.ai/_next/image?url=%2FL.png&w=128&q=75",
      description: ''
  }
]; 