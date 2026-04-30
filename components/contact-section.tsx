"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { contactInfo } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Visit our showroom or reach out to us for any inquiries about
            products and services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Office Address
                    </h4>
                    <p className="text-muted-foreground">{contactInfo.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <div className="space-y-1">
                      {contactInfo.phones.map((phone, index) => (
                        <a
                          key={index}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="block text-muted-foreground hover:text-primary transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiClock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Working Hours
                    </h4>
                    <p className="text-muted-foreground">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`tel:${contactInfo.phones[0].replace(/\s/g, "")}`}
                  className="flex-1 min-w-[140px] bg-primary text-primary-foreground text-center py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Call Now
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex-1 min-w-[140px] bg-secondary text-secondary-foreground text-center py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card rounded-2xl border border-border overflow-hidden h-full min-h-[400px]">
              {/* Map placeholder - replace with actual Google Maps embed */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiMapPin className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Find Us on Map
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    JC Nagar, Hubli - 580020
                  </p>
                  <a
                    href="https://maps.google.com/?q=JC+Nagar+Hubli+Karnataka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Open in Google Maps
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
