"use strict";

/*
 * BUENOS AIRES MATCHDAY
 *
 * IMPORTANT:
 * Replace the placeholder WhatsApp number and email below
 * with Emanuel's real contact details before publishing.
 *
 * WhatsApp number format:
 * country code + number, digits only, without +, spaces or dashes.
 */

const CONFIG = {
    whatsappNumber: "549XXXXXXXXXX",
    email: "YOUR_EMAIL@example.com"
};


const translations = {
    en: {
        pageTitle: "Buenos Aires Matchday | Argentine Football Experiences",

        navHome: "Home",
        navTickets: "Match Tickets",
        navTours: "Football Tours",
        navAbout: "About Us",
        navContact: "Contact",

        heroEyebrow: "THE HOME OF ARGENTINE FOOTBALL",
        heroTitle: "FEEL THE<br><span>PASSION.</span><br>LIVE THE GAME.",
        heroText: "Discover Buenos Aires through its football, legendary stadiums and unforgettable matchday atmosphere.",
        heroTickets: "EXPLORE MATCHES",
        heroTours: "DISCOVER TOURS",
        heroLocation: "BUENOS AIRES, ARGENTINA",
        heroExperience: "FOOTBALL. CULTURE. PASSION.",

        introLabel: "MORE THAN A MATCH",
        introTitle: "FOOTBALL IS<br><span>A WAY OF LIFE.</span>",
        introText: "In Buenos Aires, football is part of everyday life. From iconic stadiums to passionate neighbourhoods, every match tells a story.",
        introText2: "We help you discover the city through the game, with personal assistance for match tickets and football-themed experiences.",

        ticketsLabel: "BE PART OF THE ACTION",
        ticketsTitle: "MATCH <span>TICKETS</span>",
        ticketsIntro: "Looking to experience Argentine football live? Tell us which match you want to see.",
        ticketTag: "LIVE FOOTBALL",
        ticketCardTitle: "YOUR MATCHDAY<br>STARTS HERE.",
        ticketCardText: "Interested in a Boca Juniors, River Plate or another Buenos Aires football match? Contact us with your preferred date and team.",
        ticketNote: "Availability, prices and ticket conditions must be confirmed individually.",
        ticketButton: "ASK ABOUT TICKETS",

        toursLabel: "DISCOVER THE CITY",
        toursTitle: "FOOTBALL <span>TOURS</span>",
        toursIntro: "Explore Buenos Aires through its clubs, stadiums, neighbourhoods and football history.",

        tourType1: "CITY EXPERIENCE",
        tourTitle1: "FOOTBALL BUENOS AIRES",
        tourText1: "Discover the city's football culture, iconic neighbourhoods and stories.",

        tourType2: "STADIUM EXPERIENCE",
        tourTitle2: "STADIUMS &amp; CLUBS",
        tourText2: "Explore the places and traditions that make Argentine football unique.",

        tourType3: "LOCAL EXPERIENCE",
        tourTitle3: "MATCHDAY EXPERIENCE",
        tourText3: "Discover the atmosphere surrounding a match and experience the city like a local.",

        tourButton: "ASK ABOUT THIS TOUR",
        tourNote: "Tour itineraries, access restrictions, dates and prices are confirmed before booking.",

        aboutCaption: "YOUR LOCAL FOOTBALL CONNECTION",
        aboutLabel: "YOUR HOST IN BUENOS AIRES",
        aboutTitle: "MEET YOUR<br><span>LOCAL GUIDE.</span>",
        aboutText: "Emanuel Cedron helps visitors discover Argentine football through matchday experiences and football-themed tours in Buenos Aires.",
        aboutText2: "Get in touch directly to discuss your plans, ask questions and find an experience that fits your trip.",
        aboutButton: "GET IN TOUCH",

        contactLabel: "LET'S PLAN YOUR MATCHDAY",
        contactTitle: "YOUR ARGENTINE<br><span>FOOTBALL STORY</span><br>STARTS HERE.",
        contactText: "Tell Emanuel which match you want to see or what kind of football experience you're looking for.",
        contactWhatsApp: "CONTACT ON WHATSAPP",
        contactEmail: "SEND AN EMAIL",
        contactNote: "Ask about availability, prices and booking conditions directly.",

        footerText: "Argentine football. Local experiences. Unforgettable memories.",
        footerLocation: "BUENOS AIRES, ARGENTINA",
        floatingWhatsApp: "ASK US",

        whatsappGreeting: "Hello Emanuel! I'm interested in Buenos Aires Matchday.",
        whatsappTickets: "Hello Emanuel! I'd like to ask about football match tickets in Buenos Aires.",
        whatsappCityTour: "Hello Emanuel! I'm interested in a football tour around Buenos Aires.",
        whatsappStadiumTour: "Hello Emanuel! I'd like to ask about stadium and club tours in Buenos Aires.",
        whatsappMatchdayTour: "Hello Emanuel! I'm interested in a matchday experience in Buenos Aires.",

        emailSubject: "Buenos Aires Matchday enquiry",
        emailBody: "Hello Emanuel,\n\nI'm interested in your football experiences in Buenos Aires.\n\nCould you please provide more information about availability, prices and booking conditions?\n\nThank you!"
    },

    es: {
        pageTitle: "Buenos Aires Matchday | Experiencias de fútbol argentino",

        navHome: "Inicio",
        navTickets: "Entradas",
        navTours: "Tours de fútbol",
        navAbout: "Nosotros",
        navContact: "Contacto",

        heroEyebrow: "EL HOGAR DEL FÚTBOL ARGENTINO",
        heroTitle: "SENTÍ LA<br><span>PASIÓN.</span><br>VIVÍ EL FÚTBOL.",
        heroText: "Descubrí Buenos Aires a través de su fútbol, sus estadios legendarios y la atmósfera inolvidable de cada partido.",
        heroTickets: "VER PARTIDOS",
        heroTours: "DESCUBRIR TOURS",
        heroLocation: "BUENOS AIRES, ARGENTINA",
        heroExperience: "FÚTBOL. CULTURA. PASIÓN.",

        introLabel: "MUCHO MÁS QUE UN PARTIDO",
        introTitle: "EL FÚTBOL ES<br><span>UNA FORMA DE VIDA.</span>",
        introText: "En Buenos Aires, el fútbol forma parte de la vida cotidiana. Desde estadios emblemáticos hasta barrios apasionados, cada partido tiene una historia.",
        introText2: "Te ayudamos a descubrir la ciudad a través del fútbol, con asistencia personalizada para entradas y experiencias futboleras.",

        ticketsLabel: "VIVÍ LA EXPERIENCIA",
        ticketsTitle: "ENTRADAS <span>DE FÚTBOL</span>",
        ticketsIntro: "¿Querés vivir el fútbol argentino en directo? Contanos qué partido te gustaría ver.",
        ticketTag: "FÚTBOL EN VIVO",
        ticketCardTitle: "TU DÍA DE FÚTBOL<br>EMPIEZA ACÁ.",
        ticketCardText: "¿Te interesa un partido de Boca Juniors, River Plate u otro equipo de Buenos Aires? Contactanos con la fecha y el equipo que preferís.",
        ticketNote: "La disponibilidad, los precios y las condiciones de las entradas deben confirmarse individualmente.",
        ticketButton: "CONSULTAR ENTRADAS",

        toursLabel: "DESCUBRÍ LA CIUDAD",
        toursTitle: "TOURS DE <span>FÚTBOL</span>",
        toursIntro: "Descubrí Buenos Aires a través de sus clubes, estadios, barrios e historia futbolera.",

        tourType1: "EXPERIENCIA POR LA CIUDAD",
        tourTitle1: "BUENOS AIRES FUTBOLERA",
        tourText1: "Descubrí la cultura futbolera de la ciudad, sus barrios emblemáticos y sus historias.",

        tourType2: "EXPERIENCIA EN ESTADIOS",
        tourTitle2: "ESTADIOS Y CLUBES",
        tourText2: "Conocé los lugares y las tradiciones que hacen único al fútbol argentino.",

        tourType3: "EXPERIENCIA LOCAL",
        tourTitle3: "EXPERIENCIA DE PARTIDO",
        tourText3: "Descubrí el ambiente que rodea un partido y viví la ciudad como un local.",

        tourButton: "CONSULTAR ESTE TOUR",
        tourNote: "Los itinerarios, las restricciones de acceso, las fechas y los precios se confirman antes de reservar.",

        aboutCaption: "TU CONTACTO LOCAL CON EL FÚTBOL",
        aboutLabel: "TU ANFITRIÓN EN BUENOS AIRES",
        aboutTitle: "CONOCÉ A TU<br><span>GUÍA LOCAL.</span>",
        aboutText: "Emanuel Cedron ayuda a los visitantes a descubrir el fútbol argentino mediante experiencias de día de partido y tours temáticos en Buenos Aires.",
        aboutText2: "Contactalo directamente para conversar sobre tus planes, resolver dudas y encontrar una experiencia adecuada para tu viaje.",
        aboutButton: "CONTACTAR",

        contactLabel: "PLANIFIQUEMOS TU DÍA DE FÚTBOL",
        contactTitle: "TU HISTORIA CON EL<br><span>FÚTBOL ARGENTINO</span><br>EMPIEZA ACÁ.",
        contactText: "Contale a Emanuel qué partido te gustaría ver o qué tipo de experiencia futbolera estás buscando.",
        contactWhatsApp: "CONTACTAR POR WHATSAPP",
        contactEmail: "ENVIAR UN EMAIL",
        contactNote: "Consultá directamente la disponibilidad, los precios y las condiciones de reserva.",

        footerText: "Fútbol argentino. Experiencias locales. Recuerdos inolvidables.",
        footerLocation: "BUENOS AIRES, ARGENTINA",
        floatingWhatsApp: "CONSULTANOS",

        whatsappGreeting: "¡Hola, Emanuel! Me interesan las experiencias de Buenos Aires Matchday.",
        whatsappTickets: "¡Hola, Emanuel! Quisiera consultar por entradas para partidos de fútbol en Buenos Aires.",
        whatsappCityTour: "¡Hola, Emanuel! Me interesa un tour de fútbol por Buenos Aires.",
        whatsappStadiumTour: "¡Hola, Emanuel! Quisiera consultar por tours de estadios y clubes en Buenos Aires.",
        whatsappMatchdayTour: "¡Hola, Emanuel! Me interesa una experiencia de día de partido en Buenos Aires.",

        emailSubject: "Consulta sobre Buenos Aires Matchday",
        emailBody: "Hola, Emanuel:\n\nMe interesan tus experiencias de fútbol en Buenos Aires.\n\n¿Podrías enviarme más información sobre disponibilidad, precios y condiciones de reserva?\n\n¡Muchas gracias!"
    }
};


