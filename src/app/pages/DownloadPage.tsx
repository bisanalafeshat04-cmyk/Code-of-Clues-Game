import { motion } from "motion/react";
import { Download, Play, Monitor, Cpu, HardDrive, Globe, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router";

export function DownloadPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-[#050505] via-[#0D0D0D] to-[#050505]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#C4A16A]/10 border border-[#C4A16A]/30 rounded-full px-6 py-2 mb-6">
            <span className="text-[#C4A16A] font-mono text-sm flex items-center gap-2">
              <CheckCircle size={16} />
              Welcome, {user?.name || "Detective"}
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
            Download Code of Clues
          </h1>
          <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
            Begin your investigation today. Choose your platform below.
          </p>
        </motion.div>

        {/* Main Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border-2 border-[#C4A16A]/30 rounded-2xl p-12 mb-12 shadow-2xl"
        >
          <div className="text-center mb-10">
            <div className="inline-block bg-[#C4A16A]/10 border border-[#C4A16A]/30 rounded-full px-6 py-2 mb-6">
              <span className="text-[#C4A16A] font-mono text-sm">VERSION 1.0.0 • FULL RELEASE</span>
            </div>
            <h2 className="text-4xl font-bold text-[#C4A16A] mb-4">Available Now</h2>
            <p className="text-[#D7D7D7] text-lg">Released: June 1, 2026 • File Size: 45 GB</p>
          </div>

          {/* Download Platforms */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Windows Direct Download */}
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              className="bg-gradient-to-br from-[#C4A16A]/10 to-transparent border-2 border-[#C4A16A]/50 rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-[#C4A16A] mb-4">Windows PC</h3>
              <p className="text-[#B0B0B0] mb-6 text-sm">Direct Download • Windows 10/11 64-bit</p>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] hover:shadow-[0_0_40px_rgba(196,161,106,0.6)] transition-all duration-300 py-6 text-lg"
                onClick={() => alert("Download would start here - Replace with actual download link")}
              >
                <Download className="mr-2" size={24} />
                Download for Windows
              </Button>
            </motion.div>

            {/* Mac Direct Download */}
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              className="bg-gradient-to-br from-[#8D6B47]/10 to-transparent border border-[#C4A16A]/30 rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-[#C4A16A] mb-4">macOS</h3>
              <p className="text-[#B0B0B0] mb-6 text-sm">Direct Download • macOS 12+ (Intel & Apple Silicon)</p>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-[#C4A16A] text-[#C4A16A] hover:bg-[#C4A16A]/10 py-6 text-lg"
                onClick={() => alert("Download would start here - Replace with actual download link")}
              >
                <Download className="mr-2" size={24} />
                Download for Mac
              </Button>
            </motion.div>
          </div>

          {/* Distribution Platforms */}
          <div className="border-t border-[#C4A16A]/20 pt-8 mb-8">
            <h3 className="text-2xl font-bold text-[#C4A16A] mb-6 text-center">Also Available On</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-[#C4A16A]/30 text-[#D7D7D7] hover:bg-[#C4A16A]/10 hover:border-[#C4A16A] py-6"
                onClick={() => window.open("https://store.steampowered.com", "_blank")}
              >
                <ExternalLink className="mr-2" size={20} />
                Steam
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-[#C4A16A]/30 text-[#D7D7D7] hover:bg-[#C4A16A]/10 hover:border-[#C4A16A] py-6"
                onClick={() => window.open("https://www.epicgames.com", "_blank")}
              >
                <ExternalLink className="mr-2" size={20} />
                Epic Games
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-[#C4A16A]/30 text-[#D7D7D7] hover:bg-[#C4A16A]/10 hover:border-[#C4A16A] py-6"
                onClick={() => window.open("https://itch.io", "_blank")}
              >
                <ExternalLink className="mr-2" size={20} />
                itch.io
              </Button>
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="bg-[#0D0D0D]/50 border border-[#C4A16A]/20 rounded-xl p-6">
            <h4 className="text-xl font-bold text-[#C4A16A] mb-4">Installation Instructions</h4>
            <ol className="list-decimal list-inside space-y-2 text-[#D7D7D7]">
              <li>Download the installer for your platform</li>
              <li>Run the installer and follow the on-screen instructions</li>
              <li>Launch Code of Clues from your desktop or applications folder</li>
              <li>Sign in with your account to begin your investigation</li>
            </ol>
          </div>
        </motion.div>

        {/* System Requirements */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Minimum */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#C4A16A] mb-6 flex items-center">
              <Cpu className="mr-3" size={28} />
              Minimum Requirements
            </h3>
            <div className="space-y-4 text-[#D7D7D7]">
              <div className="flex justify-between border-b border-[#C4A16A]/10 pb-3">
                <span className="text-[#B0B0B0]">OS</span>
                <span className="font-mono">Windows 10 64-bit</span>
              </div>
              <div className="flex justify-between border-b border-[#C4A16A]/10 pb-3">
                <span className="text-[#B0B0B0]">Processor</span>
                <span className="font-mono">Intel Core i5-4460</span>
              </div>
              <div className="flex justify-between border-b border-[#C4A16A]/10 pb-3">
                <span className="text-[#B0B0B0]">Memory</span>
                <span className="font-mono">8 GB RAM</span>
              </div>
              <div className="flex justify-between border-b border-[#C4A16A]/10 pb-3">
                <span className="text-[#B0B0B0]">Graphics</span>
                <span className="font-mono">NVIDIA GTX 970</span>
              </div>
              <div className="flex justify-between border-b border-[#C4A16A]/10 pb-3">
                <span className="text-[#B0B0B0]">Storage</span>
                <span className="font-mono">50 GB available</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#B0B0B0]">DirectX</span>
                <span className="font-mono">Version 11</span>
              </div>
            </div>
          </motion.div>

          {/* Recommended */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border-2 border-[#C4A16A]/40 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#C4A16A] mb-6 flex items-center">
              <Monitor className="mr-3" size={28} />
              Recommended Requirements
            </h3>
            <div className="space-y-4 text-[#D7D7D7]">
              <div className="flex justify-between border-b border-[#C4A16A]/10 pb-3">
                <span className="text-[#B0B0B0]">OS</span>
                <span className="font-mono">Windows 11 64-bit</span>
              </div>
              <div className="flex justify-between border-b border-[#C4A16A]/10 pb-3">
                <span className="text-[#B0B0B0]">Processor</span>
                <span className="font-mono">Intel Core i7-8700K</span>
              </div>
              <div className="flex justify-between border-b border-[#C4A16A]/10 pb-3">
                <span className="text-[#B0B0B0]">Memory</span>
                <span className="font-mono">16 GB RAM</span>
              </div>
              <div className="flex justify-between border-b border-[#C4A16A]/10 pb-3">
                <span className="text-[#B0B0B0]">Graphics</span>
                <span className="font-mono">NVIDIA RTX 3070</span>
              </div>
              <div className="flex justify-between border-b border-[#C4A16A]/10 pb-3">
                <span className="text-[#B0B0B0]">Storage</span>
                <span className="font-mono">50 GB SSD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#B0B0B0]">DirectX</span>
                <span className="font-mono">Version 12</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-xl p-6 text-center">
            <HardDrive className="text-[#C4A16A] mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold text-[#C4A16A] mb-2">File Size</h4>
            <p className="text-[#D7D7D7] text-2xl font-mono">45 GB</p>
          </div>

          <div className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-xl p-6 text-center">
            <Globe className="text-[#C4A16A] mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold text-[#C4A16A] mb-2">Languages</h4>
            <p className="text-[#D7D7D7] text-sm">English, Spanish, French, German, Japanese</p>
          </div>

          <div className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-xl p-6 text-center">
            <Download className="text-[#C4A16A] mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold text-[#C4A16A] mb-2">Release Date</h4>
            <p className="text-[#D7D7D7] text-xl font-mono">June 1, 2026</p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[#B0B0B0] mb-6 italic">
            By downloading, you agree to our Terms of Service and Privacy Policy
          </p>
          <div className="inline-block bg-[#1F1F1F]/80 backdrop-blur-md border border-[#C4A16A]/20 rounded-lg p-6">
            <p className="text-[#8D6B47] font-mono text-sm">
              "The investigation awaits. Download now and uncover the truth."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}