export const projects = [
  {
    id: 1,
    title: "La Muela del Diablo",
    description: "Experiencia inmersiva 360 de un sitio arqueologico en La Paz, Bolivia. Incluye visualizacion 3D interactiva, mapas y recorridos virtuales.",
    image: "/muela del diablo.png",
    technologies: ["React", "Three.js", "Mapbox", "Vite"],
    liveUrl: "https://mi-proyecto-pe-xd-8sv6.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "La Muela del Diablo v2",
    description: "Version optimizada para cargar instantaneamente en redes moviles 4G. Implementa code splitting avanzado, lazy loading y compresion de assets, reduciendo el tiempo de carga en un 70% - vital para usuarios en movimiento.",
    image: "/MueladelDiablov2.png",
    technologies: ["React", "Three.js", "Performance", "Vite"],
    liveUrl: "https://muela-del-diablo-v2.vercel.app/",
    featured: true
  },
  {
    id: 3,
    title: "La Casa del Tanuki",
    description: "Sitio web elegante para restaurante de ramen japones autentico. Diseno moderno con animaciones fluidas y enfoque en la experiencia gastronomica.",
    image: "/LaCasadelTanuki.png",
    technologies: ["React", "CSS", "Animaciones", "Vite"],
    liveUrl: "https://la-casa-del-tanuki.vercel.app/",
    featured: true
  }
];

export const skills = {
  frontend: ["React", "JavaScript", "HTML/CSS", "Three.js", "Vite"],
  tools: ["Git", "VS Code", "Vercel"],
  other: ["Responsive Design", "Performance", "UI/UX", "Animaciones"]
};

export const personalInfo = {
  name: "Luis Fabrizio",
  title: "Frontend Developer",
  age: 20,
  location: "Bolivia",
  bio: "Desarrollador frontend apasionado por crear experiencias web inmersivas y elegantes. Especializado en React, Three.js y animaciones web modernas."
};
