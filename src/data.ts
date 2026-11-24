import pistachioImage from "@/assets/pistachio.jpg";

export type Category = "all" | "classics" | "indulgent" | "indian" | "gifting";

export type Product = {
  id: string;
  name: string;
  italian: string;
  description: string;
  price: number;
  slicePrice: number;
  serves: string;
  image: string;
  alt: string;
  badge?: string;
  category: Exclude<Category, "all">;
  notes: string[];
};

export const categories: { id: Category; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "classics", label: "The classics" },
  { id: "indulgent", label: "Indulgent" },
  { id: "indian", label: "Indian-inspired" },
  { id: "gifting", label: "Celebration cakes" },
];

export const products: Product[] = [
  {
    id: "classica",
    name: "La Classica",
    italian: "Il favorito di tutti",
    description:
      "Espresso-soaked ladyfingers, cloud-soft mascarpone and a generous veil of bitter cocoa. The one that started it all.",
    price: 599,
    slicePrice: 149,
    serves: "Box of 4 · serves 2",
    image:
      "https://images.pexels.com/photos/10169991/pexels-photo-10169991.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=1000",
    alt: "Classic tiramisu cake dusted with cocoa on a ceramic plate",
    badge: "Bestseller",
    category: "classics",
    notes: ["Single-origin espresso", "Eggless", "24h rested"],
  },
  {
    id: "pistachio",
    name: "Pistachio Paradiso",
    italian: "Un sogno verde",
    description:
      "Slow-roasted Sicilian pistachio cream folded into mascarpone, finished with white chocolate curls and a whisper of sea salt.",
    price: 799,
    slicePrice: 199,
    serves: "Box of 4 · serves 2",
    image: pistachioImage,
    alt: "Pistachio tiramisù slice with crushed pistachios and white chocolate curls",
    badge: "New in",
    category: "indulgent",
    notes: ["Sicilian pistachio", "White chocolate", "Small batch"],
  },
  {
    id: "belgian",
    name: "Belgian Dark",
    italian: "Per i veri golosi",
    description:
      "Seventy percent Belgian couverture, hazelnut praline and an espresso ganache that lingers far longer than it should.",
    price: 699,
    slicePrice: 179,
    serves: "Box of 4 · serves 2",
    image:
      "https://images.pexels.com/photos/17211960/pexels-photo-17211960.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=1000",
    alt: "Rich dark chocolate tiramisu dessert on a glass plate",
    badge: "Critic's pick",
    category: "indulgent",
    notes: ["70% couverture", "Hazelnut praline", "Deep roast"],
  },
  {
    id: "rose",
    name: "Rose & Cardamom",
    italian: "L'anima indiana",
    description:
      "Gulkand-kissed mascarpone, green cardamom and candied rose petals. An Indian love letter to an Italian classic.",
    price: 699,
    slicePrice: 179,
    serves: "Box of 4 · serves 2",
    image:
      "https://images.pexels.com/photos/19582734/pexels-photo-19582734.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=1000",
    alt: "Tiramisu slice with berries on a blue plate",
    badge: "Atelier special",
    category: "indian",
    notes: ["Gulkand", "Green cardamom", "Rose petals"],
  },
  {
    id: "mango",
    name: "Mango & Saffron",
    italian: "La stagione d'oro",
    description:
      "Alphonso mango, saffron-steeped mascarpone and toasted pistachio. Summer in Moradabad, bottled in a box.",
    price: 649,
    slicePrice: 169,
    serves: "Box of 4 · serves 2",
    image:
      "https://images.pexels.com/photos/34807010/pexels-photo-34807010.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=1000",
    alt: "Tiramisu slice on a wooden café table",
    badge: "Seasonal",
    category: "indian",
    notes: ["Alphonso mango", "Kashmiri saffron", "Limited run"],
  },
  {
    id: "celebration",
    name: "The Celebration Cake",
    italian: "Per i momenti grandi",
    description:
      "A whole 1 kg tiramisù built for candles, speeches and second helpings. Includes a custom cocoa stencil of your choice.",
    price: 2299,
    slicePrice: 2299,
    serves: "1 kg · serves 10–12",
    image:
      "https://images.pexels.com/photos/12035685/pexels-photo-12035685.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=1000",
    alt: "Two slices of tiramisu served on plates in a café",
    badge: "Made to order",
    category: "gifting",
    notes: ["Custom cocoa stencil", "Keepsake box", "48h notice"],
  },
];

export const stats = [
  { value: 18000, suffix: "+", label: "slices devoured" },
  { value: 4.9, suffix: "/5", label: "average rating", decimals: 1 },
  { value: 1200, suffix: "+", label: "five-star reviews" },
  { value: 100, suffix: "%", label: "pure veg & eggless" },
];

