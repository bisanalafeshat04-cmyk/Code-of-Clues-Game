import { motion } from "motion/react";
import { Mail, MessageSquare, Twitter, Facebook, Instagram, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-[#050505] via-[#0D0D0D] to-[#050505]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-[#B0B0B0]">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-[#C4A16A] mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-[#D7D7D7] mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-[#0D0D0D] border-[#C4A16A]/30 text-[#F2EEE8] placeholder-[#8D6B47] focus:border-[#C4A16A]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#D7D7D7] mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-[#0D0D0D] border-[#C4A16A]/30 text-[#F2EEE8] placeholder-[#8D6B47] focus:border-[#C4A16A]"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-[#D7D7D7] mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  className="bg-[#0D0D0D] border-[#C4A16A]/30 text-[#F2EEE8] placeholder-[#8D6B47] focus:border-[#C4A16A] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] hover:shadow-[0_0_30px_rgba(196,161,106,0.5)] transition-all duration-300 py-6"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Studio Email */}
            <div className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#C4A16A] to-[#8D6B47] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#050505]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#C4A16A] mb-2">Email</h3>
                  <p className="text-[#D7D7D7] mb-2">For general inquiries and support</p>
                  <a
                    href="mailto:support@codeofclues.com"
                    className="text-[#C4A16A] hover:text-[#F2EEE8] font-mono transition-colors"
                  >
                    support@codeofclues.com
                  </a>
                </div>
              </div>
            </div>

            {/* Discord Community */}
            <div className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#C4A16A] to-[#8D6B47] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-[#050505]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#C4A16A] mb-2">Discord</h3>
                  <p className="text-[#D7D7D7] mb-2">Join our community</p>
                  <a
                    href="#"
                    className="text-[#C4A16A] hover:text-[#F2EEE8] font-mono transition-colors"
                  >
                    discord.gg/codeofclues
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#C4A16A] mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-[#0D0D0D] border border-[#C4A16A]/30 rounded-lg flex items-center justify-center hover:bg-[#C4A16A]/10 hover:border-[#C4A16A] transition-all duration-300"
                >
                  <Twitter className="text-[#C4A16A]" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[#0D0D0D] border border-[#C4A16A]/30 rounded-lg flex items-center justify-center hover:bg-[#C4A16A]/10 hover:border-[#C4A16A] transition-all duration-300"
                >
                  <Facebook className="text-[#C4A16A]" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[#0D0D0D] border border-[#C4A16A]/30 rounded-lg flex items-center justify-center hover:bg-[#C4A16A]/10 hover:border-[#C4A16A] transition-all duration-300"
                >
                  <Instagram className="text-[#C4A16A]" size={20} />
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-[#0D0D0D] border-l-4 border-[#C4A16A] rounded-r-xl p-6">
              <p className="text-[#B0B0B0] italic">
                <span className="text-[#C4A16A] font-bold">Response Time:</span> We typically
                respond to inquiries within 24-48 hours during business days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
