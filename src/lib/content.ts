export type Locale = "en" | "ms";

export interface ServiceItem {
  slug: "aircond-installation" | "electrical" | "painting" | "plaster-ceiling" | "plumbing";
  name: string;
  shortName: string;
  navSubtitle: string;
  cardHook: string;
  summary: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  bullets: string[];
  idealFor: string[];
  whatsAppPrompt: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  location: string;
  propertyType: string;
  category: ServiceItem["slug"];
  categoryLabel: string;
  summary: string;
  materials: string;
  image: string;
  imageAlt: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  locale: Locale;
  brand: {
    name: string;
    tagline: string;
    phoneDisplay: string;
    phoneHref: string;
    whatsappBase: string;
    email: string;
    addressShort: string;
    addressFull: string;
    hoursShort: string;
    hoursFull: string;
    regionsLine: string;
    regions: string[];
  };
  nav: {
    home: string;
    services: string;
    viewAllServices: string;
    projects: string;
    coverage: string;
    contact: string;
    quoteCta: string;
    callNow: string;
    whatsappUs: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    exploreServices: string;
    trustPoints: string[];
  };
  credibility: {
    heading: string;
    items: {
      value: string;
      label: string;
      sublabel: string;
      watermark: string;
    }[];
  };
  whyChoose: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: WhyChooseItem[];
    guaranteeLabel: string;
    guaranteeText: string;
  };
  servicesSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    viewAllLabel: string;
  };
  services: ServiceItem[];
  bundleBanner: {
    eyebrow: string;
    heading: string;
    description: string;
    ctaLabel: string;
    whatsAppText: string;
  };
  spotlight: {
    eyebrow: string;
    heading: string;
    description: string;
    bullets: string[];
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
    image: string;
    imageAlt: string;
    whatsAppText: string;
  };
  process: {
    eyebrow: string;
    heading: string;
    subheading: string;
    steps: ProcessStep[];
  };
  midCallStrip: {
    prompt: string;
    ctaPrefix: string;
  };
  projectsSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    viewAllCta: string;
    viewDetails: string;
    materialsLabel: string;
    allFilterLabel: string;
  };
  projects: ProjectItem[];
  serviceArea: {
    eyebrow: string;
    heading: string;
    description: string;
    placeholder: string;
    buttonLabel: string;
    coveredPrefix: string;
    coveredSuffix: string;
    notFoundText: string;
    whatsappAreaCta: string;
    popularAreasTitle: string;
    hubLabel: string;
    hubAddress: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: FaqItem[];
  };
  bottomCta: {
    eyebrow: string;
    heading: string;
    description: string;
    selectServiceLabel: string;
    selectAreaLabel: string;
    sendWhatsAppCta: string;
    callInsteadLabel: string;
    hoursLabel: string;
    addressLabel: string;
  };
  footer: {
    pillars: { title: string; description: string }[];
    brandSummary: string;
    servicesHeading: string;
    coverageHeading: string;
    contactHeading: string;
    copyright: string;
    complianceNote: string;
  };
  pages: {
    servicesTitle: string;
    servicesSubtitle: string;
    projectsTitle: string;
    projectsSubtitle: string;
    contactTitle: string;
    contactSubtitle: string;
    includedHeading: string;
    idealForHeading: string;
    requestQuoteFor: string;
    backToServices: string;
    otherServices: string;
  };
}

