"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Here&apos;s what businesses across
            North Karnataka have to say about us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.clientName.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.clientName}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.clientTitle}
                  </div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
