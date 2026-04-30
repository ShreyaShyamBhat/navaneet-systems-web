"use client";

import { motion } from "framer-motion";
import { FiPrinter, FiMonitor, FiCamera, FiCopy } from "react-icons/fi";
import { productCategories } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  copier: FiCopy,
  printer: FiPrinter,
  computer: FiMonitor,
  camera: FiCamera,
};

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Comprehensive Office Solutions
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From high-speed photocopiers to complete IT infrastructure, we offer
            a wide range of products to meet all your business needs.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {productCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || FiPrinter;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <a
                  href={category.href}
                  className="group block bg-card rounded-xl border border-border p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/30"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="mt-6 flex items-center text-primary font-medium">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need help choosing the right product?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Expert Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
