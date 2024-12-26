import AOS from "aos";
import "aos/dist/aos.css"; // Asegúrate de importar los estilos de AOS

// Configuración de AOS
AOS.init({
  duration: 800,  // Duración de las animaciones (en milisegundos)
  delay: 100,     // Retraso antes de que se ejecute la animación
  once: true,     // Ejecutar animación solo una vez al hacer scroll
  easing: "ease-in-out", // Curva de transición
  offset: 120,    // Desplazamiento antes de activar animaciones
},()=>{console.log("logrado")});