/* LANGUAGE SWITCHER */

let currentLanguage = "en";

function setLanguage(language) {
    if (!translations[language]) {
        return;
    }

    currentLanguage = language;

    document.documentElement.lang = language;
    document.title = translations[language].pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const translation = translations[language][key];

        if (typeof translation === "string") {
            element.innerHTML = translation;
        }
    });

    document.querySelectorAll(".lang-btn").forEach((button) => {
        const isActive = button.dataset.lang === language;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    try {
        localStorage.setItem("bam-language", language);
    } catch (error) {
        // The language switcher still works if storage is unavailable.
    }

    updateContactLinks();
}

document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
    });
});


/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function closeMenu() {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", currentLanguage === "es"
        ? "Abrir navegación"
        : "Open navigation");
    document.body.classList.remove("menu-open");
}

function openMenu() {
    mainNav.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", currentLanguage === "es"
        ? "Cerrar navegación"
        : "Close navigation");
    document.body.classList.add("menu-open");
}

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        closeMenu();
    }
});


/* CONTACT LINKS */

function isConfigured(value) {
    return value &&
        !value.includes("XXXXXXXXXX") &&
        !value.includes("YOUR_EMAIL") &&
        value.trim().length > 0;
}

function makeWhatsAppUrl(message) {
    if (!isConfigured(CONFIG.whatsappNumber)) {
        return null;
    }

    return "https://wa.me/" +
        CONFIG.whatsappNumber +
        "?text=" +
        encodeURIComponent(message);
}

