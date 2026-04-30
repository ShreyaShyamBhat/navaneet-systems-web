// Navigation Links
export const navLinks = [
  { name: "Home", href: "#home" },
  { 
    name: "Products", 
    href: "#products",
    hasDropdown: true,
    dropdownItems: [
      { name: "Photocopiers", href: "/products/photocopiers", description: "Multifunction copiers & printers" },
      { name: "Printers & Scanners", href: "/products/printers", description: "Professional printing solutions" },
      { name: "IT Hardware", href: "/products/it-hardware", description: "Computers, laptops & networking" },
      { name: "Cameras", href: "/products/cameras", description: "Professional photography gear" },
    ]
  },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

// Hero Slides
export const heroSlides = [
  {
    id: 1,
    title: "Revolutionizing Office Efficiency in Hubli",
    subtitle: "Authorized Partners for Canon and HP. 31+ Years of Trust.",
    buttonText: "Explore Photocopiers",
    buttonHref: "#products",
    image: "/images/hero-copier.jpg",
  },
  {
    id: 2,
    title: "Powering Your IT Infrastructure",
    subtitle: "Complete IT solutions for SMEs, Schools, and Government.",
    buttonText: "View IT Solutions",
    buttonHref: "#products",
    image: "/images/hero-it.jpg",
  },
  {
    id: 3,
    title: "Capturing Every Detail",
    subtitle: "Authorized Dealers for Professional Photographic Gear.",
    buttonText: "See Cameras",
    buttonHref: "#products",
    image: "/images/hero-camera.jpg",
  },
];

// Product Categories
export const productCategories = [
  {
    id: 1,
    title: "Multifunction Photocopiers",
    description: "High-speed copiers, printers, and scanners for modern offices",
    icon: "copier",
    href: "/products/photocopiers",
  },
  {
    id: 2,
    title: "Printers & Scanners",
    description: "Professional printing solutions for every business need",
    icon: "printer",
    href: "/products/printers",
  },
  {
    id: 3,
    title: "IT Hardware",
    description: "Complete computing solutions including laptops, desktops & networking",
    icon: "computer",
    href: "/products/it-hardware",
  },
  {
    id: 4,
    title: "Professional Cameras",
    description: "DSLR, mirrorless cameras and photography accessories",
    icon: "camera",
    href: "/products/cameras",
  },
];

// Services
export const services = [
  {
    id: 1,
    title: "On-site Repair",
    description: "Quick response repair services at your doorstep",
    icon: "wrench",
  },
  {
    id: 2,
    title: "Annual Maintenance Contracts",
    description: "Comprehensive AMC plans for worry-free operations",
    icon: "clipboard",
  },
  {
    id: 3,
    title: "Rental Services",
    description: "Flexible equipment rental for short and long term needs",
    icon: "refresh",
  },
  {
    id: 4,
    title: "Camera Servicing",
    description: "Expert camera cleaning and repair services",
    icon: "camera",
  },
  {
    id: 5,
    title: "IT Support",
    description: "Technical support for all your IT infrastructure",
    icon: "headset",
  },
  {
    id: 6,
    title: "Toner & Supplies",
    description: "Genuine supplies and consumables delivery",
    icon: "box",
  },
];

// Brand Logos
export const brandLogos = [
  { id: 1, name: "Canon", logo: "/images/brands/canon.svg" },
  { id: 2, name: "HP", logo: "/images/brands/hp.svg" },
  { id: 3, name: "Epson", logo: "/images/brands/epson.svg" },
  { id: 4, name: "Dell", logo: "/images/brands/dell.svg" },
  { id: 5, name: "Lenovo", logo: "/images/brands/lenovo.svg" },
  { id: 6, name: "Brother", logo: "/images/brands/brother.svg" },
  { id: 7, name: "Xerox", logo: "/images/brands/xerox.svg" },
  { id: 8, name: "Sony", logo: "/images/brands/sony.svg" },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    quote: "Excellent service and support in Hubli. Navaneet Systems has been our trusted partner for over 10 years for all our office equipment needs.",
    clientName: "Rajesh Kumar",
    clientTitle: "Managing Director",
    company: "Kumar Industries Pvt. Ltd.",
  },
  {
    id: 2,
    quote: "Their AMC service is outstanding. Quick response time and professional technicians. Highly recommended for businesses in North Karnataka.",
    clientName: "Priya Sharma",
    clientTitle: "Office Administrator",
    company: "Global Tech Solutions",
  },
  {
    id: 3,
    quote: "We have been purchasing all our IT equipment from Navaneet Systems. Competitive pricing and excellent after-sales support.",
    clientName: "Mohammed Hussain",
    clientTitle: "Principal",
    company: "St. Joseph&apos;s School, Hubli",
  },
];

// Contact Information
export const contactInfo = {
  address: "1st Floor, JC Nagar, Near City Bus Stand, Hubli - 580020, Karnataka, India",
  phones: ["+91 836 XXX XXXX", "+91 98XX XXX XXX"],
  email: "info@navaneetsystems.com",
  hours: "Mon - Sat: 9:30 AM - 7:00 PM",
  gstin: "29XXXXXXXXXXXZX",
};

// Footer Links
export const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ],
  products: [
    { name: "Photocopiers", href: "#products" },
    { name: "Printers", href: "#products" },
    { name: "IT Hardware", href: "#products" },
    { name: "Cameras", href: "#products" },
  ],
  services: [
    { name: "On-site Repair", href: "#services" },
    { name: "AMC Plans", href: "#services" },
    { name: "Rentals", href: "#services" },
    { name: "IT Support", href: "#services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

// Stats
export const stats = [
  { id: 1, value: 31, suffix: "+", label: "Years of Service" },
  { id: 2, value: 5000, suffix: "+", label: "Satisfied Clients" },
  { id: 3, value: 15000, suffix: "+", label: "Products Delivered" },
  { id: 4, value: 50, suffix: "+", label: "Service Engineers" },
];
