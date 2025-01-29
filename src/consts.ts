// For status (if available or not)
const STATUS = true;

const ABOUT: any = {
  en: {
    title: "I'm Francisco",
    text: "When I was 18, I had discovered my passion on programming, thanks to a friend who gifted me a Java course. After completing Bachillerato, I had decided to go to a T&D degree and learn about web development."
  },
  es: {
    title: "Soy Francisco",
    text: "Cuando tenía 18 años, descubrí mi amor por la programación, gracias a un amigo que me regaló un curso de Java. Después de terminar Bachiller, decidí hacer un grado de Formación profesional y ahí, aprender sobre el desarrollo web."
  }
}

// Messages for Hero Section, in Spanish and English
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

// Project cards, mapped in the projects section
const PROJECTS: Array<{}> = [
  {
    id: 1,
    name: "ollama-chat", 
    en: {   
      title: "Ollama-Chat",
      shortDesc: "An applicacion who connects and stores in a Database your conversations with the Ollama Chatbot.",
      },
    es: {
      title: "Ollama-Chat",
      shortDesc: "Una aplicación que conecta y guarda en una base de datos tus conversaciones con la IA Ollama.",
    },
    link: "/projects/ollama-chat",
    repo: "https://github.com/EnergyREX/ollama-chat",
    bgImg: "/ollamachat.png"
  },
  {
    id: 1,
    name: "myclinic",
    en: {    
      title: "DAW's Final Degree Project - MyClinic",
      shortDesc: "An application to manage a clinic appointments, medical records, users... of a clinic. Developed with Laravel.",
      longDesc: `This project is a simple system to manage clinics, where the users do CRUD operations to manage the clinic.
      It covers the following fields:
      - Appointments
      - Inventory
      - Medical Records
      - Treatments
      - Users
      In the future, is very possible to create a complex role system, to allow to define roles as the user want, with a permissions system.
      `
      },
    es: {
      title: "Trabajo de Final de Grado - MyClinic",
      shortDesc: "Una aplicación para administrar citas, registros médicos, usuarios... de una clínica. Desarrollado con Laravel.",
      longDesc: ` Este proyecto se trata de un sistema simple para la gestión de clínicas de 
      salud, donde los usuarios, hacen operaciones CRUD para administrar la
      clínica. Cubre los siguientes campos:
        · Citas
        · Inventario
        · Historial Médico
        · Tratamientos
        · Usuarios
      Es posible que también, en el futuro, se cree un sistema de roles, para poder
      definir los roles como se plazca gracias a un sistema de permisos que tendría
      cada usuario.
      El idioma principalmente del proyecto, será en inglés, sin embargo, se podría
      poner una función de accesibilidad para poder cambiar de idioma.`
    },
    link: "/projects/myclinic",
    repo: "https://github.com/EnergyREX/DAW-TFG",
    bgImg: ""
  }
] 

export {ABOUT, HERO_MESSAGES, STATUS, PROJECTS}