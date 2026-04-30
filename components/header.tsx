"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMail, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { navLinks } from "@/lib/data";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+918360000000"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <FiPhone className="w-4 h-4" />
                <span>+91 836 XXX XXXX</span>
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="mailto:info@navaneetsystems.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <FiMail className="w-4 h-4" />
                <span>info@navaneetsystems.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`bg-card transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg md:text-xl">
                  NS
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-foreground text-lg">
                  Navaneet Systems
                </div>
                <div className="text-xs text-muted-foreground">
                  Office Automation & IT Solutions
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setActiveDropdown(link.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 bg-card shadow-xl rounded-lg border border-border overflow-hidden"
                      >
                        <div className="py-2">
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-3 hover:bg-muted transition-colors"
                            >
                              <div className="font-medium text-foreground">
                                {item.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {item.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                href="#contact"
                className="ml-4 bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-foreground font-medium border-b border-border"
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <div className="pl-4 bg-muted/50">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-muted-foreground text-sm"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="tel:+918360000000"
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <FiPhone className="w-4 h-4" />
                    <span>+91 836 XXX XXXX</span>
                  </a>
                  <a
                    href="mailto:info@navaneetsystems.com"
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <FiMail className="w-4 h-4" />
                    <span>info@navaneetsystems.com</span>
                  </a>
                </div>
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 block text-center bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