export const COVERAGE_NEIGHBORHOODS = [
  { name: "Kuala Lumpur", region: "Kuala Lumpur", postcodes: ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"] },
  { name: "Cheras", region: "Kuala Lumpur", postcodes: ["56000", "56100", "43200"] },
  { name: "Setapak", region: "Kuala Lumpur", postcodes: ["53000", "53100", "53200", "53300"] },
  { name: "Kepong", region: "Kuala Lumpur", postcodes: ["52100", "52200"] },
  { name: "KLCC & Ampang", region: "Kuala Lumpur", postcodes: ["50088", "50450", "68000"] },
  { name: "Mont Kiara & Hartamas", region: "Kuala Lumpur", postcodes: ["50480"] },
  { name: "Bangsar & Damansara", region: "Kuala Lumpur", postcodes: ["59100", "50490", "47800"] },
  { name: "Puchong", region: "Selangor", postcodes: ["47100", "47110", "47120", "47130", "47140", "47150", "47160", "47170", "47180"] },
  { name: "Petaling Jaya", region: "Selangor", postcodes: ["46", "473", "474", "478"] },
  { name: "Subang Jaya & USJ", region: "Selangor", postcodes: ["47500", "47600", "47610", "47620", "47630", "47640", "47650"] },
  { name: "Shah Alam", region: "Selangor", postcodes: ["40000", "40100", "40150", "40170", "40400", "40460"] },
  { name: "Seri Kembangan", region: "Selangor", postcodes: ["43300"] },
  { name: "Putrajaya", region: "Putrajaya", postcodes: ["62"] },
  { name: "Cyberjaya", region: "Cyberjaya", postcodes: ["63000"] },
];

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/601121206259?text=${encodeURIComponent(message)}`;
}

const enContent: SiteContent = {
  locale: "en",
  brand: {
    name: "RapiWorks KL",
    tagline: "Home Improvement & Repair",
    phoneDisplay: "011-2120 6259",
    phoneHref: "tel:+601121206259",
    whatsappBase: "https://wa.me/601121206259",
    email: "hello@rapiworkskl.com",
    addressShort: "Seri Manja Square One, Puchong",
    addressFull: "Seri Manja Square One, Puchong, Selangor, Malaysia",
    hoursShort: "Daily: 9:00 AM – 7:00 PM",
    hoursFull: "Open Daily · 9:00 AM – 7:00 PM",
    regionsLine: "Kuala Lumpur · Selangor · Putrajaya · Cyberjaya",
    regions: ["Kuala Lumpur", "Selangor", "Putrajaya", "Cyberjaya"],
  },
  nav: {
    home: "Home",
    services: "Services",
    viewAllServices: "View All Services",
    projects: "Our Projects",
    coverage: "Service Area",
    contact: "Contact",
    quoteCta: "Get a Free Quote",
    callNow: "Call Now",
    whatsappUs: "WhatsApp Us",
  },
  hero: {
    eyebrow: "Kuala Lumpur · Selangor · Putrajaya · Cyberjaya",
    title: "Home Improvement & Repair Services in Kuala Lumpur",
    subtitle: "Reliable Aircond, Electrical, Plumbing, Plaster Ceiling & House Painting",
    body: "Whether you are installing a new air conditioner, upgrading to an L-box plaster ceiling, fixing a concealed pipe leak, adding lighting points, or refreshing your walls—get an honest assessment and an itemised quotation from one local team.",
    primaryCta: "WhatsApp for a Free Quote",
    secondaryCta: "011-2120 6259",
    exploreServices: "Explore Our Services",
    trustPoints: [
      "Five essential home trades under one accountable team",
      "Transparent, itemised quotations before work begins",
      "Experienced with KL condo management permits & landed homes",
    ],
  },
  credibility: {
    heading: "Built for Kuala Lumpur & Selangor Properties",
    items: [
      {
        value: "5",
        label: "Essential Trades",
        sublabel: "Aircond, Electrical, Plumbing, Ceiling & Painting",
        watermark: "5",
      },
      {
        value: "4",
        label: "Klang Valley Regions",
        sublabel: "KL, Selangor, Putrajaya & Cyberjaya",
        watermark: "KL",
      },
      {
        value: "100%",
        label: "Itemised Quotations",
        sublabel: "Materials, labour & scope confirmed upfront",
        watermark: "RM",
      },
      {
        value: "KL",
        label: "Condo & Landed Ready",
        sublabel: "Familiar with JMB permits & work hours",
        watermark: "✓",
      },
    ],
  },
  whyChoose: {
    eyebrow: "Why Local Homeowners Choose RapiWorks KL",
    heading: "Quality Workmanship Without the Stress",
    subheading:
      "You do not need to juggle five different sub-contractors or guess what a repair should cost. We keep scope, materials, and communication straightforward from first message to handover.",
    items: [
      {
        title: "All-In-One Home Contractor",
        description:
          "From repainting and plaster ceilings to concealed wiring and aircond piping, our team coordinates every trade cleanly under one schedule.",
        linkLabel: "Explore all 5 services",
        href: "/en/services",
      },
      {
        title: "Clear, Itemised Quotations",
        description:
          "No hidden fees or surprise add-ons halfway through a job. Every quotation breaks down materials, labour, and milestones before we start.",
        linkLabel: "Request a quote",
        href: "/en/contact",
      },
      {
        title: "Local KL & Condo Expertise",
        description:
          "We work daily across Kuala Lumpur, Selangor, Putrajaya, and Cyberjaya—navigating condo management permits, deposits, and work-hour rules smoothly.",
        linkLabel: "Check your area",
        href: "#service-area",
      },
      {
        title: "Fast WhatsApp Communication",
        description:
          "Send photos of your room or issue on WhatsApp for quick diagnostic feedback, straightforward site-visit booking, and real-time progress updates.",
        linkLabel: "Chat on WhatsApp",
        href: "https://wa.me/601121206259?text=Hi%20RapiWorks%20KL%2C%20I%20would%20like%20to%20request%20a%20quotation.",
      },
    ],
    guaranteeLabel: "Our Service Guarantee",
    guaranteeText:
      "No hidden surprises. We confirm scope in writing before work starts, protect your floors and furniture on site, and test every fixture, pipe, and unit thoroughly before sign-off.",
  },
  servicesSection: {
    eyebrow: "Complete Home & Commercial Services",
    heading: "Core Services in Kuala Lumpur & Selangor",
    subheading:
      "Residential condominiums, landed terrace homes, offices, and retail spaces—handled by skilled local technicians to Malaysian safety standards.",
    viewAllLabel: "View Full Service Directory",
  },
  services: [
    {
      slug: "aircond-installation",
      name: "Aircond Installation",
      shortName: "Aircond",
      navSubtitle: "Split units, copper piping & condo ledge mounting",
      cardHook: "Inverter split units, copper piping & condo ledges",
      summary:
        "Proper horsepower sizing, neat insulated copper piping, condo ledge compressor mounting, and leak-free drainage setups for high-efficiency cooling.",
      fullDescription:
        "Planning to install a new air conditioner or replace an ageing unit in your house, condominium, or commercial office in Kuala Lumpur? We assess room size and required horsepower (HP), indoor and outdoor unit placement, concealed or trunked insulated copper piping runs, drainage gradient, and dedicated electrical isolator points so your unit cools efficiently without water leaks.",
      image: "/images/service-aircond.jpg",
      imageAlt: "Technician installing a modern wall-mounted inverter air conditioner in a Kuala Lumpur apartment",
      ctaLabel: "Aircond Services",
      bullets: [
        "Residential wall-mounted split unit installation",
        "Condominium ledge & balcony compressor mounting",
        "Insulated copper piping & leak-free drainage setup",
      ],
      idealFor: [
        "New condo key-handover aircond installations",
        "Replacing old non-inverter units with energy-saving inverters",
        "Relocating indoor blowers or fixing noisy outdoor condensers",
      ],
      whatsAppPrompt:
        "Hi RapiWorks KL, I'd like a quote for Aircond Installation. Property area: [Your Area]. Number of units / HP: ",
      featured: true,
    },
    {
      slug: "electrical",
      name: "Electrical Services",
      shortName: "Electrical",
      navSubtitle: "Downlights, ceiling fans, sockets & DB troubleshooting",
      cardHook: "Downlights, ceiling fans, sockets & DB checks",
      summary:
        "Safe lighting upgrades, ceiling fan mounting, extra power sockets, aircond isolator points, and DB troubleshooting compliant with Suruhanjaya Tenaga standards.",
      fullDescription:
        "Planning electrical upgrades or troubleshooting tripping circuits in your home, condo, or office? Our team handles recessed downlight conversions, architectural track lights, reinforced ceiling fan installations, additional power sockets, water-heater and aircond isolator points, and distribution board diagnostics—all adhering strictly to Malaysian Suruhanjaya Tenaga (Energy Commission) safety standards.",
      image: "/images/service-electrical.jpg",
      imageAlt: "Modern Kuala Lumpur living space with newly wired black track spotlights, downlights, and wall dimmer switches",
      ctaLabel: "Electrical Services",
      bullets: [
        "Lighting installation & LED downlight conversions",
        "Ceiling fan installation & structural reinforcement",
        "New power sockets, switches & aircond isolator points",
      ],
      idealFor: [
        "Upgrading fluorescent lights to modern recessed downlights or track spots",
        "Adding concealed kitchen, TV console, or home-office power points",
        "Diagnosing tripping ELCB/MCB breakers and overloaded circuits",
      ],
      whatsAppPrompt:
        "Hi RapiWorks KL, I'd like a quote for Electrical Services. Property area: [Your Area]. Work needed: ",
      featured: true,
    },
    {
      slug: "painting",
      name: "House Painting Services",
      shortName: "House Painting",
      navSubtitle: "Interior & exterior painting, crack repair & waterproofing",
      cardHook: "Interior & facade painting with Dulux, Nippon & Jotun",
      summary:
        "Clean interior room repainting, exterior facades, and thorough wall preparation using trusted Dulux, Nippon, and Jotun paint systems.",
      fullDescription:
        "Give your home, condo, or commercial space a crisp, lasting finish. We inspect existing wall conditions first—handling hairline crack repair, skim-coat touch-ups, damp-patch priming, and full floor/furniture masking—before applying premium Dulux, Nippon Paint, or Jotun finishes matched to your room lighting and durability needs.",
      image: "/images/service-painting.jpg",
      imageAlt: "Freshly painted modern Kuala Lumpur condominium living room with neat masking and drop cloth protection",
      ctaLabel: "Painting Services",
      bullets: [
        "Interior room & full condo wall repainting",
        "Exterior house facades & weather-shield coating",
        "Wall preparation, skim coat & crack repair",
      ],
      idealFor: [
        "Move-in / move-out condominium repainting",
        "Refreshing landed terrace exteriors against Malaysian rain & sun",
        "Fixing peeling paint, hairline cracks, and plaster patches",
      ],
      whatsAppPrompt:
        "Hi RapiWorks KL, I'd like a quote for House Painting. Property area: [Your Area]. Approximate size / rooms: ",
    },
    {
      slug: "plaster-ceiling",
      name: "Plaster Ceiling Contractor",
      shortName: "Plaster Ceiling",
      navSubtitle: "Modern L-box, LED cove troughs & gypsum boards",
      cardHook: "Modern L-box ceilings, LED coves & gypsum boards",
      summary:
        "Architectural L-box ceilings, warm concealed LED light troughs, and clean flat gypsum boards tailored to your ceiling height and lighting layout.",
      fullDescription:
        "Upgrade your residential or commercial interior with a clean, razor-straight plaster ceiling. We plan ceiling drops around your existing slab height, aircond clearance, and beam lines—coordinating gypsum board framing, L-box cove troughs, heavy-duty ceiling fan anchor rods, and downlight cut-outs in one seamless pass.",
      image: "/images/service-ceiling.jpg",
      imageAlt: "Modern perimeter L-box gypsum plaster ceiling with warm LED cove lighting and recessed downlights in a KL apartment",
      ctaLabel: "Ceiling Services",
      bullets: [
        "Modern L-box & concealed LED light trough ceilings",
        "Flat gypsum board ceiling installation & patching",
        "Cornice, plaster mouldings & fan hook reinforcement",
      ],
      idealFor: [
        "Living & dining hall L-box makeovers with warm cove lighting",
        "Concealing exposed wiring, aircond trunking, and sprinkler pipes",
        "Repairing water-damaged ceiling panels cleanly",
      ],
      whatsAppPrompt:
        "Hi RapiWorks KL, I'd like a quote for Plaster Ceiling installation. Property area: [Your Area]. Room / ceiling style: ",
    },
    {
      slug: "plumbing",
      name: "Plumbing Services",
      shortName: "Plumbing",
      navSubtitle: "Leak detection, tap & sink replacement, PPR piping",
      cardHook: "Concealed leak detection, mixers, sinks & PPR piping",
      summary:
        "Fast diagnosis and durable repair for leaking pipes, concealed wall leaks, dripping mixers, clogged drains, and new sanitary fittings.",
      fullDescription:
        "Dealing with a concealed wall leak, dripping mixer tap, low water pressure, clogged drain, or faulty toilet cistern? Share a quick photo or short video on WhatsApp for rapid assessment. We repair and reroute leaking sections using durable PN16 PPR hot/cold fusion piping and install replacement taps, valves, kitchen sinks, and bathroom basins cleanly.",
      image: "/images/service-plumbing.jpg",
      imageAlt: "Technician neatly installing a modern brushed-stainless kitchen mixer tap and PPR fittings",
      ctaLabel: "Plumbing Services",
      bullets: [
        "Leaking pipe detection & concealed PPR pipe repair",
        "Tap, mixer, angle valve & cistern replacement",
        "Kitchen sink & bathroom basin installation",
      ],
      idealFor: [
        "Tracing hidden bathroom or ceiling water seepage",
        "Upgrading rusty galvanized pipes to durable PPR piping",
        "Replacing leaking kitchen mixers, bidets, and stopcocks",
      ],
      whatsAppPrompt:
        "Hi RapiWorks KL, I need help with a Plumbing issue. Property area: [Your Area]. Issue description: ",
    },
  ],
  bundleBanner: {
    eyebrow: "Multi-Trade Renovation Package",
    heading: "Planning a Full Condo or Terrace Makeover?",
    description:
      "Combine house painting, new L-box plaster ceiling, electrical points, plumbing fixtures, and aircond installation under one coordinated timeline and one accountable contractor.",
    ctaLabel: "Discuss Your Project on WhatsApp",
    whatsAppText:
      "Hi RapiWorks KL, I'm planning a multi-trade home renovation (painting / ceiling / electrical / aircond / plumbing) and would like to discuss a combined quote.",
  },
  spotlight: {
    eyebrow: "Featured Trade · Aircond & Cooling",
    heading: "Stay Comfortable Through Kuala Lumpur's Heat Year-Round",
    description:
      "Poorly angled drainage pipes and undersized insulation cause most aircond leaks within months. We install split units cleanly from day one—handling proper HP sizing, insulated copper runs, condo compressor ledges, and dedicated isolator wiring in a single visit.",
    bullets: [
      "Clean wall-mounted split unit & inverter installation",
      "Safe condominium balcony & ledge compressor mounting",
      "Insulated copper piping, drainage testing & isolator points",
    ],
    primaryCta: "Schedule Aircond Quote",
    secondaryCta: "Explore Aircond Details",
    secondaryHref: "/en/services/aircond-installation",
    image: "/images/spotlight-aircond.jpg",
    imageAlt: "RapiWorks technician checking manifold pressure gauges on a neatly mounted condo aircond condenser",
    whatsAppText:
      "Hi RapiWorks KL, I'd like to schedule an Aircond Installation quote in Kuala Lumpur / Selangor.",
  },
  process: {
    eyebrow: "Simple 4-Step Process",
    heading: "What Happens When You Reach Out",
    subheading:
      "You do not need to diagnose the technical details yourself. Just tell us what you want improved or fixed—we guide the rest.",
    steps: [
      {
        number: "1",
        title: "Message Us on WhatsApp",
        description:
          "Send your area, the service you need, and a quick photo or short video of the room or issue.",
      },
      {
        number: "2",
        title: "Get an Itemised Quote",
        description:
          "We confirm scope, recommend suitable materials, and give you a clear, itemised quotation before any work starts.",
      },
      {
        number: "3",
        title: "Clean, Scheduled Work",
        description:
          "Our crew arrives on time, protects surrounding surfaces, and works within condo JMB hours and Malaysian safety standards.",
      },
      {
        number: "4",
        title: "Tested & Handed Over",
        description:
          "We test every aircond drain, electrical point, pipe joint, and finish with you—and leave your home tidy.",
      },
    ],
  },
  midCallStrip: {
    prompt: "Need quick advice or a ballpark quote today?",
    ctaPrefix: "Call",
  },
  projectsSection: {
    eyebrow: "Completed Local Work",
    heading: "Recent Projects Across Kuala Lumpur",
    subheading:
      "Real residential and commercial scopes completed across Cheras, Setapak, Kepong, and KLCC—with materials and workmanship details upfront.",
    viewAllCta: "View All Projects",
    viewDetails: "View Project Scope",
    materialsLabel: "Key Scope & Materials",
    allFilterLabel: "All Projects",
  },
  projects: [
    {
      id: "cheras-condo-painting",
      slug: "cheras-condo-painting",
      title: "Full Condo Interior Repainting",
      location: "Cheras, Kuala Lumpur",
      propertyType: "Residential · 3-Bedroom Condominium",
      category: "painting",
      categoryLabel: "House Painting",
      summary:
        "Complete interior wall repainting across living, dining, and three bedrooms using Nippon Odour-less All-in-1. Included full hairline crack repair, skim-coat touch-ups, and a warm modern neutral palette.",
      materials: "Nippon Odour-less All-in-1, Wall Sealer & Skim Coat",
      image: "/images/service-painting.jpg",
      imageAlt: "Freshly painted 3-bedroom condominium interior in Cheras, Kuala Lumpur",
    },
    {
      id: "setapak-lbox-ceiling",
      slug: "setapak-lbox-ceiling",
      title: "Modern L-Box False Ceiling with Cove Lighting",
      location: "Setapak, Kuala Lumpur",
      propertyType: "Residential · High-Floor Apartment",
      category: "plaster-ceiling",
      categoryLabel: "Plaster Ceiling",
      summary:
        "Custom-designed perimeter L-box gypsum ceiling with concealed warm LED strip light troughs, heavy-duty ceiling fan anchor rods, and precision-spaced recessed downlights.",
      materials: "Gypsum Board, 3000K LED Cove Strips & Heavy-Duty Fan Anchors",
      image: "/images/service-ceiling.jpg",
      imageAlt: "Modern perimeter L-box plaster ceiling with warm LED cove lighting in Setapak, KL",
    },
    {
      id: "kepong-concealed-pipe",
      slug: "kepong-concealed-pipe",
      title: "Concealed Wall Leaking Pipe Detection & Replacement",
      location: "Kepong, Kuala Lumpur",
      propertyType: "Residential · Double-Storey Terrace",
      category: "plumbing",
      categoryLabel: "Plumbing",
      summary:
        "Traced a hidden water pressure leak inside the bathroom wall slab without unnecessary hacking. Replaced the degraded galvanized pipe section with durable PN16 PPR hot/cold fusion piping and pressure-tested cleanly.",
      materials: "PN16 PPR Hot/Cold Fusion Pipe & Brass Fittings",
      image: "/images/service-plumbing.jpg",
      imageAlt: "Clean modern plumbing fixture and PPR pipe replacement work in Kepong, Kuala Lumpur",
    },
    {
      id: "klcc-track-light-wiring",
      slug: "klcc-track-light-wiring",
      title: "Designer Track Light & Inverter Fan Wiring",
      location: "KLCC, Kuala Lumpur",
      propertyType: "Commercial & Residential · Luxury Suite",
      category: "electrical",
      categoryLabel: "Electrical",
      summary:
        "Installation of architectural matte-black track spotlights, high-torque DC inverter ceiling fans, smart dimmer switches, and additional concealed kitchen power sockets compliant with ST safety guidelines.",
      materials: "Matte-Black Track System, DC Ceiling Fans & Smart Dimmers",
      image: "/images/service-electrical.jpg",
      imageAlt: "Designer matte-black track spotlights and modern electrical switches in a KLCC luxury suite",
    },
  ],
  serviceArea: {
    eyebrow: "Klang Valley Service Coverage",
    heading: "Serving Kuala Lumpur, Selangor, Putrajaya & Cyberjaya",
    description:
      "Based at Seri Manja Square One in Puchong, our crew dispatches daily to condos, terrace houses, offices, and shoplots across the Klang Valley. Enter your neighbourhood or postcode to check availability.",
    placeholder: "Area or postcode (e.g. Cheras, 50450)",
    buttonLabel: "Check",
    coveredPrefix: "Yes — we cover",
    coveredSuffix: "Send your job details on WhatsApp to confirm our next available slot.",
    notFoundText:
      "We cover Kuala Lumpur, Selangor, Putrajaya & Cyberjaya. Message us your exact location on WhatsApp to confirm same-week scheduling.",
    whatsappAreaCta: "Confirm Slot on WhatsApp",
    popularAreasTitle: "Popular Areas We Serve Daily",
    hubLabel: "Dispatch Base",
    hubAddress: "Seri Manja Square One, Puchong, Selangor",
  },
  faq: {
    eyebrow: "Common Questions",
    heading: "Not Sure What to Ask? Frequently Asked Questions",
    subheading:
      "Straightforward answers on how quotations, condo management rules, and residential or commercial bookings work.",
    items: [
      {
        question: "How can I request a quotation?",
        answer:
          "Tap any WhatsApp button on this page to open a direct chat with 011-2120 6259. Share your location, the service you need, and a couple of photos of the room or issue—we will reply promptly with next steps or arrange a site visit.",
      },
      {
        question: "Do you provide services for both homes and businesses?",
        answer:
          "Yes. We handle both residential properties (condominiums, apartments, landed terrace houses, semi-Ds, and bungalows) and commercial spaces (retail shops, offices, and cafes), with full scope confirmed in writing before starting.",
      },
      {
        question: "Will I receive a clear quotation before any work starts?",
        answer:
          "Always. We discuss your requirements, inspect photos or visit the site where needed, and issue an itemised quotation detailing materials and labour so you know the exact cost and scope upfront.",
      },
      {
        question: "Which cities and neighbourhoods do you cover?",
        answer:
          "We serve Kuala Lumpur, Selangor, Putrajaya, and Cyberjaya—including Cheras, Setapak, Kepong, KLCC, Puchong, Petaling Jaya, Subang Jaya, Mont Kiara, Bangsar, and Shah Alam. Send your exact area on WhatsApp and we will confirm availability.",
      },
      {
        question: "Do you assist with condominium management permits?",
        answer:
          "Yes. Our team works in KL and Selangor condominiums every week and is familiar with standard JMB renovation forms, work-hour restrictions, refundable deposits, and contractor registration requirements.",
      },
    ],
  },
  bottomCta: {
    eyebrow: "Fast WhatsApp Dispatch",
    heading: "Ready to Get Started? Tell Us What You Need",
    description:
      "Pick your service below to launch a pre-filled WhatsApp message directly to our team at 011-2120 6259—just attach photos before hitting send.",
    selectServiceLabel: "What service do you need?",
    selectAreaLabel: "Your area (optional)",
    sendWhatsAppCta: "Open Pre-Filled WhatsApp Chat",
    callInsteadLabel: "Or call directly",
    hoursLabel: "Operating Hours",
    addressLabel: "Office / Base",
  },
  footer: {
    pillars: [
      {
        title: "Regulation-Compliant Work",
        description: "Electrical and structural works adhere to Malaysian safety standards.",
      },
      {
        title: "No Hidden Costs",
        description: "Clear, itemised quotations confirmed before any work starts.",
      },
      {
        title: "Direct WhatsApp Support",
        description: "Fast photo assessment, transparent scheduling, and clear updates.",
      },
    ],
    brandSummary:
      "Reliable multi-trade home improvement and repair services across Kuala Lumpur, Selangor, Putrajaya, and Cyberjaya—covering aircond installation, electrical, plumbing, plaster ceilings, and painting.",
    servicesHeading: "Our Services",
    coverageHeading: "Areas We Serve",
    contactHeading: "Contact RapiWorks KL",
    copyright: "© 2026 RapiWorks KL. All rights reserved.",
    complianceNote:
      "All electrical and structural works comply with applicable Malaysian building and safety regulations.",
  },
  pages: {
    servicesTitle: "Home Improvement & Repair Services in Kuala Lumpur",
    servicesSubtitle:
      "Five essential trades under one accountable local contractor—serving residential condos, landed homes, and commercial spaces across KL & Selangor.",
    projectsTitle: "Completed Projects in Kuala Lumpur",
    projectsSubtitle:
      "Explore recent residential and commercial work completed across Cheras, Setapak, Kepong, and KLCC.",
    contactTitle: "Contact RapiWorks KL",
    contactSubtitle:
      "Fastest response via WhatsApp—send your location, required service, and photos for an honest, itemised quotation.",
    includedHeading: "What's Included in This Service",
    idealForHeading: "Ideal For",
    requestQuoteFor: "WhatsApp for a Quote on",
    backToServices: "All Services",
    otherServices: "Explore Our Other Trades",
  },
};

const msContent: SiteContent = {
  locale: "ms",
  brand: {
    name: "RapiWorks KL",
    tagline: "Servis Renovasi & Pembaikan",
    phoneDisplay: "011-2120 6259",
    phoneHref: "tel:+601121206259",
    whatsappBase: "https://wa.me/601121206259",
    email: "hello@rapiworkskl.com",
    addressShort: "Seri Manja Square One, Puchong",
    addressFull: "Seri Manja Square One, Puchong, Selangor, Malaysia",
    hoursShort: "Setiap Hari: 9:00 PG – 7:00 PTG",
    hoursFull: "Dibuka Setiap Hari · 9:00 PG – 7:00 PTG",
    regionsLine: "Kuala Lumpur · Selangor · Putrajaya · Cyberjaya",
    regions: ["Kuala Lumpur", "Selangor", "Putrajaya", "Cyberjaya"],
  },
  nav: {
    home: "Utama",
    services: "Perkhidmatan",
    viewAllServices: "Lihat Semua Servis",
    projects: "Projek Kami",
    coverage: "Kawasan Liputan",
    contact: "Hubungi Kami",
    quoteCta: "Sebut Harga Percuma",
    callNow: "Hubungi Sekarang",
    whatsappUs: "WhatsApp Kami",
  },
  hero: {
    eyebrow: "Kuala Lumpur · Selangor · Putrajaya · Cyberjaya",
    title: "Servis Renovasi & Pembaikan Rumah di Kuala Lumpur",
    subtitle: "Pemasangan Aircond, Elektrik, Paip, Siling Kapur & Mengecat Rumah Yang Dipercayai",
    body: "Sama ada anda ingin memasang aircond baharu, menaik taraf siling kapur L-box, membaiki paip bocor, menambah suis lampu atau mengecat rumah—hubungi satu pasukan tempatan untuk penilaian jujur dan sebut harga terperinci.",
    primaryCta: "WhatsApp Untuk Sebut Harga",
    secondaryCta: "011-2120 6259",
    exploreServices: "Lihat Perkhidmatan Kami",
    trustPoints: [
      "Lima kerja utama rumah di bawah satu kontraktor",
      "Sebut harga terperinci dan telus sebelum kerja bermula",
      "Berpengalaman dengan permit JMB kondominium & rumah bertanah",
    ],
  },
  credibility: {
    heading: "Dipercayai Pemilik Rumah di KL & Selangor",
    items: [
      {
        value: "5",
        label: "Servis Utama",
        sublabel: "Aircond, Elektrik, Paip, Siling & Cat",
        watermark: "5",
      },
      {
        value: "4",
        label: "Wilayah Liputan",
        sublabel: "KL, Selangor, Putrajaya & Cyberjaya",
        watermark: "KL",
      },
      {
        value: "100%",
        label: "Sebut Harga Telus",
        sublabel: "Bahan, upah & skop disahkan awal",
        watermark: "RM",
      },
      {
        value: "KL",
        label: "Kondo & Rumah Bertanah",
        sublabel: "Biasa dengan peraturan & permit JMB",
        watermark: "✓",
      },
    ],
  },
  whyChoose: {
    eyebrow: "Mengapa Pilih RapiWorks KL",
    heading: "Hasil Kerja Kemas Tanpa Pening Kepala",
    subheading:
      "Anda tidak perlu berurusan dengan lima kontraktor berbeza atau meneka kos pembaikan. Kami utamakan skop jelas, bahan berkualiti, dan komunikasi pantas.",
    items: [
      {
        title: "Kontraktor Serba Lengkap",
        description:
          "Dari mengecat dan siling kapur hingga pendawaian elektrik dan paip aircond, semua kerja diselaraskan dengan kemas di bawah satu jadual.",
        linkLabel: "Lihat semua 5 servis",
        href: "/ms/services",
      },
      {
        title: "Sebut Harga Terperinci",
        description:
          "Tiada caj tersembunyi di pertengahan projek. Setiap sebut harga menyenaraikan kos bahan, upah, dan skop kerja dengan jelas.",
        linkLabel: "Minta sebut harga",
        href: "/ms/contact",
      },
      {
        title: "Liputan Tempatan & Permit Kondo",
        description:
          "Beroperasi setiap hari di Kuala Lumpur, Selangor, Putrajaya dan Cyberjaya—termasuk urusan permit pengurusan kondominium dan waktu kerja.",
        linkLabel: "Semak kawasan anda",
        href: "#service-area",
      },
      {
        title: "Komunikasi Pantas di WhatsApp",
        description:
          "Hantar gambar masalah atau ruang rumah di WhatsApp untuk maklum balas segera, temujanji lawatan tapak, dan kemas kini kerja.",
        linkLabel: "Mesej di WhatsApp",
        href: "https://wa.me/601121206259?text=Hai%20RapiWorks%20KL%2C%20saya%20ingin%20meminta%20sebut%20harga.",
      },
    ],
    guaranteeLabel: "Jaminan Perkhidmatan Kami",
    guaranteeText:
      "Tiada kejutan tersembunyi. Kami mengesahkan skop secara bertulis sebelum kerja bermula, melindungi lantai dan perabot anda, serta menguji setiap pemasangan sebelum serahan.",
  },
  servicesSection: {
    eyebrow: "Servis Kediaman & Komersial Lengkap",
    heading: "Perkhidmatan Teras Kami di Kuala Lumpur",
    subheading:
      "Kondominium, rumah teres, pejabat, dan kedai—dilaksanakan oleh juruteknik tempatan mengikut piawaian keselamatan Malaysia.",
    viewAllLabel: "Lihat Semua Perkhidmatan",
  },
  services: [
    {
      slug: "aircond-installation",
      name: "Pemasangan Aircond",
      shortName: "Aircond",
      navSubtitle: "Unit split, paip tembaga & pemasangan kondensor kondo",
      cardHook: "Unit split inverter, paip tembaga & ledge kondominium",
      summary:
        "Cadangan kuasa kuda (HP) yang tepat, paip tembaga berpenebat kemas, pemasangan pemampat balkoni kondo, dan saliran bebas bocor.",
      fullDescription:
        "Ingin memasang penyaman udara baharu atau menggantikan unit lama di rumah, kondominium, atau pejabat di Kuala Lumpur? Kami membantu menentukan kuasa kuda (HP) yang sesuai, kedudukan unit dalaman dan luaran, laluan paip tembaga berpenebat, saliran air yang betul, serta suis isolator elektrik khas.",
      image: "/images/service-aircond.jpg",
      imageAlt: "Juruteknik memasang unit aircond split moden di ruang tamu kondominium Kuala Lumpur",
      ctaLabel: "Servis Aircond",
      bullets: [
        "Pemasangan unit aircond split dinding kediaman",
        "Pemasangan pemampat di balkoni & ledge kondominium",
        "Paip tembaga berpenebat & saliran air bebas bocor",
      ],
      idealFor: [
        "Pemasangan aircond rumah atau kondominium baharu",
        "Menukar unit lama kepada aircond inverter jimat tenaga",
        "Memindahkan unit dalaman atau membaiki saliran aircond",
      ],
      whatsAppPrompt:
        "Hai RapiWorks KL, saya ingin sebut harga Pemasangan Aircond. Kawasan: [Kawasan Anda]. Bilangan unit / HP: ",
      featured: true,
    },
    {
      slug: "electrical",
      name: "Servis Elektrik & Pendawaian",
      shortName: "Elektrik",
      navSubtitle: "Lampu downlight, kipas siling, soket & baik pulih DB",
      cardHook: "Downlight LED, kipas siling, soket & semakan DB",
      summary:
        "Pemasangan lampu moden, kipas siling kukuh, tambahan soket kuasa, suis isolator aircond dan semakan DB mengikut piawaian Suruhanjaya Tenaga.",
      fullDescription:
        "Merancang pemasangan atau naik taraf elektrik untuk rumah, kondominium, atau pejabat di Kuala Lumpur? Kami mengendalikan pemasangan lampu downlight, lampu trek, kipas siling, soket kuasa tambahan, suis isolator aircond dan pemanas air serta baik pulih litar mengikut piawaian keselamatan Suruhanjaya Tenaga.",
      image: "/images/service-electrical.jpg",
      imageAlt: "Ruang tamu moden Kuala Lumpur dengan lampu trek hitam, downlight dan suis dimmer baharu",
      ctaLabel: "Servis Elektrik",
      bullets: [
        "Pemasangan lampu & penukaran downlight LED",
        "Pemasangan kipas siling & pengukuhan struktur",
        "Soket kuasa baharu, suis & titik isolator aircond",
      ],
      idealFor: [
        "Menukar lampu lama kepada downlight LED atau lampu trek moden",
        "Menambah soket dapur, konsol TV, atau ruang kerja di rumah",
        "Mengesan punca ELCB/MCB kerap terpelantik",
      ],
      whatsAppPrompt:
        "Hai RapiWorks KL, saya ingin sebut harga Servis Elektrik. Kawasan: [Kawasan Anda]. Kerja diperlukan: ",
      featured: true,
    },
    {
      slug: "painting",
      name: "Servis Mengecat Rumah",
      shortName: "Mengecat Rumah",
      navSubtitle: "Cat dalaman & luaran, baiki rekahan & kalis air",
      cardHook: "Cat dalaman & luaran menggunakan Dulux, Nippon & Jotun",
      summary:
        "Kerja mengecat dinding dalaman, fasad luaran, dan persediaan permukaan rapi menggunakan cat berkualiti Dulux, Nippon, dan Jotun.",
      fullDescription:
        "Berikan wajah baharu yang segar kepada kediaman atau ruang komersial anda. Kami memeriksa keadaan dinding terlebih dahulu—membaiki rekahan halus, skim coat, sapuan primer dan perlindungan penuh lantai serta perabot—sebelum mengecat dengan cat tulen Dulux, Nippon Paint atau Jotun.",
      image: "/images/service-painting.jpg",
      imageAlt: "Ruang tamu kondominium moden di Kuala Lumpur yang baru siap dicat dengan kemasan rapi",
      ctaLabel: "Servis Mengecat",
      bullets: [
        "Mengecat dinding dalaman & keseluruhan kondominium",
        "Cat fasad luaran rumah & lapisan tahan cuaca",
        "Persediaan dinding, skim coat & baiki rekahan",
      ],
      idealFor: [
        "Mengecat semula kondominium sebelum masuk atau selepas penyewa keluar",
        "Menyegarkan dinding luar rumah teres daripada cuaca panas dan hujan",
        "Membaiki cat mengelupas dan rekahan plaster dinding",
      ],
      whatsAppPrompt:
        "Hai RapiWorks KL, saya ingin sebut harga Mengecat Rumah. Kawasan: [Kawasan Anda]. Saiz / bilangan bilik: ",
    },
    {
      slug: "plaster-ceiling",
      name: "Kontraktor Siling Kapur",
      shortName: "Siling Kapur",
      navSubtitle: "L-box moden, lampu cove LED & papan gipsum",
      cardHook: "Siling L-box moden, lampu cove LED & papan gipsum",
      summary:
        "Reka bentuk siling L-box moden, ruang lampu cove LED tersembunyi, dan siling papan gipsum rata yang sesuai dengan ketinggian ruang anda.",
      fullDescription:
        "Naik taraf ruang dalaman rumah atau pejabat anda dengan siling kapur moden yang kemas dan lurus. Kami merancang susun atur siling mengikut ketinggian lantai, kedudukan aircond, rod penyangkut kipas siling tahan lasak serta potongan downlight dengan teliti.",
      image: "/images/service-ceiling.jpg",
      imageAlt: "Siling kapur L-box moden dengan pencahayaan cove LED hangat di kondominium Kuala Lumpur",
      ctaLabel: "Servis Siling",
      bullets: [
        "Siling L-box moden & ruang lampu cove LED",
        "Pemasangan siling papan gipsum rata & tampalan",
        "Kornis, ukiran plaster & penyangkut kipas kukuh",
      ],
      idealFor: [
        "Naik taraf ruang tamu dan ruang makan dengan L-box berlampu hangat",
        "Menyorok pendawaian terdedah dan laluan paip aircond",
        "Membaiki bahagian siling rosak akibat kebocoran air",
      ],
      whatsAppPrompt:
        "Hai RapiWorks KL, saya ingin sebut harga Siling Kapur. Kawasan: [Kawasan Anda]. Ruang / reka bentuk: ",
    },
    {
      slug: "plumbing",
      name: "Servis Kerja Paip",
      shortName: "Kerja Paip",
      navSubtitle: "Kesan paip bocor, tukar pili & sinki, paip PPR",
      cardHook: "Kesan kebocoran dinding, tukar pili, sinki & paip PPR",
      summary:
        "Pengesanan pantas dan pembaikan tahan lama untuk paip bocor dalam dinding, pili menitik, saluran tersumbat serta pemasangan sinki dan besen.",
      fullDescription:
        "Berdepan paip bocor, pili menitik, tekanan air rendah, atau tangki tandas rosak? Kongsikan gambar atau video ringkas di WhatsApp untuk penilaian pantas. Kami membaiki dan menukar bahagian paip rosak menggunakan paip PPR PN16 tahan lasak serta memasang pili, injap dan sinki baharu dengan kemas.",
      image: "/images/service-plumbing.jpg",
      imageAlt: "Juruteknik memasang pili dapur keluli moden dan sambungan paip PPR dengan kemas",
      ctaLabel: "Servis Paip",
      bullets: [
        "Pengesanan & pembaikan paip bocor dalam dinding",
        "Penukaran pili, mixer, injap & tangki tandas",
        "Pemasangan sinki dapur & besen bilik air",
      ],
      idealFor: [
        "Mengesan kebocoran air tersembunyi di bilik air atau siling",
        "Menukar paip besi berkarat kepada paip PPR tahan lama",
        "Mengganti pili dapur, bidet, dan stopcock yang bocor",
      ],
      whatsAppPrompt:
        "Hai RapiWorks KL, saya perlukan bantuan Kerja Paip. Kawasan: [Kawasan Anda]. Masalah paip: ",
    },
  ],
  bundleBanner: {
    eyebrow: "Pakej Renovasi Gabungan",
    heading: "Merancang Pengubahsuaian Penuh Kondo atau Rumah Teres?",
    description:
      "Gabungkan kerja mengecat, siling kapur baharu, pendawaian elektrik, paip dan pemasangan aircond dalam satu projek tersusun di bawah satu kontraktor.",
    ctaLabel: "Bincang Projek di WhatsApp",
    whatsAppText:
      "Hai RapiWorks KL, saya merancang projek renovasi gabungan (cat / siling / elektrik / aircond / paip) dan ingin mendapatkan sebut harga.",
  },
  spotlight: {
    eyebrow: "Servis Pilihan · Aircond & Penyejukan",
    heading: "Kekal Sejuk & Selesa Sepanjang Tahun di Kuala Lumpur",
    description:
      "Kebanyakan masalah aircond menitik berpunca daripada cerun saliran dan penebat paip yang tidak kemas. Kami memasang unit split dengan teliti sejak hari pertama—termasuk penentuan HP, paip tembaga berpenebat, pemasangan balkoni kondo, dan suis isolator.",
    bullets: [
      "Pemasangan kemas unit split dinding & inverter",
      "Pemasangan selamat pemampat di balkoni dan ledge kondo",
      "Paip tembaga berpenebat, ujian saliran & suis isolator",
    ],
    primaryCta: "Tempah Sebut Harga Aircond",
    secondaryCta: "Butiran Servis Aircond",
    secondaryHref: "/ms/services/aircond-installation",
    image: "/images/spotlight-aircond.jpg",
    imageAlt: "Juruteknik RapiWorks memeriksa tolok tekanan pada unit pemampat aircond kondominium",
    whatsAppText:
      "Hai RapiWorks KL, saya ingin menempah sebut harga Pemasangan Aircond di Kuala Lumpur / Selangor.",
  },
  process: {
    eyebrow: "4 Langkah Mudah",
    heading: "Proses Kerja Kami Dari Mula Hingga Siap",
    subheading:
      "Anda tidak perlu tahu istilah teknikal. Beritahu kami apa yang perlu dibaiki atau dinaik taraf—kami uruskan selebihnya.",
    steps: [
      {
        number: "1",
        title: "Hantar Gambar di WhatsApp",
        description:
          "Kongsikan kawasan anda, servis yang diperlukan, dan gambar ringkas ruang atau masalah rumah.",
      },
      {
        number: "2",
        title: "Terima Sebut Harga Telus",
        description:
          "Kami sahkan skop, cadangkan bahan sesuai, dan berikan sebut harga terperinci sebelum kerja bermula.",
      },
      {
        number: "3",
        title: "Kerja Kemas & Tepati Masa",
        description:
          "Pasukan kami tiba tepat waktu, melindungi perabot anda, serta mematuhi waktu kerja JMB dan piawaian keselamatan.",
      },
      {
        number: "4",
        title: "Uji & Serahan Bersih",
        description:
          "Setiap saliran aircond, titik elektrik, sambungan paip dan kemasan diuji bersama anda sebelum selesai.",
      },
    ],
  },
  midCallStrip: {
    prompt: "Perlukan nasihat pantas atau anggaran kos hari ini?",
    ctaPrefix: "Hubungi",
  },
  projectsSection: {
    eyebrow: "Hasil Kerja Terkini",
    heading: "Projek Terkini di Sekitar Kuala Lumpur",
    subheading:
      "Projek kediaman dan komersial sebenar yang disiapkan di Cheras, Setapak, Kepong dan KLCC dengan skop bahan yang jelas.",
    viewAllCta: "Lihat Semua Projek",
    viewDetails: "Lihat Skop Projek",
    materialsLabel: "Skop & Bahan Utama",
    allFilterLabel: "Semua Projek",
  },
  projects: [
    {
      id: "cheras-condo-painting",
      slug: "cheras-condo-painting",
      title: "Mengecat Dalaman Penuh Kondominium",
      location: "Cheras, Kuala Lumpur",
      propertyType: "Kediaman · Kondominium 3 Bilik Tidur",
      category: "painting",
      categoryLabel: "Mengecat Rumah",
      summary:
        "Kerja mengecat keseluruhan dinding dalaman menggunakan Nippon Odour-less All-in-1. Termasuk membaiki rekahan halus, kemasan skim coat, dan tona warna neutral moden.",
      materials: "Nippon Odour-less All-in-1, Sealer Dinding & Skim Coat",
      image: "/images/service-painting.jpg",
      imageAlt: "Kondominium 3 bilik tidur di Cheras yang baru siap dicat semula",
    },
    {
      id: "setapak-lbox-ceiling",
      slug: "setapak-lbox-ceiling",
      title: "Siling Kapur L-Box Moden Dengan Lampu Cove",
      location: "Setapak, Kuala Lumpur",
      propertyType: "Kediaman · Pangsapuri Tingkat Tinggi",
      category: "plaster-ceiling",
      categoryLabel: "Siling Kapur",
      summary:
        "Reka bentuk siling kapur L-box perimeter dengan ruang lampu jalur LED hangat tersembunyi, rod penyangkut kipas siling tugas berat, dan downlight rata.",
      materials: "Papan Gipsum, Jalur LED 3000K & Rod Kipas Tugas Berat",
      image: "/images/service-ceiling.jpg",
      imageAlt: "Siling kapur L-box moden dengan lampu cove hangat di Setapak, Kuala Lumpur",
    },
    {
      id: "kepong-concealed-pipe",
      slug: "kepong-concealed-pipe",
      title: "Pengesanan & Penukaran Paip Bocor Dalam Dinding",
      location: "Kepong, Kuala Lumpur",
      propertyType: "Kediaman · Rumah Teres Dua Tingkat",
      category: "plumbing",
      categoryLabel: "Kerja Paip",
      summary:
        "Mengesan kebocoran tekanan tersembunyi di dalam dinding bilik air. Bahagian paip lama yang reput diganti dengan paip PPR PN16 panas/sejuk tahan lasak dan diuji tekanan.",
      materials: "Paip Fusion PPR PN16 Panas/Sejuk & Kelengkapan Loyang",
      image: "/images/service-plumbing.jpg",
      imageAlt: "Kerja penukaran paip PPR dan kelengkapan paip moden di Kepong, Kuala Lumpur",
    },
    {
      id: "klcc-track-light-wiring",
      slug: "klcc-track-light-wiring",
      title: "Pendawaian Lampu Trek Pereka & Kipas Inverter",
      location: "KLCC, Kuala Lumpur",
      propertyType: "Komersial & Kediaman · Suite Mewah",
      category: "electrical",
      categoryLabel: "Elektrik",
      summary:
        "Pemasangan lampu trek hitam matte moden, kipas siling DC berkuasa tinggi, suis dimmer pintar, serta soket kuasa dapur tersembunyi tambahan mengikut piawaian ST.",
      materials: "Sistem Lampu Trek Hitam Matte, Kipas Siling DC & Dimmer Pintar",
      image: "/images/service-electrical.jpg",
      imageAlt: "Pemasangan lampu trek moden dan suis elektrik di suite mewah KLCC",
    },
  ],
  serviceArea: {
    eyebrow: "Kawasan Liputan Lembah Klang",
    heading: "Meliputi Kuala Lumpur, Selangor, Putrajaya & Cyberjaya",
    description:
      "Berpangkalan di Seri Manja Square One, Puchong, pasukan kami bergerak setiap hari ke kondominium, rumah teres, pejabat dan kedai di sekitar Lembah Klang. Semak kawasan atau poskod anda di bawah.",
    placeholder: "Kawasan / poskod (cth: Cheras, 50450)",
    buttonLabel: "Semak",
    coveredPrefix: "Ya — kami meliputi",
    coveredSuffix: "Hantar butiran kerja di WhatsApp untuk pengesahan slot terdekat.",
    notFoundText:
      "Kami meliputi Kuala Lumpur, Selangor, Putrajaya & Cyberjaya. Mesej lokasi tepat anda di WhatsApp untuk pengesahan jadual.",
    whatsappAreaCta: "Sahkan Slot di WhatsApp",
    popularAreasTitle: "Kawasan Utama Liputan Harian",
    hubLabel: "Pangkalan Operasi",
    hubAddress: "Seri Manja Square One, Puchong, Selangor",
  },
  faq: {
    eyebrow: "Soalan Lazim",
    heading: "Ada Pertanyaan? Soalan Lazim Pelanggan",
    subheading:
      "Jawapan ringkas mengenai sebut harga, permit pengurusan kondominium, serta servis kediaman dan komersial.",
    items: [
      {
        question: "Bagaimanakah cara untuk mendapatkan sebut harga?",
        answer:
          "Tekan mana-mana butang WhatsApp di laman ini untuk terus berhubung ke 011-2120 6259. Kongsikan lokasi, servis yang diperlukan, dan beberapa keping gambar ruang atau masalah—kami akan membalas dengan segera.",
      },
      {
        question: "Adakah anda menyediakan servis untuk rumah dan juga perniagaan?",
        answer:
          "Ya. Kami menerima pertanyaan kediaman (kondominium, pangsapuri, rumah teres, semi-D, banglo) serta ruang komersial (kedai, pejabat, kafe) dengan skop disahkan sebelum bermula.",
      },
      {
        question: "Bolehkah saya dapat sebut harga sebelum kerja dimulakan?",
        answer:
          "Sudah tentu. Kami berbincang mengenai keperluan anda dan membekalkan sebut harga terperinci merangkumi bahan dan upah sebelum sebarang kerja dijalankan.",
      },
      {
        question: "Kawasan manakah yang anda liputi?",
        answer:
          "Kami meliputi Kuala Lumpur, Selangor, Putrajaya dan Cyberjaya—termasuk Cheras, Setapak, Kepong, KLCC, Puchong, Petaling Jaya, Subang Jaya, Mont Kiara, Bangsar dan Shah Alam.",
      },
      {
        question: "Adakah anda membantu urusan permit pengurusan kondominium?",
        answer:
          "Ya. Kami biasa dengan prosedur renovasi JMB di KL dan Selangor, termasuk borang permohonan, had waktu kerja, deposit, dan pendaftaran kontraktor.",
      },
    ],
  },
  bottomCta: {
    eyebrow: "Maklum Balas Pantas WhatsApp",
    heading: "Sedia Untuk Bermula? Hantar Butiran Kerja Anda",
    description:
      "Pilih servis di bawah untuk membuka mesej WhatsApp sedia hantar ke pasukan kami di 011-2120 6259—cuma lampirkan gambar ruang anda.",
    selectServiceLabel: "Servis yang diperlukan",
    selectAreaLabel: "Kawasan anda (pilihan)",
    sendWhatsAppCta: "Buka Mesej WhatsApp",
    callInsteadLabel: "Atau hubungi terus",
    hoursLabel: "Waktu Operasi",
    addressLabel: "Pejabat / Pangkalan",
  },
  footer: {
    pillars: [
      {
        title: "Patuh Piawaian Keselamatan",
        description: "Kerja elektrik dan struktur mematuhi garis panduan keselamatan Malaysia.",
      },
      {
        title: "Tiada Kos Tersembunyi",
        description: "Sebut harga terperinci disahkan sebelum sebarang kerja dimulakan.",
      },
      {
        title: "Sokongan WhatsApp Terus",
        description: "Penilaian gambar pantas, penjadualan mudah, dan kemas kini jelas.",
      },
    ],
    brandSummary:
      "Kontraktor renovasi dan pembaikan rumah yang dipercayai di Kuala Lumpur, Selangor, Putrajaya dan Cyberjaya—meliputi pemasangan aircond, elektrik, paip, siling kapur dan mengecat.",
    servicesHeading: "Perkhidmatan Kami",
    coverageHeading: "Kawasan Liputan",
    contactHeading: "Hubungi RapiWorks KL",
    copyright: "© 2026 RapiWorks KL. Hak cipta terpelihara.",
    complianceNote:
      "Semua kerja elektrik dan struktur mematuhi peraturan bangunan dan keselamatan Malaysia yang berkenaan.",
  },
  pages: {
    servicesTitle: "Servis Renovasi & Pembaikan Rumah di Kuala Lumpur",
    servicesSubtitle:
      "Lima kerja teras di bawah satu kontraktor tempatan untuk kondominium, rumah bertanah, dan ruang komersial di KL & Selangor.",
    projectsTitle: "Projek Siap di Kuala Lumpur",
    projectsSubtitle:
      "Lihat projek kediaman dan komersial terkini yang disiapkan di Cheras, Setapak, Kepong, dan KLCC.",
    contactTitle: "Hubungi RapiWorks KL",
    contactSubtitle:
      "Maklum balas terpantas melalui WhatsApp—kongsi lokasi, jenis servis dan gambar untuk sebut harga yang telus.",
    includedHeading: "Skop Termasuk Dalam Servis Ini",
    idealForHeading: "Sesuai Untuk",
    requestQuoteFor: "WhatsApp Untuk Sebut Harga",
    backToServices: "Semua Perkhidmatan",
    otherServices: "Lihat Perkhidmatan Lain Kami",
  },
};

export function getContent(locale: string): SiteContent {
  return locale === "ms" ? msContent : enContent;
}
