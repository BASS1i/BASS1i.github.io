const translations = {
    en: {
        "header-title": "Double Bass, Electric Bass & Synthesizer Lessons",
        "header-subtitle": "Master your instruments with modern and creative techniques",
        "menu-about": "About Me",
        "menu-classes": "Classes",
        "menu-videos": "Videos",
        "menu-contact": "Contact",
        "language-label": "Language:",
        "about-title": "About Me",
        "about-description": "Hi! I'm [Your Name], a professional musician specializing in double bass, electric bass, and synthesizers. I've worked in bands, electronic music projects, and as a soloist, and now I want to share my experience with you.",
        "classes-title": "Classes",
        "classes-description": "I offer personalized lessons in double bass, electric bass, and synthesizers, tailored to all levels:",
        "classes-point1": "Introduction and basic techniques",
        "classes-point2": "Improvisation and music theory",
        "classes-point3": "Audition preparation",
        "classes-point4": "Creative synthesizer use",
        "videos-title": "Videos",
        "videos-description": "Explore my selection of videos to inspire and learn.",
        "videos-synth": "Synthesizers",
        "videos-bass": "Double Bass",
        "contact-title": "Contact",
        "contact-description": "Contact me to schedule your lessons:",
        "contact-phone": "Phone: +123 456 789"
    },
    // Agregar traducciones para DE, FR, IT
};

// Manejar el cambio de idioma
document.getElementById("language").addEventListener("change", function () {
    const selectedLanguage = this.value;
    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[selectedLanguage][key] || element.textContent;
    });
});
