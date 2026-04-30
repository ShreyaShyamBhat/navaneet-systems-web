"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiCamera, FiAperture, FiZap, FiStar } from "react-icons/fi";
import ProductPageLayout from "@/components/product-page-layout";

const tocItems = [
  { id: "products", label: "Products" },
  { id: "accessories", label: "Accessories & Supplies" },
  { id: "services", label: "Camera Services" },
];

const cameraCategories = [
  {
    id: 1,
    title: "DSLR Cameras",
    description: "Professional digital single-lens reflex cameras for serious photographers",
    products: [
      { name: "Canon EOS 5D Mark IV", level: "Professional", sensor: "Full Frame" },
      { name: "Canon EOS 6D Mark II", level: "Advanced", sensor: "Full Frame" },
      { name: "Canon EOS 90D", level: "Enthusiast", sensor: "APS-C" },
      { name: "Canon EOS 850D", level: "Entry", sensor: "APS-C" },
      { name: "Nikon D850", level: "Professional", sensor: "Full Frame" },
      { name: "Nikon D7500", level: "Enthusiast", sensor: "APS-C" },
    ],
    image: "/images/products/camera-dslr.jpg",
  },
  {
    id: 2,
    title: "Mirrorless Cameras",
    description: "Compact, lightweight cameras with advanced features and interchangeable lenses",
    products: [
      { name: "Canon EOS R5", level: "Professional", sensor: "Full Frame" },
      { name: "Canon EOS R6 Mark II", level: "Advanced", sensor: "Full Frame" },
      { name: "Canon EOS R7", level: "Enthusiast", sensor: "APS-C" },
      { name: "Canon EOS R10", level: "Entry", sensor: "APS-C" },
      { name: "Sony A7 IV", level: "Advanced", sensor: "Full Frame" },
      { name: "Sony A6700", level: "Enthusiast", sensor: "APS-C" },
    ],
    image: "/images/products/camera-mirrorless.jpg",
  },
  {
    id: 3,
    title: "Cinema Cameras",
    description: "Professional video cameras for filmmaking and content creation",
    products: [
      { name: "Canon EOS C70", level: "Cinema", sensor: "Super 35" },
      { name: "Canon EOS R5 C", level: "Hybrid", sensor: "Full Frame" },
      { name: "Sony FX3", level: "Cinema", sensor: "Full Frame" },
      { name: "Blackmagic Pocket 6K Pro", level: "Cinema", sensor: "Super 35" },
    ],
    image: "/images/products/camera-cinema.jpg",
  },
];

const accessories = [
  { name: "Canon RF Lenses", category: "Lenses" },
  { name: "Canon EF Lenses", category: "Lenses" },
  { name: "Speedlite Flashes", category: "Lighting" },
  { name: "Camera Bags & Cases", category: "Protection" },
  { name: "Tripods & Monopods", category: "Support" },
  { name: "Memory Cards", category: "Storage" },
  { name: "Camera Batteries", category: "Power" },
  { name: "Filters & Hoods", category: "Accessories" },
];

const services = [
  { icon: FiAperture, title: "Lens Cleaning", desc: "Professional sensor and lens cleaning services" },
  { icon: FiZap, title: "Firmware Updates", desc: "Keep your camera up to date with latest features" },
  { icon: FiCamera, title: "Camera Repair", desc: "Expert repair services for all camera brands" },
  { icon: FiStar, title: "Equipment Rental", desc: "Rent professional gear for your projects" },
];

export default function CamerasPage() {
  return (
    <ProductPageLayout currentProduct="Cameras" tocItems={tocItems}>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4">
              Professional Photography
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Cameras & Photography Equipment
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Authorized dealers for Canon, Sony, and Nikon. From professional DSLRs to cinema cameras, we have everything for photographers and filmmakers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Camera Categories - Products Section */}
      <section id="products" className="py-16 md:py-24 scroll-mt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Camera Collection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of professional cameras for every need.
            </p>
          </motion.div>

          <div className="space-y-16">
            {cameraCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  categoryIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${categoryIndex % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="px-4 py-2 bg-white/90 text-foreground font-semibold rounded-lg">
                        {category.products.length} Products
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${categoryIndex % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    {category.description}
                  </p>

                  {/* Products Table */}
                  <div className="bg-card rounded-xl border border-border overflow-hidden">
                    <div className="grid grid-cols-3 gap-4 p-4 bg-muted font-semibold text-sm text-foreground">
                      <span>Model</span>
                      <span>Level</span>
                      <span>Sensor</span>
                    </div>
                    {category.products.map((product, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-3 gap-4 p-4 border-t border-border hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-medium text-foreground">{product.name}</span>
                        <span className="text-muted-foreground">{product.level}</span>
                        <span className="text-sm text-muted-foreground">{product.sensor}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                    View All {category.title}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section id="accessories" className="py-16 bg-muted scroll-mt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Accessories & Supplies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete your photography kit with professional accessories and supplies.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {accessories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-lg border border-border p-4 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer"
              >
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-1">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 scroll-mt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Camera Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional camera maintenance and support services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Capture Your Vision?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Visit our showroom in Hubli to explore our complete range of cameras and photography equipment.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FiPhone className="w-5 h-5" />
            Contact Us Today
          </Link>
        </div>
      </section>
    </ProductPageLayout>
  );
}
