"use client";

import { motion } from "framer-motion";
import {
  FiTool,
  FiClipboard,
  FiRefreshCw,
  FiCamera,
  FiHeadphones,
  FiPackage,
} from "react-icons/fi";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wrench: FiTool,
  clipboard: FiClipboard,
  refresh: FiRefreshCw,
  camera: FiCamera,
  headset: FiHeadphones,
  box: FiPackage,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Expert Technical Support & AMCs
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Beyond sales, we believe in building long-term partnerships with
              our clients. Our dedicated team of service engineers ensures your
              equipment runs smoothly with minimal downtime, backed by our
              comprehensive maintenance programs.
            </p>

            {/* Key Features */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Quick Response Time
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Our service engineers reach you within 4 hours in
                    Hubli-Dharwad
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Trained Technicians
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Factory-trained engineers for Canon, HP, and other brands
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Genuine Spare Parts
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Only authentic parts and consumables for lasting performance
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || FiTool;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