export const features = [
  {
    icon: "clock",
    title: "Rested for 24 hours",
    body: "Every tray sleeps overnight in our chiller. Time is the only ingredient nobody can substitute — so we never rush it.",
  },
  {
    icon: "coffee",
    title: "Single-origin espresso",
    body: "Chikmagalur beans, roasted in small lots and pulled fresh. Deep, chocolatey, never bitter.",
  },
  {
    icon: "leaf",
    title: "100% eggless, always",
    body: "Pure-veg, gelatin-free and made in a dedicated vegetarian atelier. No compromises, no exceptions.",
  },
  {
    icon: "sparkle",
    title: "Batches of twelve",
    body: "We cap each batch at twelve boxes so every layer is whipped, soaked and dusted by hand — not a machine.",
  },
  {
    icon: "truck",
    title: "Cold-chain to your door",
    body: "Sealed, chilled and delivered in temperature-controlled carriers. Same-day across Moradabad.",
  },
  {
    icon: "gift",
    title: "Packaging you'll keep",
    body: "Compostable liners, a keepsake tin and a handwritten note. The unboxing should feel as good as the first bite.",
  },
] as const;

export const craftSteps = [
  {
    title: "Source honestly",
    body: "Mascarpone from a dairy we know by name. Arabica from Chikmagalur. Cocoa from a single Idukki cooperative.",
  },
  {
    title: "Soak precisely",
    body: "Ladyfingers meet espresso for exactly nine seconds — enough for a gentle hum of coffee, never a soggy whisper.",
  },
  {
    title: "Layer by hand",
    body: "Mascarpone folded low and slow, then layered in thirds. Air is the enemy of silk, so we keep it gentle.",
  },
  {
    title: "Rest overnight",
    body: "Twenty-four hours of undisturbed chilling. This is when the layers settle and the flavour becomes one.",
  },
  {
    title: "Deliver chilled",
    body: "Dusted, sealed and packed cold. From our Civil Lines atelier to your table, never warmer than 4°C.",
  },
];

export const testimonials = [
  {
    quote:
      "I have tried tiramisù in Delhi, Mumbai and Rome. This box from Civil Lines genuinely holds its own. My mother, who never finishes dessert, finished two slices.",
    name: "Ananya Gupta",
    role: "Civil Lines, Moradabad",
    initials: "AG",
    source: "Google review",
  },
  {
    quote:
      "Ordered the signature box for my wife's birthday. The packaging, the handwritten note, the tiny espresso sachets — she thought I'd flown it in from Italy.",
    name: "Rohan Malhotra",
    role: "Ram Ganga Vihar",
    initials: "RM",
    source: "Zomato",
  },
  {
    quote:
      "100% eggless and still this creamy? I was sceptical. One box later, I'm the person forwarding their Instagram to everyone in my family WhatsApp group.",
    name: "Sana Khan",
    role: "Ganj, Moradabad",
    initials: "SK",
    source: "Instagram",
  },
  {
    quote:
      "We served Sogno at our wedding dessert table. Ninety-six guests, not a single slice left. My mother-in-law has now asked for a standing monthly order.",
    name: "Priya & Nitin",
    role: "Wedding, Kanth Road",
    initials: "PN",
    source: "Google review",
  },
  {
    quote:
      "As someone who bakes, I notice shortcuts. The espresso is real, the mascarpone is real, and the cocoa is properly bitter. Respect.",
    name: "Aditya Verma",
    role: "Buddhi Vihar",
    initials: "AV",
    source: "Zomato",
  },
  {
    quote:
      "The team delivered to Majhola in under an hour, still perfectly chilled. My daughter called it 'cloud cake'. I've never felt more like a hero.",
    name: "Meher Fatima",
    role: "Majhola, Moradabad",
    initials: "MF",
    source: "Instagram",
  },
];

export type Plan = {
  id: string;
  name: string;
  description: string;
  price: number;
  compareAt?: number;
  serves: string;
  badge?: string;
  features: string[];
  cta: string;
};

export const slicePlans: Plan[] = [
  {
    id: "trio",
    name: "The Tasting Trio",
    description: "For the curious first bite. Pick any three flavours.",
    price: 599,
    serves: "3 slices · serves 1–2",
    features: [
      "Any 3 flavours from the menu",
      "Chilled, sealed signature box",
      "Cocoa dusting finished to order",
      "Handwritten tasting card",
    ],
    cta: "Start with a trio",
  },
  {
    id: "signature",
    name: "The Signature Box",
    description: "Our most-gifted box. Built for sharing, engineered for envy.",
    price: 1099,
    compareAt: 1299,
    serves: "6 slices · serves 4–6",
    badge: "Most loved",
    features: [
      "Three flavours, two slices each",
      "Two single-origin espresso sachets",
      "Keepsake tin with gift ribbon",
      "Complimentary handwritten note",
      "Priority same-day delivery",
    ],
    cta: "Choose the signature",
  },
  {
    id: "table",
    name: "The Celebration Table",
    description: "Five flavours, one showstopper. Made for the guests who linger.",
    price: 1899,
    serves: "8 slices · serves 6–8",
    features: [
      "All five signature flavours",
      "Keepsake tin + cocoa stencil",
      "Free delivery across Moradabad",
      "Bulk pricing on 5+ boxes",
    ],
    cta: "Plan the celebration",
  },
];

