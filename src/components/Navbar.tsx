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
            ? "bg-[#0F0F0F] border-[#2A2A2A]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex justify-between items-center h-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
          {/* Logo */}
          <a
            href="#"
            className="hover:opacity-90 transition-opacity flex items-center"
          >
            <img 
              src={isScrolled ? "https://res.cloudinary.com/dk7z1b7k7/image/upload/v1784163737/leegb5dzskdowk7mn0bs.webp" : "https://res.cloudinary.com/dk7z1b7k7/image/upload/v1784163713/mbo3vtac54z5a5tlyfgu.webp"} 
              alt="The Digital Lift"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#how-it-works"
              className={`text-sm font-semibold transition-colors duration-300 ${
                isScrolled ? "text-gray-300 hover:text-primary" : "text-[#0F0F0F] hover:text-primary"
              }`}
            >
              How It Works
            </a>
            <a
              href="#what-you-get"
              className={`text-sm font-semibold transition-colors duration-300 ${
                isScrolled ? "text-gray-300 hover:text-primary" : "text-[#0F0F0F] hover:text-primary"
              }`}
            >
              What You Get
            </a>
            <button
              onClick={onOpenQuiz}
              className="bg-primary text-[#0F0F0F] px-[20px] py-[10px] rounded-[6px] text-[14px] font-bold hover:opacity-90 transition-opacity active:scale-95"
            >
              Build My Pipeline
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none transition-colors duration-300 ${
              isMobileMenuOpen
                ? "text-primary"
                : isScrolled ? "text-white" : "text-[#0F0F0F]"
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
            className="fixed inset-x-0 top-20 bg-[#0F0F0F] border-b border-[#2A2A2A] z-40 flex flex-col p-6 space-y-6 md:hidden"
          >
            <a
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-gray-300 hover:text-primary transition-colors py-2"
            >
              How It Works
            </a>
            <a
              href="#what-you-get"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-gray-300 hover:text-primary transition-colors py-2"
            >
              What You Get
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="bg-primary text-[#0F0F0F] w-full py-[10px] rounded-[6px] text-[14px] font-bold hover:opacity-90 transition-opacity"
            >
              Build My Pipeline
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
