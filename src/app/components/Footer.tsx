import { Link } from "react-router";
import { Twitter, Facebook, Instagram, Youtube, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    game: [
      { name: "Story", path: "/story" },
      { name: "Gameplay", path: "/gameplay" },
      { name: "Characters", path: "/characters" },
      { name: "Download", path: "/download" },
    ],
    community: [
      { name: "News", path: "/news" },
      { name: "Gallery", path: "/gallery" },
      { name: "FAQ", path: "/faq" },
      { name: "Contact", path: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
      { name: "Cookie Policy", path: "#" },
      { name: "Disclaimer", path: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#050505] to-[#000000] border-t border-[#C4A16A]/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A16A] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C4A16A] to-[#8D6B47] rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-[#050505] font-bold text-xl">C</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
                  CODE OF CLUES
                </span>
              </div>
            </Link>
            <p className="text-[#B0B0B0] mb-6 leading-relaxed">
              Uncover the truth hidden in the shadows. Every clue matters in this cinematic detective adventure.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-[#1F1F1F] border border-[#C4A16A]/30 rounded-lg flex items-center justify-center text-[#C4A16A] hover:bg-[#C4A16A] hover:text-[#050505] transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[#C4A16A] font-bold mb-6 uppercase tracking-wider text-sm">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.game.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#D7D7D7] hover:text-[#C4A16A] transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#C4A16A] transition-all mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#C4A16A] font-bold mb-6 uppercase tracking-wider text-sm">
              Community
            </h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#D7D7D7] hover:text-[#C4A16A] transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#C4A16A] transition-all mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#C4A16A] font-bold mb-6 uppercase tracking-wider text-sm">
              Stay Updated
            </h3>
            <p className="text-[#B0B0B0] mb-4 text-sm">
              Subscribe to get the latest news and updates about Code of Clues.
            </p>
            <div className="flex">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8D6B47]" size={18} />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-[#1F1F1F] border border-[#C4A16A]/30 rounded-l-lg px-10 py-3 text-[#F2EEE8] placeholder-[#8D6B47] focus:outline-none focus:border-[#C4A16A] transition-colors text-sm"
                />
              </div>
              <button className="bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] px-6 rounded-r-lg hover:shadow-[0_0_20px_rgba(196,161,106,0.4)] transition-all duration-300 font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#C4A16A]/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#8D6B47] text-sm">
              © {currentYear} Code of Clues. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-[#8D6B47] hover:text-[#C4A16A] text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C4A16A]/30 to-transparent"></div>
    </footer>
  );
}
