import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, MoreVertical } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { name: "Home", path: "/" },
    { name: "Story", path: "/story" },
    { name: "Gameplay", path: "/gameplay" },
    { name: "Characters", path: "/characters" },
    { name: "Download", path: "/download" },
  ];

  const secondaryNavLinks = [
    { name: "Gallery", path: "/gallery" },
    { name: "News", path: "/news" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0D0D0D]/90 backdrop-blur-xl border-b border-[#C4A16A]/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-lg font-bold tracking-wider bg-gradient-to-r from-[#C4A16A] via-[#F2EEE8] to-[#C4A16A] bg-clip-text text-transparent whitespace-nowrap">
              CODE OF CLUES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-[#D7D7D7] hover:text-[#C4A16A] transition-all duration-300 group py-2"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-[#D7D7D7] hover:text-[#C4A16A] transition-all duration-300 flex items-center space-x-2"
            >
              <MoreVertical size={20} />
              <span>More</span>
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className="text-[#D7D7D7] hover:text-[#C4A16A] hover:bg-[#C4A16A]/10"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/register")}
              className="bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] hover:shadow-[0_0_30px_rgba(196,161,106,0.5)] transition-all duration-300"
            >
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#C4A16A] hover:text-[#F2EEE8] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="lg:hidden bg-[#0D0D0D]/95 backdrop-blur-2xl border-t border-[#C4A16A]/10"
          >
            <div className="px-6 py-4 space-y-4">
              <div className="space-y-2">
                <p className="text-[#8D6B47] text-xs uppercase tracking-wider">Main</p>
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[#D7D7D7] hover:text-[#C4A16A] transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-2 pt-4 border-t border-[#C4A16A]/10">
                <p className="text-[#8D6B47] text-xs uppercase tracking-wider">More</p>
                {secondaryNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[#D7D7D7] hover:text-[#C4A16A] transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 border-t border-[#C4A16A]/10 space-y-3">
                <Button
                  variant="ghost"
                  onClick={() => {
                    navigate("/login");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-[#D7D7D7] hover:text-[#C4A16A] hover:bg-[#C4A16A]/10"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    navigate("/register");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505]"
                >
                  Register
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-[#050505]/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-[#0D0D0D] to-[#050505] border-l border-[#C4A16A]/20 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
                    More Pages
                  </h2>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-[#C4A16A] hover:text-[#F2EEE8] transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  {secondaryNavLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsSidebarOpen(false)}
                        className="block text-[#D7D7D7] hover:text-[#C4A16A] transition-all duration-300 text-lg group"
                      >
                        <div className="flex items-center justify-between p-4 rounded-lg border border-[#C4A16A]/20 hover:border-[#C4A16A]/50 hover:bg-[#C4A16A]/5 transition-all">
                          <span>{link.name}</span>
                          <span className="text-[#8D6B47] group-hover:text-[#C4A16A] transition-colors">→</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-[#C4A16A]/20">
                  <p className="text-[#8D6B47] text-sm text-center">
                    Navigate through the mystery
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
