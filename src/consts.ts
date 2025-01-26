const HERO_MESSAGES: any = {
  es: {
    title: "Hey, Soy Fran.",
    subtitle: "Un desarrollador de Almería. Me encanta desarrollar soluciones en la web. He trabajado con tecnologías como React o Astro.",
    linkedin: "https://www.linkedin.com/in/francisco-javier-mf/",
    github: "https://github.com/energyrex"
  },  
  en: {
    title: "Hey, I'm Fran.",
    subtitle: "A web developer from Almería, Spain. I love to develop web solutions. I have worked with technologies such as React.js or Astro.",
    linkedin: "https://www.linkedin.com/in/francisco-javier-mf/",
    github: "https://github.com/energyrex"
  }

}

const PROJECTS_CARDS: [Object, Object] = [
  {
    id: 1,
    en: {    
      title: "Ollama-Chat",
      shortDesc: "An applicacion who connects and stores in a Database your conversations with the Ollama Chatbot.",
      },
    es: {
      title: "Ollama-Chat",
      shortDesc: "Una aplicación que conecta y guarda en una base de datos tus conversaciones con la IA Ollama.",
    },
    link: "/ollama-chat",
    repo: "https://github.com/EnergyREX/ollama-chat",
    bgImg: ""
  },
  {
    id: 1,
    en: {    
      title: "DAW's Final Degree Project - MyClinic",
      shortDesc: "An application to manage a clinic appointments, medical records, users... of a clinic. Developed with Laravel.",
      },
    es: {
      title: "Trabajo de Final de Grado - MyClinic",
      shortDesc: "Una aplicación para administrar citas, registros médicos, usuarios... de una clínica. Desarrollado con Laravel.",
    },
    link: "/myclinic",
    repo: "https://github.com/EnergyREX/ollama-chat",
    bgImg: ""
  }
] 

export {HERO_MESSAGES}