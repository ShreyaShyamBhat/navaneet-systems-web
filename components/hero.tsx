"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { heroSlides } from "@/lib/data";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden pt-24 md:pt-28"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        {heroSlides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <div className="absolute inset-0 bg-primary">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full container mx-auto px-4 flex items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="max-w-2xl"
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
                      {slide.title}
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 text-pretty">
                      {slide.subtitle}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href={slide.buttonHref}
                        className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                      >
                        {slide.buttonText}
                      </Link>
                      <Link
                        href="#contact"
                        className="inline-flex items-center px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-lg border-2 border-primary-foreground/30 hover:bg-primary-foreground/20 transition-colors"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-card/20 backdrop-blur-sm text-primary-foreground rounded-full opacity-0 hover:opacity-100 transition-opacity hover:bg-card/40"
        style={{ opacity: isHovered ? 0.8 : 0 }}
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-card/20 backdrop-blur-sm text-primary-foreground rounded-full opacity-0 hover:opacity-100 transition-opacity hover:bg-card/40"
        style={{ opacity: isHovered ? 0.8 : 0 }}
        aria-label="Next slide"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-secondary w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 right-8 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-primary-foreground/70"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