export const wholePlans: Plan[] = [
  {
    id: "piccolo",
    name: "Piccolo",
    description: "A whole cake for small tables and very good weekends.",
    price: 1299,
    serves: "500 g · serves 4–6",
    features: [
      "One flavour of your choice",
      "Custom cocoa stencil",
      "Keepsake gift box",
      "48-hour notice, chilled delivery",
    ],
    cta: "Order a piccolo",
  },
  {
    id: "classico",
    name: "Il Classico",
    description: "The 1 kg original. Moradabad's birthday default for a reason.",
    price: 2299,
    compareAt: 2599,
    serves: "1 kg · serves 10–12",
    badge: "Most loved",
    features: [
      "La Classica, or mix two flavours",
      "Custom cocoa stencil + candles",
      "Handwritten note included",
      "Free delivery in Moradabad city",
      "Priority 48-hour slot",
    ],
    cta: "Order il classico",
  },
  {
    id: "grande",
    name: "Grande",
    description: "For weddings, launches and the relatives who count plates.",
    price: 3199,
    serves: "1.5 kg · serves 16–20",
    features: [
      "Up to three flavours in tiers",
      "Dessert-table styling guide",
      "Dedicated celebration concierge",
      "Free delivery + setup in Moradabad",
    ],
    cta: "Talk to the atelier",
  },
];

export const faqs = [
  {
    q: "Is all your tiramisù eggless and vegetarian?",
    a: "Every single item is 100% eggless and pure vegetarian. There is no gelatin, no alcohol and no meat-derived setting agent anywhere in our kitchen. We work in a dedicated vegetarian atelier and source our mascarpone from a vegetarian-certified dairy.",
  },
  {
    q: "How fresh is my box when it arrives?",
    a: "Your box is assembled the morning of delivery and rested for a minimum of 12 hours before it reaches you. Every order is sealed and transported from our Civil Lines atelier to your door at 4°C or below, in a temperature-controlled carrier.",
  },
  {
    q: "Where do you deliver, and how fast?",
    a: "Same-day delivery across Moradabad — Civil Lines, Ram Ganga Vihar, Buddhi Vihar, Majhola, Ganj, Kanth Road, Pakbara and nearby sectors — for orders placed before 5 PM. Outside the city, we ship pan-India in 48–72 hours with cold-chain partners. Enter your pincode in the order drawer for a quick check.",
  },
  {
    q: "How long does it keep?",
    a: "Your tiramisù is happiest within 48 hours of delivery, and perfectly good for up to 72 hours when refrigerated at 4°C in its sealed box. Freeze a slice only in an emergency — the mascarpone deserves better. Serve 8–10 minutes out of the fridge for the silkiest texture.",
  },
  {
    q: "Can you handle gifting and bulk orders?",
    a: "Happily. We've done dessert tables for 50+ weddings, corporate Diwali hampers and more than 120 office celebrations across Moradabad. Gifting orders include a handwritten note, a keepsake tin and optional branded cocoa stencils. Write to hello@sogno.in with your date and headcount.",
  },
  {
    q: "Do you offer sugar-free or vegan options?",
    a: "We are working on a vegan mascarpone version and expect to launch it later this season — join the newsletter and we'll tell you first. Sugar-free is still in testing; our tiramisù is delicately sweet, but it does contain sugar.",
  },
  {
    q: "What are the allergens?",
    a: "All tiramisù contains dairy (mascarpone, cream), wheat (ladyfingers) and traces of caffeine and cocoa. Some flavours contain nuts, pistachio or hazelnut. Everything is prepared in a kitchen that handles nuts and dairy. Please mention any allergy in your order notes and we'll guide you to a safe flavour.",
  },
  {
    q: "How do I pay, and can I change my order?",
    a: "Pay online via UPI or choose cash on delivery across Moradabad. Once your order is confirmed on WhatsApp, you can edit flavours or add a note up to 4 hours before your delivery slot. Custom celebration cakes need 48 hours' notice, but we always try to squeeze in last-minute rescues.",
  },
];

export const deliveryAreas = [
  "Civil Lines",
  "Ram Ganga Vihar",
  "Buddhi Vihar",
  "Majhola",
  "Ganj",
  "Kanth Road",
  "Pakbara",
  "Linepar",
  "Ram Ganga Vihar Phase 2",
  "Rampur Road",
  "Delhi Road",
  "Sambhal Road",
];

export const pressLogos = [
  "Moradabad Living",
  "Café Culture India",
  "The Weekend Table",
  "Zomato 4.8★",
  "Swiggy 4.9★",
  "UP Gifting Guide",
];
