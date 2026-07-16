import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onOpenQuiz: () => void;
}

export default function Navbar({ onOpenQuiz }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        id="mainNav"
        className={`fixed top-0 w-full z-[50] transition-all duration-300 border-b ${
          isScrolled
            ? "bg-bg-obsidian/80 backdrop-blur-md border-border-hairline"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex justify-between items-center h-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
          {/* Logo */}
          <a
            href="#"
            className="hover:opacity-90 transition-all duration-300 flex items-center"
          >
            <img
              src={
                isScrolled || isMobileMenuOpen
                  ? "https://res.cloudinary.com/dk7z1b7k7/image/upload/v1784163737/leegb5dzskdowk7mn0bs.webp"
                  : "https://res.cloudinary.com/dk7z1b7k7/image/upload/v1784163713/mbo3vtac54z5a5tlyfgu.webp"
              }
              alt="The Digital Lift"
              className="h-8 md:h-9 w-auto object-contain transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#platform"
              className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                isScrolled ? "text-on-surface hover:text-primary" : "text-charcoal hover:text-primary"
              }`}
            >
              Platform
            </a>
            <a
              href="#solutions"
              className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                isScrolled ? "text-on-surface hover:text-primary" : "text-charcoal hover:text-primary"
              }`}
            >
              Solutions
            </a>
            <a
              href="#comparison"
              className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                isScrolled ? "text-on-surface hover:text-primary" : "text-charcoal hover:text-primary"
              }`}
            >
              Results
            </a>
            <button
              onClick={onOpenQuiz}
              className="bg-primary text-bg-obsidian px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,212,184,0.4)] transition-all duration-300 active:scale-95"
            >
              Build My Pipeline
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none transition-colors duration-300 ${
              isMobileMenuOpen
                ? "text-primary"
                : isScrolled
                ? "text-white"
                : "text-charcoal"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 bg-bg-obsidian/95 border-b border-border-hairline backdrop-blur-lg z-40 flex flex-col p-6 space-y-6 md:hidden"
          >
            <a
              href="#platform"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-on-surface hover:text-primary transition-colors py-2"
            >
              Platform
            </a>
            <a
              href="#solutions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-on-surface hover:text-primary transition-colors py-2"
            >
              Solutions
            </a>
            <a
              href="#comparison"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-on-surface hover:text-primary transition-colors py-2"
            >
              Results
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="bg-primary text-bg-obsidian w-full py-4 rounded-md text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,212,184,0.4)] transition-all duration-300"
            >
              Build My Pipeline
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
