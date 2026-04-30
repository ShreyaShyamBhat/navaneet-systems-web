"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMenu, 
  FiX, 
  FiChevronDown, 
  FiPhone, 
  FiMail, 
  FiMapPin,
  FiChevronRight 
} from "react-icons/fi";
import { productCategories } from "@/lib/data";

interface TOCItem {
  id: string;
  label: string;
}

interface ProductPageLayoutProps {
  children: React.ReactNode;
  currentProduct: string;
  tocItems: TOCItem[];
}

const productLinks = [
  { name: "Photocopiers", href: "/products/photocopiers" },
  { name: "Printers & Scanners", href: "/products/printers" },
  { name: "IT Hardware", href: "/products/it-hardware" },
  { name: "Cameras", href: "/products/cameras" },
];

export default function ProductPageLayout({ 
  children, 
  currentProduct,
  tocItems 
}: ProductPageLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(tocItems[0]?.id || "");
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isDesktopTocOpen, setIsDesktopTocOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = tocItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
      setIsTocOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a href="tel:+918362351823" className="flex items-center gap-2 hover:opacity-80">
                <FiPhone className="w-4 h-4" />
                <span>+91 836 235 1823</span>
              </a>
              <a href="mailto:info@navaneetsystems.com" className="flex items-center gap-2 hover:opacity-80">
                <FiMail className="w-4 h-4" />
                <span>info@navaneetsystems.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-4 h-4" />
              <span>Hubli, Karnataka</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-card/95 backdrop-blur shadow-lg" 
            : "bg-card"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">N</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-lg text-foreground">Navaneet</span>
                <span className="text-muted-foreground text-sm block -mt-1">Systems</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button 
                  className="flex items-center gap-1 text-primary font-semibold transition-colors"
                >
                  Products
                  <FiChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
                    >
                      {productLinks.map((product) => (
                        <Link
                          key={product.href}
                          href={product.href}
                          className={`block px-4 py-3 hover:bg-muted transition-colors ${
                            product.name.toLowerCase().includes(currentProduct.toLowerCase())
                              ? "bg-primary/5 text-primary border-l-4 border-primary"
                              : "text-foreground"
                          }`}
                        >
                          <span className="font-medium">{product.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+918362351823"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                <FiPhone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-foreground"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Table of Contents Bar */}
        {tocItems.length > 0 && (
          <div className="lg:hidden border-t border-border bg-muted/50">
            <div className="container mx-auto px-4">
              <button
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full flex items-center justify-between py-3 text-sm"
              >
                <span className="text-muted-foreground">Jump to:</span>
                <span className="flex items-center gap-2 font-medium text-foreground">
                  {tocItems.find(item => item.id === activeSection)?.label || tocItems[0]?.label}
                  <FiChevronDown className={`w-4 h-4 transition-transform ${isTocOpen ? "rotate-180" : ""}`} />
                </span>
              </button>
              
              <AnimatePresence>
                {isTocOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-border"
                  >
                    <div className="py-2">
                      {tocItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                            activeSection === item.id
                              ? "text-primary font-medium bg-primary/5"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-card z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-4 border-b border-border flex justify-between items-center">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <nav className="p-4 space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                >
                  About
                </Link>
                <div className="px-4 py-3">
                  <span className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                    Products
                  </span>
                  <div className="mt-2 space-y-1">
                    {productLinks.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-2 rounded-lg transition-colors ${
                          product.name.toLowerCase().includes(currentProduct.toLowerCase())
                            ? "bg-primary/10 text-primary font-medium"
                            : "hover:bg-muted"
                        }`}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                >
                  Contact
                </Link>
              </nav>
              <div className="p-4 border-t border-border">
                <a
                  href="tel:+918362351823"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-lg"
                >
                  <FiPhone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content with Sidebar TOC */}
      <div className="relative">
        {/* Desktop Sticky TOC Sidebar - Top Left Corner, Collapsible */}
        {tocItems.length > 0 && (
          <aside className="hidden lg:block fixed left-4 xl:left-6 top-28 z-40">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card/95 backdrop-blur border border-border rounded-xl shadow-lg overflow-hidden"
            >
              {/* Collapsible Header */}
              <button
                onClick={() => setIsDesktopTocOpen(!isDesktopTocOpen)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/50 transition-colors"
              >
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  On this page
                </span>
                <FiChevronDown 
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                    isDesktopTocOpen ? "rotate-180" : ""
                  }`} 
                />
              </button>
              
              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isDesktopTocOpen && (
                  <motion.nav
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-border"
                  >
                    <div className="p-2 space-y-1 max-w-[180px]">
                      {tocItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all flex items-center gap-2 ${
                            activeSection === item.id
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          <FiChevronRight className={`w-3 h-3 flex-shrink-0 transition-transform ${
                            activeSection === item.id ? "text-primary" : "opacity-0"
                          }`} />
                          <span className="truncate">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.nav>
                )}
              </AnimatePresence>
            </motion.div>
          </aside>
        )}

        {/* Page Content */}
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
