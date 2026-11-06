export type Language = "bs" | "de" | "en";

export interface ProjectData {
  id: string;
  title: string;
  category: "E-Commerce" | "Lokalni Biznis" | "Lokales Unternehmen" | "Local Business";
  categoryKey: "ecommerce" | "local";
  badge: string;
  subtitle: string;
  description: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  highlights: string[];
  techStack: string[];
  demoUrl: string;
  videoUrl: string;
}

export interface ServiceTranslationItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  highlight: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  business: string;
  projectUrl: string;
  resultMetric: string;
  metricLabel: string;
}

export const translations = {
  bs: {
    nav: {
      projects: "Projekti",
      services: "Usluge",
      process: "Proces",
      contact: "Kontakt",
      cta: "Pokreni Projekat",
      status: "Online / Dostupan",
    },
    hero: {
      badge: "Full-Stack & E-Commerce Developer",
      titleLine1: "Gradim brze, profitabilne",
      titleGradient: "web stranice i e-trgovine.",
      subtitle:
        "Od online narudžbi do Stripe/PayPal plaćanja i pravnih standarda (DSGVO). Pretvaram posjetioce u kupce kroz moderan dizajn i optimizovan kod.",
      viewWorkBtn: "Pogledaj Uživo Radove",
      consultationBtn: "Besplatne Konsultacije",
      cardSpeed: "Ultra-brz odziv & SEO",
      cardSecurity: "DSGVO & EU Pravila",
      cardCode: "Next.js & Čist Kod",
    },
    services: {
      badge: "Šta nudim vašem biznisu",
      title: "Usluge & Rješenja",
      desc: "Ne prodajem samo linije koda, već digitalna rješenja koja donose narudžbe, nove klijente i rasterećuju vaše svakodnevno poslovanje.",
      requestQuoteBtn: "Zatraži Ponudu za Ovo",
      barSpeedTitle: "Top Brzina",
      barSpeedSub: "Core Web Vitals 95+",
      barPaymentTitle: "Online Plaćanja",
      barPaymentSub: "Stripe & PayPal ready",
      barSeoTitle: "Lokalni SEO",
      barSeoSub: "Vidljivost na Google-u",
      barLegalTitle: "DSGVO Spreman",
      barLegalSub: "Njemačka & EU pravila",
      items: [
        {
          id: "ecommerce",
          badge: "Visoka Konverzija",
          title: "E-Commerce & Online Prodavnice",
          description:
            "Izrada prilagođenih internet prodavnica sa fokusom na jednostavno naručivanje, moderan dizajn i maksimalnu stopu završenih kupovina.",
          features: [
            "Integracija Stripe i PayPal checkout sistema",
            "Prilagođeni kalkulatori i konfiguratori artikala",
            "Automatska e-mail obavještenja za kupca i vlasnika",
            "Pregledna i responzivna korpa za mobitele",
          ],
          highlight: "Spremno za primanje uplata od prvog dana",
        },
        {
          id: "local-business",
          badge: "Lokalni Rast",
          title: "Web Stranice za Lokalne Biznise",
          description:
            "Reprezentativne web prezentacije za frizerske salone, restorane, radionice i uslužne djelatnosti koje privlače nove kupce iz vašeg grada.",
          features: [
            "Optimizacija za Google pretragu i Google Maps (Local SEO)",
            "Interaktivni cjenovnici i galerije radova",
            "1-klik zakazivanje termina (WhatsApp i telefonski poziv)",
            "Brzo učitavanje ispod 1 sekunde na mobilnim mrežama",
          ],
          highlight: "Pretvara posjetioce u stvarne klijente",
        },
        {
          id: "legal-performance",
          badge: "Sigurnost & Zakon",
          title: "DSGVO Usklađenost & Optimizacija",
          description:
            "Pravna usklađenost sa strogim EU i njemačkim propisima, uz maksimalnu brzinu koja garantuje visoke pozicije na pretraživačima.",
          features: [
            "Pravne stranice (Impressum, Datenschutzerklärung, AGB)",
            "Cookie consent banner po njemačkim standardima",
            "Core Web Vitals optimizacija (ocjena 95+ na Google PageSpeed)",
            "SSL enkripcija i zaštita podataka korisnika",
          ],
          highlight: "100% miran san pred EU i njemačkim zakonima",
        },
      ],
    },
    process: {
      badge: "Jasni koraci saradnje",
      title: "Kako Radimo Zajedno",
      desc: "Od ideje do online narudžbi bez stresa i skrivenih troškova. Transparentan proces u 4 definisana koraka.",
      deliveredLabel: "Isporučeno:",
      ctaTitle: "Imate ideju ili želite unaprijediti postojeću stranicu?",
      ctaDesc: "Besplatno ćemo proći kroz vaš projekat, definisati prioritete i napraviti tačan plan bez ikakvih obaveza.",
      ctaBtn: "Dogovori Besplatan Poziv",
      steps: [
        {
          number: "01",
          title: "Konsultacije & Strategija",
          subtitle: "Upoznavanje sa vašim ciljevima",
          description:
            "Definišemo šta tačno želite postići web stranicom: više online narudžbi, zakazivanje termina ili jači brend na lokalnom tržištu.",
          deliverables: [
            "Analiza konkurencije i ciljne publike",
            "Plan strukture i potrebnih integracija",
            "Fiksna procjena vremena i budžeta",
          ],
        },
        {
          number: "02",
          title: "UI/UX Dizajn & Prototip",
          subtitle: "Vizuelni koncept prilagođen kupcima",
          description:
            "Kreiramo moderan, estetski usklađen dizajn koji je maksimalno pregledan na mobilnim uređajima i vodi posjetioca direktno do akcije.",
          deliverables: [
            "Mobile-first raspored prilagođen brzom pregledu",
            "Paleta boja, tipografija i vizuelni identitet",
            "Pregled i odobrenje prije početka kodiranja",
          ],
        },
        {
          number: "03",
          title: "Razvoj & Integracije",
          subtitle: "Pisanje čistog i brzog koda",
          description:
            "Pretvaranje dizajna u ultra-brzu web stranicu koristeći Next.js, sa povezanim sistemima plaćanja (Stripe/PayPal) i pravnim stranicama.",
          deliverables: [
            "Integracija online plaćanja ili kontakt formi",
            "DSGVO pravna usklađenost (Impressum, Datenschutz)",
            "Optimizacija brzine učitavanja (Core Web Vitals)",
          ],
        },
        {
          number: "04",
          title: "Testiranje & Lansiranje",
          subtitle: "Spremni za prve kupce i klijente",
          description:
            "Temeljno testiranje na svim telefonima i računarima, postavljanje na vašu domenu i kratka obuka za upravljanje sadržajem.",
          deliverables: [
            "Povezivanje domene i SSL sigurnosnog certifikata",
            "Povezivanje sa Google pretragom (Google Search Console)",
            "Podrška i održavanje nakon lansiranja",
          ],
        },
      ],
    },
    testimonials: {
      badge: "Iskustva klijenata",
      title: "Rezultati Koji Govore Sami Za Sebe",
      desc: "Povjerenje vlasnika biznisa i brendova koji su podigli poslovanje na viši nivo.",
      ariaLink: "Posjeti web stranicu klijenta",
      items: [
        {
          quote:
            "Automatizacija narudžbi i online plaćanje torti rasteretili su nas u potpunosti. Klijenti sami biraju veličine i ukuse, a nama stižu gotove narudžbe sa uplatom. Sve je urađeno brzo i profesionalno po njemačkim standardima.",
          author: "Tim Brunchito",
          role: "Osnivač & Glavni Slastičar",
          business: "Brunchito Cakes",
          projectUrl: "https://brunchito.de",
          resultMetric: "+45%",
          metricLabel: "Više online narudžbi",
        },
        {
          quote:
            "Prezentacija stolarske radionice je na potpuno novom nivou. Kupci lako pronalaze naš rad na Google pretrazi, pregledaju galeriju gotovog namještaja i kuhinja na telefonu, te se jednim klikom jave na WhatsApp za ponudu i izmjeru.",
          author: "Hećić Stil Tim",
          role: "Vlasnik firme",
          business: "Stolarija Hećić Stil",
          projectUrl: "https://hecic-stil.vercel.app/",
          resultMetric: "1-Klik",
          metricLabel: "Upit za izmjeru",
        },
        {
          quote:
            "Showroom za dekoracije izgleda luksuzno i moderno. Slike se učitavaju momentalno, a kupci odmah mogu poslati upit za tačan komad koji žele. Tačnost u rokovima i saradnja za svaku pohvalu.",
          author: "Vintage Charm Tim",
          role: "Showroom Management",
          business: "Vintage Charm Dekoracije",
          projectUrl: "https://vintage-charm-dekoracije.vercel.app/",
          resultMetric: "98/100",
          metricLabel: "Google Speed ocjena",
        },
      ],
    },
    estimator: {
      badge: "Kalkulator Troškova",
      title: "Procijenite Vaš Projekat",
      desc: "Konfigurišite željene funkcionalnosti i dobijte okvirnu procjenu investicije i vremena izrade u realnom vremenu.",
      typeLabel: "1. Tip Web Rješenja",
      scopeLabel: "2. Obim & Broj Stranica",
      featuresLabel: "3. Dodatne Funkcionalnosti",
      summaryTitle: "Okvirna Procjena Investicije",
      estTime: "Okvirno vrijeme izrade:",
      weeksSuffix: "sedmice",
      includedNote: "Uključuje optimizaciju brzine, mobile-first dizajn i postavljanje na vašu domenu.",
      transferBtn: "Pošalji Ovu Procjenu u Kontakt",
      types: [
        { id: "business", title: "Lokalni Biznis", desc: "Predstavljanje usluga, portfolio i 1-klik zakazivanje" },
        { id: "ecommerce", title: "E-Commerce Shop", desc: "Online narudžbe, kalkulator artikala i Stripe/PayPal" },
        { id: "custom", title: "Custom Web Aplikacija", desc: "Napredni sistemi, korisnički nalozi i baze podataka" },
      ],
      scopes: [
        { id: "small", label: "Jedna stranica (One-Page / Landing)", desc: "1-3 sekcije, brzi fokus na kontakt" },
        { id: "medium", label: "Standardni sajt (do 5 podstranica)", desc: "Početna, O nama, Usluge, Galerija, Kontakt" },
        { id: "large", label: "Kompletan portal (5-15+ stranica)", desc: "Katalog, blog, filteri i višejezičnost" },
      ],
      features: [
        { id: "payments", label: "Online plaćanje (Stripe / PayPal)", priceText: "+350 €" },
        { id: "dsgvo", label: "Pravni paket za EU (DSGVO, Impressum, Consent)", priceText: "+200 €" },
        { id: "i18n", label: "Višejezičnost (2-3 jezika sa auto detekcijom)", priceText: "+250 €" },
        { id: "seo", label: "Napredni Local SEO & Google Search Console", priceText: "+150 €" },
      ],
    },
    projects: {
      badge: "Interaktivni video pregledi",
      title: "Izdvojeni Projekti",
      desc: "Pogledajte radove u akciji: brze animacije, fluidni korisnički tokovi, online plaćanja i prilagođene funkcionalnosti.",
      filterAll: "Sve",
      filterEcommerce: "E-Commerce",
      filterLocal: "Lokalni Biznis",
      shownCount: "Prikazano: {count} projekta",
      visitSite: "Posjeti Stranicu",
      detailsBtn: "Detalji",
      liveBtn: "Uživo",
      caseStudyHeader: "Case Study & Pregled Rješenja",
      escClose: "ESC za izlaz",
      problemTitle: "Problem & Zadatak:",
      solutionTitle: "Implementirano rješenje:",
      highlightsTitle: "Ključne stavke:",
      modalClose: "Zatvori",
      modalOpenSite: "Otvori Stranicu",
      items: [
        {
          id: "brunchito",
          title: "Brunchito Cakes",
          category: "E-Commerce",
          categoryKey: "ecommerce" as const,
          badge: "Food Ordering & Slastice",
          subtitle: "Custom sistem online narudžbi sa kalkulatorom porcija i integrisanim plaćanjem",
          description:
            "Digitalna platforma za poslastičarnicu specijalizovanu za torte po narudžbi. Kupci u par koraka biraju ukus, veličinu, datum isporuke i plaćaju online.",
          solution:
            "Kreirana moderna web prodavnica sa integrisanim Stripe i PayPal checkout sistemom, automatskim obračunom porcija i punom pravnom usklađenošću za EU/njemačko tržište.",
          impactMetrics: [
            { label: "Proces narudžbe", value: "< 2 min" },
            { label: "Plaćanja", value: "Stripe & PayPal" },
            { label: "Pravna zaštita", value: "DSGVO 100%" },
          ],
          highlights: [
            "Stripe & PayPal sigurni checkout sistem",
            "Interaktivni kalkulator spratova i porcija",
            "Usklađeno sa njemačkim zakonima (Impressum, Datenschutz, AGB)",
            "Automatska e-mail potvrda klijentu i vlasniku",
          ],
          techStack: ["Next.js", "Tailwind CSS", "Stripe API", "Framer Motion"],
          demoUrl: "https://brunchito.de",
          videoUrl: "/videos/brunchito.mp4",
        },
        {
          id: "hecic-stil",
          title: "Stolarija Hećić Stil",
          category: "Lokalni Biznis",
          categoryKey: "local" as const,
          badge: "Namještaj po Mjeri & Radionica",
          subtitle: "Moderni web portfolio za privlačenje lokalnih klijenata i upite za izmjeru",
          description:
            "Prezentacija za stolarsku radionicu sa jasnim prikazom usluga, galerijom unikatnih radova i kuhinja, te direktnim kontaktom preko jednog klika.",
          solution:
            "Optimizovano za lokalnu pretragu (Local SEO) sa brzim učitavanjem, modernim kontrastom i 1-klik dugmetom za WhatsApp/telefon upit za ponudu.",
          impactMetrics: [
            { label: "Lokalni SEO", value: "Google Rank" },
            { label: "Učitavanje", value: "< 0.8s" },
            { label: "Direktan upit", value: "WhatsApp / Poziv" },
          ],
          highlights: [
            "Galerija namještaja po mjeri i enterijera",
            "Optimizovano za Google Maps i lokalni profil",
            "Jedan klik do WhatsApp upita za besplatnu ponudu",
            "Fluidan prikaz na svim mobilnim uređajima",
          ],
          techStack: ["React", "Tailwind CSS", "Local SEO", "Responsive UI"],
          demoUrl: "https://hecic-stil.vercel.app/",
          videoUrl: "/videos/hecic-stil.mp4",
        },
        {
          id: "vintage-charm",
          title: "Vintage Charm Dekoracije",
          category: "E-Commerce",
          categoryKey: "ecommerce" as const,
          badge: "Showroom & Dekoracije",
          subtitle: "Vizuelno impresivan digitalni showroom sa elegantnim pregledom dekoracija",
          description:
            "E-commerce katalog za unikatne retro predmete, dekoracije i ambijentalni namještaj, sa akcentom na fotografiju i jednostavan upit za kupovinu.",
          solution:
            "Izgrađena brza platforma sa naprednim prikazom radova, optimizovanim slikama visoke rezolucije bez usporavanja i glatkim prelazima među stranicama.",
          impactMetrics: [
            { label: "Core Web Vitals", value: "98/100" },
            { label: "Katalog artikala", value: "Instant Filter" },
            { label: "Konverzija", value: "Direktan Upit" },
          ],
          highlights: [
            "Brza pretraga i filtriranje po stilu i kategorijama",
            "Optimizovane slike visoke rezolucije i estetski showroom",
            "Čist, sofisticiran dizajn sa jasnim pozivima na akciju",
            "Direktan kontakt flow za rezervaciju i kupovinu dekoracija",
          ],
          techStack: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX Flow"],
          demoUrl: "https://vintage-charm-dekoracije.vercel.app/",
          videoUrl: "/videos/vintage-charm.mp4",
        },
      ],
    },
    contact: {
      badge: "Kontakt & Besplatna Procjena",
      title: "Započnimo Vaš Projekat",
      desc: "Trebate novu stranicu, redizajn ili sistem online plaćanja? Pošaljite upit ili se javite direktno putem WhatsApp-a za brz odgovor unutar 24h.",
      waTitle: "Direktan WhatsApp",
      waSub: "Najbrži način za postavljanje pitanja ili slanje materijala projekta.",
      waAction: "Pošalji poruku odmah",
      waBadge: "Brz Odgovor",
      emailTitle: "E-Mail Upit",
      emailSub: "Za detaljnije ponude, specifikacije ili pravne informacije.",
      marketFocus: "Fokus na Tržište",
      marketSub: "Njemačka (EU) & Balkan Region",
      securityTitle: "Pravna Sigurnost",
      securitySub: "DSGVO, Impressum & Ugovor o radu",
      formName: "Vaše Ime / Firma *",
      formEmail: "Email Adresa *",
      formService: "Vrsta Usluge",
      formBudget: "Okvirni Budžet",
      formDesc: "Kratak Opis Projekta *",
      formDescPlaceholder: "Napišite nekoliko riječi o vašem biznisu i ciljevima...",
      submitBtn: "Zatraži Besplatnu Procjenu",
      sending: "Slanje upita...",
      successTitle: "Poruka je uspješno poslana!",
      successDesc: "Hvala vam na upitu. Pregledat ću vaše podatke i javiti se u roku od 24 sata sa detaljnim prijedlogom.",
      sendAnother: "Pošalji još jedan upit",
      footerRights: "Sva prava zadržana. Izrađeno po EU standardima.",
    },
  },
  de: {
    nav: {
      projects: "Projekte",
      services: "Leistungen",
      process: "Ablauf",
      contact: "Kontakt",
      cta: "Projekt Starten",
      status: "Online / Verfügbar",
    },
    hero: {
      badge: "Full-Stack & E-Commerce Entwickler",
      titleLine1: "Ich entwickle schnelle, profitable",
      titleGradient: "Websites & Online-Shops.",
      subtitle:
        "Von Online-Bestellungen bis hin zu Stripe/PayPal-Zahlungen und DSGVO-Standards. Ich verwandle Besucher in Kunden durch modernes Design und optimierten Code.",
      viewWorkBtn: "Live-Projekte Entdecken",
      consultationBtn: "Kostenlose Beratung",
      cardSpeed: "Ultra-schnell & SEO-optimiert",
      cardSecurity: "DSGVO & EU-Standards",
      cardCode: "Next.js & Sauberer Code",
    },
    services: {
      badge: "Mehrwert für Ihr Unternehmen",
      title: "Leistungen & Lösungen",
      desc: "Ich liefere nicht nur Code, sondern digitale Komplettlösungen, die messbar Anfragen und Verkäufe generieren und Ihren Alltag erleichtern.",
      requestQuoteBtn: "Angebot Hierfür Anfordern",
      barSpeedTitle: "Top Performance",
      barSpeedSub: "Core Web Vitals 95+",
      barPaymentTitle: "Online-Zahlungen",
      barPaymentSub: "Stripe & PayPal ready",
      barSeoTitle: "Lokales SEO",
      barSeoSub: "Sichtbarkeit bei Google",
      barLegalTitle: "DSGVO-Konform",
      barLegalSub: "Deutsche & EU-Standards",
      items: [
        {
          id: "ecommerce",
          badge: "Hohe Conversion",
          title: "E-Commerce & Online-Shops",
          description:
            "Individuelle Online-Shops mit Fokus auf intuitive Benutzerführung, schnellen Checkout und maximale Abschlussraten.",
          features: [
            "Integration von Stripe- & PayPal-Checkout-Systemen",
            "Individuelle Produktkonfiguratoren und Portionsrechner",
            "Automatische E-Mail-Benachrichtigungen für Kunden und Inhaber",
            "Optimierter, mobilfreundlicher Warenkorb-Prozess",
          ],
          highlight: "Vom ersten Tag an bereit für Zahlungen",
        },
        {
          id: "local-business",
          badge: "Lokales Wachstum",
          title: "Websites für Lokale Unternehmen",
          description:
            "Repräsentative Webauftritte für Handwerksbetriebe, Salons, Gastronomie und Dienstleister, die Neukunden in Ihrer Region anziehen.",
          features: [
            "Optimierung für Google Suche und Google Maps (Local SEO)",
            "Interaktive Preislisten und Leistungsübersichten",
            "1-Klick-Terminvereinbarung via WhatsApp und Direktruf",
            "Ladezeiten unter 1 Sekunde auch im Mobilfunknetz",
          ],
          highlight: "Verwandelt Website-Besucher in echte Kunden",
        },
        {
          id: "legal-performance",
          badge: "Recht & Sicherheit",
          title: "DSGVO-Konformität & Optimierung",
          description:
            "Vollständige Rechtskonformität nach strengen EU- und deutschen Vorgaben, kombiniert mit kompromissloser Ladezeitoptimierung.",
          features: [
            "Rechtssichere Seiten (Impressum, Datenschutzerklärung, AGB)",
            "DSGVO-konforme Cookie-Consent-Banner",
            "Core Web Vitals Optimierung (Score 95+ bei Google PageSpeed)",
            "SSL-Verschlüsselung und modernster Datenschutz",
          ],
          highlight: "100% rechtssicher nach deutschem & EU-Recht",
        },
      ],
    },
    process: {
      badge: "Transparente Zusammenarbeit",
      title: "Wie Wir Zusammenarbeiten",
      desc: "Von der ersten Idee bis zu den Online-Bestellungen – ohne Stress und versteckte Kosten. Ein klar definierter 4-Schritte-Prozess.",
      deliveredLabel: "Ergebnis:",
      ctaTitle: "Haben Sie eine Idee oder möchten Sie Ihre bestehende Website modernisieren?",
      ctaDesc: "Wir analysieren Ihr Projekt kostenlos, definieren Prioritäten und erstellen einen unverbindlichen Fahrplan.",
      ctaBtn: "Kostenloses Gespräch Vereinbaren",
      steps: [
        {
          number: "01",
          title: "Beratung & Strategie",
          subtitle: "Ihre Ziele verstehen",
          description:
            "Wir definieren die genauen Zielsetzungen: mehr Online-Verkäufe, automatisierte Terminbuchungen oder stärkere lokale Präsenz.",
          deliverables: [
            "Zielgruppen- & Wettbewerbsanalyse",
            "Strukturplan & erforderliche Schnittstellen",
            "Transparente Zeit- und Budgetplanung",
          ],
        },
        {
          number: "02",
          title: "UI/UX Design & Prototyp",
          subtitle: "Kundenorientiertes visuelles Konzept",
          description:
            "Modernes, hochästhetisches Design, das mobiloptimiert ist und Besucher zielgerichtet zur Kontaktaufnahme oder Bestellung führt.",
          deliverables: [
            "Mobile-First Layout für intuitive Bedienung",
            "Farbkonzept, Typografie & Markenidentität",
            "Vorschau und Freigabe vor der Programmierung",
          ],
        },
        {
          number: "03",
          title: "Entwicklung & Integration",
          subtitle: "Sauberer, performanter Code",
          description:
            "Umsetzung in eine extrem schnelle Next.js Website mit integrierten Zahlungsgateways (Stripe/PayPal) und vollständiger Rechtssicherheit.",
          deliverables: [
            "Zahlungssysteme & automatisierte Formulare",
            "DSGVO-Rechtssicherheit (Impressum, Datenschutz)",
            "Ladezeit-Optimierung (Core Web Vitals)",
          ],
        },
        {
          number: "04",
          title: "Testing & Launch",
          subtitle: "Startklar für Neukunden",
          description:
            "Umfassende Tests auf allen Geräten, Domain-Aufschaltung, SSL-Sicherheit und eine kurze Einführung zur einfachen Verwaltung.",
          deliverables: [
            "Domain-Einrichtung & SSL-Sicherheitszertifikat",
            "Google Indexierung (Search Console & SEO)",
            "Laufender Support & Betreuung nach dem Launch",
          ],
        },
      ],
    },
    testimonials: {
      badge: "Kundenstimmen",
      title: "Ergebnisse, Die Für Sich Sprechen",
      desc: "Das Vertrauen von Unternehmern und Marken, die ihr digitales Geschäft erfolgreich auf das nächste Level gehoben haben.",
      ariaLink: "Website des Kunden besuchen",
      items: [
        {
          quote:
            "Die Bestellautomatisierung und Online-Zahlung haben unseren Betrieb komplett entlastet. Kunden stellen ihre Wunschtorten selbst zusammen, und wir erhalten fertige Aufträge inklusive Bezahlung. Schnell, zuverlässig und DSGVO-konform.",
          author: "Team Brunchito",
          role: "Gründerin & Chef-Konditorin",
          business: "Brunchito Cakes",
          projectUrl: "https://brunchito.de",
          resultMetric: "+45%",
          metricLabel: "Mehr Online-Bestellungen",
        },
        {
          quote:
            "Die Präsentation unserer Schreinerei ist auf einem völlig neuen Niveau. Kunden finden uns sofort bei Google, sehen unsere Küchen und Maßmöbel mobil in Top-Qualität und fragen direkt per 1-Klick auf WhatsApp an.",
          author: "Hećić Stil Team",
          role: "Inhaber",
          business: "Schreinerei Hećić Stil",
          projectUrl: "https://hecic-stil.vercel.app/",
          resultMetric: "1-Klick",
          metricLabel: "Direktanfrage vor Ort",
        },
        {
          quote:
            "Unser Deko-Showroom wirkt absolut edel und hochwertig. Bilder laden ohne jede Verzögerung und Anfragen für Unikate kommen kontinuierlich herein. Termintreue und transparente Kommunikation auf höchstem Niveau.",
          author: "Vintage Charm Team",
          role: "Showroom Management",
          business: "Vintage Charm Dekorationen",
          projectUrl: "https://vintage-charm-dekoracije.vercel.app/",
          resultMetric: "98/100",
          metricLabel: "Google Speed Score",
        },
      ],
    },
    estimator: {
      badge: "Projektkosten-Rechner",
      title: "Projekt Budget & Zeitplan Kalkulieren",
      desc: "Wählen Sie Ihre gewünschten Funktionen und erhalten Sie in Echtzeit eine verlässliche Kostenschätzung für Ihr Webprojekt.",
      typeLabel: "1. Art der Weblösung",
      scopeLabel: "2. Umfang & Seitenanzahl",
      featuresLabel: "3. Erweiterte Funktionen",
      summaryTitle: "Geschätzte Investition",
      estTime: "Geschätzte Umsetzungszeit:",
      weeksSuffix: "Wochen",
      includedNote: "Inklusive Ladezeit-Optimierung, Mobile-First UI und Domain-Aufschaltung.",
      transferBtn: "Diese Schätzung ins Formular Übernehmen",
      types: [
        { id: "business", title: "Lokales Unternehmen", desc: "Leistungsübersicht, Portfolio und 1-Klick-Direktanfragen" },
        { id: "ecommerce", title: "E-Commerce Shop", desc: "Online-Bestellungen, Produktkonfigurator und Stripe/PayPal" },
        { id: "custom", title: "Individuelle Webanwendung", desc: "Komplexe Prozesse, Kundenportale und Datenbank-Logik" },
      ],
      scopes: [
        { id: "small", label: "One-Page / Landingpage", desc: "1-3 Sektionen, ideal für gezielte Kampagnen" },
        { id: "medium", label: "Standard-Website (bis zu 5 Seiten)", desc: "Startseite, Über uns, Leistungen, Galerie, Kontakt" },
        { id: "large", label: "Komplettportal (5-15+ Seiten)", desc: "Produktkatalog, Blog, Filter und Mehrsprachigkeit" },
      ],
      features: [
        { id: "payments", label: "Online-Zahlung (Stripe / PayPal)", priceText: "+350 €" },
        { id: "dsgvo", label: "DSGVO-Rechtspaket (Impressum, Datenschutz, Cookie Banner)", priceText: "+200 €" },
        { id: "i18n", label: "Mehrsprachigkeit (2-3 Sprachen mit Auto-Erkennung)", priceText: "+250 €" },
        { id: "seo", label: "Erweitertes Local SEO & Google Search Console", priceText: "+150 €" },
      ],
    },
    projects: {
      badge: "Interaktive Videovorschau",
      title: "Ausgewählte Projekte",
      desc: "Sehen Sie unsere Arbeiten in Aktion: schnelle Ladezeiten, nahtlose Benutzerabläufe, integrierte Zahlungen und maßgeschneiderte Lösungen.",
      filterAll: "Alle",
      filterEcommerce: "E-Commerce",
      filterLocal: "Lokales Unternehmen",
      shownCount: "Angezeigt: {count} Projekte",
      visitSite: "Website Besuchen",
      detailsBtn: "Details",
      liveBtn: "Live Demo",
      caseStudyHeader: "Fallstudie & Lösungsübersicht",
      escClose: "ESC zum Schließen",
      problemTitle: "Problemstellung & Aufgabe:",
      solutionTitle: "Umgesetzte Lösung:",
      highlightsTitle: "Hauptmerkmale:",
      modalClose: "Schließen",
      modalOpenSite: "Website Öffnen",
      items: [
        {
          id: "brunchito",
          title: "Brunchito Cakes",
          category: "E-Commerce",
          categoryKey: "ecommerce" as const,
          badge: "Online-Bestellungen & Torten",
          subtitle: "Individuelles Bestellsystem mit Portionsrechner und integrierter Online-Zahlung",
          description:
            "Digitale Plattform für Konditorei-Spezialanfertigungen. Kunden wählen Geschmack, Größe, Liefertermin und bezahlen in wenigen Schritten online.",
          solution:
            "Moderner Webshop mit Stripe & PayPal Checkout, automatischem Portionskalkulator und vollständiger DSGVO-Konformität für den deutschen Markt.",
          impactMetrics: [
            { label: "Bestellprozess", value: "< 2 Min" },
            { label: "Zahlungen", value: "Stripe & PayPal" },
            { label: "Rechtssicherheit", value: "DSGVO 100%" },
          ],
          highlights: [
            "Sicheres Checkout-System via Stripe & PayPal",
            "Interaktiver Kalkulator für Etagen und Portionen",
            "Rechtskonform nach deutschem Recht (Impressum, Datenschutz, AGB)",
            "Automatische E-Mail-Bestätigung an Kunde und Inhaber",
          ],
          techStack: ["Next.js", "Tailwind CSS", "Stripe API", "Framer Motion"],
          demoUrl: "https://brunchito.de",
          videoUrl: "/videos/brunchito.mp4",
        },
        {
          id: "hecic-stil",
          title: "Schreinerei Hećić Stil",
          category: "Lokales Unternehmen",
          categoryKey: "local" as const,
          badge: "Maßmöbel & Werkstatt",
          subtitle: "Modernes Web-Portfolio zur Neukundengewinnung und Vor-Ort-Aufmaßanfragen",
          description:
            "Unternehmensauftritt für eine Schreinerei mit klarer Leistungsübersicht, Galerie für Maßküchen und 1-Klick-Direktkontakt.",
          solution:
            "Optimiert für lokale Suche (Local SEO) mit rasanten Ladezeiten, modernem Kontrast und direktem WhatsApp-/Telefon-Anfragebutton.",
          impactMetrics: [
            { label: "Local SEO", value: "Google Rank" },
            { label: "Ladezeit", value: "< 0.8s" },
            { label: "Direktanfrage", value: "WhatsApp / Anruf" },
          ],
          highlights: [
            "Galerie für maßgefertigte Möbel und Innenausbau",
            "Optimiert für Google Maps und lokales Profil",
            "Ein Klick zur WhatsApp-Anfrage für ein kostenloses Angebot",
            "Optimale Darstellung auf allen mobilen Endgeräten",
          ],
          techStack: ["React", "Tailwind CSS", "Local SEO", "Responsive UI"],
          demoUrl: "https://hecic-stil.vercel.app/",
          videoUrl: "/videos/hecic-stil.mp4",
        },
        {
          id: "vintage-charm",
          title: "Vintage Charm Dekorationen",
          category: "E-Commerce",
          categoryKey: "ecommerce" as const,
          badge: "Showroom & Dekoration",
          subtitle: "Visuell beeindruckender digitaler Showroom mit eleganter Produktübersicht",
          description:
            "E-Commerce Katalog für Vintage-Möbel, Dekoartikel und Unikate mit Fokus auf Bildqualität und unkomplizierte Kaufanfragen.",
          solution:
            "Hochperformante Plattform mit schneller Filterung, optimierten High-Res Bildern ohne Geschwindigkeitsverlust und flüssigen Übergängen.",
          impactMetrics: [
            { label: "Core Web Vitals", value: "98/100" },
            { label: "Artikelkatalog", value: "Instant Filter" },
            { label: "Conversion", value: "Direktanfrage" },
          ],
          highlights: [
            "Schnelle Suche und Filterung nach Stil und Kategorien",
            "Optimierte hochauflösende Bilder im ästhetischen Showroom",
            "Klares, elegantes Design mit präzisen Handlungsaufforderungen",
            "Direkter Anfrage-Flow für Reservierung und Kauf",
          ],
          techStack: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX Flow"],
          demoUrl: "https://vintage-charm-dekoracije.vercel.app/",
          videoUrl: "/videos/vintage-charm.mp4",
        },
      ],
    },
    contact: {
      badge: "Kontakt & Kostenlose Beratung",
      title: "Starten Wir Ihr Projekt",
      desc: "Benötigen Sie eine neue Website, einen Relaunch oder ein Online-Shopsystem? Senden Sie eine Anfrage oder kontaktieren Sie uns direkt per WhatsApp für eine Antwort innerhalb von 24h.",
      waTitle: "Direkt via WhatsApp",
      waSub: "Der schnellste Weg für Fragen oder die Übermittlung von Projektmaterialien.",
      waAction: "Jetzt Nachricht senden",
      waBadge: "Schnelle Antwort",
      emailTitle: "E-Mail Anfrage",
      emailSub: "Für detaillierte Angebote, Leistungsbeschreibungen oder rechtliche Fragen.",
      marketFocus: "Marktfokus",
      marketSub: "Deutschland (EU) & Balkan-Region",
      securityTitle: "Rechtssicherheit",
      securitySub: "DSGVO-konform, Impressum & Vertragssicherheit",
      formName: "Ihr Name / Unternehmen *",
      formEmail: "E-Mail-Adresse *",
      formService: "Art der Dienstleistung",
      formBudget: "Geschätztes Budget",
      formDesc: "Kurze Projektbeschreibung *",
      formDescPlaceholder: "Beschreiben Sie kurz Ihr Unternehmen und Ihre Ziele...",
      submitBtn: "Kostenloses Angebot Anfordern",
      sending: "Anfrage wird gesendet...",
      successTitle: "Nachricht erfolgreich gesendet!",
      successDesc: "Vielen Dank für Ihre Anfrage. Ich prüfe Ihre Angaben und melde mich innerhalb von 24 Stunden mit einem konkreten Vorschlag.",
      sendAnother: "Weitere Anfrage senden",
      footerRights: "Alle Rechte vorbehalten. Entwickelt nach EU-Standards.",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      services: "Services",
      process: "Process",
      contact: "Contact",
      cta: "Start Project",
      status: "Online / Available",
    },
    hero: {
      badge: "Full-Stack & E-Commerce Developer",
      titleLine1: "Building fast, high-converting",
      titleGradient: "websites & e-commerce stores.",
      subtitle:
        "From online ordering systems to Stripe/PayPal integration and GDPR compliance. Turning visitors into paying clients through modern design and performant code.",
      viewWorkBtn: "Explore Live Projects",
      consultationBtn: "Free Consultation",
      cardSpeed: "Ultra-fast Speed & SEO",
      cardSecurity: "GDPR & EU Compliance",
      cardCode: "Next.js & Clean Code",
    },
    services: {
      badge: "What I Deliver To Your Business",
      title: "Services & Solutions",
      desc: "Delivering business-ready digital assets engineered to drive measurable inquiries, streamline checkout flows, and elevate brand authority.",
      requestQuoteBtn: "Request Quote For This",
      barSpeedTitle: "Top Speed",
      barSpeedSub: "Core Web Vitals 95+",
      barPaymentTitle: "Online Payments",
      barPaymentSub: "Stripe & PayPal ready",
      barSeoTitle: "Local SEO",
      barSeoSub: "Google Search Visibility",
      barLegalTitle: "GDPR Compliant",
      barLegalSub: "Germany & EU Standards",
      items: [
        {
          id: "ecommerce",
          badge: "High Conversion",
          title: "E-Commerce & Online Stores",
          description:
            "Custom web shops engineered for frictionless checkout, modern visuals, and maximum conversion rates.",
          features: [
            "Seamless Stripe & PayPal checkout integration",
            "Custom product configurators and quantity calculators",
            "Automated transactional emails for clients and owners",
            "Mobile-first, frictionless cart and checkout flows",
          ],
          highlight: "Ready to accept transactions from day one",
        },
        {
          id: "local-business",
          badge: "Local Growth",
          title: "Websites for Local Businesses",
          description:
            "High-impact web presence for workshops, salons, gastronomy, and local service providers seeking new local clientele.",
          features: [
            "Full Google Search and Google Maps optimization (Local SEO)",
            "Interactive service pricing menus and portfolio galleries",
            "1-tap booking via WhatsApp and direct call triggers",
            "Sub-second load times on mobile cellular connections",
          ],
          highlight: "Converts casual visitors into paying customers",
        },
        {
          id: "legal-performance",
          badge: "Compliance & Speed",
          title: "GDPR Compliance & Performance",
          description:
            "Rigorous compliance with strict German and EU regulations combined with bleeding-edge Core Web Vitals optimization.",
          features: [
            "Legal pages (Impressum, Privacy Policy, Terms & Conditions)",
            "EU/German compliant cookie consent management",
            "Core Web Vitals optimization (Score 95+ on Google PageSpeed)",
            "End-to-end SSL encryption and strict data protection",
          ],
          highlight: "100% peace of mind under German & EU law",
        },
      ],
    },
    process: {
      badge: "Clear Workflow Steps",
      title: "How We Work Together",
      desc: "From concept to live online orders without friction or hidden expenses. A clear, structured 4-step process.",
      deliveredLabel: "Deliverables:",
      ctaTitle: "Have a project idea or want to revamp an existing website?",
      ctaDesc: "We'll review your goals together, prioritize key features, and outline a concrete execution roadmap with no obligation.",
      ctaBtn: "Book a Free Discovery Call",
      steps: [
        {
          number: "01",
          title: "Discovery & Strategy",
          subtitle: "Aligning with your business goals",
          description:
            "We clarify the exact milestones you need: boosting online sales, automating booking requests, or strengthening local search dominance.",
          deliverables: [
            "Competitor & target audience benchmark",
            "Information architecture & integration plan",
            "Fixed timeline and budget quotation",
          ],
        },
        {
          number: "02",
          title: "UI/UX Design & Prototype",
          subtitle: "Customer-centric visual architecture",
          description:
            "Crafting a sleek, high-contrast design optimized for mobile screens that naturally guides visitors toward key conversion actions.",
          deliverables: [
            "Mobile-first layouts engineered for scannability",
            "Harmonized palette, typography & branding assets",
            "Interactive design sign-off prior to code development",
          ],
        },
        {
          number: "03",
          title: "Development & Integrations",
          subtitle: "Writing clean, high-performance code",
          description:
            "Transforming visual assets into an ultra-fast Next.js platform with fully integrated payments (Stripe/PayPal) and legal pages.",
          deliverables: [
            "Secure payment gateway and form integrations",
            "Strict GDPR legal compliance (Impressum, Privacy Policy)",
            "Core Web Vitals performance optimization",
          ],
        },
        {
          number: "04",
          title: "Testing & Live Launch",
          subtitle: "Ready for your first customers",
          description:
            "Thorough cross-device quality checks, custom domain configuration, SSL encryption, and straightforward training on content updates.",
          deliverables: [
            "Custom domain & SSL certificate activation",
            "Google indexing setup (Search Console & Local SEO)",
            "Ongoing maintenance and post-launch support",
          ],
        },
      ],
    },
    testimonials: {
      badge: "Client Testimonials",
      title: "Results That Speak For Themselves",
      desc: "Trusted by business owners and modern brands looking to scale their digital reach and conversions.",
      ariaLink: "Visit client live website",
      items: [
        {
          quote:
            "Automated cake ordering and instant payments took a huge operational burden off our shoulders. Clients configure portions and flavors seamlessly, while completed orders arrive directly with payment confirmation. Done fast and built to German standards.",
          author: "Brunchito Team",
          role: "Founder & Master Baker",
          business: "Brunchito Cakes",
          projectUrl: "https://brunchito.de",
          resultMetric: "+45%",
          metricLabel: "More online orders",
        },
        {
          quote:
            "Our workshop presentation is on an entirely new level. Customers find us easily on Google Search, browse our finished kitchen and bespoke furniture galleries on mobile, and request quotes with a single tap on WhatsApp.",
          author: "Hećić Stil Team",
          role: "Managing Owner",
          business: "Carpentry Hećić Stil",
          projectUrl: "https://hecic-stil.vercel.app/",
          resultMetric: "1-Click",
          metricLabel: "Direct quote requests",
        },
        {
          quote:
            "Our home decor showroom looks luxurious and high-end. Photos load instantly without lag, and clients immediately send inquiries for unique pieces. Punctual delivery and outstanding execution throughout.",
          author: "Vintage Charm Team",
          role: "Showroom Management",
          business: "Vintage Charm Decor",
          projectUrl: "https://vintage-charm-dekoracije.vercel.app/",
          resultMetric: "98/100",
          metricLabel: "Google Speed score",
        },
      ],
    },
    estimator: {
      badge: "Cost Estimator",
      title: "Calculate Project Budget & Timeline",
      desc: "Configure your desired technical specifications and get an accurate real-time estimate of the investment and delivery time.",
      typeLabel: "1. Web Architecture Type",
      scopeLabel: "2. Scope & Page Volume",
      featuresLabel: "3. Advanced Features",
      summaryTitle: "Estimated Project Budget",
      estTime: "Estimated delivery timeline:",
      weeksSuffix: "weeks",
      includedNote: "Includes Core Web Vitals optimization, responsive layout, and custom domain configuration.",
      transferBtn: "Apply This Estimate to Contact Form",
      types: [
        { id: "business", title: "Local Business", desc: "Service showcase, portfolio gallery & 1-tap bookings" },
        { id: "ecommerce", title: "E-Commerce Store", desc: "Online checkout, product configurator & Stripe/PayPal" },
        { id: "custom", title: "Custom Web Application", desc: "Custom business logic, user auth & database architecture" },
      ],
      scopes: [
        { id: "small", label: "One-Page / Landing Page", desc: "1-3 high-converting focused sections" },
        { id: "medium", label: "Standard Website (up to 5 pages)", desc: "Home, About, Services, Gallery, Contact" },
        { id: "large", label: "Comprehensive Portal (5-15+ pages)", desc: "Product catalog, multi-language & custom search" },
      ],
      features: [
        { id: "payments", label: "Online Payments (Stripe / PayPal)", priceText: "+350 €" },
        { id: "dsgvo", label: "EU & GDPR Compliance (Impressum, Privacy, Consent)", priceText: "+200 €" },
        { id: "i18n", label: "Multi-language (2-3 languages with geo-detection)", priceText: "+250 €" },
        { id: "seo", label: "Advanced Local SEO & Google Search Console", priceText: "+150 €" },
      ],
    },
    projects: {
      badge: "Interactive Video Previews",
      title: "Featured Projects",
      desc: "See our work in action: rapid load times, fluid user flows, online payments, and tailor-made digital solutions.",
      filterAll: "All",
      filterEcommerce: "E-Commerce",
      filterLocal: "Local Business",
      shownCount: "Showing: {count} projects",
      visitSite: "Visit Website",
      detailsBtn: "Details",
      liveBtn: "Live Demo",
      caseStudyHeader: "Case Study & Solution Overview",
      escClose: "ESC to exit",
      problemTitle: "Problem & Challenge:",
      solutionTitle: "Implemented Solution:",
      highlightsTitle: "Key Highlights:",
      modalClose: "Close",
      modalOpenSite: "Open Website",
      items: [
        {
          id: "brunchito",
          title: "Brunchito Cakes",
          category: "E-Commerce",
          categoryKey: "ecommerce" as const,
          badge: "Online Ordering & Bakery",
          subtitle: "Custom cake ordering system with portion calculator and integrated payments",
          description:
            "Digital platform for a custom cake boutique. Customers choose flavors, sizes, delivery dates, and pay online in just a few steps.",
          solution:
            "Engineered a high-performance web shop with Stripe & PayPal checkout, automated tier calculations, and full EU/German legal compliance.",
          impactMetrics: [
            { label: "Order Process", value: "< 2 min" },
            { label: "Payments", value: "Stripe & PayPal" },
            { label: "Compliance", value: "100% GDPR" },
          ],
          highlights: [
            "Secure checkout flow powered by Stripe & PayPal",
            "Interactive tier and portion sizing calculator",
            "Fully compliant with German eCommerce regulations (Impressum, GDPR, T&C)",
            "Automated order confirmation emails to customer and owner",
          ],
          techStack: ["Next.js", "Tailwind CSS", "Stripe API", "Framer Motion"],
          demoUrl: "https://brunchito.de",
          videoUrl: "/videos/brunchito.mp4",
        },
        {
          id: "hecic-stil",
          title: "Carpentry Hećić Stil",
          category: "Local Business",
          categoryKey: "local" as const,
          badge: "Custom Furniture & Workshop",
          subtitle: "Modern web portfolio crafted to acquire local clients and booking measurements",
          description:
            "Showcase for a custom carpentry workshop highlighting services, kitchen galleries, and one-tap direct contact options.",
          solution:
            "Optimized for Local SEO with sub-second load times, high-contrast aesthetics, and instant WhatsApp/call conversion triggers.",
          impactMetrics: [
            { label: "Local SEO", value: "Google Rank" },
            { label: "Speed", value: "< 0.8s" },
            { label: "Direct Inquiries", value: "WhatsApp / Call" },
          ],
          highlights: [
            "Bespoke furniture and interior living gallery",
            "Optimized for Google Maps and local business listings",
            "Single-click WhatsApp CTA for free measurements and quotes",
            "Seamless responsive experience on all mobile devices",
          ],
          techStack: ["React", "Tailwind CSS", "Local SEO", "Responsive UI"],
          demoUrl: "https://hecic-stil.vercel.app/",
          videoUrl: "/videos/hecic-stil.mp4",
        },
        {
          id: "vintage-charm",
          title: "Vintage Charm Decor",
          category: "E-Commerce",
          categoryKey: "ecommerce" as const,
          badge: "Showroom & Decorations",
          subtitle: "Visually stunning digital showroom with curated retro product galleries",
          description:
            "E-commerce catalog for unique vintage decor, retro furnishings, and collectibles with heavy focus on photography and easy inquiries.",
          solution:
            "Developed an ultra-fast storefront with instant filters, optimized high-res visuals without slowdown, and fluid page transitions.",
          impactMetrics: [
            { label: "Core Web Vitals", value: "98/100" },
            { label: "Catalog", value: "Instant Filter" },
            { label: "Conversion", value: "Direct Quote" },
          ],
          highlights: [
            "Instant search and multi-criteria category filtering",
            "Lossless image optimization for ultra-fast showroom browsing",
            "Clean, sophisticated design with high-converting callouts",
            "Streamlined contact flow for item reservations and orders",
          ],
          techStack: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX Flow"],
          demoUrl: "https://vintage-charm-dekoracije.vercel.app/",
          videoUrl: "/videos/vintage-charm.mp4",
        },
      ],
    },
    contact: {
      badge: "Contact & Free Quote",
      title: "Let's Build Your Project",
      desc: "Need a new website, a redesign, or an online payment system? Send an inquiry or reach out directly via WhatsApp for a response within 24 hours.",
      waTitle: "Direct WhatsApp",
      waSub: "The fastest way to ask questions or share initial project materials.",
      waAction: "Send message now",
      waBadge: "Fast Reply",
      emailTitle: "E-Mail Inquiry",
      emailSub: "For formal proposals, detailed specifications, or inquiries.",
      marketFocus: "Market Focus",
      marketSub: "Germany (EU) & Balkan Region",
      securityTitle: "Compliance & Security",
      securitySub: "GDPR, Legal Security & Contracts",
      formName: "Your Name / Company *",
      formEmail: "Email Address *",
      formService: "Service Type",
      formBudget: "Estimated Budget",
      formDesc: "Brief Project Overview *",
      formDescPlaceholder: "Tell us a few words about your business and goals...",
      submitBtn: "Request Free Quote",
      sending: "Sending inquiry...",
      successTitle: "Message successfully sent!",
      successDesc: "Thank you for reaching out. I will review your details and get back to you within 24 hours with a custom proposal.",
      sendAnother: "Send another inquiry",
      footerRights: "All rights reserved. Built to EU standards.",
    },
  },
};