"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-office.jpg"
                alt="Navaneet Systems Office"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-card p-6 rounded-xl shadow-xl border border-border">
              <div className="text-4xl font-bold text-primary">31+</div>
              <div className="text-sm text-muted-foreground">
                Years of Excellence
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
              Legacy of Excellence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Navaneet Systems: Your Trusted Partner in Office Automation Since
              1993
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              For over three decades, Navaneet Systems has been at the forefront
              of office automation and IT solutions in North Karnataka. As
              authorized dealers for Canon, HP, and other leading brands, we
              have built lasting relationships with businesses, educational
              institutions, and government organizations across Hubli-Dharwad
              and beyond.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our commitment to quality service, genuine products, and
              exceptional after-sales support has made us the preferred choice
              for photocopiers, printers, IT hardware, and professional cameras
              in the region. We take pride in understanding local business needs
              and delivering solutions that drive efficiency and growth.
            </p>

            {/* Stats */}
            <div
              ref={ref}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      inView={isInView}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
