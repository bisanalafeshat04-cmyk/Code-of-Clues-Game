import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, User, LogIn, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { useAuth } from "../contexts/AuthContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/story", label: "Story" },
    { to: "/gameplay", label: "Gameplay" },
    { to: "/characters", label: "Characters" },
    { to: "/gallery", label: "Gallery" },
    { to: "/download", label: "Download" },
    { to: "/news", label: "News" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-[#C4A16A]/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-[#C4A16A] via-[#8D6B47] to-[#C4A16A] bg-clip-text text-transparent">
                CODE OF CLUES
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C4A16A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 group"
              >
                <span
                  className={`relative z-10 text-sm tracking-wide transition-colors ${
                    location.pathname === link.to
                      ? "text-[#C4A16A]"
                      : "text-[#D7D7D7] hover:text-[#C4A16A]"
                  }`}
                >
                  {link.label}
                </span>
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-[#C4A16A]/10 rounded-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <Link to="/profile">
                  <Button
                    variant="ghost"
                    className="text-[#D7D7D7] hover:text-[#C4A16A] hover:bg-[#C4A16A]/10 border border-[#C4A16A]/20"
                  >
                    <User className="mr-2 h-4 w-4" />
                    {user?.name}
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="text-[#D7D7D7] hover:text-[#C4A16A] hover:bg-[#C4A16A]/10 border border-[#C4A16A]/20"
                  onClick={logout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="ghost"
                    className="text-[#D7D7D7] hover:text-[#C4A16A] hover:bg-[#C4A16A]/10 border border-[#C4A16A]/20"
                  >
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] hover:from-[#8D6B47] hover:to-[#C4A16A] text-[#0D0D0D] shadow-lg shadow-[#C4A16A]/20">
                    <User className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#C4A16A] p-2 hover:bg-[#C4A16A]/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
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
            className="lg:hidden bg-[#0D0D0D]/98 backdrop-blur-xl border-b border-[#C4A16A]/20"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === link.to
                      ? "bg-[#C4A16A]/20 text-[#C4A16A]"
                      : "text-[#D7D7D7] hover:bg-[#C4A16A]/10 hover:text-[#C4A16A]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-[#C4A16A]/20 space-y-3">
                {isAuthenticated ? (
                  <>
                    <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-[#D7D7D7] hover:text-[#C4A16A] hover:bg-[#C4A16A]/10 border border-[#C4A16A]/20"
                      >
                        <User className="mr-2 h-4 w-4" />
                        {user?.name}
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-[#D7D7D7] hover:text-[#C4A16A] hover:bg-[#C4A16A]/10 border border-[#C4A16A]/20"
                      onClick={logout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-[#D7D7D7] hover:text-[#C4A16A] hover:bg-[#C4A16A]/10 border border-[#C4A16A]/20"
                      >
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                      </Button>
                    </Link>
                    <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#0D0D0D]">
                        <User className="mr-2 h-4 w-4" />
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}