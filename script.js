// Buenos Aires Matchday — language, mobile navigation and contact links.
// Replace these two values before publishing. Use country code + number, digits only.
const CONFIG = {
  whatsappNumber: "549XXXXXXXXXX",
  email: "YOUR_EMAIL@example.com"
};

const translations = {
  en: {
    navHome:"Home", navDestinations:"Destinations", navMatches:"Matches", navAbout:"About", navContact:"Contact",
    eyebrow:"FOOTBALL. CULTURE. BUENOS AIRES.", tagline:"THE HOME OF ARGENTINE FOOTBALL",
    heroDescription:"Feel the passion of Argentine football — from the stands to the streets of Buenos Aires.",
    exploreMatches:"Explore matchdays", discoverTours:"Discover experiences", retroTop:"ARGENTINA • FOOTBALL • CULTURE",
    retroTagline:"THE HOME OF ARGENTINE FOOTBALL", retroBottom:"YOUR MATCHDAY STARTS HERE", scroll:"SCROLL TO EXPLORE",
    introKicker:"MORE THAN A MATCH", introTitle:"Your gateway to<br><em>Argentine football.</em>",
    introText:"Discover the atmosphere, traditions and unforgettable stories that make football in Buenos Aires unlike anywhere else.",
    planExperience:"Plan your experience", offeringsKicker:"MAKE IT A MATCHDAY", offeringsTitle:"Choose your experience",
    offeringsIntro:"From the first whistle to the final celebration.", ticketsTitle:"Match tickets",
    ticketsText:"Get in touch about tickets and experience the incredible energy of Argentine football in person.",
    askTickets:"Ask about tickets", toursTitle:"Football tours",
    toursText:"Explore football landmarks, local neighborhoods and the stories behind the beautiful game.",
    askTours:"Explore tours", customTitle:"Personal experiences",
    customText:"Tell us what you love about football and we’ll help you plan a memorable Buenos Aires visit.",
    talkToUs:"Talk to us", aboutArtCaption:"BUENOS AIRES · ARGENTINA", aboutKicker:"LOCAL KNOWLEDGE. REAL PASSION.",
    aboutTitle:"Football is better<br>when you’re <em>part of it.</em>",
    aboutText:"Buenos Aires Matchday helps football fans connect with the city’s matchday culture. Emanuel can help with ticket enquiries and lead football-focused experiences around Buenos Aires.",
    meetEmanuel:"Plan with Emanuel", contactKicker:"YOUR ARGENTINE FOOTBALL STORY",
    contactTitle:"Let’s make it<br><em>matchday.</em>",
    contactText:"Tell us when you’re visiting and what you’d love to experience. We’ll get back to you personally.",
    contactLabel:"GET IN TOUCH", whatsappText:"Message Emanuel", emailText:"Send an enquiry",
    contactNote:"Ticket and tour enquiries are handled personally. No online payment is taken on this website.",
    footerTagline:"THE HOME OF ARGENTINE FOOTBALL", backTop:"BACK TO TOP ↑"
  },
  es: {
    navHome:"Inicio", navDestinations:"Experiencias", navMatches:"Partidos", navAbout:"Nosotros", navContact:"Contacto",
    eyebrow:"FÚTBOL. CULTURA. BUENOS AIRES.", tagline:"EL HOGAR DEL FÚTBOL ARGENTINO",
    heroDescription:"Sentí la pasión del fútbol argentino, desde las tribunas hasta las calles de Buenos Aires.",
    exploreMatches:"Ver partidos", discoverTours:"Descubrir experiencias", retroTop:"ARGENTINA • FÚTBOL • CULTURA",
    retroTagline:"EL HOGAR DEL FÚTBOL ARGENTINO", retroBottom:"TU DÍA DE PARTIDO EMPIEZA AQUÍ", scroll:"DESLIZÁ PARA EXPLORAR",
    introKicker:"MUCHO MÁS QUE UN PARTIDO", introTitle:"Tu puerta de entrada al<br><em>fútbol argentino.</em>",
    introText:"Descubrí el ambiente, las tradiciones y las historias inolvidables que hacen único al fútbol de Buenos Aires.",
    planExperience:"Planificá tu experiencia", offeringsKicker:"VIVÍ EL DÍA DE PARTIDO", offeringsTitle:"Elegí tu experiencia",
    offeringsIntro:"Del primer silbato al festejo final.", ticketsTitle:"Entradas para partidos",
    ticketsText:"Consultanos por entradas y viví en persona la increíble energía del fútbol argentino.",
    askTickets:"Consultar entradas", toursTitle:"Tours de fútbol",
    toursText:"Conocé lugares emblemáticos, barrios y las historias detrás del deporte más lindo del mundo.",
    askTours:"Ver tours", customTitle:"Experiencias personalizadas",
    customText:"Contanos qué te apasiona del fútbol y te ayudamos a planificar una visita inolvidable a Buenos Aires.",
    talkToUs:"Hablemos", aboutArtCaption:"BUENOS AIRES · ARGENTINA", aboutKicker:"CONOCIMIENTO LOCAL. PASIÓN REAL.",
    aboutTitle:"El fútbol se disfruta más<br>cuando sos <em>parte.</em>",
    aboutText:"Buenos Aires Matchday conecta a los hinchas con la cultura del día de partido. Emanuel puede ayudarte con consultas sobre entradas y acompañarte en experiencias futboleras por Buenos Aires.",
    meetEmanuel:"Planificá con Emanuel", contactKicker:"TU HISTORIA DE FÚTBOL ARGENTINO",
    contactTitle:"Hagamos que sea<br><em>día de partido.</em>",
    contactText:"Contanos cuándo venís y qué te gustaría vivir. Te responderemos personalmente.",
    contactLabel:"CONTACTANOS", whatsappText:"Escribile a Emanuel", emailText:"Enviar consulta",
    contactNote:"Las consultas por entradas y tours se atienden personalmente. Este sitio no procesa pagos en línea.",
    footerTagline:"EL HOGAR DEL FÚTBOL ARGENTINO", backTop:"VOLVER ARRIBA ↑"
  }
};

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const languageButtons = document.querySelectorAll(".language-button");

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) element.innerHTML = dictionary[key];
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  try { localStorage.setItem("bam-language", language); } catch (_) {}
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    mainNav.classList.toggle("open", open);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      mainNav.classList.remove("open");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      mainNav.classList.remove("open");
    }
  });
}

function configureContactLinks() {
  const whatsappReady = /^\d{8,15}$/.test(CONFIG.whatsappNumber);
  const emailReady = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email);

  const whatsappHref = whatsappReady
    ? `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Hi Emanuel, I'm interested in Buenos Aires Matchday.")}`
    : "#contact";
  const emailHref = emailReady
    ? `mailto:${CONFIG.email}?subject=${encodeURIComponent("Buenos Aires Matchday enquiry")}`
    : "#contact";

  ["whatsapp-link", "floating-whatsapp"].forEach((id) => {
    const link = document.getElementById(id);
    if (link) {
      link.href = whatsappHref;
      if (!whatsappReady) link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Please add Emanuel's WhatsApp number in script.js before publishing the site.");
      });
    }
  });

  const emailLink = document.getElementById("email-link");
  if (emailLink) {
    emailLink.href = emailHref;
    if (!emailReady) emailLink.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Please add the contact email in script.js before publishing the site.");
    });
  }
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
configureContactLinks();

let savedLanguage = "en";
try {
  const storedLanguage = localStorage.getItem("bam-language");
  if (storedLanguage === "en" || storedLanguage === "es") savedLanguage = storedLanguage;
} catch (_) {}
setLanguage(savedLanguage);