function updateContactLinks() {
    const t = translations[currentLanguage];

    const whatsappLink = document.getElementById("whatsappLink");
    const floatingWhatsApp = document.getElementById("floatingWhatsApp");
    const emailLink = document.getElementById("emailLink");

    const defaultWhatsApp = makeWhatsAppUrl(t.whatsappGreeting);

    [whatsappLink, floatingWhatsApp].forEach((link) => {
        if (defaultWhatsApp) {
            link.href = defaultWhatsApp;
            link.removeAttribute("aria-disabled");
        } else {
            link.href = "#contact";
            link.setAttribute("aria-disabled", "true");
        }
    });

    if (isConfigured(CONFIG.email)) {
        emailLink.href =
            "mailto:" + CONFIG.email +
            "?subject=" + encodeURIComponent(t.emailSubject) +
            "&body=" + encodeURIComponent(t.emailBody);

        emailLink.removeAttribute("aria-disabled");
    } else {
        emailLink.href = "#contact";
        emailLink.setAttribute("aria-disabled", "true");
    }

    document.querySelectorAll("[data-contact]").forEach((link) => {
        const contactType = link.dataset.contact;

        const messageMap = {
            tickets: t.whatsappTickets,
            "tour-city": t.whatsappCityTour,
            "tour-stadiums": t.whatsappStadiumTour,
            "tour-matchday": t.whatsappMatchdayTour
        };

        const message = messageMap[contactType] || t.whatsappGreeting;
        const url = makeWhatsAppUrl(message);

        if (url) {
            link.href = url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.removeAttribute("aria-disabled");
        } else {
            link.href = "#contact";
            link.removeAttribute("target");
            link.setAttribute("aria-disabled", "true");
        }
    });
}


/* CLEAR MESSAGE IF CONTACT DETAILS ARE NOT CONFIGURED */

document.querySelectorAll(
    "#whatsappLink, #floatingWhatsApp, #emailLink, [data-contact]"
).forEach((link) => {
    link.addEventListener("click", (event) => {
        const isWhatsApp = link.id === "whatsappLink" ||
            link.id === "floatingWhatsApp" ||
            link.hasAttribute("data-contact");

        const ready = isWhatsApp
            ? isConfigured(CONFIG.whatsappNumber)
            : isConfigured(CONFIG.email);

        if (!ready) {
            event.preventDefault();

            alert(currentLanguage === "es"
                ? "Los datos de contacto todavía no están configurados. Por favor, contactá al administrador del sitio."
                : "Contact details have not been configured yet. Please contact the website administrator.");
        }
    });
});


/* FOOTER YEAR */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* RESTORE LANGUAGE */

let savedLanguage = "en";

try {
    const storedLanguage = localStorage.getItem("bam-language");

    if (storedLanguage && translations[storedLanguage]) {
        savedLanguage = storedLanguage;
    }
} catch (error) {
    // English remains the default language.
}

setLanguage(savedLanguage);