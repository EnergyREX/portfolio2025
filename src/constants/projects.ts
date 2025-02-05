// Project cards, mapped in the projects section
const PROJECTS: Array<{}> = [
  {
    id: 0,
    slug: "ollama-chat", 
    en: {   
      title: "Ollama-Chat",
      shortDesc: "An applicacion who connects and stores in a Database your conversations with the Ollama Chatbot.",
      button: 'Project'
      },
    es: {
      title: "Ollama-Chat",
      shortDesc: "Una aplicación que conecta y guarda en una base de datos tus conversaciones con la IA Ollama.",
      button: 'Proyecto'
    },
    link: "/projects/ollama-chat",
    repo: "https://github.com/EnergyREX/ollama-chat",
    bgImg: "/ollamachat.png"
  },
  {
    id: 1,
    slug: "myclinic",
    en: {    
      title: "Final Degree Project - MyClinic",
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
    repo: "https://github.com/EnergyREX/TFG-DAW",
    bgImg: ""
  }
] 

export { PROJECTS }