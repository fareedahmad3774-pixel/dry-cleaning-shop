/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, WashingMachine, Shirt, Droplets, Info } from "lucide-react";
import ClothesAnimation from "./components/ClothesAnimation";
import PricingSection from "./components/PricingSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 relative overflow-hidden">
      {/* Interactive Bubble Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/10 border border-cyan-400/20"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 110}%`,
            }}
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-cyan-600 p-2 rounded-lg shadow-sm">
              <Droplets className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
              U.S.F <span className="text-cyan-600">Dry Cleaner</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#home" className="hover:text-cyan-600 transition-colors">Home</a>
            <a href="#pricing" className="hover:text-cyan-600 transition-colors">Pricing</a>
            <a href="#about" className="hover:text-cyan-600 transition-colors">About</a>
            <a href="tel:+923001234567" className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all flex items-center gap-2 shadow-md">
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
          {/* Mobile Phone Icon only */}
          <a href="tel:+923001234567" className="md:hidden p-2 bg-cyan-600 text-white rounded-full">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative z-10 pt-32 pb-12 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-cyan-100">
              <WashingMachine className="w-4 h-4" />
              TRUSTED CLEANING SERVICE
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Expert Care for <br />
              <span className="text-cyan-600">Your Wardrobe.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience professional dry cleaning and precision pressing. We handle every garment with individual attention and eco-friendly care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#pricing" className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-bold text-lg hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-200 flex items-center justify-center gap-2">
                Service Prices
              </a>
              <div className="flex items-center justify-center gap-4 px-6 py-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-cyan-100 flex items-center justify-center text-[10px] font-bold text-cyan-600">
                      U{i}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-left">
                  <div className="font-bold text-slate-900">500+ Happy Clients</div>
                  <div className="text-slate-500 italic">Fresh & Clean Guarantee</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[300px] md:h-[500px]"
          >
            <ClothesAnimation />
          </motion.div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="px-4 md:px-6 relative z-20">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-cyan-50 rounded-2xl">
              <Shirt className="w-6 h-6 md:w-8 md:h-8 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Gentle Handling</h3>
              <p className="text-sm text-slate-500 italic">Care for all fabrics</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-slate-100 md:border-x px-0 md:px-8">
            <div className="p-4 bg-slate-50 rounded-2xl">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-slate-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Quick Turnaround</h3>
              <p className="text-sm text-slate-500 italic">Fresh in 48 hours</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-cyan-50 rounded-2xl">
              <Droplets className="w-6 h-6 md:w-8 md:h-8 text-cyan-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Deep Clean</h3>
              <p className="text-sm text-slate-500 italic">Tough on stains</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* About Section */}
      <section id="about" className="py-24 px-4 md:px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="aspect-square bg-white rounded-3xl p-4 shadow-lg border border-slate-100">
                <div className="w-full h-full bg-cyan-50 rounded-2xl flex items-center justify-center">
                   <WashingMachine className="w-32 h-32 md:w-48 md:h-48 text-cyan-600/30 animate-pulse" />
                </div>
             </div>
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
          <div>
            <div className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-4">Our Mission</div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Quality Service You <br className="hidden md:block" /> Can Depend On.
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                <b>U.S.F Dry Cleaner</b> is committed to providing premium garment care. We use high-grade detergents and state-of-the-art steam pressing to ensure your clothes look and feel their absolute best.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 md:p-6 bg-white rounded-2xl border border-slate-200">
                   <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-1">10,000+</div>
                   <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Garments Cleaned</div>
                </div>
                <div className="p-4 md:p-6 bg-white rounded-2xl border border-slate-200">
                   <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-1">99%</div>
                   <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-slate-800">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-cyan-600 p-2 rounded-lg">
                  <Droplets className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">U.S.F Dry Cleaner</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                Professional dry cleaning and laundry services for your everyday and special occasion wardrobe. We guarantee freshness and fabric care.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-cyan-500">Quick Info</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Prices</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-cyan-500">Get In Touch</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-500" />
                  <span>+92 300 1234567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-500" />
                  <span>info@usfcleaners.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                  <span>Shop 12, Main Bazaar Road, City Center</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[11px] uppercase tracking-widest font-bold">
            <p>© 2024 U.S.F Dry Cleaners</p>
            <p>Quality Garment Care Guaranteed</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
