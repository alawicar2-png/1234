# Alawi Cars – PRD

## Original Problem Statement
Luxuriöse, interaktive One-Page-Website für **Alawi Cars** (exklusive Fahrzeugpflege & Autoservice in der Schweiz). Dunkles Luxus-Design (Schwarz/Anthrazit) mit Chrom/Silber- und Gold-Akzenten. 3D-Tilt-Effekt + Glassmorphismus auf Service-Boxen, Scroll-Animationen, Vorher/Nachher-Galerie, Mehrsprachigkeit DE/FR/IT/EN (text-only Switcher, KEINE Flaggen, DE Default, LocalStorage). Keine Erwähnung "15 Jahre Erfahrung". Kontakt via WhatsApp +41 76 294 47 02 und info@alawicars.ch.

## Architecture
- **Frontend**: React 19 + Tailwind + framer-motion + react-compare-slider + lucide-react
- **Fonts**: Cabinet Grotesk (Headings) + Satoshi (Body) via Fontshare CDN
- **i18n**: React Context + LocalStorage (`alawi.lang`), 4 Sprachen
- **Backend**: FastAPI (default scaffold, nicht aktiv genutzt)
- **DB**: MongoDB (nicht aktiv genutzt)

## User Personas
- **Premium-Kunden in der Schweiz** suchen exklusive Fahrzeugpflege
- **Internationale Besucher** (FR/IT/EN) für Autohandel/Vermittlung

## Core Requirements (static)
- One-Page-Website auf Deutsch (Default) mit Sprach-Switcher
- Hero, Über uns, 6 Dienstleistungen, Vorher/Nachher-Galerie, CTA, Footer
- Glassmorphismus, 3D-Tilt, Parallax, Scroll-Reveal
- Direkter Kontakt: WhatsApp / Tel / E-Mail (kein Formular)

## Implemented (2025-12)
- Hero mit Parallax, animierter Headline, dual CTAs
- Über-uns-Sektion mit Stats und schwebender Bildkarte
- Services: 6 Karten mit echtem 3D-Tilt (framer-motion useMotionValue/useSpring)
- Galerie: 4 Tabs (Lackkorrektur, Komplett-Detailing, Felgen-Restaurierung, Sitz-Tiefenreinigung) + interaktiver Vergleichs-Slider mit goldenem Handle und 3D-Tilt-Wrapper
- Kontakt-CTA mit WhatsApp/Anruf/E-Mail Cards
- Footer mit vollständigen Kontaktdaten
- Sprach-Switcher Text-only (DE | EN | FR | IT) – Desktop & Mobile, LocalStorage-persistent
- Komplett 4-sprachig (DE/EN/FR/IT)
- Keine "15 Jahre Erfahrung"-Erwähnung
- Mobile-Menü mit Sprachauswahl

## Backlog / Next
- **P1**: Vorher/Nachher-Bilder via Gemini Nano Banana exakt nach Beschreibung generieren (Mercedes Lackkorrektur, Audi A5 Detailing, schwarze Felge, Ledersitz) – Skript basierend auf EMERGENT_LLM_KEY in /app/backend/.env
- **P1**: Echte Kundenfotos einbauen, sobald Inhaber sie liefert
- **P2**: Online-Buchungsformular mit MongoDB-Speicherung + E-Mail-Benachrichtigung (Resend)
- **P2**: Impressum/Datenschutz-Seiten
- **P2**: SEO-Meta-Tags pro Sprache, Sitemap, Open-Graph-Bild
- **P3**: Echte Kundenstimmen (Testimonial-Slider)
- **P3**: Standort-Karte (Google Maps) sobald Adresse bekannt

## Test Credentials
N/A – statische Marketing-Seite ohne Auth.
