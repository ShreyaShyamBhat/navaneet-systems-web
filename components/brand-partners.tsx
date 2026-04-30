"use client";

import { motion } from "framer-motion";
import { brandLogos } from "@/lib/data";

// Placeholder brand logos as SVG components
const BrandLogo = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center justify-center w-32 h-16 px-6 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
      <span className="text-xl font-bold text-foreground/70 hover:text-foreground tracking-wider">
        {name}
      </span>
    </div>
  );
};

export function BrandPartners() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Authorized Partners for Leading Brands
          </h3>
          <p className="mt-2 text-muted-foreground">
            Trusted by top global technology companies
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedLogos.map((brand, index) => (
            <div key={`${brand.id}-${index}`} className="flex-shrink-0 mx-8">
              <BrandLogo name={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
