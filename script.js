// Lógica para la animación del scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-animated');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Lógica para el menú móvil
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Lógica de traducción para el contenido del sitio web
    const translations = {
        es: {
            nav_inicio: "Inicio",
            nav_servicios: "Servicios",
            nav_nosotros: "Nosotros",
            nav_contacto: "Contacto",
            lang_btn: "English",
            hero_title: "Soluciones Tecnológicas para tu Empresa",
            hero_subtitle: "En Satlynk, ofrecemos conectividad satelital y soporte de TI para mantener tu negocio en el futuro.",
            mission_vision_title: "Misión, Visión y Valores",
            mission_vision_subtitle: "Nuestro compromiso con la excelencia y la innovación.",
            mission_title: "Misión",
            mission_text: "Proporcionar soluciones tecnológicas de vanguardia, garantizando conectividad ininterrumpida y un soporte técnico excepcional para impulsar el crecimiento y la eficiencia de nuestros clientes.",
            vision_title: "Visión",
            vision_text: "Ser líderes en el mercado de soluciones tecnológicas y de conectividad satelital en la región, reconocidos por nuestra innovación, calidad de servicio y el impacto positivo que generamos en los negocios de nuestros socios.",
            values_title: "Valores",
            values_text: "Innovación, Integridad, Excelencia en el Servicio, Compromiso y Adaptabilidad. Estos principios guían cada una de nuestras acciones para superar las expectativas de nuestros clientes.",
            services_title: "Nuestros Servicios",
            service1_title: "Conectividad Satelital",
            service1_text: "En un mundo cada vez más interconectado, la conectividad satelital se convierte en la columna vertebral de las operaciones para empresas ubicadas en zonas remotas o con acceso limitado a infraestructura de red terrestre. En Satlynk, ofrecemos soluciones de conectividad satelital robustas y confiables que garantizan una comunicación fluida, constante y de alta velocidad. Nuestra tecnología de punta permite la transmisión de datos, voz y video, asegurando que tu negocio nunca se detenga, sin importar tu ubicación geográfica. Desde la instalación y configuración hasta el monitoreo y mantenimiento, te brindamos un servicio integral que se adapta a las necesidades específicas de tu empresa, garantizando la continuidad operativa y la máxima eficiencia.",
            service2_title: "Soporte y Redes",
            service2_text: "Una red de TI estable y segura es vital para el éxito de cualquier negocio. Nuestro equipo de expertos en redes está listo para diseñar, implementar y gestionar infraestructuras de red que sean eficientes, escalables y seguras. Ofrecemos soporte técnico 24/7 para resolver cualquier incidencia con rapidez, minimizando el tiempo de inactividad. Ya sea que necesites una red local (LAN) robusta, una red de área amplia (WAN) para conectar múltiples sedes, o soluciones de ciberseguridad para proteger tus datos, en Satlynk te brindamos la tranquilidad de saber que tu infraestructura de TI está en manos de profesionales. Nos enfocamos en el mantenimiento preventivo y en la optimización continua para garantizar el máximo rendimiento de tu red.",
            service3_title: "Consultoría TI",
            service3_text: "El mundo de la tecnología evoluciona a un ritmo vertiginoso. Para mantenerte competitivo, es fundamental contar con una estrategia de TI bien definida. En Satlynk, nuestro servicio de consultoría tecnológica te ayuda a tomar decisiones informadas sobre la adopción de nuevas tecnologías, la optimización de procesos y la planificación de proyectos. Analizamos tus necesidades y objetivos de negocio para diseñar un plan de acción a medida que te permita maximizar el retorno de tu inversión en tecnología. Desde la migración a la nube hasta la implementación de soluciones de software empresarial, nuestro equipo de consultores te guiará en cada paso del camino, garantizando que tu estrategia de TI esté perfectamente alineada con tus metas corporativas.",
            contact_title: "Contáctanos",
            form_name: "Nombre",
            form_email: "Correo Electrónico",
            form_message: "Mensaje",
            form_submit: "Enviar Mensaje",
            footer_contact: "Contacto",
            footer_follow: "Síguenos",
            form_success: "¡Mensaje enviado correctamente!",
            form_error: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
            form_sending: "Enviando...",
            placeholder_name: "Tu nombre completo",
            placeholder_email: "tu.correo@ejemplo.com",
            placeholder_message: "Escribe tu mensaje aquí...",
        },
        en: {
            nav_inicio: "Home",
            nav_servicios: "Services",
            nav_nosotros: "About Us",
            nav_contacto: "Contact",
            lang_btn: "Español",
            hero_title: "Technological Solutions for Your Business",
            hero_subtitle: "At Satlynk, we offer satellite connectivity and IT support to keep your business in the future.",
            mission_vision_title: "Mission, Vision & Values",
            mission_vision_subtitle: "Our commitment to excellence and innovation.",
            mission_title: "Mission",
            mission_text: "To provide cutting-edge technological solutions, ensuring uninterrupted connectivity and exceptional technical support to drive our clients' growth and efficiency.",
            vision_title: "Vision",
            vision_text: "To be leaders in the market of technological and satellite connectivity solutions in the region, recognized for our innovation, service quality, and the positive impact we generate on our partners' businesses.",
            values_title: "Values",
            values_text: "Innovation, Integrity, Service Excellence, Commitment, and Adaptability. These principles guide our every action to exceed our clients' expectations.",
            services_title: "Our Services",
            service1_title: "Satellite Connectivity",
            service1_text: "In an increasingly interconnected world, satellite connectivity becomes the backbone of operations for companies located in remote areas or with limited access to terrestrial network infrastructure. At Satlynk, we offer robust and reliable satellite connectivity solutions that ensure fluid, constant, and high-speed communication. Our cutting-edge technology allows for the transmission of data, voice and video, ensuring your business never stops, regardless of your geographical location. From installation and configuration to monitoring and maintenance, we provide a comprehensive service that adapts to the specific needs of your company, ensuring operational continuity and the maximum efficiency.",
            service2_title: "Support and Networks",
            service2_text: "A stable and secure IT network is vital for the success of any business. Our team of network experts is ready to design, implement and manage network infrastructures that are efficient, scalable, and secure. We offer 24/7 technical support to quickly resolve any issues, minimizing downtime. Whether you need a robust local network (LAN), a wide area network (WAN) to connect multiple sites, or cybersecurity solutions to protect your data, at Satlynk we give you the peace of mind of knowing that your IT infrastructure is in the hands of professionals. We focus on preventive maintenance and continuous optimization to ensure the maximum performance of your network.",
            service3_title: "IT Consulting",
            service3_text: "The world of technology evolves at a dizzying pace. To remain competitive, it is fundamental to have a well-defined IT strategy. At Satlynk, our technology consulting service helps you take informed decisions about the adoption of new technologies, process optimization, and project planning. We analyze your business needs and objectives to design a tailor-made action plan that allows you to maximize the return on your technology investment. From migrating to the cloud to implementing business software solutions, our team of consultants will guide you every step of the way, guaranteeing that your IT strategy is perfectly aligned with your corporate goals.",
            contact_title: "Contact Us",
            form_name: "Name",
            form_email: "Email",
            form_message: "Message",
            form_submit: "Send Message",
            footer_contact: "Contact",
            footer_follow: "Follow Us",
            form_success: "Message sent successfully!",
            form_error: "There was an error sending the message. Please try again.",
            form_sending: "Sending...",
            placeholder_name: "Your full name",
            placeholder_email: "your.email@example.com",
            placeholder_message: "Write your message here...",
        }
    };

    let currentLang = 'es';

    document.getElementById('lang-switcher-btn').addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        updateContent();
    });

    function updateContent() {
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[currentLang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[currentLang][key];
                } else {
                    el.textContent = translations[currentLang][key];
                }
            }
        });
    }

    // Lógica para el formulario de contacto con EmailJS
    const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  // Inicializar EmailJS
  emailjs.init("al83KVS5qj8YZ7K5j");

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Deshabilitar botón y mostrar estado
      submitBtn.disabled = true;
      formStatus.textContent = "Enviando mensaje...";
      formStatus.className = "text-gray-600";

      // Enviar formulario
      emailjs.sendForm('service_46hksgu', 'template_9j3pvun', contactForm)
        .then(() => {
          formStatus.textContent = "¡Mensaje enviado con éxito!";
          formStatus.className = "text-green-600";
          contactForm.reset();
        })
        .catch((error) => {
          console.error('Error al enviar:', error);
          formStatus.textContent = "Error al enviar el mensaje. Intenta de nuevo.";
          formStatus.className = "text-red-600";
        })
        .finally(() => {
          submitBtn.disabled = false;

                });
        });
    }
});