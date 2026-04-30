"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiCheck, FiPhone, FiMonitor, FiServer, FiWifi, FiShield, FiHardDrive, FiCpu } from "react-icons/fi";
import ProductPageLayout from "@/components/product-page-layout";

const tocItems = [
  { id: "about", label: "About Our Services" },
  { id: "products", label: "Products & Solutions" },
  { id: "services", label: "IT Services" },
];

const productSolutions = [
  { name: "Desktop Printers", icon: FiCpu },
  { name: "Laser Printers", icon: FiCpu },
  { name: "All-in-one Printers", icon: FiCpu },
  { name: "Scanners (A4 to A0)", icon: FiHardDrive },
  { name: "Copiers", icon: FiMonitor },
  { name: "Multifunction Office Systems", icon: FiServer },
  { name: "Document Management Solutions", icon: FiShield },
  { name: "Toners, Cartridges and Accessories", icon: FiWifi },
];

const whyChooseUs = [
  "Authorized Sales & Service Provider of Canon, Riso and HP",
  "31+ years of industry experience in North Karnataka",
  "Comprehensive sales to after-sales support",
  "Prompt & efficient support services",
  "Competitive pricing with quality assurance",
  "Full range of digital multifunctional office systems",
];

const itServices = [
  { icon: FiMonitor, title: "Hardware Supply", desc: "Laptops, desktops, servers & workstations" },
  { icon: FiServer, title: "Network Setup", desc: "LAN, WAN, and wireless infrastructure" },
  { icon: FiShield, title: "Security Solutions", desc: "Firewalls, antivirus & data protection" },
  { icon: FiWifi, title: "Cloud Services", desc: "Cloud migration & management" },
];

export default function ITHardwarePage() {
  return (
    <ProductPageLayout currentProduct="IT Hardware" tocItems={tocItems}>
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
              IT Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              IT Hardware & Solutions
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete IT infrastructure solutions for modern businesses, educational institutions, and government organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Partner for Office Automation
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-6">
                  Navaneet Systems has earned a reputation for good quality, excellent service and competitive pricing in providing printing solutions. We are <strong className="text-foreground">Authorized Sales & Service Provider of Canon, Riso and HP</strong>.
                </p>
                <p className="mb-6">
                  We help companies to grow and work faster with the use of Latest Office Automation Equipments from sales to after-sales support. We have maintained a high level of customer care by understanding the importance in providing prompt & efficient support services for your equipments.
                </p>
                <p>
                  We bring you the full range of the world&apos;s No.1 and most dependable <strong className="text-foreground">DIGITAL MULTIFUNCTIONAL OFFICE SYSTEMS</strong> and offer today&apos;s most innovative and enduring solutions at affordable prices.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Navaneet Systems?</h3>
                <ul className="space-y-3">
                  {whyChooseUs.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <FiCheck className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right - Products & Solutions */}
            <motion.div
              id="products"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="scroll-mt-32"
            >
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Products & Solutions
                </h3>
                <div className="grid gap-4">
                  {productSolutions.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{item.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Card */}
              <div className="mt-8 bg-primary rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Need IT Consultation?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Our experts will help you design the perfect IT infrastructure for your organization.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FiPhone className="w-5 h-5" />
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-muted scroll-mt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our IT Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT support services to keep your business running smoothly.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
}
