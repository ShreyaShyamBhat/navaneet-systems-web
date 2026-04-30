"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiPhone } from "react-icons/fi";
import ProductPageLayout from "@/components/product-page-layout";

const tocItems = [
  { id: "products", label: "Our Copiers" },
  { id: "contact", label: "Get a Quote" },
];

const photocopiers = [
  {
    id: 1,
    name: "Canon imageRUNNER ADVANCE DX C5860i",
    category: "Best for High Frequency",
    description: "Engineered for high-volume environments with speeds up to 60 ppm. Perfect for large offices and print rooms.",
    features: ["60 pages per minute", "Monthly duty cycle: 300,000 pages", "Advanced security features", "Cloud connectivity"],
    image: "/images/products/copier-high-frequency.jpg",
    badge: "High Volume",
    badgeColor: "bg-accent",
  },
  {
    id: 2,
    name: "Canon imageRUNNER ADVANCE DX C3835i",
    category: "Best for High Quality",
    description: "Exceptional print quality with 1200 x 1200 dpi resolution. Ideal for marketing materials and professional documents.",
    features: ["1200 x 1200 dpi resolution", "Vibrant color reproduction", "Professional finishing options", "Booklet printing"],
    image: "/images/products/copier-high-quality.jpg",
    badge: "Premium Quality",
    badgeColor: "bg-primary",
  },
  {
    id: 3,
    name: "Canon imageRUNNER ADVANCE DX 4751i",
    category: "Best for Small Offices",
    description: "Compact design with powerful features. Perfect for small to medium businesses with moderate print volumes.",
    features: ["51 pages per minute", "Compact footprint", "Energy efficient", "Mobile printing support"],
    image: "/images/products/copier-small-office.jpg",
    badge: "Compact",
    badgeColor: "bg-green-600",
  },
  {
    id: 4,
    name: "Canon imageRUNNER ADVANCE DX 8705",
    category: "Best for Enterprise",
    description: "Enterprise-grade multifunction system designed for the most demanding production environments.",
    features: ["105 pages per minute", "In-line finishing", "Hot folder automation", "Enterprise workflow integration"],
    image: "/images/products/copier-enterprise.jpg",
    badge: "Enterprise",
    badgeColor: "bg-blue-700",
  },
];

export default function PhotocopiersPage() {
  return (
    <ProductPageLayout currentProduct="Photocopiers" tocItems={tocItems}>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
              Multifunction Systems
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Multifunction Photocopiers
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              High-performance multifunction copiers for every business need. From compact office solutions to enterprise-grade production systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16 md:py-24 scroll-mt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Copier Range
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect multifunction system for your office needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {photocopiers.map((copier, index) => (
              <motion.div
                key={copier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                  <Image
                    src={copier.image}
                    alt={copier.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 ${copier.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {copier.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                    {copier.category}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {copier.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {copier.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {copier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <FiCheck className="w-4 h-4 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <Link
                      href="/#contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <FiPhone className="w-4 h-4" />
                      Get Quote
                    </Link>
                    <button className="px-6 py-3 border border-border rounded-lg font-semibold text-foreground hover:bg-muted transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-primary scroll-mt-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our experts will help you find the perfect multifunction system for your business needs and budget.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FiPhone className="w-5 h-5" />
            Contact Our Team
          </Link>
        </div>
      </section>
    </ProductPageLayout>
  );
}
