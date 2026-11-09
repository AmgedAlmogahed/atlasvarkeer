import { COMPANY_CONFIG } from '@/config/company';

export type ServiceGroupKey = 'operationeel' | 'planning-advies' | 'totaaloplossingen';

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  group: ServiceGroupKey;
  featuredOnHome: boolean;
  oneLiner: string;
  heroPromise: string;
  imageUrl: string;
  imageAlt: string;
  whatWeDoParagraphs: string[];
  whatWeDoBullets: string[];
  applications: {
    title: string;
    description: string;
    iconName: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
}

export interface CourseItem {
  id: string;
  title: string;
  duration: string;
  audience: string;
  description: string;
  highlights: string[];
  imageUrl: string;
}

export interface VacancyItem {
  slug: string;
  title: string;
  region: string;
  hours: string;
  startDate: string;
  tags: string[];
  summary: string;
  intro: string;
  whatYouDo: string[];
  whatWeAsk: string[];
  whatWeOffer: string[];
}

export const NL_CONTENT = {
  locale: 'nl-NL',
  utilityBar: {
    urgentLabel: 'Spoed? Bel 24/7:',
    links: [
      { label: 'Over ons', href: '/over-ons' },
      { label: 'Contact', href: '/contact' },
      { label: 'Werken bij', href: '/werken-bij' },
    ],
  },
  navigation: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Diensten', href: '/diensten', hasMegaMenu: true },
      { label: 'Opleidingen', href: '/opleidingen' },
      { label: 'Over ons', href: '/over-ons' },
      { label: 'Werken bij', href: '/werken-bij' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaButton: {
      label: 'Offerte aanvragen',
      href: '/offerte-aanvragen',
    },
    serviceGroups: [
      {
        key: 'operationeel' as ServiceGroupKey,
        title: 'Operationeel',
        description: 'Gecertificeerde vakmensen op straat, op de bouwplaats en langs het spoor.',
      },
      {
        key: 'planning-advies' as ServiceGroupKey,
        title: 'Planning & advies',
        description: 'Doordachte verkeersplannen, vergunningstrajecten en centrale projectregie.',
      },
      {
        key: 'totaaloplossingen' as ServiceGroupKey,
        title: 'Totaaloplossingen',
        description: 'Complete ontzorging bij afzettingen, evenementen en 24/7 calamiteiten.',
      },
    ],
  },
  home: {
    seo: {
      title: 'Atlas Holland B.V. | Verkeersregelaars, Verkeersplannen & Infra Veiligheid',
      description:
        'Gecertificeerde verkeersregelaars en complete verkeersoplossingen voor infra, bouw, evenementen en calamiteiten. Landelijk inzetbaar en 24/7 bereikbaar.',
    },
    hero: {
      eyebrow: 'VEILIG VERKEER. GOED GEREGELD.',
      titleLine1: 'Uw partner in',
      titleLine2: 'verkeer & infra',
      subtitle:
        'Gecertificeerde verkeersregelaars en complete verkeersoplossingen voor infra, bouw, evenementen en calamiteiten. Landelijk inzetbaar, 24/7 bereikbaar.',
      primaryCta: {
        label: 'Verkeersregelaars aanvragen',
        href: '/offerte-aanvragen',
      },
      secondaryCta: {
        label: 'Bekijk onze diensten',
        href: '/diensten',
      },
      trustBadges: [
        'Ervaren verkeersregelaars',
        '24/7 operationeel',
        'Landelijk inzetbaar',
        'Gecertificeerd',
      ],
      // TODO: replace with real Atlas photo
      heroImage:
        '/assets/images/atlas_hero_verkeersregelaars_1794215800416.jpg',
      heroImageAlt:
        'Gecertificeerde verkeersregelaars van Atlas Holland B.V. in hoog-zichtbaarheidskleding bij wegwerkzaamheden',
    },
    keyFigures: [
      {
        value: '[100+]',
        numericTarget: 100,
        prefix: '[',
        suffix: '+]',
        label: 'verkeersregelaars inzetbaar',
        sublabel: 'Door heel Nederland paraat',
      },
      {
        value: '24/7',
        numericTarget: null,
        label: 'bereikbaar',
        sublabel: 'Direct contact met de planning',
      },
      {
        value: 'Binnen 24 uur',
        numericTarget: null,
        label: 'reactie op uw aanvraag',
        sublabel: 'Heldere offerte op maat',
      },
      {
        value: '[X]',
        numericTarget: null,
        label: 'projecten per jaar',
        sublabel: 'Infra, bouw & evenementen',
      },
    ],
    servicesSection: {
      eyebrow: 'ONZE DIENSTEN',
      titleLine1: 'Complete verkeersoplossingen',
      titleLine2: 'voor elke situatie',
      subtitle:
        'Of u nu morgen één verkeersregelaar nodig heeft of een meerjarig infraproject voorbereidt: wij leveren de mensen, het materieel en het plan.',
      allServicesLabel: 'Bekijk alle diensten',
    },
    ctaBand: {
      headline: 'Aannemer of gemeente? Verkeersregelaars nodig voor uw project?',
      buttonLabel: 'Vraag een offerte aan',
      badge: 'Binnen 24 uur reactie ✓',
      urgentPrefix: 'Met spoed iemand nodig? Bel',
    },
    processSection: {
      eyebrow: 'WERKWIJZE',
      titleLine1: 'Van verkeersplan tot uitvoering.',
      titleLine2: 'Volledig ontzorgd.',
      subtitle:
        'Korte lijnen. Duidelijke afspraken. Betrokken op locatie. Zo houden wij elk project veilig en bereikbaar.',
      steps: [
        {
          number: '01',
          title: 'Voorbereiding',
          subtitle: 'Verkeersplan en advies',
          description:
            'Wij brengen de locatie, verkeersstromen en omgeving in kaart. Indien nodig stellen wij het verkeersplan of BLVC-plan op en stemmen we direct af met wegbeheerders.',
        },
        {
          number: '02',
          title: 'Uitvoering',
          subtitle: 'Gecertificeerde verkeersregelaars',
          description:
            'Onze landelijk aangestelde verkeersregelaars en bouwportiers verschijnen op tijd, volledig uitgerust en vooraf gebrieft op uw specifieke werklocatie.',
        },
        {
          number: '03',
          title: 'Coördinatie',
          subtitle: 'Aansturing en communicatie op locatie',
          description:
            'Eén vast aanspreekpunt bewaakt de planning en stuurt bij waar nodig. Verandert het werkschema of ontstaat er een spoedsituatie? Wij schakelen direct.',
        },
      ],
    },
    audiencesSection: {
      eyebrow: 'OPDRACHTGEVERS',
      titleLine1: 'Voor wie',
      titleLine2: 'werken wij?',
      items: [
        {
          title: 'Gemeenten & overheden',
          benefit:
            'Veilige doorstroming en heldere burgercommunicatie bij wegonderhoud, herinrichtingen en stremmingen.',
          iconName: 'Landmark',
        },
        {
          title: 'Aannemers & wegenbouw',
          benefit:
            'Betrouwbare bezetting en BRL-conforme afzettingen zodat uw uitvoerders veilig en zonder vertraging doorwerken.',
          iconName: 'HardHat',
        },
        {
          title: 'Nutsbedrijven & netbeheerders',
          benefit:
            'Flexibele inzet bij geplande kabel- en leidingwerken én 24/7 paraatheid bij spoedstoringen.',
          iconName: 'Zap',
        },
        {
          title: 'Evenementenorganisaties',
          benefit:
            'Gastvrije parkeer- en verkeersbegeleiding die bezoekers vlot naar binnen én veilig naar huis leidt.',
          iconName: 'CalendarCheck',
        },
      ],
    },
    whyAtlasSection: {
      eyebrow: 'WAAROM ATLAS HOLLAND',
      titleLine1: 'Waarom kiezen voor',
      titleLine2: 'Atlas Holland?',
      subtitle:
        'Bij wegwerkzaamheden en bouwprojecten telt elke minuut. U zoekt een partner die afspraken nakomt en meedenkt op de werkvloer.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_verkeersplannen_coordinatie_1794215803555.jpg',
      imageAlt: 'Verkeersregelaar en uitvoerder in overleg op een Nederlandse infralocatie',
      usps: [
        {
          title: 'Snel schakelen',
          description:
            'Direct contact met onze 24/7 planning. Ook bij last-minute wijzigingen of calamiteiten staan wij snel op locatie.',
          iconName: 'Clock',
        },
        {
          title: 'Veiligheid voorop',
          description:
            'Strikte naleving van CROW-richtlijnen, VCA-protocollen en volledige persoonlijke beschermingsmiddelen op elke post.',
          iconName: 'ShieldCheck',
        },
        {
          title: 'Ervaren vakmensen',
          description:
            'Representatieve, gecertificeerde verkeersregelaars die rust bewaren en duidelijk communiceren met elke weggebruiker.',
          iconName: 'UserCheck',
        },
        {
          title: 'Korte lijnen',
          description:
            'Geen keuzemenu’s of trage afdelingen, maar één vast aanspreekpunt dat uw project van begin tot eind kent.',
          iconName: 'PhoneCall',
        },
      ],
    },
    qualitySection: {
      id: 'kwaliteit',
      eyebrow: 'KWALITEIT & CERTIFICERING',
      titleLine1: 'Zorgvuldig werken.',
      titleLine2: 'Verantwoord vooruit.',
      quote: '“Kwaliteit is geen los certificaat, het zit in hoe wij werken.”',
      certificates: [
        {
          code: '[VCA / VCA**]',
          title: 'Veiligheid, Gezondheid en Milieu Checklist Aannemers',
          description:
            'Al onze medewerkers werken volgens gecertificeerde veiligheidsprocedures voor risicovolle werkomgevingen.',
        },
        {
          code: '[BRL 9101 / BRL 9102]',
          title: 'Beoordelingsrichtlijn Tijdelijke Verkeersmaatregelen',
          description:
            'Vakbekwame plaatsing, controle en instandhouding van tijdelijke verkeersmaatregelen en verkeersregeling.',
        },
        {
          code: '[ISO 9001 — alleen indien behaald]',
          title: 'Kwaliteitsmanagementsysteem',
          description:
            'Gestructureerde werkprocessen, continue kwaliteitsbewaking en betrouwbare projectevaluatie.',
        },
        {
          code: '[ISO 14001 — alleen indien behaald]',
          title: 'Milieumanagementsysteem',
          description:
            'Duurzame inzet van materieel en bewuste beperking van milieubelasting op en rond het project.',
        },
      ],
    },
    photoBand: {
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_tijdelijke_verkeersmaatregelen_1794215801255.jpg',
      imageAlt: 'Overzicht van Nederlandse infrastructuur en wegwerkzaamheden bij daglicht',
      overlayQuote: 'Korte lijnen. Duidelijke afspraken. Betrokken op locatie.',
    },
    clientsSection: {
      eyebrow: 'SAMENWERKING',
      title: 'Vertrouwd door onze opdrachtgevers',
      logos: [
        '[CLIENT LOGO — GEMEENTE]',
        '[CLIENT LOGO — INFRA AANNEMER]',
        '[CLIENT LOGO — NUTSBEDRIJF]',
        '[CLIENT LOGO — BOUWGROEP]',
        '[CLIENT LOGO — EVENEMENTENPARTNER]',
        '[CLIENT LOGO — WEGENBOUW]',
        '[CLIENT LOGO — PROVINCIE]',
        '[CLIENT LOGO — SPOOR & TRAM]',
      ],
    },
    testimonialsSection: {
      eyebrow: 'ERVARINGEN UIT DE PRAKTIJK',
      titleLine1: 'Wat opdrachtgevers',
      titleLine2: 'over ons zeggen',
      items: [
        {
          quote:
            '[“Tijdens onze meerweekse kruispuntreconstructie zorgde Atlas Holland niet alleen voor het verkeersplan, maar ook voor een vast team verkeersregelaars dat de buurt kende. Nul incidenten en volop complimenten van omwonenden.”]',
          name: '[NAAM OPDRACHTGEVER 1]',
          role: '[Projectleider Infra]',
          organisation: '[ORGANISATIE / AANNEMER 1]',
        },
        {
          quote:
            '[“Bij een acute leidingbreuk op vrijdagavond stonden er binnen anderhalf uur twee gecertificeerde verkeersregelaars en een afzetting op locatie. Die 24/7 bereikbaarheid maakt in ons werk het verschil.”]',
          name: '[NAAM OPDRACHTGEVER 2]',
          role: '[Coördinator Netbeheer]',
          organisation: '[ORGANISATIE / NUTSBEDRIJF 2]',
        },
        {
          quote:
            '[“Voor ons stadsfestival met 25.000 bezoekers heeft Atlas Holland de volledige parkeer- en pendelbusstroom begeleid. Gastvrije mensen die ook op piekmomenten overzicht houden.”]',
          name: '[NAAM OPDRACHTGEVER 3]',
          role: '[Operationeel Producent]',
          organisation: '[EVENEMENTENORGANISATIE 3]',
        },
      ],
    },
    recruitmentTeaser: {
      eyebrow: 'WERKEN BIJ ATLAS HOLLAND',
      titleLine1: 'Word onderdeel van',
      titleLine2: 'het Atlas team',
      description:
        'Zoek je afwisselend werk in de buitenlucht met veel vrijheid en verantwoordelijkheid? Ook zonder ervaring kun je bij ons starten: wij verzorgen je opleiding tot gecertificeerd verkeersregelaar, bieden een goed salaris en zorgen dat je in een hecht team terechtkomt.',
      highlights: [
        'Gratis erkende opleiding (o.a. Beroepsverkeersregelaar & VCA)',
        'Goed salaris, reiskostenvergoeding en vakantiegeld',
        'Complete uitrusting en hoogwaardige werkkleding',
      ],
      buttonLabel: 'Bekijk vacatures',
      buttonHref: '/werken-bij',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_team_werken_bij_1794215805378.jpg',
      imageAlt: 'Team van verkeersregelaars en collega’s van Atlas Holland B.V.',
    },
    closingContact: {
      eyebrow: 'DIRECT SCHAKELEN',
      title: 'Op zoek naar een betrouwbare partner in verkeer en infra?',
      subtitle:
        'Neem direct contact op met onze planning of vraag vrijblijvend een offerte aan. U ontvangt binnen 24 uur een helder voorstel.',
      buttonLabel: 'Inzet aanvragen',
      buttonHref: '/offerte-aanvragen',
    },
  },
  services: [
    {
      slug: 'verkeersregelaars',
      title: 'Verkeersregelaars',
      shortTitle: 'Verkeersregelaars',
      group: 'operationeel',
      featuredOnHome: true,
      oneLiner:
        'Landelijk gecertificeerde verkeersregelaars voor wegwerkzaamheden, bouwprojecten, omleidingen en evenementen.',
      heroPromise:
        'Gecertificeerde verkeersregelaars die zorgen voor veilige doorstroming en duidelijke aanwijzingen voor automobilisten, fietsers en voetgangers — van enkele uren tot langlopende projecten.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_hero_verkeersregelaars_1794215800416.jpg',
      imageAlt: 'Gecertificeerde verkeersregelaar geeft aanwijzingen bij wegwerkzaamheden',
      whatWeDoParagraphs: [
        'Wanneer de reguliere verkeerssituatie verandert door wegwerkzaamheden, bouwtransport of een tijdelijke afsluiting, vormen onze verkeersregelaars het gezicht én het veiligheidsschild van uw project. Zij begeleiden gemotoriseerd verkeer, fietsers en voetgangers rustig en beslist langs de werklocatie.',
        'Al onze verkeersregelaars beschikken over een geldige landelijke aanstellingspas, VCA-certificering en professionele RWS-signaalkleding. Of het nu gaat om een kortdurende spoedklus van enkele uren of een vast team voor een meerjarig infraproject: wij plannen de juiste mensen op de juiste plek.',
      ],
      whatWeDoBullets: [
        'Landelijk aangestelde beroepsverkeersregelaars met geldige aanstellingspas',
        'Inzetbaar vanaf enkele uren tot meermaandelijkse infrastructuurprojecten',
        'Heldhaftig rustig en gastvrij in communicatie met bewoners en weggebruikers',
        'Volledig uitgerust met gekeurde PBM’s, portofoons en RWS-verkeerskleding',
        '24/7 bereikbare achterwacht en directe vervanging bij onvoorziene omstandigheden',
      ],
      applications: [
        {
          title: 'Wegwerkzaamheden & asfaltering',
          description:
            'Veilige begeleiding van verkeer langs rijdende afzettingen, freeswerkzaamheden en kruispuntreconstructies.',
          iconName: 'Route',
        },
        {
          title: 'Stedelijke bouwprojecten',
          description:
            'Begeleiden van zwaar bouwverkeer, hijswerkzaamheden en achteruitrijdende vrachtwagens in drukke winkel- of woonstraten.',
          iconName: 'Building2',
        },
        {
          title: 'Omleidingen & stremmingen',
          description:
            'Heldere doorverwijzing van bestemmingsverkeer, hulpdiensten en openbaar vervoer bij tijdelijke afsluitingen.',
          iconName: 'Signpost',
        },
        {
          title: 'Kabel- en leidingwerk',
          description:
            'Flexibele ondersteuning bij sleufwerkzaamheden langs rijbanen, fietspaden en trottoirs.',
          iconName: 'Wrench',
        },
      ],
      faqs: [
        {
          question: 'Welke informatie heeft u nodig voor een aanvraag?',
          answer:
            'Voor een gerichte offerte of directe inzet ontvangen wij graag: de exacte werklocatie (adres of kruispunt), de gewenste datum, begin- en eindtijd, het soort werkzaamheden en het gewenste aantal verkeersregelaars. Twijfelt u over het benodigde aantal? Onze planners adviseren u direct.',
        },
        {
          question: 'Is meerdaagse of langdurige inzet mogelijk?',
          answer:
            'Ja. Voor meerdaagse of langlopende projecten werken wij met een vaste poule van verkeersregelaars. Zo kennen onze mensen uw uitvoerder, de lokale situatie en de afspraken op de werklocatie.',
        },
        {
          question: 'Hoe snel kunt u verkeersregelaars leveren?',
          answer:
            'Reguliere aanvragen bevestigen wij binnen 24 uur. Heeft u te maken met een spoedsituatie of onverwachte uitval? Via ons 24/7 spoednummer schakelen wij direct en zijn wij doorgaans binnen enkele uren op locatie.',
        },
        {
          question: 'Zijn uw verkeersregelaars landelijk bevoegd?',
          answer:
            'Ja, onze beroepsverkeersregelaars zijn opgeleid conform de landelijke eisen van SVNL en beschikken over een geldige landelijke aanstellingspas en VCA-certificaat.',
        },
      ],
      relatedSlugs: ['tijdelijke-verkeersmaatregelen', 'bouwportier', 'verkeersplannen'],
    },
    {
      slug: 'tijdelijke-verkeersmaatregelen',
      title: 'Tijdelijke verkeersmaatregelen',
      shortTitle: 'Tijdelijke verkeersmaatregelen',
      group: 'totaaloplossingen',
      featuredOnHome: true,
      oneLiner:
        'Veilige afzettingen, bebording, barriers en omleidingsroutes op maat geplaatst en onderhouden.',
      heroPromise:
        'Veilige afzettingen, bebording, barriers en tijdelijke verkeersvoorzieningen — vakkundig ontworpen, geplaatst en gecontroleerd per project.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_tijdelijke_verkeersmaatregelen_1794215801255.jpg',
      imageAlt: 'Tijdelijke verkeersmaatregelen, afzetbakens en bebording langs de weg',
      whatWeDoParagraphs: [
        'Goede tijdelijke verkeersmaatregelen (TVM) beschermen zowel uw medewerkers in het werkvak als de weggebruikers daaromheen. Atlas Holland verzorgt het gehele traject: van het bepalen van de juiste CROW-conforme maatregelen tot het plaatsen, controleren en weer verwijderen van alle materialen.',
        'Wij leveren en plaatsen onder meer RVV-bebording, tekstkarren, geleidebakens, bouwhekken, barriers en tijdelijke verkeerslichten (VRI). Alles wordt geplaatst door BRL 9101-gekwalificeerde medewerkers.',
      ],
      whatWeDoBullets: [
        'Uitvoering volledig conform CROW 96a / 96b en BRL 9101 richtlijnen',
        'Plaatsing, periodieke instandhouding en tijdige verwijdering van bebording en afzettingen',
        'Geleidebakens, schrikhekken, barriers, tekstwagens en tijdelijke verkeerslichten',
        'Naadloze combinatie van fysieke maatregelen en gecertificeerde verkeersregelaars',
      ],
      applications: [
        {
          title: 'Rijbaan- en kruispuntafsluitingen',
          description: 'Complete afzettingen inclusief vooraankondigingen en omleidingsroutes.',
          iconName: 'ShieldAlert',
        },
        {
          title: 'Werkvakbeveiliging 30/50/80 km-wegen',
          description: 'CROW-conforme inrichting voor gemeentelijke en provinciale wegen.',
          iconName: 'Cone',
        },
        {
          title: 'Fiets- en voetgangersvoorzieningen',
          description: 'Veilige tijdelijke corridors en oversteekplaatsen langs bouwlocaties.',
          iconName: 'Footprints',
        },
      ],
      faqs: [
        {
          question: 'Verzorgen jullie zowel het verkeersplan als de plaatsing van de borden?',
          answer:
            'Ja. Wij kunnen het verkeersplan uittekenen, de vergunningsaanvraag ondersteunen én vervolgens alle bebording en afzettingen op locatie plaatsen en beheren.',
        },
        {
          question: 'Controleren jullie de geplaatste afzettingen tussentijds?',
          answer:
            'Zeker. Bij meerdaagse of meerweekse projecten voeren wij periodieke schouwrondes uit om te controleren of alle borden en bakens nog zichtbaar en op de juiste positie staan.',
        },
        {
          question: 'Hoe snel kunnen tijdelijke verkeersmaatregelen worden geplaatst?',
          answer:
            'Voor geplande werken stemmen wij het plaatsingsmoment vooraf met uw uitvoerder af. Voor spoedafzettingen bij calamiteiten zijn wij 24/7 direct inzetbaar.',
        },
      ],
      relatedSlugs: ['verkeersplannen', 'verkeersregelaars', 'calamiteiten'],
    },
    {
      slug: 'verkeersplannen',
      title: 'Verkeersplannen',
      shortTitle: 'Verkeersplannen & BLVC',
      group: 'planning-advies',
      featuredOnHome: true,
      oneLiner:
        'Praktische, CROW-conforme verkeersplannen en faseringstekeningen voor vergunning en uitvoering.',
      heroPromise:
        'Professionele verkeersplannen die verkeersstromen, tijdelijke maatregelen en inzet van personeel samenbrengen in één helder en vergunningsgereed ontwerp.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_verkeersplannen_coordinatie_1794215803555.jpg',
      imageAlt: 'Verkeerskundig ontwerper werkt aan een gedetailleerd verkeersplan en kaart',
      whatWeDoParagraphs: [
        'Een veilige uitvoering begint op de tekentafel. Onze verkeerskundig specialisten ontwerpen overzichtelijke verkeersplannen (VKP) en bebordingstekeningen die exact aansluiten op de eisen van wegbeheerders, gemeenten en provincies.',
        'Wij kijken verder dan alleen de richtlijn op papier: omdat wij zelf dagelijks buiten staan met verkeersregelaars en afzettingen, zijn onze plannen praktisch uitvoerbaar en houden ze rekening met bouwlogistiek, hulpdiensten en buurtbewoners.',
      ],
      whatWeDoBullets: [
        'Gedetailleerde bebordings- en faseringstekeningen volgens CROW 96a/96b',
        'Onderbouwing voor tijdelijke verkeersbesluiten en wegbeheerdersvergunningen',
        'Integrale afweging tussen fysieke bebording en inzet van verkeersregelaars',
        'Snelle oplevering en korte revisierondes bij gewijzigde bouwfaseringen',
      ],
      applications: [
        {
          title: 'Vergunningsaanvragen bij gemeenten',
          description: 'Direct bruikbare tekeningen voor goedkeuring door de wegbeheerder.',
          iconName: 'FileCheck2',
        },
        {
          title: 'Gefaseerde infraprojecten',
          description: 'Stapsgewijze verkeersplannen per bouwfase zodat de omgeving bereikbaar blijft.',
          iconName: 'Layers',
        },
        {
          title: 'Omleidings- en calamiteitenroutes',
          description: 'Heldere routekaarten voor doorgaand verkeer, OV en nood- en hulpdiensten.',
          iconName: 'MapPinned',
        },
      ],
      faqs: [
        {
          question: 'Welke gegevens hebben jullie nodig om een verkeersplan op te stellen?',
          answer:
            'Wij ontvangen graag de projectlocatie (of werktekening), de beoogde werkzaamheden, de fasering/tijdsduur en eventuele randvoorwaarden van de gemeente of opdrachtgever.',
        },
        {
          question: 'Vragen jullie ook de vergunning aan bij de gemeente of wegbeheerder?',
          answer:
            'Indien gewenst verzorgen wij de volledige afstemming met de wegbeheerder, verkeerscommissie en hulpdiensten.',
        },
        {
          question: 'Hoe snel kan een verkeersplan gereed zijn?',
          answer:
            'Standaard verkeersplannen leveren wij doorgaans binnen enkele werkdagen op. Voor spoedaanvragen kunnen wij in overleg nog sneller schakelen.',
        },
      ],
      relatedSlugs: ['blvc-plannen', 'tijdelijke-verkeersmaatregelen', 'projectcoordinatie'],
    },
    {
      slug: 'blvc-plannen',
      title: 'BLVC-plannen',
      shortTitle: 'BLVC-plannen',
      group: 'planning-advies',
      featuredOnHome: false,
      oneLiner:
        'Bereikbaarheid, Leefbaarheid, Veiligheid en Communicatie integraal geborgd in uw projectvoorbereiding.',
      heroPromise:
        'Bereikbaarheid, Leefbaarheid, Veiligheid en Communicatie doordacht vastgelegd voor draagvlak bij gemeente, omgeving en bouwteam.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_bouwportier_evenementen_1794215805236.jpg',
      imageAlt: 'Binnenstedelijk bouwproject met aandacht voor bereikbaarheid en leefbaarheid',
      whatWeDoParagraphs: [
        'Bij binnenstedelijke bouw- en infraprojecten vragen gemeenten steeds vaker om een sluitend BLVC-plan. Daarin laat u zien hoe de omgeving tijdens de werkzaamheden bereikbaar, leefbaar en veilig blijft, en hoe omwonenden en ondernemers tijdig worden geïnformeerd.',
        'Atlas Holland schrijft concrete, haalbare BLVC-plannen voor zowel EMVI/BVP-aanbestedingen als de uitvoeringsfase. Wij vertalen beleidseisen naar praktische maatregelen op straatniveau.',
      ],
      whatWeDoBullets: [
        'Volledige uitwerking van Bereikbaarheid, Leefbaarheid, Veiligheid en Communicatie',
        'Afgestemd op gemeentelijke BLVC-kaders en aanbestedingseisen (EMVI)',
        'Concrete bouwlogistieke routes, venstertijden en laad-/loszones',
        'Directe koppeling met bijbehorende verkeersplannen en inzet van bouwportiers',
      ],
      applications: [
        {
          title: 'Binnenstedelijke woning- en utiliteitsbouw',
          description: 'Beperken van hinder voor omwonenden, winkeliers en scholen rond de bouwplaats.',
          iconName: 'Building',
        },
        {
          title: 'EMVI & aanbestedingen',
          description: 'Overtuigende kwaliteitsplannen waarmee u scoort op omgevingsmanagement.',
          iconName: 'Award',
        },
        {
          title: 'Grootstedelijke herinrichting',
          description: 'Borging van doorgang voor hulpdiensten, afvalinzameling en bevoorrading.',
          iconName: 'Compass',
        },
      ],
      faqs: [
        {
          question: 'In welke fase van het project schakelen wij jullie in voor een BLVC-plan?',
          answer:
            'U kunt ons al in de tender- of aanbestedingsfase inschakelen voor een sterk plan van aanpak, of na gunning voor het uitvoeringsgerichte BLVC-plan richting de gemeente.',
        },
        {
          question: 'Combineren jullie het BLVC-plan met verkeersplannen?',
          answer:
            'Ja, juist die combinatie zorgt dat de beloftes in het BLVC-plan één-op-één kloppen met de faseringstekeningen en de inzet van verkeersregelaars of bouwportiers buiten.',
        },
        {
          question: 'Nemen jullie ook deel aan vooroverleggen met de gemeente?',
          answer:
            'Zeker. Onze adviseurs sluiten graag aan bij BLVC- en verkeersoverleggen met de wegbeheerder en omgevingsmanager.',
        },
      ],
      relatedSlugs: ['verkeersplannen', 'projectcoordinatie', 'bouwportier'],
    },
    {
      slug: 'projectcoordinatie',
      title: 'Projectcoördinatie',
      shortTitle: 'Projectcoördinatie',
      group: 'planning-advies',
      featuredOnHome: false,
      oneLiner:
        'Eén aanspreekpunt dat voorbereiding, planning en dagelijkse aansturing op locatie verbindt.',
      heroPromise:
        'Eén centraal aanspreekpunt dat verkeersvoorbereiding, personeelsplanning en dagelijkse aansturing op locatie naadloos samenbrengt.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_verkeersplannen_coordinatie_1794215803555.jpg',
      imageAlt: 'Projectcoördinator bespreekt planning op locatie met uitvoeringsteam',
      whatWeDoParagraphs: [
        'Bij complexe of langdurige projecten wilt u als hoofdaannemer of projectleider niet dagelijks meerdere partijen hoeven aansturen voor borden, hekken, vergunningen en verkeersregelaars. Met projectcoördinatie van Atlas Holland legt u de volledige verkeersregie in één hand.',
        'Onze projectcoördinator schakelt rechtstreeks met uw uitvoerders, bewaakt de fasering, stuurt de verkeersregelaars op locatie aan en houdt toezicht op de naleving van het verkeersplan.',
      ],
      whatWeDoBullets: [
        'Eén vaste projectcoördinator voor voorbereiding, uitvoering en evaluatie',
        'Dagelijkse afstemming met uw uitvoerders en omgevingsmanager op de bouwplaats',
        'Kwaliteitscontrole op geplaatste afzettingen en ingezette verkeersregelaars',
        'Proactief bijsturen bij gewijzigde werkplanningen of weersomstandigheden',
      ],
      applications: [
        {
          title: 'Meerfasige wegenbouwprojecten',
          description: 'Continue regie over wisselende omleidingen en dag- of nachtafsluitingen.',
          iconName: 'GitBranch',
        },
        {
          title: 'Grootschalige gebiedsontwikkeling',
          description: 'Coördinatie van meerdere nevenaannemers en gedeelde bouwroutes.',
          iconName: 'Network',
        },
        {
          title: 'Buitendienststellingen & weekendstremmingen',
          description: 'Strakke 24-uurs coördinatie tijdens tijdskritische weekendwerken.',
          iconName: 'Timer',
        },
      ],
      faqs: [
        {
          question: 'Is de projectcoördinator ook fysiek op onze projectlocatie aanwezig?',
          answer:
            'Ja. Afhankelijk van de projectomvang is onze coördinator op vaste momenten of fulltime op locatie aanwezig voor toolboxmeetings, schouwrondes en directe aansturing.',
        },
        {
          question: 'Voor welke projectomvang is projectcoördinatie geschikt?',
          answer:
            'Vooral bij projecten waar meerdere verkeersregelaars gelijktijdig staan, waar faseringen elkaar snel opvolgen of waar veel omgevingsdruk is, levert centrale coördinatie direct tijdwinst en rust op.',
        },
        {
          question: 'Hoe verloopt de rapportage richting ons projectteam?',
          answer:
            'U ontvangt heldere weekoverzichten van de inzet, uitgevoerde controles en eventuele bijzonderheden op locatie.',
        },
      ],
      relatedSlugs: ['verkeersplannen', 'verkeersregelaars', 'tijdelijke-verkeersmaatregelen'],
    },
    {
      slug: 'bouwportier',
      title: 'Bouwportier',
      shortTitle: 'Bouwportier',
      group: 'operationeel',
      featuredOnHome: true,
      oneLiner:
        'Gecontroleerde bouwplaatstoegang, bezoekersregistratie en veilige begeleiding van bouwtransport.',
      heroPromise:
        'Gecontroleerde toegang tot uw bouwplaats, sluitende bezoekersregistratie en veilige begeleiding van in- en uitrijdend bouwverkeer.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_bouwportier_evenementen_1794215805236.jpg',
      imageAlt: 'Bouwportier controleert toegang en begeleidt vrachtverkeer bij de bouwpoort',
      whatWeDoParagraphs: [
        'De toegangspoort van een bouwplaats is een kritiek knooppunt. Hier kruisen zware vrachtwagens, leveranciers en bouwpersoneel elkaar — vaak direct grenzend aan een openbare weg of fietspad. Onze bouwportiers combineren toegangscontrole met gecertificeerde verkeersbegeleiding.',
        'Zij controleren bouwplaatskaarten en PBM-gebruik bij de poort, ontvangen bezoekers gastvrij, houden het logboek bij en begeleiden vrachtauto’s veilig bij het in- en uitrijden van de bouwplaats.',
      ],
      whatWeDoBullets: [
        'Dubbelfunctie: ervaren portier én landelijk gecertificeerd verkeersregelaar',
        'Strikte controle op toegangspassen, ID-plicht en verplichte PBM’s',
        'Coördinatie van laad- enrostijden en just-in-time bouwleveringen',
        'Veilige kruising met fietsers en voetgangers rond de inrit van de bouwplaats',
      ],
      applications: [
        {
          title: 'Binnenstedelijke bouwplaatsen',
          description: 'Veilige afwikkeling van vrachtverkeer bij krappe in- en uitritten.',
          iconName: 'Truck',
        },
        {
          title: 'Grote utiliteits- en hoogbouwprojecten',
          description: 'Overzichtelijke registratie van onderaannemers, keurmeesters en bezoekers.',
          iconName: 'ClipboardCheck',
        },
        {
          title: 'Industrie- en energieprojecten',
          description: 'Controle op veiligheidsinstructies en vergunningen aan de toegangspoort.',
          iconName: 'Lock',
        },
      ],
      faqs: [
        {
          question: 'Mag een bouwportier van Atlas Holland ook het verkeer op de openbare weg stilzetten?',
          answer:
            'Ja. Onze bouwportiers beschikken over een landelijke aanstellingspas als beroepsverkeersregelaar en mogen daardoor bevoegd het verkeer op de aangrenzende rijbaan of het fietspad regelen wanneer een vrachtwagen in- of uitrijdt.',
        },
        {
          question: 'Kunnen wij een vast gezicht krijgen bij de bouwpoort?',
          answer:
            'Uiteraard. Juist bij een bouwportier is het belangrijk dat hij of zij de uitvoerders, vaste leveranciers en huisregels van uw bouwplaats kent.',
        },
        {
          question: 'Werken jullie ook met digitale aanmeld- en pasjessystemen?',
          answer:
            'Ja, onze bouwportiers kunnen moeiteloos overweg met gangbare digitale poortregistratie-, slagboom- en toegangssystemen.',
        },
      ],
      relatedSlugs: ['verkeersregelaars', 'blvc-plannen', 'projectcoordinatie'],
    },
    {
      slug: 'veiligheidspersoon-tram',
      title: 'Veiligheidspersoon tram',
      shortTitle: 'Veiligheidspersoon tram',
      group: 'operationeel',
      featuredOnHome: false,
      oneLiner:
        'Gekwalificeerd veiligheidspersoneel bij werkzaamheden op of nabij de trambaan.',
      heroPromise:
        'Specifiek opgeleide veiligheidspersonen voor werkzaamheden op of langs de trambaan — maximale bescherming voor uw werkploeg en een veilige tramdienst.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_hero_verkeersregelaars_1794215800416.jpg',
      imageAlt: 'Werkzaamheden nabij stedelijke trambaan onder toezicht van veiligheidspersoon',
      whatWeDoParagraphs: [
        'Werken in het profiel van vrije ruimte van een trambaan brengt specifieke veiligheidsrisico’s met zich mee. Trams naderen snel, zijn stil en hebben een lange remweg. Onze veiligheidspersonen tram waken onafgebroken over de veiligheid van de werkploeg.',
        'Zij waarschuwen medewerkers tijdig bij naderend tramverkeer, zorgen dat het spoor vrij en schadevrij is en onderhouden waar nodig contact met de verkeersleiding van het vervoersbedrijf.',
      ],
      whatWeDoBullets: [
        'Gecertificeerd en geïnstrueerd conform de lokale eisen van stedelijke vervoersbedrijven',
        '100% focus op waarschuwing en vrijmaking van het spoor bij naderende trams',
        'Heldere veiligheidsbriefing voorafgaand aan de dienst met de gehele werkploeg',
        'Te combineren met verkeersregelaars voor het kruisende wegverkeer',
      ],
      applications: [
        {
          title: 'Spoor- en wisselonderhoud',
          description: 'Beveiliging van las-, slijp- en inspectiewerkzaamheden tijdens of na dienstregeling.',
          iconName: 'TrainTrack',
        },
        {
          title: 'Groen- en gevelonderhoud langs de trambaan',
          description: 'Veilig werken met hoogwerkers of snoeiploegen binnen de gevarenzone.',
          iconName: 'TreePine',
        },
        {
          title: 'Asfaltering & kruispuntwerkzaamheden',
          description: 'Veilige begeleiding op plekken waar wegwerkzaamheden de trambaan kruisen.',
          iconName: 'AlertTriangle',
        },
      ],
      faqs: [
        {
          question: 'In welke steden en regio’s zetten jullie veiligheidspersonen tram in?',
          answer:
            'Wij leveren gekwalificeerde veiligheidspersonen tram in onder meer de grote steden in de Randstad (zoals regio Amsterdam, Rotterdam, Den Haag en Utrecht). Neem contact op voor de specifieke bevoegdheidseisen van uw vervoerder.',
        },
        {
          question: 'Kan een veiligheidspersoon tram tegelijkertijd het gewone autoverkeer regelen?',
          answer:
            'Nee, vanuit veiligheidsvoorschriften mag een veiligheidspersoon tram tijdens zijn waarschuwende taak niet worden afgeleid door andere werkzaamheden. Wel leveren wij graag een gecombineerd team met verkeersregelaars.',
        },
        {
          question: 'Zijn nacht- en weekenddiensten mogelijk?',
          answer:
            'Ja, veel werkzaamheden aan en rond de trambaan vinden plaats tijdens nachtelijke buitendienststellingen of weekenden. Onze planning is daar volledig op ingericht.',
        },
      ],
      relatedSlugs: ['verkeersregelaars', 'projectcoordinatie', 'calamiteiten'],
    },
    {
      slug: 'evenementen',
      title: 'Evenementen verkeersmanagement',
      shortTitle: 'Evenementen',
      group: 'totaaloplossingen',
      featuredOnHome: true,
      oneLiner:
        'Gastvrije beheersing van bezoekers- en verkeersstromen bij festivals, congressen en sportevenementen.',
      heroPromise:
        'Soepele en gastvrije bezoekers- en verkeersstromen voor uw evenement — van de eerste aankomst en parkeerroute tot een veilige uitstroom.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_team_werken_bij_1794215805378.jpg',
      imageAlt: 'Verkeersmanagement en bezoekersbegeleiding bij een groot Nederlands evenement',
      whatWeDoParagraphs: [
        'De beleving van uw evenement begint op de aanrijroute en eindigt pas wanneer de laatste bezoeker veilig onderweg naar huis is. Atlas Holland ondersteunt organisatoren, gemeenten en locaties met compleet evenementenverkeersmanagement.',
        'Wij stellen het mobiliteits- en verkeersplan op voor de evenementenvergunning, plaatsen de tijdelijke bewegwijzering en zetten gastvrije verkeersregelaars en parkeerbegeleiders in die piekstromen in goede banen leiden.',
      ],
      whatWeDoBullets: [
        'Totaaloplossing: mobiliteitsplan, bebording, parkeerregie en verkeersregelaars',
        'Gastvrije, representatieve medewerkers die passen bij de uitstraling van uw publieksevenement',
        'Vrije doorgang voor artiesten, leveranciers, pendelbussen en hulpdiensten (calamiteitenroute)',
        'Ruime ervaring met zowel eendaagse stadsfestivals als meerdaagse publieksevenementen',
      ],
      applications: [
        {
          title: 'Festivals & concerten',
          description: 'Scheiding van voetgangersstromen, Kiss & Ride-zones, pendelbussen en autoverkeer.',
          iconName: 'Music',
        },
        {
          title: 'Beurzen & zakelijke congressen',
          description: 'Representatieve ontvangst en vlotte doorstroming op drukke in- en uitrijmomenten.',
          iconName: 'Users',
        },
        {
          title: 'Sportevenementen & parcoursen',
          description: 'Tijdelijke parcoursafsluitingen en veilige oversteekposten voor publiek en bewoners.',
          iconName: 'Flag',
        },
      ],
      faqs: [
        {
          question: 'Helpen jullie ook bij het verkeersplan voor de gemeentelijke evenementenvergunning?',
          answer:
            'Ja. Wij stellen het verkeers- en mobiliteitsplan op volgens de richtlijnen van de betreffende gemeente en veiligheidsregio.',
        },
        {
          question: 'Kunnen jullie grote aantallen verkeersregelaars tegelijk leveren tijdens piekuren?',
          answer:
            'Zeker. Wij plannen onze teams slim rond uw inloop- en uitlooppieken en werken met een eigen coördinator op het evenemententerrein.',
        },
        {
          question: 'Leveren jullie ook tekstkarren en parkeerverwijzingsborden?',
          answer:
            'Ja, wij verzorgen alle tijdelijke bewegwijzering, dranghekken, afzettingen en LED-informatieborden.',
        },
      ],
      relatedSlugs: ['parkeerbegeleiding', 'motorbegeleiding', 'verkeersregelaars'],
    },
    {
      slug: 'parkeerbegeleiding',
      title: 'Parkeerbegeleiding',
      shortTitle: 'Parkeerbegeleiding',
      group: 'operationeel',
      featuredOnHome: false,
      oneLiner:
        'Vlotte en gastvrije begeleiding van bezoekers naar parkeervakken en vrije in- en uitritten.',
      heroPromise:
        'Gastvrije parkeerbegeleiders die bezoekers snel naar een vrije plek wijzen en in- en uitgangen ook op piekmomenten vrijhouden.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_bouwportier_evenementen_1794215805236.jpg',
      imageAlt: 'Gestructureerde parkeerbegeleiding op een druk parkeerterrein',
      whatWeDoParagraphs: [
        'Niets is zo vervelend voor bezoekers als zoekend rondrijden op een vol parkeerterrein of vaststaan bij de uitgang. Onze parkeerbegeleiders zorgen voor een warm welkom, benutten uw parkeercapaciteit optimaal en voorkomen opstoppingen op de aansluitende openbare weg.',
        'Waar de parkeerroute overgaat in de openbare weg, werken onze parkeerbegeleiders nauw samen met onze bevoegde verkeersregelaars.',
      ],
      whatWeDoBullets: [
        'Maximale benutting van bestaande parkeerterreinen, parkeergarages en tijdelijke weilandparkings',
        'Vriendelijke, behulpzame ontvangst als eerste visitekaartje van uw locatie of evenement',
        'Toezicht op gereserveerde zones voor VIP, mindervaliden, laadinfrastructuur en crew',
        'Vlotte afwikkeling bij gelijktijdige uitstroom na afloop',
      ],
      applications: [
        {
          title: 'Evenemententerreinen & tijdelijke parkings',
          description: 'Strakke rij-indeling op grote parkeervelden zodat elke auto veilig in- en uitparkeert.',
          iconName: 'ParkingCircle',
        },
        {
          title: 'Winkelcentra & koopzondagen',
          description: 'Doorstroming rond parkeergarages tijdens drukke winkelweekenden en feestdagen.',
          iconName: 'ShoppingBag',
        },
        {
          title: 'Bedrijfsopeningen & congressen',
          description: 'Gastvrije ontvangst en directe verwijzing voor uw zakelijke gasten.',
          iconName: 'Briefcase',
        },
      ],
      faqs: [
        {
          question: 'Waarin verschilt een parkeerbegeleider van een verkeersregelaar?',
          answer:
            'Een parkeerbegeleider richt zich op de gastvrije indeling en doorstroming op het parkeerterrein zelf. Zodra er op de openbare weg tekens moeten worden gegeven aan het verkeer, zetten wij landelijk bevoegde verkeersregelaars in.',
        },
        {
          question: 'Kunnen jullie ook de inrichting van een tijdelijk parkeerterrein verzorgen?',
          answer:
            'Ja, inclusief rijplaten, afzetlinten, verlichting en duidelijke sectiebebording.',
        },
        {
          question: 'Is inzet in de avonduren en weekenden mogelijk?',
          answer:
            'Uiteraard, onze parkeerbegeleiders zijn 7 dagen per week flexibel inzetbaar.',
        },
      ],
      relatedSlugs: ['evenementen', 'verkeersregelaars', 'tijdelijke-verkeersmaatregelen'],
    },
    {
      slug: 'motorbegeleiding',
      title: 'Motorbegeleiding',
      shortTitle: 'Motorbegeleiding',
      group: 'operationeel',
      featuredOnHome: false,
      oneLiner:
        'Mobiele verkeersbegeleiding voor wielerkoersen, marathons, colonnes en bewegende routes.',
      heroPromise:
        'Dynamische motorbegeleiding voor sportwedstrijden, toertochten en bewegende colonnes — maximale veiligheid op elk kruispunt langs de route.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_tijdelijke_verkeersmaatregelen_1794215801255.jpg',
      imageAlt: 'Motorbegeleider tijdens een wegwedstrijd en mobiel evenement',
      whatWeDoParagraphs: [
        'Bij wielerwedstrijden, hardloopevenementen, toertochten en bijzondere optochten verplaatst het evenement zich continu. Vaste posten op elk kruispunt zijn dan vaak niet haalbaar. Onze mobiele motorverkeersregelaars rijden voor de stoet uit om kruispunten tijdig en veilig vrij te maken.',
        'Dankzij het haasje-over-systeem en onderlinge portofooncommunicatie ondervindt het overige wegverkeer slechts enkele minuten hinder, terwijl het peloton of de stoet veilig kan passeren.',
      ],
      whatWeDoBullets: [
        'Ervaren motorrijders met landelijke aanstelling als verkeersregelaar',
        'Opvallende verkeersmotoren voorzien van professionele signalering en communicatie',
        'Voorafgaande routeschouw op gevaarlijke kruispunten, wegversmallingen en obstakels',
        'Minimale stremmingsduur voor overig verkeer dankzij rollende afzetting',
      ],
      applications: [
        {
          title: 'Wielerkoersen & toertochten',
          description: 'Rollende beveiliging van pelotons en kruispunten op gemeentelijke en provinciale wegen.',
          iconName: 'Bike',
        },
        {
          title: 'Marathons & hardloopwedstrijden',
          description: 'Voorrijders en kruispuntbeveiliging langs het gehele loopparcours.',
          iconName: 'Trophy',
        },
        {
          title: 'Konvooien & optochten',
          description: 'Vlotte en veilige doorgang voor bijzondere colonnes en regionale evenementen.',
          iconName: 'Navigation',
        },
      ],
      faqs: [
        {
          question: 'Zijn jullie motorbegeleiders bevoegd om kruispunten stil te leggen?',
          answer:
            'Ja, onze motorbegeleiders zijn landelijk gecertificeerde beroepsverkeersregelaars en handelen binnen de afgegeven evenementenvergunning.',
        },
        {
          question: 'Bekijken jullie de route voorafgaand aan het evenement?',
          answer:
            'Ja, wij controleren het parcours vooraf op knelpunten en stemmen het veiligheidsdraaiboek af met de koersdirectie of organisatie.',
        },
        {
          question: 'Kunnen motorbegeleiders worden gecombineerd met vaste posten?',
          answer:
            'Dat gebeurt heel vaak: op complexe hoofdkruispunten staan vaste verkeersregelaars, terwijl de motorbegeleiders de tussenliggende zijwegen beveiligen.',
        },
      ],
      relatedSlugs: ['evenementen', 'verkeersregelaars', 'parkeerbegeleiding'],
    },
    {
      slug: 'calamiteiten',
      title: 'Calamiteiten & spoedinzet',
      shortTitle: 'Calamiteiten & spoedinzet',
      group: 'totaaloplossingen',
      featuredOnHome: true,
      oneLiner:
        'Snelle 24/7 inzet van verkeersregelaars en noodafzettingen bij storingen, ongevallen en acute stremmingen.',
      heroPromise:
        'Directe 24/7 paraatheid bij incidenten, netstoringen, spoedreparaties en onverwachte wegafsluitingen — snel ter plaatse in heel Nederland.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_tijdelijke_verkeersmaatregelen_1794215801255.jpg',
      imageAlt: 'Spoedinzet en nachtelijke wegafzetting bij een calamiteit',
      whatWeDoParagraphs: [
        'Een gesprongen waterleiding, een stroomstoring, stormschade of een plotselinge verzakking in het wegdek houdt zich niet aan kantoortijden. Op zulke momenten moeten monteurs en hulpdiensten direct veilig aan het werk kunnen, terwijl het verkeer op veilige afstand wordt omgeleid.',
        'De calamiteitendienst van Atlas Holland is 24 uur per dag, 7 dagen per week bereikbaar. Eén telefoontje naar onze centrale planning is voldoende om verkeersregelaars en noodafzettingen direct op pad te sturen.',
      ],
      whatWeDoBullets: [
        '24/7 rechtstreeks telefonisch contact met een ervaren planner (geen antwoordapparaat)',
        'Korte aanrijtijden voor zowel gecertificeerde verkeersregelaars als bebording/afzetmateriaal',
        'Directe beveiliging van het werkvak zodat storingsmonteurs veilig kunnen starten',
        'Naadloze overgang van eerste noodafzetting naar een regulier meerdaags verkeersplan',
      ],
      applications: [
        {
          title: 'Kabel-, leiding- en stroomstoringen',
          description: 'Directe afzetting en verkeersregeling voor netbeheerders en storingsploegen.',
          iconName: 'Siren',
        },
        {
          title: 'Spoedreparaties wegdek & kunstwerken',
          description: 'Acute rijstrookafsluiting bij spoedherstel aan asfalt, bruggen of viaducten.',
          iconName: 'Hammer',
        },
        {
          title: 'Uitval van verkeerslichten (VRI)',
          description: 'Handmatige verkeersregeling op drukke kruispunten bij technische VRI-storingen.',
          iconName: 'TrafficCone',
        },
      ],
      faqs: [
        {
          question: 'Hoe bereik ik jullie bij een spoedaanvraag in de nacht of in het weekend?',
          answer: `Bel direct ons 24/7 nummer via ${COMPANY_CONFIG.phoneDisplay}. U krijgt direct een dienstdoende planner aan de lijn die de inzet in gang zet.`,
        },
        {
          question: 'Hoe snel kunnen jullie bij een calamiteit op locatie zijn?',
          answer:
            'Afhankelijk van de regio en het tijdstip zijn onze verkeersregelaars doorgaans binnen 60 tot 120 minuten ter plaatse.',
        },
        {
          question: 'Kunnen wij vaste raamafspraken maken voor calamiteiteninzet?',
          answer:
            'Ja. Voor gemeenten, aannemers en nutsbedrijven werken wij met SLA- en raamovereenkomsten zodat meldprocedures en tarieven vooraf volledig vastliggen.',
        },
      ],
      relatedSlugs: ['verkeersregelaars', 'tijdelijke-verkeersmaatregelen', 'projectcoordinatie'],
    },
  ] as ServiceItem[],
  opleidingenPage: {
    seo: {
      title: 'Opleidingen Verkeer & Infra | Atlas Holland B.V.',
      description:
        'Praktijkgerichte opleidingen voor verkeer en infra: Beroepsverkeersregelaar, BRL 9101, VCA (VOL), EHBO/BHV, conflicthantering en tramveiligheid.',
    },
    hero: {
      eyebrow: 'ATLAS ACADEMIE',
      titleLine1: 'Opleidingen',
      titleLine2: 'verkeer & infra',
      subtitle:
        'Vakmanschap op straat begint met een goede opleiding. Atlas Holland leidt zowel eigen medewerkers als externe kandidaten van aannemers, gemeenten en verkeersbedrijven op.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_verkeersplannen_coordinatie_1794215803555.jpg',
      imageAlt: 'Praktijkgerichte klassikale en buitenopleiding voor verkeersregelaars',
    },
    introText:
      'Al onze trainingen worden verzorgd door ervaren praktijkinstructeurs die het werkveld door en door kennen. Wij combineren heldere theorie met realistische praktijksituaties buiten op straat.',
    courses: [
      {
        id: 'brl-9101',
        title: 'BRL 9101 — Tijdelijke Verkeersmaatregelen',
        duration: '[X dagen]',
        audience: 'Medewerkers wegafzettingen, uitvoerders & werkvoorbereiders',
        description:
          'Leer tijdelijke verkeersmaatregelen veilig en conform CROW 96a/96b en de Beoordelingsrichtlijn BRL 9101 aanbrengen, controleren en verwijderen.',
        highlights: [
          'Richtlijnen CROW 96a en 96b in de praktijk',
          'Veilig plaatsen en verwijderen van bebording en afzettingen',
          'Voorbereiding op het officiële examen',
        ],
        // TODO: replace with real Atlas photo
        imageUrl:
          '/assets/images/atlas_tijdelijke_verkeersmaatregelen_1794215801255.jpg',
      },
      {
        id: 'beroepsverkeersregelaar',
        title: 'Beroepsverkeersregelaar (Landelijke aanstelling)',
        duration: '[X dagen]',
        audience: 'Startende en hercertificerende verkeersregelaars',
        description:
          'De officiële opleiding tot landelijk bevoegd beroepsverkeersregelaar. Inclusief e-learning, klassikale theorie en praktijkexamen op een druk kruispunt.',
        highlights: [
          'Wet- en regelgeving en officiële stop- en oprijtekens',
          'Praktijktraining op gecertificeerde examenlocaties',
          'Begeleiding bij de aanvraag van de landelijke aanstellingspas',
        ],
        // TODO: replace with real Atlas photo
        imageUrl:
          '/assets/images/atlas_hero_verkeersregelaars_1794215800416.jpg',
      },
      {
        id: 'vca-vol',
        title: 'VCA Basis & VOL-VCA',
        duration: '[X dagen]',
        audience: 'Uitvoerend personeel en operationeel leidinggevenden',
        description:
          'Onmisbare basiskennis over veilig en gezond werken op bouwplaatsen, langs de weg en in de infrastructuur, afgesloten met het erkende VCA-examen.',
        highlights: [
          'Herkennen van risico’s en werken met PBM’s',
          'Beschikbaar als VCA Basisveiligheid en VCA-VOL',
          'Inclusief proefexamens en officieel examenmoment',
        ],
        // TODO: replace with real Atlas photo
        imageUrl:
          '/assets/images/atlas_verkeersplannen_coordinatie_1794215803555.jpg',
      },
      {
        id: 'ehbo-bhv',
        title: 'EHBO / Bedrijfshulpverlening (BHV)',
        duration: '[X dagen]',
        audience: 'Verkeersregelaars, bouwportiers & projectcoördinatoren',
        description:
          'Direct en doeltreffend handelen bij ongevallen, medische noodsituaties of beginnende brand op de bouwplaats, langs de weg of tijdens een evenement.',
        highlights: [
          'Levensreddend handelen en reanimatie met AED',
          'Alarmeren en samenwerken met professionele hulpdiensten',
          'Jaarlijkse herhalingstrainingen mogelijk',
        ],
        // TODO: replace with real Atlas photo
        imageUrl:
          '/assets/images/atlas_bouwportier_evenementen_1794215805236.jpg',
      },
      {
        id: 'agressie-conflicthantering',
        title: 'Agressie- en conflicthantering op straat',
        duration: '[X dagen]',
        audience: 'Verkeersregelaars, parkeerbegeleiders & bouwportiers',
        description:
          'Praktische de-escalatietechnieken om bij ongeduldige of gefrustreerde weggebruikers rustig, professioneel en veilig in gesprek te blijven.',
        highlights: [
          'Vroegtijdig herkennen van oplopende spanning',
          'De-escalerend communiceren met behoud van eigen grens',
          'Oefenen met herkenbare praktijksituaties bij wegafsluitingen',
        ],
        // TODO: replace with real Atlas photo
        imageUrl:
          '/assets/images/atlas_team_werken_bij_1794215805378.jpg',
      },
      {
        id: 'tramveiligheid',
        title: 'Tramveiligheid / Veiligheidspersoon Tram',
        duration: '[X dagen]',
        audience: 'Veiligheidspersoneel en uitvoerders bij spoor-/trambanen',
        description:
          'Specifieke veiligheidsinstructie voor het veilig begeleiden van werkzaamheden binnen het profiel van vrije ruimte van stedelijke trambanen.',
        highlights: [
          'Gevarenzone, remwegen en waarschuwingsprocedures',
          'Communicatie met werkploeg en verkeersleiding',
          'Praktijkgerichte voorbereiding op inzet langs het spoor',
        ],
        // TODO: replace with real Atlas photo
        imageUrl:
          '/assets/images/atlas_hero_verkeersregelaars_1794215800416.jpg',
      },
    ] as CourseItem[],
  },
  overOnsPage: {
    seo: {
      title: 'Over ons | Samen werken aan veilig verkeer | Atlas Holland B.V.',
      description:
        'Maak kennis met Atlas Holland B.V.: uw Nederlandse totaalpartner voor verkeersregelaars, tijdelijke verkeersmaatregelen, verkeersplannen en BLVC-advies.',
    },
    hero: {
      eyebrow: 'OVER ATLAS HOLLAND B.V.',
      titleLine1: 'Samen werken aan',
      titleLine2: 'veilig verkeer',
      subtitle:
        'Vanuit het hart van de praktijk zorgen wij dagelijks voor veilige werkplekken en een vlotte doorstroming op de Nederlandse wegen.',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_team_werken_bij_1794215805378.jpg',
      imageAlt: 'Het team van Atlas Holland B.V. op locatie bij een Nederlands infraproject',
    },
    story: {
      heading: 'Het verhaal van Atlas Holland B.V.',
      paragraphs: [
        `Atlas Holland B.V. is opgericht in ${COMPANY_CONFIG.foundingYear} vanuit één duidelijke overtuiging: verkeersveiligheid bij bouw- en infraprojecten vraagt om méér dan alleen een hesje of een bord langs de weg. Het vraagt om vakmensen die hun verantwoordelijkheid voelen, planners die meedenken met de uitvoerder en afspraken waar u blind op kunt vertrouwen.`,
        'Wat begon met de inzet van gecertificeerde verkeersregelaars in [REGIO / RANDSTAD], is uitgegroeid tot een landelijk opererende organisatie voor tijdelijke verkeersmaatregelen, verkeersplannen, BLVC-advies en projectcoördinatie.',
        'Of het nu gaat om een spoedafzetting midden in de nacht, een drukke binnenstedelijke bouwplaats of een meerdaags publieksevenement: bij Atlas Holland heeft u altijd direct contact met mensen die weten wat er buiten op straat speelt.',
      ],
    },
    allUnderOneRoof: {
      eyebrow: 'TOTAALPARTNER',
      titleLine1: 'Alles onder',
      titleLine2: 'één dak',
      description:
        'Wij verbinden verkeerskundige voorbereiding op kantoor met daadkrachtige uitvoering op straat. Daardoor sluiten plan, vergunning en praktijk naadloos op elkaar aan.',
      items: [
        'Verkeersplannen & BLVC-advies',
        'Afzettingen & bebording',
        'Tijdelijke verkeersmaatregelen',
        'Gecertificeerde verkeersregelaars',
        'Bouwportiers & vakmensen op locatie',
      ],
    },
    coreValues: [
      {
        title: 'Veiligheid',
        description:
          'Geen concessies aan de veiligheid van wegwerkzaamheden, weggebruikers en onze eigen collega’s.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Kwaliteit',
        description:
          'Gecertificeerde medewerkers, CROW-conforme plannen en representatieve uitrusting op elk project.',
        iconName: 'Award',
      },
      {
        title: 'Betrokkenheid',
        description:
          'Wij voelen ons medeverantwoordelijk voor de voortgang van uw project en het draagvlak in de buurt.',
        iconName: 'HeartHandshake',
      },
      {
        title: 'Flexibiliteit',
        description:
          'Werkplanningen veranderen. Onze 24/7 planning schakelt direct mee bij uitloop, fasering of spoed.',
        iconName: 'RefreshCw',
      },
    ],
    pillars: [
      {
        number: '01',
        title: 'Goed voorbereid',
        subtitle: 'Duidelijke afspraken vooraf',
        description:
          'Voor de eerste dag op locatie nemen wij de situatie, risico’s en verwachtingen grondig door. Zo weet iedereen waar hij aan toe is.',
      },
      {
        number: '02',
        title: 'Korte lijnen',
        subtitle: 'Direct contact met de planning',
        description:
          'U belt bij ons direct met de planner die uw project kent. Snel antwoord en direct een oplossing als de praktijk daarom vraagt.',
      },
      {
        number: '03',
        title: 'Betrokken op locatie',
        subtitle: 'Aandacht voor de uitvoering',
        description:
          'Onze coördinatoren bezoeken actief de werklocaties, begeleiden onze mensen en houden contact met uw uitvoerder op de bouwplaats.',
      },
    ],
    team: [
      {
        name: '[NAAM TEAMLIED 1]',
        role: '[Algemeen Directeur]',
        email: COMPANY_CONFIG.emailGeneral,
        linkedinUrl: COMPANY_CONFIG.socials.linkedin.url,
        // TODO: replace with real Atlas photo
        imageUrl:
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: '[NAAM TEAMLIED 2]',
        role: '[Operationeel Manager]',
        email: COMPANY_CONFIG.emailGeneral,
        linkedinUrl: COMPANY_CONFIG.socials.linkedin.url,
        // TODO: replace with real Atlas photo
        imageUrl:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: '[NAAM TEAMLIED 3]',
        role: '[Hoofd Planning 24/7]',
        email: COMPANY_CONFIG.emailGeneral,
        linkedinUrl: COMPANY_CONFIG.socials.linkedin.url,
        // TODO: replace with real Atlas photo
        imageUrl:
          'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: '[NAAM TEAMLIED 4]',
        role: '[Verkeerskundig Ontwerper / BLVC]',
        email: COMPANY_CONFIG.emailGeneral,
        linkedinUrl: COMPANY_CONFIG.socials.linkedin.url,
        // TODO: replace with real Atlas photo
        imageUrl:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: '[NAAM TEAMLIED 5]',
        role: '[Projectcoördinator Buitendienst]',
        email: COMPANY_CONFIG.emailGeneral,
        linkedinUrl: COMPANY_CONFIG.socials.linkedin.url,
        // TODO: replace with real Atlas photo
        imageUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: '[NAAM TEAMLIED 6]',
        role: '[Recruiter & Opleidingscoördinator]',
        email: COMPANY_CONFIG.emailCareers,
        linkedinUrl: COMPANY_CONFIG.socials.linkedin.url,
        // TODO: replace with real Atlas photo
        imageUrl:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  werkenBijPage: {
    seo: {
      title: 'Werken bij Atlas Holland B.V. | Vacatures Verkeersregelaar & Infra',
      description:
        'Word verkeersregelaar, bouwportier of verkeersplanner bij Atlas Holland B.V. Geen ervaring? Wij leiden je gratis op. Bekijk de vacatures en solliciteer direct.',
    },
    hero: {
      eyebrow: 'WERKEN BIJ ATLAS HOLLAND',
      titleLine1: 'Jouw inzet.',
      titleLine2: 'Maakt het verschil.',
      subtitle:
        'Geen ervaring? Geen probleem — wij leiden je op. Werk buiten in de dynamiek van verkeer, bouw en evenementen met een goed salaris en een hecht team achter je.',
      buttonLabel: 'Solliciteer direct ↓',
      buttonHref: '#solliciteren',
      // TODO: replace with real Atlas photo
      imageUrl:
        '/assets/images/atlas_team_werken_bij_1794215805378.jpg',
      imageAlt: 'Enthousiaste collega’s van Atlas Holland op locatie',
    },
    whyAtlas: [
      {
        title: 'Goed salaris & vakantiegeld',
        description:
          'Een aantrekkelijk uurloon dat altijd op tijd wordt uitbetaald, inclusief vakantiegeld, reiskostenvergoeding en toeslagen voor bijzondere uren.',
        iconName: 'Wallet',
      },
      {
        title: 'Gratis opleidingen (BRL 9101, VCA)',
        description:
          'Nog geen aanstellingspas? Wij betalen en verzorgen je opleiding tot gecertificeerd beroepsverkeersregelaar, VCA en aanvullende certificaten.',
        iconName: 'GraduationCap',
      },
      {
        title: 'Werkkleding & PBM’s',
        description:
          'Je krijgt van ons een compleet, comfortabel pakket RWS-werkkleding voor elk seizoen en alle persoonlijke beschermingsmiddelen.',
        iconName: 'Shirt',
      },
      {
        title: 'Hecht team en doorgroeien',
        description:
          'Bij ons ben je geen nummer. Onze planners kennen je bij naam en je kunt doorgroeien naar voorman, veiligheidspersoon of coördinator.',
        iconName: 'Users',
      },
    ],
    traits: [
      {
        title: 'Vriendelijk',
        description: 'Je staat mensen met een glimlach te woord en blijft rustig, ook in de spits.',
      },
      {
        title: 'Gemotiveerd',
        description: 'Je houdt van aanpakken, werkt graag in de buitenlucht en wilt jezelf ontwikkelen.',
      },
      {
        title: 'Betrouwbaar',
        description: 'Afspraak is afspraak: je collega’s en de uitvoerder op locatie kunnen op je rekenen.',
      },
      {
        title: 'Professioneel',
        description: 'Je draagt je uitrusting met trots en geeft duidelijke, veilige aanwijzingen.',
      },
    ],
    vacancies: [
      {
        slug: 'verkeersregelaar-noord-zuid-holland',
        title: 'Verkeersregelaar (Ervaren of in opleiding)',
        region: 'Noord- & Zuid-Holland (en landelijk)',
        hours: '24–40 uur (of flexibel)',
        startDate: 'Per direct / in overleg',
        tags: ['Geen ervaring nodig', 'Opleiding vergoed', 'Fulltime & Parttime'],
        summary:
          'Regel het verkeer bij uitdagende infraprojecten, stedelijke bouwplaatsen en mooie evenementen. Heb je nog geen certificaat? Dan leiden wij je gratis op.',
        intro:
          'Als verkeersregelaar bij Atlas Holland ben jij degene die zorgt dat wegwerkers veilig kunnen werken en dat automobilisten, fietsers en voetgangers vlot hun weg vervolgen. Geen dag en geen kruispunt is hetzelfde.',
        whatYouDo: [
          'Je geeft duidelijke, veilige aanwijzingen aan weggebruikers bij wegwerkzaamheden, omleidingen en bouwprojecten.',
          'Je bent het vriendelijke aanspreekpunt op straat voor buurtbewoners, fietsers en chauffeurs.',
          'Je werkt nauw samen met je collega-verkeersregelaars en de uitvoerder op de projectlocatie.',
          'Je controleert of de bebording en afzetting rond jouw post veilig en overzichtelijk staan.',
        ],
        whatWeAsk: [
          'Je bent minimaal 18 jaar en beheerst de Nederlandse taal goed.',
          'Je staat stevig in je schoenen, bent representatief en houdt het hoofd koel.',
          'Ervaring is mooi meegenomen, maar niet verplicht: wij verzorgen je opleiding als je start.',
          'Een rijbewijs B is een pluspunt, maar ook met het OV zijn veel locaties goed bereikbaar.',
        ],
        whatWeOffer: [
          'Een goed salaris van [€ XX,XX – € XX,XX] per uur (afhankelijk van ervaring) plus vakantiegeld.',
          'Volledig betaalde opleiding tot landelijk beroepsverkeersregelaar en VCA.',
          'Reiskostenvergoeding en bij passende inzet mogelijkheid tot bedrijfsvervoer.',
          'Hoogwaardige RWS-werkkleding voor zomer en winter en een vast aanspreekpunt op de planning.',
        ],
      },
      {
        slug: 'bouwportier-randstad',
        title: 'Bouwportier / Toegangscoördinator',
        region: 'Randstad (Amsterdam, Rotterdam, Den Haag, Utrecht)',
        hours: '32–40 uur',
        startDate: 'Per direct',
        tags: ['Vaste werklocatie', 'Dagdienst', 'Verkeersregelaar pas'],
        summary:
          'Beheer de toegangspoort van grote binnenstedelijke bouwprojecten, ontvang bezoekers en begeleid in- en uitrijdend vrachtverkeer.',
        intro:
          'Als bouwportier ben je de gastheer of gastvrouw én de veiligheidsbewaker bij de poort van een groot bouwproject. Je combineert overzicht aan de loge met het veilig begeleiden van bouwtransport.',
        whatYouDo: [
          'Je controleert toegangspassen, registraties en PBM-gebruik van iedereen die de bouwplaats betreedt.',
          'Je ontvangt leveranciers, onderaannemers en bezoekers en wijst hen de juiste route.',
          'Je begeleidt zware vrachtwagens veilig bij het in- en uitrijden over het aangrenzende fietspad of de rijbaan.',
          'Je houdt de dagplanning van laadtijden en kraanmomenten bij in overleg met de uitvoerder.',
        ],
        whatWeAsk: [
          'Je bent gastvrij, duidelijk en durft mensen aan te spreken op veiligheidsvoorschriften.',
          'Je hebt een geldige aanstellingspas als verkeersregelaar of bent bereid deze via ons te behalen.',
          'Je bent in het bezit van VCA (of bereid dit op onze kosten te halen).',
          'Je kunt goed overweg met basis computer-/tabletsystemen voor bezoekersregistratie.',
        ],
        whatWeOffer: [
          'Vaste dagdiensten op één of enkele langlopende bouwprojecten bij jou in de regio.',
          'Goed salaris, reiskostenvergoeding en uitstekende arbeidsvoorwaarden.',
          'Alle benodigde certificaten (Beroepsverkeersregelaar, VCA, BHV) op kosten van Atlas Holland.',
          'Een hecht en betrokken team met korte lijnen naar onze projectcoördinatoren.',
        ],
      },
      {
        slug: 'verkeersplanner-kantoor',
        title: 'Verkeersplanner / Projectondersteuner (Kantoor)',
        region: 'Kantoor [PLAATS]',
        hours: '32–40 uur',
        startDate: 'In overleg',
        tags: ['Kantoorfunctie', 'Planning & Regie', 'Doorgroeifunctie'],
        summary:
          'Stuur dagelijks onze verkeersregelaars aan, schakel met uitvoerders van aannemers en houd het overzicht op de centrale planning.',
        intro:
          'Op onze centrale planning komt alles samen. Als verkeersplanner koppel jij de juiste verkeersregelaars aan de aanvragen van onze opdrachtgevers en zorg je dat iedereen precies weet waar hij of zij wordt verwacht.',
        whatYouDo: [
          'Je plant dagelijks onze verkeersregelaars, bouwportiers en veiligheidspersonen in op projecten door heel Nederland.',
          'Je hebt telefonisch contact met uitvoerders, projectleiders en onze eigen mensen buiten op straat.',
          'Je verwerkt nieuwe aanvragen, stelt briefings op en schakelt snel bij last-minute wijzigingen.',
          'Je denkt mee over een slimme en eerlijke roosterindeling voor het team.',
        ],
        whatWeAsk: [
          'Je houdt van dynamiek, kunt snel schakelen en bewaart altijd het overzicht.',
          'Je hebt ervaring in personeelsplanning, logistiek of de verkeers-/infrabranche.',
          'Je communiceert helder en vriendelijk aan de telefoon en per e-mail.',
          'Je werkt nauwkeurig en denkt in praktische oplossingen.',
        ],
        whatWeOffer: [
          'Een sleutelrol binnen een groeiend en ambitieus bedrijf in verkeer en infra.',
          'Uitstekend salaris van [€ X.XXX – € X.XXX] bruto per maand op basis van 40 uur.',
          'Veel zelfstandigheid, gezellige collega’s op kantoor en ruimte voor eigen initiatief.',
          'Goede pensioenregeling, reiskostenvergoeding en opleidingsmogelijkheden.',
        ],
      },
      {
        slug: 'open-sollicitatie',
        title: 'Open sollicitatie — Verkeer, Planning of Opleiding',
        region: 'Heel Nederland',
        hours: 'Flexibel / Parttime / Fulltime',
        startDate: 'In overleg',
        tags: ['Open sollicitatie', 'Kennismaken', 'Alle niveaus'],
        summary:
          'Staat jouw ideale functie er niet direct tussen, maar pas jij met jouw energie en instelling bij Atlas Holland? Stuur een open sollicitatie!',
        intro:
          'Wij groeien continu en maken altijd graag kennis met gemotiveerde vakmensen: van ervaren verkeersregelaars, BRL-plaatsers en motorbegeleiders tot verkeerskundig tekenaars en coördinatoren.',
        whatYouDo: [
          'Vertel ons waar jouw kracht ligt en hoeveel uur per week je beschikbaar bent.',
          'Samen bekijken we welke projecten of combinatiefuncties bij jouw ervaring en woonplaats passen.',
          'Indien nodig vullen we jouw kennis aan met gerichte trainingen via onze eigen academie.',
        ],
        whatWeAsk: [
          'Een positieve, betrouwbare werkhouding en oog voor veiligheid.',
          'Goede beheersing van de Nederlandse taal.',
          'Zin om samen met ons te bouwen aan veilig verkeer in Nederland.',
        ],
        whatWeOffer: [
          'Een persoonlijk kennismakingsgesprek onder het genot van een goede kop koffie.',
          'Werk op maat: fulltime, parttime of flexibel naast je studie of andere werkzaamheden.',
          'Goede beloning, professionele uitrusting en volop doorgroeimogelijkheden.',
        ],
      },
    ] as VacancyItem[],
    processSteps: [
      {
        number: '01',
        title: 'Solliciteer',
        description:
          'Vul binnen 2 minuten het formulier op deze pagina in. Een uitgebreide brief is niet nodig; we horen vooral graag wie je bent.',
      },
      {
        number: '02',
        title: 'Kennismaken',
        description:
          'We bellen je binnen 24 uur op en nodigen je uit voor een kop koffie op kantoor om je wensen en uren door te spreken.',
      },
      {
        number: '03',
        title: 'Opleiding of inwerken',
        description:
          'Heb je al een pas? Dan kun je direct mee. Nog geen ervaring? Dan start je direct met je gratis opleiding tot verkeersregelaar.',
      },
      {
        number: '04',
        title: 'Aan de slag',
        description:
          'Je ontvangt je werkkledingpakket en gaat samen met een ervaren collega op pad naar je eerste project.',
      },
    ],
    faqs: [
      {
        question: 'Heb ik ervaring nodig om te starten als verkeersregelaar?',
        answer:
          'Nee, ervaring is niet nodig. Als jij gemotiveerd en betrouwbaar bent, regelen en betalen wij jouw volledige opleiding tot gecertificeerd beroepsverkeersregelaar én je VCA-certificaat.',
      },
      {
        question: 'Waar werk ik precies?',
        answer:
          'Wij werken door heel Nederland, met een sterke focus op de Randstad en omliggende regio’s. Bij de planning houden wij altijd rekening met jouw woonplaats zodat je reistijd overzichtelijk blijft.',
      },
      {
        question: 'Wat verdien ik en hoeveel uur werk ik?',
        answer:
          'Je ontvangt een goed uurloon van [€ XX,XX – € XX,XX] bruto per uur (afhankelijk van je ervaring en certificaten), bovenop vakantiegeld en reiskostenvergoeding. Je kiest zelf of je fulltime (32–40 uur), parttime of flexibel wilt werken.',
      },
      {
        question: 'Hoe solliciteer ik?',
        answer:
          'Heel eenvoudig via het sollicitatieformulier onderaan deze pagina. Heb je eerst nog een vraag? Bel of mail ons gerust!',
      },
    ],
  },
  offertePage: {
    seo: {
      title: 'Offerte Aanvragen | Binnen 24 uur reactie | Atlas Holland B.V.',
      description:
        'Vraag direct verkeersregelaars, tijdelijke verkeersmaatregelen of een verkeersplan aan bij Atlas Holland B.V. Binnen 24 uur een heldere offerte op maat.',
    },
    hero: {
      eyebrow: 'INZET OF OFFERTE AANVRAGEN',
      titleLine1: 'Vraag uw inzet of',
      titleLine2: 'offerte op maat aan',
      subtitle:
        'Geef in 3 korte stappen uw projectgegevens door. Onze planning neemt binnen 24 uur contact met u op met een passend voorstel.',
    },
  },
  contactPage: {
    seo: {
      title: 'Contact | 24/7 Bereikbaar voor Verkeer & Infra | Atlas Holland B.V.',
      description:
        'Neem contact op met Atlas Holland B.V. voor verkeersregelaars, verkeersplannen of spoedinzet. 24/7 telefonisch bereikbaar.',
    },
    hero: {
      eyebrow: 'CONTACT & PLANNING',
      titleLine1: 'Hoe kunnen we',
      titleLine2: 'u helpen?',
      subtitle:
        'Heeft u een vraag over een lopend project, wilt u sparren over een verkeersplan of heeft u met spoed verkeersregelaars nodig? Wij staan 24/7 voor u klaar.',
    },
  },
  footer: {
    tagline: 'Van verkeersplan tot uitvoering. Volledig ontzorgd.',
    servicesLinks: [
      { label: 'Verkeersregelaars', href: '/diensten/verkeersregelaars' },
      { label: 'Tijdelijke verkeersmaatregelen', href: '/diensten/tijdelijke-verkeersmaatregelen' },
      { label: 'Verkeersplannen & BLVC', href: '/diensten/verkeersplannen' },
      { label: 'Calamiteiten & spoedinzet', href: '/diensten/calamiteiten' },
      { label: 'Evenementen', href: '/diensten/evenementen' },
    ],
    companyLinks: [
      { label: 'Over ons', href: '/over-ons' },
      { label: 'Opleidingen', href: '/opleidingen' },
      { label: 'Werken bij', href: '/werken-bij' },
      { label: 'Kwaliteit & certificering', href: '/#kwaliteit' },
      { label: 'Contact', href: '/contact' },
    ],
    legalLinks: [
      { label: 'Privacyverklaring', href: '/privacy' },
      { label: 'Algemene voorwaarden', href: '/algemene-voorwaarden' },
    ],
    copyright: '© 2026 Atlas Holland B.V. Alle rechten voorbehouden.',
  },
};

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return NL_CONTENT.services.find((s) => s.slug === slug);
}

export function getServicesByGroup(group: ServiceGroupKey): ServiceItem[] {
  return NL_CONTENT.services.filter((s) => s.group === group);
}

export function getVacancyBySlug(slug: string): VacancyItem | undefined {
  return NL_CONTENT.werkenBijPage.vacancies.find((v) => v.slug === slug);
}
