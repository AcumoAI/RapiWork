export type Locale = "en" | "ms";

export interface ServiceScopeItem {
  title: string;
  description: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: "aircond-installation" | "electrical" | "painting" | "plaster-ceiling" | "plumbing";
  name: string;
  shortName: string;
  navSubtitle: string;
  cardHook: string;
  summary: string;
  fullDescription: string;
  approach: string;
  timeline: string;
  materials: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  bullets: string[];
  included: ServiceScopeItem[];
  idealFor: string[];
  process: ServiceStep[];
  goodToKnow: string[];
  faqs: ServiceFaq[];
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
  featured?: boolean;
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
    requestQuoteFor: string;
    backToServices: string;
    otherServices: string;
    overviewEyebrow: string;
    approachHeading: string;
    atGlanceHeading: string;
    timelineLabel: string;
    materialsLabel: string;
    bestForLabel: string;
    processHeading: string;
    scopeCtaTitle: string;
    scopeCtaBody: string;
    scopeCtaLabel: string;
    relatedProjectsHeading: string;
    viewAllProjects: string;
    goodToKnowHeading: string;
    faqHeading: string;
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
      approach:
        "We size the unit to the room, not to whatever is on offer at the shop. Before any bracket goes up, we check ceiling height, window glare, outdoor ledge access, and where the drainage can fall naturally. That planning is what keeps a unit quiet, cold, and dry months later.",
      timeline:
        "Half a day to one day for a standard split unit; 2–3 days for two to three units or concealed piping.",
      materials:
        "Daikin, Panasonic, Mitsubishi or Midea inverter units · 0.71mm insulated copper coil · Armaflex insulation · UV-resistant trunking · 1.5mm PVC drainage pipe",
      image: "/images/service-aircond.jpg",
      imageAlt: "Technician installing a modern wall-mounted inverter air conditioner in a Kuala Lumpur apartment",
      ctaLabel: "Aircond Services",
      bullets: [
        "Residential wall-mounted split unit installation",
        "Condominium ledge & balcony compressor mounting",
        "Insulated copper piping & leak-free drainage setup",
      ],
      included: [
        {
          title: "Split unit supply & installation",
          description:
            "Wall-mounted inverter units from trusted brands, sized to the room and mounted level.",
        },
        {
          title: "Insulated copper piping",
          description:
            "Correctly sized copper coil with closed-cell insulation, run neatly in trunking or concealed.",
        },
        {
          title: "Outdoor bracket or ledge mounting",
          description:
            "Galvanised brackets or ledge frames fixed with the right anchors for condo and landed walls.",
        },
        {
          title: "Drainage & vacuum testing",
          description:
            "Graded PVC drainage, pressure testing, and vacuuming before the refrigerant is released.",
        },
        {
          title: "Old unit dismantling",
          description:
            "Safe pump-down, removal, and disposal of your existing unit, bracket, and piping.",
        },
      ],
      idealFor: [
        "New condo key-handover aircond installations",
        "Replacing old non-inverter units with energy-saving inverters",
        "Relocating indoor blowers or fixing noisy outdoor condensers",
      ],
      process: [
        {
          title: "Site check & sizing",
          description:
            "We measure the room, confirm the HP, and agree on indoor and outdoor positions before quoting.",
        },
        {
          title: "Piping & bracket work",
          description:
            "Copper runs, drainage gradient, and the outdoor bracket or ledge frame are installed first.",
        },
        {
          title: "Mounting & vacuum",
          description:
            "Units are mounted level, joints are flared and pressure-tested, and the system is vacuumed before gas release.",
        },
        {
          title: "Test & handover",
          description:
            "We run a full cooling cycle, check for drainage leaks and vibration, then brief you on filters and remote settings.",
        },
      ],
      goodToKnow: [
        "Condos usually need a JMB permit and a refundable deposit before the outdoor unit goes up; we can prepare the work details for your application.",
        "Keep about 15cm of clear space around the outdoor unit and avoid enclosing it—trapped heat makes the compressor work harder.",
        "An oversized unit cools fast but dehumidifies poorly; matching HP to room size gives better comfort and lower bills.",
      ],
      faqs: [
        {
          question: "What horsepower do I need for my room?",
          answer:
            "As a rough guide: 9,000 BTU (1.0 HP) for up to about 120 sq ft, 12,000 BTU (1.5 HP) for 120–180 sq ft, and 18,000 BTU (2.0 HP) for 180–280 sq ft. High ceilings, west-facing walls, and large glass areas may need one size up. We confirm this on site.",
        },
        {
          question: "Can you install without hacking the wall?",
          answer:
            "Yes. We can run insulated copper in surface trunking or through existing concealed routes. Hacking is only needed if you want fully concealed piping in a wall that has none.",
        },
        {
          question: "Do you handle the condo permit?",
          answer:
            "We prepare the unit positions, bracket details, and work schedule your management needs. The application and deposit are usually handled by the owner, but we can attend the site briefing if required.",
        },
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
      approach:
        "Electrical work should be boring: no flickering, no warm plugs, no breaker that trips when the kettle and aircond run together. We trace the circuit before adding load, use proper junction boxes and cable sizes, and test every point before we close up a wall.",
      timeline:
        "Most lighting and socket jobs finish in a day; a full DB upgrade or whole-unit rewiring takes 2–4 days.",
      materials:
        "Suruhanjaya Tenaga-compliant PVC cable (1.5mm²–4mm²) · Hager, Schneider or ABB breakers · MK or Clipsal switches and sockets · LED downlights and track systems · galvanised fan hooks",
      image: "/images/service-electrical.jpg",
      imageAlt: "Modern Kuala Lumpur living space with newly wired black track spotlights, downlights, and wall dimmer switches",
      ctaLabel: "Electrical Services",
      bullets: [
        "Lighting installation & LED downlight conversions",
        "Ceiling fan installation & structural reinforcement",
        "New power sockets, switches & aircond isolator points",
      ],
      included: [
        {
          title: "Lighting points & downlights",
          description:
            "New points, LED downlight conversions, track lights, and dimmer-compatible switching.",
        },
        {
          title: "Ceiling fans & heavy fixtures",
          description:
            "Fan hooks anchored to the concrete slab, balanced blades, and safe clearance from the ceiling.",
        },
        {
          title: "Power sockets & switches",
          description:
            "Additional 13A points for kitchens, TV consoles, work desks, and appliances.",
        },
        {
          title: "Isolator & water heater points",
          description:
            "Dedicated isolators for aircond and storage heaters, wired and rated to specification.",
        },
        {
          title: "DB inspection & trip diagnosis",
          description:
            "Breaker, ELCB, and earthing checks, with loose or overloaded circuits corrected.",
        },
      ],
      idealFor: [
        "Upgrading fluorescent lights to modern recessed downlights or track spots",
        "Adding concealed kitchen, TV console, or home-office power points",
        "Diagnosing tripping ELCB/MCB breakers and overloaded circuits",
      ],
      process: [
        {
          title: "Walkthrough & load check",
          description:
            "We map existing circuits, confirm what each new point will draw, and flag any DB limitations.",
        },
        {
          title: "Quotation & schedule",
          description:
            "You get an itemised list of points, fittings, and cable runs, plus a work date that suits the building's rules.",
        },
        {
          title: "Wiring & installation",
          description:
            "Cabling, boxes, and fittings are installed with the power isolated; walls are patched cleanly where needed.",
        },
        {
          title: "Testing & labelling",
          description:
            "Every circuit is tested, breakers are labelled, and we walk you through what was added.",
        },
      ],
      goodToKnow: [
        "A tripping breaker is a symptom, not the fault. We test for earth leakage, overload, and loose connections rather than simply resetting it.",
        "For condo renovations, schedule electrical work before ceiling and painting so cables and boxes end up hidden.",
        "If your DB has no spare way, a new circuit may need a larger board—worth knowing before you buy fittings.",
      ],
      faqs: [
        {
          question: "Do I need a permit for electrical work?",
          answer:
            "Replacing light points and sockets generally does not need a permit. A new supply, meter upgrade, or major DB replacement is handled through a licensed electrician and the relevant authority. We will tell you which category your job falls under.",
        },
        {
          question: "Can you install a ceiling fan on a plaster ceiling?",
          answer:
            "Yes, but it needs a dedicated fan hook anchored to the concrete slab, not just the gypsum board. We check slab access and reinforce the mounting point before hanging the fan.",
        },
        {
          question: "Why does my ELCB trip at night?",
          answer:
            "Night-time tripping often points to a water heater, aircond, or outdoor light with moisture ingress. We isolate circuits one by one to find the actual leak path instead of replacing parts at random.",
        },
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
      approach:
        "A good paint job is mostly preparation. We wash and sand the surface, cut out flaking areas, fill cracks and pinholes, and spot-prime bare plaster before the first coat goes on. The topcoat is the easy part—and it only looks right when the wall underneath is sound.",
      timeline:
        "2–3 days for a typical three-bedroom condo; 4–6 days for a landed house exterior with repairs.",
      materials:
        "Dulux Weathershield & EasyClean · Nippon Paint Odour-less & Weatherbond · Jotun Fenomastic · alkali-resistant primer · acrylic caulk and skim coat",
      image: "/images/service-painting.jpg",
      imageAlt: "Freshly painted modern Kuala Lumpur condominium living room with neat masking and drop cloth protection",
      ctaLabel: "Painting Services",
      bullets: [
        "Interior room & full condo wall repainting",
        "Exterior house facades & weather-shield coating",
        "Wall preparation, skim coat & crack repair",
      ],
      included: [
        {
          title: "Interior walls & ceilings",
          description:
            "Two-coat repainting for living areas, bedrooms, kitchens, and ceilings, with clean cut lines.",
        },
        {
          title: "Exterior facades",
          description:
            "Weather-resistant coating for terrace, semi-D, and apartment exteriors, including eaves and boundary walls.",
        },
        {
          title: "Surface repair & skim coating",
          description:
            "Crack filling, putty patching, sanding, and skim coat on uneven or damaged plaster.",
        },
        {
          title: "Priming & damp treatment",
          description:
            "Alkali-resistant primer on bare plaster and spot treatment for minor damp patches.",
        },
        {
          title: "Feature walls & colour advice",
          description:
            "Accent walls, two-tone layouts, and practical sheen recommendations for each room.",
        },
      ],
      idealFor: [
        "Move-in / move-out condominium repainting",
        "Refreshing landed terrace exteriors against Malaysian rain & sun",
        "Fixing peeling paint, hairline cracks, and plaster patches",
      ],
      process: [
        {
          title: "Colour & condition review",
          description:
            "We check the walls under daylight, discuss sheen and colour, and note cracks, damp, or previous patch repairs.",
        },
        {
          title: "Masking & preparation",
          description:
            "Floors, furniture, switches, and frames are covered; surfaces are cleaned, sanded, and patched.",
        },
        {
          title: "Primer & finish coats",
          description:
            "Primer goes on bare or repaired areas, followed by two full coats applied at the correct thinning ratio.",
        },
        {
          title: "Inspection & touch-up",
          description:
            "We inspect under raking light, touch up cut lines and corners, then remove all masking and clean up.",
        },
      ],
      goodToKnow: [
        "Malaysian humidity is hard on exterior paint. A weather-shield topcoat over a properly primed wall lasts noticeably longer than a single economical coat.",
        "Fresh plaster needs about 28 days to cure before painting; trapping moisture too early causes bubbling and peeling.",
        "Colour patches look different on each wall because of light direction—test a 1m² sample before committing to a full room.",
      ],
      faqs: [
        {
          question: "Do you supply the paint?",
          answer:
            "Yes. We quote using Dulux, Nippon, or Jotun systems and include the paint in the price. If you prefer to buy your own, we can quote labour and materials separately.",
        },
        {
          question: "How many coats do you apply?",
          answer:
            "Two full finish coats over a primer on bare or repaired areas. Previously painted walls in good condition usually receive two coats with spot priming where needed.",
        },
        {
          question: "Can you paint while we are living in the unit?",
          answer:
            "Yes. We work room by room and move furniture to the centre before covering it. Wet areas stay clear and we clean up at the end of each day.",
        },
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
      approach:
        "A ceiling only looks premium if the lines are straight and the lighting is planned first. We set the border height against your beam and aircond, mark a level line around the room, and build the frame so every L-box return and downlight sits where it should.",
      timeline:
        "2–4 days for a living and dining L-box; 1–2 days for a single flat room.",
      materials:
        "9mm and 12mm gypsum boards · galvanised iron framing · joint compound and paper tape · moisture-resistant boards for wet areas · LED cove profiles and downlight cut-outs",
      image: "/images/service-ceiling.jpg",
      imageAlt: "Modern perimeter L-box gypsum plaster ceiling with warm LED cove lighting and recessed downlights in a KL apartment",
      ctaLabel: "Ceiling Services",
      bullets: [
        "Modern L-box & concealed LED light trough ceilings",
        "Flat gypsum board ceiling installation & patching",
        "Cornice, plaster mouldings & fan hook reinforcement",
      ],
      included: [
        {
          title: "L-box & cove ceilings",
          description:
            "Perimeter L-box designs with concealed LED troughs and a clean shadow line.",
        },
        {
          title: "Flat gypsum ceilings",
          description:
            "Level flat ceilings for living areas, bedrooms, and corridors, finished smooth for painting.",
        },
        {
          title: "Cornice & plaster mouldings",
          description:
            "Cove cornice, step mouldings, and feature borders fitted with tight, straight joints.",
        },
        {
          title: "Bathroom & kitchen boards",
          description:
            "Moisture-resistant gypsum with access panels for plumbing and aircond servicing.",
        },
        {
          title: "Ceiling repairs & patching",
          description:
            "Replacement of sagging, cracked, or water-stained sections with re-taped joints.",
        },
      ],
      idealFor: [
        "Living & dining hall L-box makeovers with warm cove lighting",
        "Concealing exposed wiring, aircond trunking, and sprinkler pipes",
        "Repairing water-damaged ceiling panels cleanly",
      ],
      process: [
        {
          title: "Measure & lighting plan",
          description:
            "We confirm ceiling height, beam positions, aircond clearance, and where the cove and downlights will fall.",
        },
        {
          title: "Level line & framing",
          description:
            "A laser level sets the perimeter; galvanised frames and suspension rods are fixed at the correct spacing.",
        },
        {
          title: "Boarding & jointing",
          description:
            "Boards are screwed, taped, and skimmed in stages so joints dry flat and disappear under paint.",
        },
        {
          title: "Lighting, paint & handover",
          description:
            "Cove lights, downlights, and fan hooks are fitted, then the ceiling is painted and inspected under light.",
        },
      ],
      goodToKnow: [
        "Cove lighting works best with a trough depth of at least 150–200mm; too shallow and you will see the LED dots instead of a soft wash.",
        "Leave at least 50mm clearance around aircond blowers and access panels so servicing does not require cutting the board.",
        "Moisture-resistant boards cost a little more but are the right choice for bathrooms and utility areas.",
      ],
      faqs: [
        {
          question: "How much ceiling height will I lose?",
          answer:
            "A flat ceiling typically drops 150–200mm below the slab. An L-box with cove lighting usually needs 250–350mm at the perimeter, with the centre left higher.",
        },
        {
          question: "Can you match an existing ceiling?",
          answer:
            "Yes. We can tie a new section into an existing flat or L-box ceiling, matching board thickness, joint lines, and paint finish as closely as possible.",
        },
        {
          question: "Do you repair water-damaged ceilings?",
          answer:
            "We remove the stained or sagging boards, inspect the source of the leak, replace the section, and re-skim the joints. The leak itself should be fixed first to prevent a repeat.",
        },
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
      approach:
        "Most plumbing problems are found by following the water, not by guessing. We ask when the leak appears, isolate the affected line, and check the simplest causes first—supply pressure, a failed seal, or a blocked trap—before recommending any hacking.",
      timeline:
        "Most repairs are completed in 1–3 hours; concealed pipe rerouting or a full bathroom refit takes 1–3 days.",
      materials:
        "PN16 PPR hot/cold pipe · brass compression fittings · stainless-steel braided hoses · ceramic-disc mixer taps · PVC waste and drainage fittings",
      image: "/images/service-plumbing.jpg",
      imageAlt: "Technician neatly installing a modern brushed-stainless kitchen mixer tap and PPR fittings",
      ctaLabel: "Plumbing Services",
      bullets: [
        "Leaking pipe detection & concealed PPR pipe repair",
        "Tap, mixer, angle valve & cistern replacement",
        "Kitchen sink & bathroom basin installation",
      ],
      included: [
        {
          title: "Leak detection & concealed repair",
          description:
            "Pressure testing and careful tracing to locate the leak, followed by the smallest necessary opening.",
        },
        {
          title: "Tap, mixer & valve replacement",
          description:
            "Kitchen mixers, basin taps, angle valves, stopcocks, and shower fittings replaced with matched parts.",
        },
        {
          title: "Sink & basin installation",
          description:
            "Kitchen sinks, bathroom basins, and waste connections fitted level with clean silicone lines.",
        },
        {
          title: "WC & cistern repairs",
          description:
            "Flush mechanisms, fill valves, seals, and toilet bowls repaired or replaced without unnecessary demolition.",
        },
        {
          title: "Tank, pump & filter setup",
          description:
            "Water tanks, booster pumps, and outdoor filters installed with correct pressure and bypass planning.",
        },
      ],
      idealFor: [
        "Tracing hidden bathroom or ceiling water seepage",
        "Upgrading rusty galvanized pipes to durable PPR piping",
        "Replacing leaking kitchen mixers, bidets, and stopcocks",
      ],
      process: [
        {
          title: "Describe & isolate",
          description:
            "Send photos or a short video; we help you shut off the relevant valve and narrow down the source.",
        },
        {
          title: "On-site diagnosis",
          description:
            "We test pressure, check joints and traps, and confirm whether a repair or replacement is the better value.",
        },
        {
          title: "Repair or installation",
          description:
            "The pipe, fitting, or fixture is replaced with matched parts, and surfaces are kept as dry and clean as possible.",
        },
        {
          title: "Flow & leak test",
          description:
            "We run hot and cold water, check drainage, and inspect every joint before handover.",
        },
      ],
      goodToKnow: [
        "Know where your main stopcock and individual fixture valves are before an emergency; a five-minute shutdown prevents most water damage.",
        "A dripping mixer is often a worn cartridge, not a broken body—replacing the cartridge is cheaper and faster than changing the whole tap.",
        "Low pressure on upper floors is usually a supply or booster issue, not a blocked tap; check the pump and filter before replacing fixtures.",
      ],
      faqs: [
        {
          question: "Can you find a leak without hacking the wall?",
          answer:
            "Often, yes. We start with pressure testing and isolated checks. If the leak is behind tiles, we use the smallest opening necessary and patch it neatly afterwards.",
        },
        {
          question: "Do you replace galvanised pipes with PPR?",
          answer:
            "Yes. PN16 PPR is suitable for hot and cold supply, resists corrosion, and has a long service life. We can replace a section or reroute a full line.",
        },
        {
          question: "Why does my kitchen sink drain slowly?",
          answer:
            "Usually grease and food waste in the trap or waste pipe. We clear the blockage, check the trap alignment, and advise on a strainer to prevent a repeat.",
        },
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
      "Real residential and commercial scopes completed across Cheras, Setapak, Kepong, KLCC, Mont Kiara, and Ampang—with materials and workmanship details upfront.",
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
      image: "/images/work/painting-hallway.jpg",
      imageAlt: "Freshly painted 3-bedroom condominium interior in Cheras, Kuala Lumpur",
      featured: true,
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
      image: "/images/work/plaster-circle-led.jpg",
      imageAlt: "Modern perimeter L-box plaster ceiling with warm LED cove lighting in Setapak, KL",
      featured: true,
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
      image: "/images/work/plumbing-leak-repair.jpg",
      imageAlt: "Clean modern plumbing fixture and PPR pipe replacement work in Kepong, Kuala Lumpur",
      featured: true,
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
      image: "/images/work/electrical-bedroom-fan.jpg",
      imageAlt: "Designer matte-black track spotlights and modern electrical switches in a KLCC luxury suite",
      featured: true,
    },
    {
      id: "mont-kiara-aircond-installation",
      slug: "mont-kiara-aircond-installation",
      title: "Multi-Room Inverter Aircond Installation",
      location: "Mont Kiara, Kuala Lumpur",
      propertyType: "Residential · Condominium",
      category: "aircond-installation",
      categoryLabel: "Aircond Installation",
      summary:
        "Supplied and installed three Daikin inverter split air conditioners (1.0HP and 2.0HP) with heavy-gauge insulated copper piping and condensation-free drainage routed neatly to the AC ledge.",
      materials: "Daikin Inverter Units, Heavy-Gauge Insulated Copper Pipes & Condo-Compliant Mounting",
      image: "/images/work/aircond-cassette.jpg",
      imageAlt: "Multi-room Daikin inverter aircond installation in a Mont Kiara condominium",
    },
    {
      id: "ampang-exterior-repainting",
      slug: "ampang-exterior-repainting",
      title: "Exterior House Repainting & Weatherproofing",
      location: "Ampang, Kuala Lumpur",
      propertyType: "Residential · Semi-Detached House",
      category: "painting",
      categoryLabel: "House Painting",
      summary:
        "High-pressure jet wash cleaning of fungal growth, weather-resistant sealer application, and two coats of Jotun Jotashield Extreme for maximum UV protection on a semi-detached home.",
      materials: "High-Pressure Wall Cleaning, Weatherproof Sealer & Jotun Jotashield Extreme",
      image: "/images/work/exterior-repainting.jpg",
      imageAlt: "Exterior house repainting and weatherproofing in Ampang, Kuala Lumpur",
    },
    {
      id: "living-hall-lbox-ceiling",
      slug: "living-hall-lbox-ceiling",
      title: "Living Hall L-Box Ceiling with Cove Lighting",
      location: "Kuala Lumpur",
      propertyType: "Residential · Landed Home",
      category: "plaster-ceiling",
      categoryLabel: "Plaster Ceiling",
      summary:
        "Completed plaster ceiling with perimeter L-box, warm LED cove lighting, recessed downlights, ceiling fan anchors, and a cassette aircond cut-out in the living hall.",
      materials: "L-Box with LED Cove, Downlights & Fan Point, Cassette Aircond Opening",
      image: "/images/work/living-lbox-cassette.jpg",
      imageAlt: "Living hall L-box ceiling with LED cove lighting and cassette aircond in Kuala Lumpur",
    },
    {
      id: "staircase-led-strip-wall-light",
      slug: "staircase-led-strip-wall-light",
      title: "Staircase LED Strip and Wall Light",
      location: "Kuala Lumpur",
      propertyType: "Residential · Double Storey",
      category: "electrical",
      categoryLabel: "Electrical",
      summary:
        "Installed a concealed LED strip along the stair skirting line and a designer wall sconce for safe, even lighting on the staircase.",
      materials: "Concealed Stair LED Strip, Wall Sconce Wiring & Clean Switch Point",
      image: "/images/work/electrical-stair-led.jpg",
      imageAlt: "Concealed staircase LED strip and designer wall light in a Kuala Lumpur double-storey home",
    },
    {
      id: "bedroom-split-aircond-cove-ceiling",
      slug: "bedroom-split-aircond-cove-ceiling",
      title: "Bedroom Split Aircond with Cove Ceiling",
      location: "Kuala Lumpur",
      propertyType: "Residential · Bedroom",
      category: "aircond-installation",
      categoryLabel: "Aircond Installation",
      summary:
        "Wall-mounted split aircond installed with neat indoor unit positioning, matching plaster ceiling downlights, and a warm LED cove around the room.",
      materials: "Split Indoor Unit, Neat Wall Mounting & Aligned Ceiling Lighting",
      image: "/images/work/aircond-split-bedroom.jpg",
      imageAlt: "Bedroom split aircond installation with cove ceiling and downlights in Kuala Lumpur",
    },
    {
      id: "feature-tv-wall-interior-finishing",
      slug: "feature-tv-wall-interior-finishing",
      title: "Feature TV Wall and Interior Finishing",
      location: "Kuala Lumpur",
      propertyType: "Residential · Living Hall",
      category: "painting",
      categoryLabel: "House Painting",
      summary:
        "Interior finishing around the TV feature wall with painted surfaces, cove lighting, and a clean living hall presentation after ceiling and lighting works.",
      materials: "Interior Wall Finishing, Cove Lighting Backdrop & Living Hall Presentation",
      image: "/images/work/interior-tv-wall.jpg",
      imageAlt: "Feature TV wall and interior finishing in a Kuala Lumpur living hall",
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
      "Explore recent residential and commercial work completed across Cheras, Setapak, Kepong, KLCC, Mont Kiara, and Ampang.",
    contactTitle: "Contact RapiWorks KL",
    contactSubtitle:
      "Fastest response via WhatsApp—send your location, required service, and photos for an honest, itemised quotation.",
    includedHeading: "What's Included in This Service",
    requestQuoteFor: "WhatsApp for a Quote on",
    backToServices: "All Services",
    otherServices: "Explore Our Other Trades",
    overviewEyebrow: "Service Overview",
    approachHeading: "How We Approach the Work",
    atGlanceHeading: "At a Glance",
    timelineLabel: "Typical duration",
    materialsLabel: "Materials & brands",
    bestForLabel: "Best suited to",
    processHeading: "From First Check to Handover",
    scopeCtaTitle: "Not sure if your job is covered?",
    scopeCtaBody:
      "Send a photo and a short description. We will confirm what is included and what is not before quoting.",
    scopeCtaLabel: "Ask on WhatsApp",
    relatedProjectsHeading: "Recent Work in This Trade",
    viewAllProjects: "View all projects",
    goodToKnowHeading: "Good to Know",
    faqHeading: "Common Questions",
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
      approach:
        "Kami tentukan saiz unit berdasarkan ruang, bukan berdasarkan stok di kedai. Sebelum bracket dipasang, kami semak ketinggian siling, kedudukan tingkap, akses ledge luar, dan laluan saliran yang boleh mengalir secara semula jadi. Perancangan inilah yang memastikan unit kekal sejuk, senyap, dan kering selepas berbulan-bulan digunakan.",
      timeline:
        "Separuh hari hingga satu hari untuk satu unit split; 2–3 hari untuk dua hingga tiga unit atau laluan paip tersembunyi.",
      materials:
        "Unit inverter Daikin, Panasonic, Mitsubishi atau Midea · paip tembaga bertebat 0.71mm · penebat Armaflex · trunking tahan UV · paip saliran PVC 1.5mm",
      image: "/images/service-aircond.jpg",
      imageAlt: "Juruteknik memasang unit aircond split moden di ruang tamu kondominium Kuala Lumpur",
      ctaLabel: "Servis Aircond",
      bullets: [
        "Pemasangan unit aircond split dinding kediaman",
        "Pemasangan pemampat di balkoni & ledge kondominium",
        "Paip tembaga berpenebat & saliran air bebas bocor",
      ],
      included: [
        {
          title: "Bekalan & pemasangan unit split",
          description:
            "Unit inverter dinding daripada jenama dipercayai, dipilih mengikut saiz ruang dan dipasang rata.",
        },
        {
          title: "Paip tembaga bertebat",
          description:
            "Paip tembaga bersaiz betul dengan penebat sel tertutup, dipasang kemas dalam trunking atau tersembunyi.",
        },
        {
          title: "Bracket atau ledge unit luar",
          description:
            "Bracket tergalvani atau rangka ledge dipasang dengan anchor yang sesuai untuk dinding kondo dan rumah.",
        },
        {
          title: "Saliran & ujian vacuum",
          description:
            "Saliran PVC bercerun, ujian tekanan, dan vacuum sebelum gas dilepaskan.",
        },
        {
          title: "Membuka & menggantikan unit lama",
          description:
            "Pump-down selamat, tanggalkan unit dan bracket lama, serta pelupusan yang betul.",
        },
      ],
      idealFor: [
        "Pemasangan aircond rumah atau kondominium baharu",
        "Menukar unit lama kepada aircond inverter jimat tenaga",
        "Memindahkan unit dalaman atau membaiki saliran aircond",
      ],
      process: [
        {
          title: "Semakan tapak & saiz",
          description:
            "Kami ukur ruang, sahkan HP, dan persetujui kedudukan unit dalaman serta luaran sebelum sebut harga.",
        },
        {
          title: "Kerja paip & bracket",
          description:
            "Laluan tembaga, cerun saliran, dan bracket atau rangka ledge dipasang terlebih dahulu.",
        },
        {
          title: "Pemasangan & vacuum",
          description:
            "Unit dipasang rata, sambungan diuji tekanan, dan sistem divacuum sebelum gas dilepaskan.",
        },
        {
          title: "Ujian & serahan",
          description:
            "Kami jalankan kitaran penyejukan penuh, periksa kebocoran saliran dan getaran, kemudian terangkan penapis serta tetapan remote.",
        },
      ],
      goodToKnow: [
        "Kondo biasanya memerlukan permit JMB dan deposit sebelum unit luar dipasang; kami boleh sediakan butiran kerja untuk permohonan anda.",
        "Biarkan ruang lapang sekitar 15cm di sekeliling unit luar. Ruang tertutup memerangkap haba dan membuat pemampat bekerja lebih kuat.",
        "Unit terlalu besar menyejukkan cepat tetapi kurang menyahkan lembapan; padanan HP dengan saiz ruang memberi keselesaan dan bil elektrik yang lebih baik.",
      ],
      faqs: [
        {
          question: "Berapa HP yang saya perlukan untuk bilik saya?",
          answer:
            "Panduan kasar: 9,000 BTU (1.0 HP) untuk ruang sehingga kira-kira 120 kaki persegi, 12,000 BTU (1.5 HP) untuk 120–180 kaki persegi, dan 18,000 BTU (2.0 HP) untuk 180–280 kaki persegi. Siling tinggi, dinding menghadap barat, dan kawasan kaca mungkin perlukan satu saiz lebih besar. Kami sahkan semasa lawatan.",
        },
        {
          question: "Boleh pasang tanpa menebuk dinding?",
          answer:
            "Boleh. Paip tembaga bertebat boleh dipasang dalam trunking permukaan atau melalui laluan sedia ada. Kerja menebuk hanya perlu jika anda mahu paip tersembunyi sepenuhnya pada dinding yang belum ada laluan.",
        },
        {
          question: "Adakah anda uruskan permit kondo?",
          answer:
            "Kami sediakan kedudukan unit, butiran bracket, dan jadual kerja yang diperlukan pihak pengurusan. Permohonan dan deposit biasanya diuruskan pemilik, tetapi kami boleh hadir untuk taklimat tapak jika perlu.",
        },
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
      approach:
        "Kerja elektrik yang baik sepatutnya tidak memberi masalah: tiada lampu berkelip, tiada soket panas, tiada breaker yang trip apabila cerek dan aircond digunakan serentak. Kami kesan litar terlebih dahulu sebelum menambah beban, menggunakan kotak sambungan dan saiz kabel yang betul, serta menguji setiap titik sebelum dinding ditutup.",
      timeline:
        "Kebanyakan kerja lampu dan soket siap dalam sehari; naik taraf DB atau pendawaian semula seluruh unit mengambil 2–4 hari.",
      materials:
        "Kabel PVC 1.5mm²–4mm² mematuhi Suruhanjaya Tenaga · breaker Hager, Schneider atau ABB · suis dan soket MK atau Clipsal · downlight dan sistem lampu trek LED · cangkuk kipas tergalvani",
      image: "/images/service-electrical.jpg",
      imageAlt: "Ruang tamu moden Kuala Lumpur dengan lampu trek hitam, downlight dan suis dimmer baharu",
      ctaLabel: "Servis Elektrik",
      bullets: [
        "Pemasangan lampu & penukaran downlight LED",
        "Pemasangan kipas siling & pengukuhan struktur",
        "Soket kuasa baharu, suis & titik isolator aircond",
      ],
      included: [
        {
          title: "Titik lampu & downlight",
          description:
            "Titik baharu, penukaran downlight LED, lampu trek, dan suis serasi dimmer.",
        },
        {
          title: "Kipas siling & lekapan berat",
          description:
            "Cangkuk kipas diikat pada slab konkrit, bilah diseimbangkan, dan jarak selamat dari siling.",
        },
        {
          title: "Soket kuasa & suis",
          description:
            "Titik 13A tambahan untuk dapur, konsol TV, meja kerja, dan peralatan rumah.",
        },
        {
          title: "Titik isolator & pemanas air",
          description:
            "Isolator khas untuk aircond dan pemanas air, didawai dan dinilai mengikut spesifikasi.",
        },
        {
          title: "Semakan DB & diagnosis trip",
          description:
            "Pemeriksaan breaker, ELCB, dan pembumian, serta pembetulan litar longgar atau terbeban.",
        },
      ],
      idealFor: [
        "Menukar lampu lama kepada downlight LED atau lampu trek moden",
        "Menambah soket dapur, konsol TV, atau ruang kerja di rumah",
        "Mengesan punca ELCB/MCB kerap trip",
      ],
      process: [
        {
          title: "Semakan & beban litar",
          description:
            "Kami petakan litar sedia ada, sahkan beban setiap titik baharu, dan kenal pasti had kotak DB.",
        },
        {
          title: "Sebut harga & jadual",
          description:
            "Anda terima senarai titik, aksesori, dan laluan kabel yang terperinci, serta tarikh kerja yang mematuhi peraturan bangunan.",
        },
        {
          title: "Pendawaian & pemasangan",
          description:
            "Kabel, kotak, dan aksesori dipasang dengan bekalan elektrik diasingkan; dinding ditampal semula dengan kemas.",
        },
        {
          title: "Ujian & pelabelan",
          description:
            "Setiap litar diuji, breaker dilabel, dan kami terangkan apa yang telah ditambah.",
        },
      ],
      goodToKnow: [
        "Breaker yang trip adalah petunjuk, bukan punca. Kami uji kebocoran bumi, beban berlebihan, dan sambungan longgar—bukan sekadar menekan suis semula.",
        "Untuk renovasi kondo, jadualkan kerja elektrik sebelum siling dan cat supaya kabel serta kotak tersembunyi.",
        "Jika DB tiada ruang kosong, litar baharu mungkin memerlukan papan yang lebih besar—baik diketahui sebelum membeli aksesori.",
      ],
      faqs: [
        {
          question: "Perlukah permit untuk kerja elektrik?",
          answer:
            "Penggantian titik lampu dan soket biasanya tidak memerlukan permit. Bekalan baharu, naik taraf meter, atau penggantian DB besar diurus melalui juruelektrik berlesen dan pihak berkuasa berkaitan. Kami akan beritahu kategori kerja anda.",
        },
        {
          question: "Boleh pasang kipas siling pada siling kapur?",
          answer:
            "Boleh, tetapi ia perlukan cangkuk kipas khas yang diikat pada slab konkrit, bukan hanya papan gipsum. Kami semak akses slab dan kukuhkan titik pemasangan sebelum kipas digantung.",
        },
        {
          question: "Mengapa ELCB trip pada waktu malam?",
          answer:
            "Trip pada waktu malam sering berpunca daripada pemanas air, aircond, atau lampu luar yang kemasukan lembapan. Kami asingkan litar satu demi satu untuk cari punca sebenar, bukan menukar komponen secara rawak.",
        },
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
      approach:
        "Kerja cat yang baik bergantung pada persediaan. Kami cuci dan pasir permukaan, buang bahagian mengelupas, tampal rekahan dan lubang halus, serta sapu primer pada plaster kosong sebelum lapisan pertama. Lapisan akhir mudah—tetapi ia hanya nampak kemas jika dinding di bawahnya kukuh.",
      timeline:
        "2–3 hari untuk kondo tiga bilik biasa; 4–6 hari untuk luaran rumah bertanah termasuk kerja pembaikan.",
      materials:
        "Dulux Weathershield & EasyClean · Nippon Paint Odour-less & Weatherbond · Jotun Fenomastic · primer tahan alkali · caulk akrilik dan skim coat",
      image: "/images/service-painting.jpg",
      imageAlt: "Ruang tamu kondominium moden di Kuala Lumpur yang baru siap dicat dengan kemasan rapi",
      ctaLabel: "Servis Mengecat",
      bullets: [
        "Mengecat dinding dalaman & keseluruhan kondominium",
        "Cat fasad luaran rumah & lapisan tahan cuaca",
        "Persediaan dinding, skim coat & baiki rekahan",
      ],
      included: [
        {
          title: "Dinding & siling dalaman",
          description:
            "Dua lapisan cat untuk ruang tamu, bilik tidur, dapur, dan siling dengan garis potong yang kemas.",
        },
        {
          title: "Fasad luaran",
          description:
            "Lapisan tahan cuaca untuk rumah teres, semi-D, dan luaran apartmen, termasuk cucur atap dan dinding sempadan.",
        },
        {
          title: "Pembaikan permukaan & skim coat",
          description:
            "Tampal rekahan, putty, pasir, dan skim coat pada plaster yang tidak rata atau rosak.",
        },
        {
          title: "Primer & rawatan lembapan",
          description:
            "Primer tahan alkali pada plaster kosong dan rawatan setempat untuk kesan lembapan kecil.",
        },
        {
          title: "Dinding tumpuan & nasihat warna",
          description:
            "Dinding aksen, susunan dua nada, dan cadangan kemasan yang sesuai untuk setiap ruang.",
        },
      ],
      idealFor: [
        "Mengecat semula kondominium sebelum masuk atau selepas penyewa keluar",
        "Menyegarkan dinding luar rumah teres daripada cuaca panas dan hujan",
        "Membaiki cat mengelupas dan rekahan plaster dinding",
      ],
      process: [
        {
          title: "Semakan warna & keadaan",
          description:
            "Kami periksa dinding di bawah cahaya siang, bincang jenis kemasan dan warna, serta catat rekahan, lembapan, atau tampalan lama.",
        },
        {
          title: "Penutupan & persediaan",
          description:
            "Lantai, perabot, suis, dan bingkai ditutup; permukaan dicuci, dipasir, dan ditampal.",
        },
        {
          title: "Primer & lapisan cat",
          description:
            "Primer disapu pada kawasan kosong atau ditampal, diikuti dua lapisan penuh mengikut nisbah pencairan yang betul.",
        },
        {
          title: "Pemeriksaan & sentuhan akhir",
          description:
            "Kami periksa di bawah cahaya serong, sentuh garis potong dan sudut, kemudian buka semua penutup dan bersihkan kawasan.",
        },
      ],
      goodToKnow: [
        "Kelembapan Malaysia mudah merosakkan cat luaran. Lapisan weather-shield di atas dinding yang diprimer dengan betul bertahan lebih lama daripada satu lapisan cat ekonomi.",
        "Plaster baharu perlu kira-kira 28 hari untuk matang sebelum dicat; kelembapan terperangkap terlalu awal menyebabkan gelembung dan cat mengelupas.",
        "Warna nampak berbeza pada setiap dinding kerana arah cahaya—uji sampel 1m² sebelum mengecat seluruh ruang.",
      ],
      faqs: [
        {
          question: "Adakah anda membekalkan cat?",
          answer:
            "Ya. Kami sebut harga menggunakan sistem Dulux, Nippon, atau Jotun dan kos cat termasuk dalam harga. Jika anda mahu beli sendiri, kami boleh sebut harga upah dan bahan secara berasingan.",
        },
        {
          question: "Berapa lapisan cat yang digunakan?",
          answer:
            "Dua lapisan penuh di atas primer pada kawasan kosong atau ditampal. Dinding yang sudah dicat dan dalam keadaan baik biasanya menerima dua lapisan dengan primer setempat.",
        },
        {
          question: "Boleh cat semasa kami masih tinggal di rumah?",
          answer:
            "Boleh. Kami bekerja bilik demi bilik dan alih perabot ke tengah sebelum ditutup. Kawasan basah dibiarkan lapang dan kami bersihkan pada hujung setiap hari.",
        },
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
      approach:
        "Siling hanya nampak berkualiti jika garisnya lurus dan pencahayaan dirancang dahulu. Kami tetapkan ketinggian border berdasarkan rasuk dan aircond, tandakan garis aras di sekeliling ruang, dan bina rangka supaya setiap sudut L-box dan downlight berada di tempat yang betul.",
      timeline:
        "2–4 hari untuk L-box ruang tamu dan ruang makan; 1–2 hari untuk satu ruang rata.",
      materials:
        "Papan gipsum 9mm dan 12mm · rangka besi tergalvani · sebatian sambungan dan pita kertas · papan tahan lembap untuk kawasan basah · profil lampu cove dan potongan downlight LED",
      image: "/images/service-ceiling.jpg",
      imageAlt: "Siling kapur L-box moden dengan pencahayaan cove LED hangat di kondominium Kuala Lumpur",
      ctaLabel: "Servis Siling",
      bullets: [
        "Siling L-box moden & ruang lampu cove LED",
        "Pemasangan siling papan gipsum rata & tampalan",
        "Kornis, ukiran plaster & penyangkut kipas kukuh",
      ],
      included: [
        {
          title: "Siling L-box & cove",
          description:
            "Reka bentuk L-box perimeter dengan trough LED tersembunyi dan garis bayang yang bersih.",
        },
        {
          title: "Siling gipsum rata",
          description:
            "Siling rata untuk ruang tamu, bilik tidur, dan koridor, dikemaskan untuk kerja cat.",
        },
        {
          title: "Cornice & ukiran plaster",
          description:
            "Cornice cove, ukiran bertingkat, dan border hiasan dengan sambungan rapat dan lurus.",
        },
        {
          title: "Papan bilik air & dapur",
          description:
            "Gipsum tahan lembap dengan panel akses untuk kerja paip dan aircond.",
        },
        {
          title: "Pembaikan & tampalan siling",
          description:
            "Penggantian bahagian melendut, retak, atau berbekas air dengan sambungan yang dipita semula.",
        },
      ],
      idealFor: [
        "Naik taraf ruang tamu dan ruang makan dengan L-box berlampu hangat",
        "Menyorok pendawaian terdedah dan laluan paip aircond",
        "Membaiki bahagian siling rosak akibat kebocoran air",
      ],
      process: [
        {
          title: "Ukur & rancang pencahayaan",
          description:
            "Kami sahkan ketinggian siling, kedudukan rasuk, ruang aircond, dan lokasi lampu cove serta downlight.",
        },
        {
          title: "Garis aras & rangka",
          description:
            "Aras laser menetapkan perimeter; rangka tergalvani dan rod penyokong dipasang pada jarak yang betul.",
        },
        {
          title: "Papan & sambungan",
          description:
            "Papan diskru, dipita, dan diskim secara berperingkat supaya sambungan kering rata dan tidak kelihatan di bawah cat.",
        },
        {
          title: "Lampu, cat & serahan",
          description:
            "Lampu cove, downlight, dan cangkuk kipas dipasang, kemudian siling dicat dan diperiksa di bawah cahaya.",
        },
      ],
      goodToKnow: [
        "Lampu cove paling kemas dengan kedalaman trough sekurang-kurangnya 150–200mm; terlalu cetek dan titik LED akan kelihatan, bukan cahaya lembut.",
        "Biarkan ruang sekurang-kurangnya 50mm di sekeliling blower aircond dan panel akses supaya servis tidak perlu memotong papan.",
        "Papan tahan lembap lebih mahal sedikit tetapi pilihan tepat untuk bilik air dan ruang utiliti.",
      ],
      faqs: [
        {
          question: "Berapa banyak ketinggian siling yang akan hilang?",
          answer:
            "Siling rata biasanya turun 150–200mm dari slab. L-box dengan lampu cove biasanya memerlukan 250–350mm di perimeter, manakala bahagian tengah dibiarkan lebih tinggi.",
        },
        {
          question: "Boleh padankan dengan siling sedia ada?",
          answer:
            "Boleh. Kami boleh sambungkan bahagian baharu dengan siling rata atau L-box sedia ada, memadankan ketebalan papan, garis sambungan, dan kemasan cat sedekat mungkin.",
        },
        {
          question: "Adakah anda membaiki siling rosak akibat air?",
          answer:
            "Kami tanggalkan papan yang berbekas atau melendut, periksa punca kebocoran, ganti bahagian tersebut, dan skim semula sambungan. Kebocoran perlu dibaiki dahulu untuk elak berulang.",
        },
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
      approach:
        "Kebanyakan masalah paip ditemui dengan mengikut aliran air, bukan meneka. Kami tanya bila kebocoran berlaku, asingkan paip terlibat, dan periksa punca paling mudah dahulu—tekanan bekalan, seal rosak, atau trap tersumbat—sebelum mencadangkan kerja menebuk.",
      timeline:
        "Kebanyakan pembaikan siap dalam 1–3 jam; laluan semula paip tersembunyi atau refit bilik air penuh mengambil 1–3 hari.",
      materials:
        "Paip PPR PN16 panas/sejuk · penyambung loyang · hos jalinan keluli tahan karat · pili mixer cakera seramik · penyambung buangan dan saliran PVC",
      image: "/images/service-plumbing.jpg",
      imageAlt: "Juruteknik memasang pili dapur keluli moden dan sambungan paip PPR dengan kemas",
      ctaLabel: "Servis Paip",
      bullets: [
        "Pengesanan & pembaikan paip bocor dalam dinding",
        "Penukaran pili, mixer, injap & tangki tandas",
        "Pemasangan sinki dapur & besen bilik air",
      ],
      included: [
        {
          title: "Kesan & baiki kebocoran tersembunyi",
          description:
            "Ujian tekanan dan pengesanan teliti untuk cari kebocoran, diikuti pembukaan ruang terkecil yang perlu.",
        },
        {
          title: "Tukar pili, mixer & injap",
          description:
            "Pili dapur, pili besen, injap sudut, stopcock, dan pancuran diganti dengan bahagian yang sepadan.",
        },
        {
          title: "Pemasangan sinki & besen",
          description:
            "Sinki dapur, besen bilik air, dan sambungan buangan dipasang rata dengan garisan silikon yang kemas.",
        },
        {
          title: "Baiki WC & tangki tandas",
          description:
            "Mekanisme flush, injap isi, seal, dan mangkuk tandas dibaiki atau diganti tanpa perobohan yang tidak perlu.",
        },
        {
          title: "Tangki, pam & penapis air",
          description:
            "Tangki air, booster pump, dan penapis luaran dipasang dengan tekanan serta perancangan bypass yang betul.",
        },
      ],
      idealFor: [
        "Mengesan kebocoran air tersembunyi di bilik air atau siling",
        "Menukar paip besi berkarat kepada paip PPR tahan lama",
        "Mengganti pili dapur, bidet, dan stopcock yang bocor",
      ],
      process: [
        {
          title: "Terangkan & asingkan",
          description:
            "Hantar gambar atau video ringkas; kami bantu tutup injap berkaitan dan kenal pasti punca.",
        },
        {
          title: "Diagnosis di tapak",
          description:
            "Kami uji tekanan, periksa sambungan dan trap, dan tentukan sama ada pembaikan atau penggantian lebih berbaloi.",
        },
        {
          title: "Baiki atau pasang",
          description:
            "Paip, penyambung, atau lekapan diganti dengan bahagian yang sepadan, dan permukaan dikekalkan kering serta bersih.",
        },
        {
          title: "Ujian aliran & kebocoran",
          description:
            "Kami jalankan air panas dan sejuk, periksa saliran, dan semak setiap sambungan sebelum serahan.",
        },
      ],
      goodToKnow: [
        "Kenal pasti lokasi stopcock utama dan injap setiap lekapan sebelum kecemasan; penutupan lima minit mengelakkan kebanyakan kerosakan air.",
        "Pili menitik selalunya disebabkan cartridge haus, bukan badan pili rosak—ganti cartridge lebih murah dan cepat daripada tukar seluruh pili.",
        "Tekanan rendah di tingkat atas biasanya masalah bekalan atau booster, bukan pili tersumbat; semak pam dan penapis sebelum menukar lekapan.",
      ],
      faqs: [
        {
          question: "Boleh kesan kebocoran tanpa menebuk dinding?",
          answer:
            "Selalunya boleh. Kami mulakan dengan ujian tekanan dan semakan berasingan. Jika kebocoran di belakang jubin, kami buka ruang terkecil yang perlu dan tampal semula dengan kemas.",
        },
        {
          question: "Adakah anda menukar paip besi kepada PPR?",
          answer:
            "Ya. PPR PN16 sesuai untuk bekalan panas dan sejuk, tahan karat, dan tahan lama. Kami boleh ganti satu bahagian atau laluan semula keseluruhan paip.",
        },
        {
          question: "Mengapa sinki dapur lambat mengalir?",
          answer:
            "Biasanya lemak dan sisa makanan dalam trap atau paip buangan. Kami bersihkan sumbatan, periksa kedudukan trap, dan cadangkan penapis untuk mengelakkan berulang.",
        },
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
      "Projek kediaman dan komersial sebenar yang disiapkan di Cheras, Setapak, Kepong, KLCC, Mont Kiara dan Ampang dengan skop bahan yang jelas.",
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
      image: "/images/work/painting-hallway.jpg",
      imageAlt: "Kondominium 3 bilik tidur di Cheras yang baru siap dicat semula",
      featured: true,
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
      image: "/images/work/plaster-circle-led.jpg",
      imageAlt: "Siling kapur L-box moden dengan lampu cove hangat di Setapak, Kuala Lumpur",
      featured: true,
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
      image: "/images/work/plumbing-leak-repair.jpg",
      imageAlt: "Kerja penukaran paip PPR dan kelengkapan paip moden di Kepong, Kuala Lumpur",
      featured: true,
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
      image: "/images/work/electrical-bedroom-fan.jpg",
      imageAlt: "Pemasangan lampu trek moden dan suis elektrik di suite mewah KLCC",
      featured: true,
    },
    {
      id: "mont-kiara-aircond-installation",
      slug: "mont-kiara-aircond-installation",
      title: "Pemasangan Aircond Inverter Multi-Bilik",
      location: "Mont Kiara, Kuala Lumpur",
      propertyType: "Kediaman · Kondominium Mont Kiara",
      category: "aircond-installation",
      categoryLabel: "Aircond",
      summary:
        "Pemasangan 3 unit pendingin hawa Daikin Inverter (1.0HP & 2.0HP). Laluan paip tembaga tebal dan saliran air buang kemas ke ruang pemampat.",
      materials: "Unit Daikin Inverter, Paip Tembaga Tebal Bertebat & Mematuhi Syarat Pengurusan Kondo",
      image: "/images/work/aircond-cassette.jpg",
      imageAlt: "Pemasangan aircond inverter berbilang bilik di kondominium Mont Kiara",
    },
    {
      id: "ampang-exterior-repainting",
      slug: "ampang-exterior-repainting",
      title: "Mengecat Dinding Luar Rumah Kalis Cuaca",
      location: "Ampang, Kuala Lumpur",
      propertyType: "Kediaman · Rumah Berkembar Semi-D",
      category: "painting",
      categoryLabel: "Mengecat Rumah",
      summary:
        "Cucian dinding tekanan tinggi menyingkirkan kulat, sapuan sealer kalis air dan 2 lapisan cat Jotun Jotashield Extreme kalis cuaca tropika.",
      materials: "Cucian Water Jet Tekanan Tinggi, Cat Jotun Jotashield & Perlindungan Tahan Lasak",
      image: "/images/work/exterior-repainting.jpg",
      imageAlt: "Kerja mengecat luaran dan kalis cuaca rumah di Ampang, Kuala Lumpur",
    },
    {
      id: "living-hall-lbox-ceiling",
      slug: "living-hall-lbox-ceiling",
      title: "Siling L-Box Dewan Tamu dengan Lampu Cove",
      location: "Kuala Lumpur",
      propertyType: "Kediaman · Rumah Landed",
      category: "plaster-ceiling",
      categoryLabel: "Siling Kapur",
      summary:
        "Siling plaster siap dengan L-box, lampu LED cove, downlight, cangkuk kipas, dan bukaan aircond kaset di dewan tamu.",
      materials: "L-Box dengan Lampu Cove, Downlight & Mata Kipas, Bukaan Aircond Kaset",
      image: "/images/work/living-lbox-cassette.jpg",
      imageAlt: "Siling L-box ruang tamu dengan lampu cove LED dan aircond cassette di Kuala Lumpur",
    },
    {
      id: "staircase-led-strip-wall-light",
      slug: "staircase-led-strip-wall-light",
      title: "Lampu LED Tangga dan Lampu Dinding",
      location: "Kuala Lumpur",
      propertyType: "Kediaman · 2 Tingkat",
      category: "electrical",
      categoryLabel: "Elektrik",
      summary:
        "Pemasangan jalur LED tersembunyi di tepi tangga dan lampu dinding untuk pencahayaan tangga yang rata dan selamat.",
      materials: "Jalur LED Tangga, Pendawaian Lampu Dinding & Suis Kemas",
      image: "/images/work/electrical-stair-led.jpg",
      imageAlt: "Jalur LED tangga tersembunyi dan lampu dinding di rumah dua tingkat Kuala Lumpur",
    },
    {
      id: "bedroom-split-aircond-cove-ceiling",
      slug: "bedroom-split-aircond-cove-ceiling",
      title: "Aircond Split Bilik dengan Siling Cove",
      location: "Kuala Lumpur",
      propertyType: "Kediaman · Bilik Tidur",
      category: "aircond-installation",
      categoryLabel: "Aircond",
      summary:
        "Pemasangan aircond split dinding bersama downlight siling plaster dan lampu cove LED hangat di sekeliling bilik.",
      materials: "Unit Indoor Split, Pemasangan Dinding Kemas & Lampu Siling Seiring",
      image: "/images/work/aircond-split-bedroom.jpg",
      imageAlt: "Pemasangan aircond split bilik tidur dengan siling cove dan downlight di Kuala Lumpur",
    },
    {
      id: "feature-tv-wall-interior-finishing",
      slug: "feature-tv-wall-interior-finishing",
      title: "Dinding TV dan Kemasan Dalaman",
      location: "Kuala Lumpur",
      propertyType: "Kediaman · Dewan Tamu",
      category: "painting",
      categoryLabel: "Mengecat Rumah",
      summary:
        "Kemasan dalaman di sekeliling dinding TV dengan cat, lampu cove, dan dewan tamu yang kemas selepas kerja siling dan lampu.",
      materials: "Kemasan Dinding Dalaman, Latar Lampu Cove & Dewan Tamu Siap",
      image: "/images/work/interior-tv-wall.jpg",
      imageAlt: "Dinding TV aksen dan kemasan dalaman ruang tamu di Kuala Lumpur",
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
      "Lihat projek kediaman dan komersial terkini yang disiapkan di Cheras, Setapak, Kepong, KLCC, Mont Kiara dan Ampang.",
    contactTitle: "Hubungi RapiWorks KL",
    contactSubtitle:
      "Maklum balas terpantas melalui WhatsApp—kongsi lokasi, jenis servis dan gambar untuk sebut harga yang telus.",
    includedHeading: "Skop Termasuk Dalam Servis Ini",
    requestQuoteFor: "WhatsApp Untuk Sebut Harga",
    backToServices: "Semua Perkhidmatan",
    otherServices: "Lihat Perkhidmatan Lain Kami",
    overviewEyebrow: "Gambaran Servis",
    approachHeading: "Pendekatan Kerja Kami",
    atGlanceHeading: "Ringkasan Servis",
    timelineLabel: "Tempoh biasa",
    materialsLabel: "Bahan & jenama",
    bestForLabel: "Paling sesuai untuk",
    processHeading: "Dari Semakan Pertama Hingga Serahan",
    scopeCtaTitle: "Tidak pasti kerja anda termasuk?",
    scopeCtaBody:
      "Hantar gambar dan penerangan ringkas. Kami sahkan apa yang termasuk dan tidak sebelum sebut harga.",
    scopeCtaLabel: "Tanya di WhatsApp",
    relatedProjectsHeading: "Kerja Terkini Dalam Servis Ini",
    viewAllProjects: "Lihat semua projek",
    goodToKnowHeading: "Perlu Diketahui",
    faqHeading: "Soalan Lazim",
  },
};

export function getContent(locale: string): SiteContent {
  return locale === "ms" ? msContent : enContent;
}
