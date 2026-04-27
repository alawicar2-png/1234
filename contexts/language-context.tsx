"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "DE" | "EN" | "FR" | "IT"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  DE: {
    // Navigation
    "nav.services": "Dienstleistungen",
    "nav.about": "Über uns",
    "nav.gallery": "Galerie",
    "nav.contact": "Kontakt",
    "nav.cta": "Jetzt Termin vereinbaren",
    "nav.tagline": "SWISS DETAILING",
    
    // Hero
    "hero.badge": "Schweizer Präzision • Luxus Detailing",
    "hero.title": "Alawi Cars",
    "hero.subtitle": "Exklusive Fahrzeugpflege",
    "hero.subtitle2": "& Autoservice",
    "hero.description": "Perfektion bis ins kleinste Detail. Ihr erstklassiger Partner für Glanz, Sicherheit und Zuverlässigkeit in der Schweiz.",
    "hero.cta": "Jetzt Termin vereinbaren",
    "hero.scroll": "Scroll",
    
    // About
    "about.label": "Über uns",
    "about.title": "Unsere Leidenschaft für Perfektion",
    "about.text": "Alawi Cars steht für exklusive Fahrzeugpflege auf höchstem Niveau. Für uns ist ein Auto nicht nur ein Fortbewegungsmittel, sondern ein wertvolles Gut, das höchste Sorgfalt verdient. Mit Präzision, Leidenschaft und den besten Materialien sorgen wir dafür, dass Ihr Fahrzeug nicht nur glänzt, sondern auch seinen Wert langfristig behält. Luxus ist bei uns kein Extra, sondern unser Standard.",
    "about.stat1.value": "500+",
    "about.stat1.label": "Zufriedene Kunden",
    "about.stat2.value": "100%",
    "about.stat2.label": "Qualitätsgarantie",
    
    // Services
    "services.label": "Unsere Leistungen",
    "services.title": "Dienstleistungen für höchste Ansprüche",
    "services.1.title": "Autoaufbereitung & Pflege",
    "services.1.description": "Professionelle Innen- und Aussenreinigung für ein makelloses Finish und dauerhaften Schutz.",
    "services.2.title": "Ölwechsel & Service",
    "services.2.description": "Fachgerechter Ölwechsel und präzise Wartung für eine maximale Lebensdauer Ihres Motors.",
    "services.3.title": "Bremsenservice",
    "services.3.description": "Sicherheit ohne Kompromisse: Fachmännische Kontrolle und Austausch von Bremsbelägen und Scheiben.",
    "services.4.title": "Radwechsel (Kompletträder)",
    "services.4.description": "Saisonaler Radwechsel für Sommer- und Winterreifen – schnell, sicher und absolut präzise.",
    "services.5.title": "Autohandel & Vermittlung",
    "services.5.description": "Ihr seriöser Partner für den An- und Verkauf von Fahrzeugen mit erstklassiger Beratung.",
    "services.6.title": "Fahrzeugtransport",
    "services.6.description": "Exklusiver und pünktlicher Transport Ihres Fahrzeugs von A nach B – sicher und zuverlässig.",
    
    // Gallery
    "gallery.label": "Unsere Arbeit",
    "gallery.title": "Vorher-Nachher Galerie",
    "gallery.before": "Vorher",
    "gallery.after": "Nachher",
    "gallery.1.title": "Extreme Lackkorrektur",
    "gallery.2.title": "Komplett-Detailing",
    "gallery.3.title": "Felgen-Restaurierung",
    "gallery.4.title": "Sitz-Tiefenreinigung",
    
    // Contact CTA
    "cta.label": "Bereit für Perfektion?",
    "cta.title": "Erleben Sie den Unterschied",
    "cta.text": "Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie direkt einen Termin buchen? Wir sind nur eine Nachricht entfernt.",
    "cta.button": "Kontaktieren Sie uns per WhatsApp",
    "cta.whatsapp": "WhatsApp",
    "cta.phone": "Anrufen",
    "cta.email": "E-Mail",
    "cta.location": "Standort",
    
    // Footer
    "footer.tagline": "Exklusive Fahrzeugpflege & Autoservice",
    "footer.contact": "Kontakt",
    "footer.appointment": "Termine nach Vereinbarung",
    "footer.location": "Standort",
    "footer.copyright": "Alle Rechte vorbehalten.",
    "footer.swiss": "Mit Präzision gebaut in der Schweiz.",
  },
  EN: {
    // Navigation
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.cta": "Book Appointment",
    "nav.tagline": "SWISS DETAILING",
    
    // Hero
    "hero.badge": "Swiss Precision • Luxury Detailing",
    "hero.title": "Alawi Cars",
    "hero.subtitle": "Exclusive Vehicle Care",
    "hero.subtitle2": "& Auto Service",
    "hero.description": "Perfection in every detail. Your first-class partner for brilliance, safety and reliability in Switzerland.",
    "hero.cta": "Book Appointment",
    "hero.scroll": "Scroll",
    
    // About
    "about.label": "About Us",
    "about.title": "Our Passion for Perfection",
    "about.text": "Alawi Cars stands for exclusive vehicle care at the highest level. For us, a car is not just a means of transportation, but a valuable asset that deserves the utmost care. With precision, passion and the best materials, we ensure that your vehicle not only shines, but also retains its value in the long term. Luxury is not an extra for us, but our standard.",
    "about.stat1.value": "500+",
    "about.stat1.label": "Satisfied Customers",
    "about.stat2.value": "100%",
    "about.stat2.label": "Quality Guarantee",
    
    // Services
    "services.label": "Our Services",
    "services.title": "Services for the Highest Standards",
    "services.1.title": "Car Detailing & Care",
    "services.1.description": "Professional interior and exterior cleaning for a flawless finish and lasting protection.",
    "services.2.title": "Oil Change & Service",
    "services.2.description": "Professional oil change and precise maintenance for maximum engine life.",
    "services.3.title": "Brake Service",
    "services.3.description": "Safety without compromise: Expert inspection and replacement of brake pads and discs.",
    "services.4.title": "Wheel Change (Complete Wheels)",
    "services.4.description": "Seasonal wheel change for summer and winter tires – fast, safe and absolutely precise.",
    "services.5.title": "Car Sales & Brokerage",
    "services.5.description": "Your reliable partner for buying and selling vehicles with first-class advice.",
    "services.6.title": "Vehicle Transport",
    "services.6.description": "Exclusive and punctual transport of your vehicle from A to B – safe and reliable.",
    
    // Gallery
    "gallery.label": "Our Work",
    "gallery.title": "Before-After Gallery",
    "gallery.before": "Before",
    "gallery.after": "After",
    "gallery.1.title": "Extreme Paint Correction",
    "gallery.2.title": "Complete Detailing",
    "gallery.3.title": "Wheel Restoration",
    "gallery.4.title": "Deep Seat Cleaning",
    
    // Contact CTA
    "cta.label": "Ready for Perfection?",
    "cta.title": "Experience the Difference",
    "cta.text": "Do you have questions about our services or would you like to book an appointment directly? We are just a message away.",
    "cta.button": "Contact us via WhatsApp",
    "cta.whatsapp": "WhatsApp",
    "cta.phone": "Call",
    "cta.email": "Email",
    "cta.location": "Location",
    
    // Footer
    "footer.tagline": "Exclusive Vehicle Care & Auto Service",
    "footer.contact": "Contact",
    "footer.appointment": "Appointments by arrangement",
    "footer.location": "Location",
    "footer.copyright": "All rights reserved.",
    "footer.swiss": "Built with precision in Switzerland.",
  },
  FR: {
    // Navigation
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.gallery": "Galerie",
    "nav.contact": "Contact",
    "nav.cta": "Prendre rendez-vous",
    "nav.tagline": "SWISS DETAILING",
    
    // Hero
    "hero.badge": "Précision Suisse • Detailing de Luxe",
    "hero.title": "Alawi Cars",
    "hero.subtitle": "Entretien de véhicules exclusif",
    "hero.subtitle2": "& Service Auto",
    "hero.description": "La perfection dans les moindres détails. Votre partenaire de première classe pour l'éclat, la sécurité et la fiabilité en Suisse.",
    "hero.cta": "Prendre rendez-vous",
    "hero.scroll": "Défiler",
    
    // About
    "about.label": "À propos",
    "about.title": "Notre passion pour la perfection",
    "about.text": "Alawi Cars représente l'entretien exclusif de véhicules au plus haut niveau. Pour nous, une voiture n'est pas seulement un moyen de transport, mais un bien précieux qui mérite le plus grand soin. Avec précision, passion et les meilleurs matériaux, nous veillons à ce que votre véhicule brille non seulement, mais conserve également sa valeur à long terme. Le luxe n'est pas un extra chez nous, mais notre standard.",
    "about.stat1.value": "500+",
    "about.stat1.label": "Clients satisfaits",
    "about.stat2.value": "100%",
    "about.stat2.label": "Garantie qualité",
    
    // Services
    "services.label": "Nos Services",
    "services.title": "Services pour les plus hautes exigences",
    "services.1.title": "Préparation & Entretien Auto",
    "services.1.description": "Nettoyage intérieur et extérieur professionnel pour une finition impeccable et une protection durable.",
    "services.2.title": "Vidange & Service",
    "services.2.description": "Vidange professionnelle et entretien précis pour une durée de vie maximale de votre moteur.",
    "services.3.title": "Service Freins",
    "services.3.description": "Sécurité sans compromis: Contrôle expert et remplacement des plaquettes et disques de frein.",
    "services.4.title": "Changement de Roues",
    "services.4.description": "Changement saisonnier de roues pour pneus été et hiver – rapide, sûr et absolument précis.",
    "services.5.title": "Vente & Courtage Auto",
    "services.5.description": "Votre partenaire fiable pour l'achat et la vente de véhicules avec des conseils de première classe.",
    "services.6.title": "Transport de Véhicules",
    "services.6.description": "Transport exclusif et ponctuel de votre véhicule de A à B – sûr et fiable.",
    
    // Gallery
    "gallery.label": "Notre Travail",
    "gallery.title": "Galerie Avant-Après",
    "gallery.before": "Avant",
    "gallery.after": "Après",
    "gallery.1.title": "Correction Peinture Extrême",
    "gallery.2.title": "Detailing Complet",
    "gallery.3.title": "Restauration Jantes",
    "gallery.4.title": "Nettoyage Profond Sièges",
    
    // Contact CTA
    "cta.label": "Prêt pour la perfection?",
    "cta.title": "Vivez la différence",
    "cta.text": "Avez-vous des questions sur nos services ou souhaitez-vous prendre rendez-vous directement? Nous ne sommes qu'à un message.",
    "cta.button": "Contactez-nous via WhatsApp",
    "cta.whatsapp": "WhatsApp",
    "cta.phone": "Appeler",
    "cta.email": "E-mail",
    "cta.location": "Emplacement",
    
    // Footer
    "footer.tagline": "Entretien de véhicules exclusif & Service Auto",
    "footer.contact": "Contact",
    "footer.appointment": "Rendez-vous sur demande",
    "footer.location": "Emplacement",
    "footer.copyright": "Tous droits réservés.",
    "footer.swiss": "Construit avec précision en Suisse.",
  },
  IT: {
    // Navigation
    "nav.services": "Servizi",
    "nav.about": "Chi siamo",
    "nav.gallery": "Galleria",
    "nav.contact": "Contatto",
    "nav.cta": "Prenota appuntamento",
    "nav.tagline": "SWISS DETAILING",
    
    // Hero
    "hero.badge": "Precisione Svizzera • Detailing di Lusso",
    "hero.title": "Alawi Cars",
    "hero.subtitle": "Cura esclusiva del veicolo",
    "hero.subtitle2": "& Servizio Auto",
    "hero.description": "Perfezione in ogni dettaglio. Il vostro partner di prima classe per brillantezza, sicurezza e affidabilità in Svizzera.",
    "hero.cta": "Prenota appuntamento",
    "hero.scroll": "Scorri",
    
    // About
    "about.label": "Chi siamo",
    "about.title": "La nostra passione per la perfezione",
    "about.text": "Alawi Cars rappresenta la cura esclusiva dei veicoli al più alto livello. Per noi, un'auto non è solo un mezzo di trasporto, ma un bene prezioso che merita la massima cura. Con precisione, passione e i migliori materiali, ci assicuriamo che il vostro veicolo non solo brilli, ma mantenga anche il suo valore a lungo termine. Il lusso non è un extra per noi, ma il nostro standard.",
    "about.stat1.value": "500+",
    "about.stat1.label": "Clienti soddisfatti",
    "about.stat2.value": "100%",
    "about.stat2.label": "Garanzia di qualità",
    
    // Services
    "services.label": "I nostri servizi",
    "services.title": "Servizi per i più alti standard",
    "services.1.title": "Preparazione & Cura Auto",
    "services.1.description": "Pulizia interna ed esterna professionale per una finitura impeccabile e una protezione duratura.",
    "services.2.title": "Cambio Olio & Servizio",
    "services.2.description": "Cambio olio professionale e manutenzione precisa per la massima durata del motore.",
    "services.3.title": "Servizio Freni",
    "services.3.description": "Sicurezza senza compromessi: Controllo esperto e sostituzione di pastiglie e dischi freno.",
    "services.4.title": "Cambio Ruote (Complete)",
    "services.4.description": "Cambio stagionale delle ruote per pneumatici estivi e invernali – veloce, sicuro e assolutamente preciso.",
    "services.5.title": "Vendita & Intermediazione Auto",
    "services.5.description": "Il vostro partner affidabile per l'acquisto e la vendita di veicoli con consulenza di prima classe.",
    "services.6.title": "Trasporto Veicoli",
    "services.6.description": "Trasporto esclusivo e puntuale del vostro veicolo da A a B – sicuro e affidabile.",
    
    // Gallery
    "gallery.label": "Il nostro lavoro",
    "gallery.title": "Galleria Prima-Dopo",
    "gallery.before": "Prima",
    "gallery.after": "Dopo",
    "gallery.1.title": "Correzione Vernice Estrema",
    "gallery.2.title": "Detailing Completo",
    "gallery.3.title": "Restauro Cerchi",
    "gallery.4.title": "Pulizia Profonda Sedili",
    
    // Contact CTA
    "cta.label": "Pronti per la perfezione?",
    "cta.title": "Vivi la differenza",
    "cta.text": "Avete domande sui nostri servizi o desiderate prenotare direttamente un appuntamento? Siamo a un messaggio di distanza.",
    "cta.button": "Contattateci via WhatsApp",
    "cta.whatsapp": "WhatsApp",
    "cta.phone": "Chiamare",
    "cta.email": "E-mail",
    "cta.location": "Posizione",
    
    // Footer
    "footer.tagline": "Cura esclusiva del veicolo & Servizio Auto",
    "footer.contact": "Contatto",
    "footer.appointment": "Appuntamenti su richiesta",
    "footer.location": "Posizione",
    "footer.copyright": "Tutti i diritti riservati.",
    "footer.swiss": "Costruito con precisione in Svizzera.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("DE")

  useEffect(() => {
    const stored = localStorage.getItem("alawi-language") as Language
    if (stored && ["DE", "EN", "FR", "IT"].includes(stored)) {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("alawi-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
