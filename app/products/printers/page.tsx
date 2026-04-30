"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiPhone, FiPrinter } from "react-icons/fi";
import ProductPageLayout from "@/components/product-page-layout";

const tocItems = [
  { id: "laser", label: "Laser Printers" },
  { id: "inkjet", label: "Inkjet Printers" },
  { id: "wide-format", label: "Wide Format" },
  { id: "scanners", label: "Document Scanners" },
  { id: "large-format", label: "Large Format Scanners" },
  { id: "label", label: "Label & Receipt" },
];

const printerCategories = [
  {
    id: "laser",
    title: "Laser Printers",
    products: [
      { name: "Canon LBP2900B", type: "Mono Laser" },
      { name: "HP LaserJet Pro M404dn", type: "Mono Laser" },
      { name: "Canon imageCLASS LBP226dw", type: "Mono Laser" },
      { name: "HP Color LaserJet Pro M454dw", type: "Color Laser" },
      { name: "Canon imageCLASS MF269dw", type: "Mono MFP" },
      { name: "HP LaserJet Enterprise M507dn", type: "Mono Laser" },
    ],
  },
  {
    id: "inkjet",
    title: "Inkjet Printers",
    products: [
      { name: "Canon PIXMA G3010", type: "Ink Tank" },
      { name: "HP Smart Tank 530", type: "Ink Tank" },
      { name: "Epson L3250", type: "Ink Tank" },
      { name: "Canon PIXMA G6070", type: "Ink Tank MFP" },
      { name: "HP Smart Tank 790", type: "Ink Tank MFP" },
      { name: "Epson L5290", type: "Ink Tank MFP" },
    ],
  },
  {
    id: "wide-format",
    title: "Wide Format Printers",
    products: [
      { name: "Canon imagePROGRAF TM-200", type: "24-inch" },
      { name: "HP DesignJet T250", type: "24-inch" },
      { name: "Canon imagePROGRAF TM-300", type: "36-inch" },
      { name: "HP DesignJet T630", type: "36-inch" },
      { name: "Canon imagePROGRAF PRO-300", type: "A3+ Photo" },
    ],
  },
  {
    id: "scanners",
    title: "Document Scanners",
    products: [
      { name: "Canon DR-C225 II", type: "Desktop Scanner" },
      { name: "HP ScanJet Pro 3000 s4", type: "Sheet-feed" },
      { name: "Canon DR-M260", type: "High-Speed" },
      { name: "Epson DS-530 II", type: "Sheet-feed" },
      { name: "Canon DR-G2140", type: "Production" },
      { name: "HP ScanJet Enterprise Flow N7000", type: "Enterprise" },
    ],
  },
  {
    id: "large-format",
    title: "Large Format Scanners",
    products: [
      { name: "Canon TX-3100 MFP", type: "A0 Scanner" },
      { name: "HP DesignJet T2600 MFP", type: "36-inch MFP" },
      { name: "Canon TX-4100 MFP", type: "44-inch MFP" },
      { name: "Contex SD One+", type: "A1 Scanner" },
    ],
  },
  {
    id: "label",
    title: "Label & Receipt Printers",
    products: [
      { name: "Zebra ZD421", type: "Label Printer" },
      { name: "Brother QL-820NWB", type: "Label Printer" },
      { name: "Epson TM-T88VI", type: "Receipt Printer" },
      { name: "TVS RP-3220 Star", type: "Receipt Printer" },
    ],
  },
];

export default function PrintersPage() {
  return (
    <ProductPageLayout currentProduct="Printers" tocItems={tocItems}>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
              Printing Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Printers & Scanners
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete range of printing and scanning solutions from desktop printers to large format systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {printerCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow scroll-mt-32"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FiPrinter className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                <ul className="space-y-3">
                  {category.products.map((product, productIndex) => (
                    <li
                      key={productIndex}
                      className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                    >
                      <span className="text-foreground font-medium">
                        {product.name}
                      </span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {product.type}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Authorized Dealer for Major Brands
                </h3>
                <p className="text-muted-foreground mb-6">
                  We are authorized sales and service partners for Canon, HP, Epson, and Brother. 
                  Get genuine products with full warranty and after-sales support.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Canon", "HP", "Epson", "Brother"].map((brand) => (
                    <span
                      key={brand}
                      className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center md:text-right">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  <FiPhone className="w-5 h-5" />
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
}
