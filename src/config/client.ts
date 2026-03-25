export const client = {
  // Business Details
  name: "Jon Webb The Helpful Gardener",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Swindon.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07714 037085",
  email: "",
  website: "",

  // Location
  address: "Swindon",
  city: "Swindon",
  county: "",
  postcode: "",
  basedIn: "Swindon",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "3",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "kibo kibo", rating: 5, text: "Needed a gardener to cut just the top of a 3m wide boundary hedge. I prepared full details and photos of the hedge, and send this to him. We agreed a date and cost. …  ", date: "Edited 5 months ago" },
    { name: "Harpal Singh", rating: 5, text: "We put a last minute call out for a gardener to do some light gardening work and Jon was the first to quickly respond and was happy to turn up the very next day. He kept us updated on his ETA throughout the day, and when he turned up it was …  ", date: "3 years ago" },
    { name: "T c", rating: 5, text: "Very nice guy, 1000% recommend to anyone that needs garden work. Very professional and he’s done a very good job. Thanks  ", date: "3 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Jon Webb The Helpful Gardener | Landscaper in Swindon",
    description: "Professional landscaper in Swindon. 5.0-star rated on Google. Call for a free quote.",
  },
};
