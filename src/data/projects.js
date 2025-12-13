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
    description: "Version optimizada con code splitting avanzado, mejor rendimiento y experiencia de usuario mejorada para dispositivos moviles.",
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
  frontend: [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Three.js", level: 80 },
    { name: "Vite", level: 85 }
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Vercel", level: 85 }
  ],
  other: [
    { name: "Responsive Design", level: 95 },
    { name: "Performance", level: 85 },
    { name: "UI/UX", level: 80 },
    { name: "Animaciones", level: 85 }
  ]
};

export const personalInfo = {
  name: "Luis Fabrizio",
  title: "Frontend Developer",
  age: 20,
  location: "Bolivia",
  bio: "Desarrollador frontend apasionado por crear experiencias web inmersivas y elegantes. Especializado en React, Three.js y animaciones web modernas."
};
