import { motion } from "motion/react";
import { ChevronDown, Play, Download, Search, Eye, Lock } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { HeroRainEffect } from "../components/effects/HeroRainEffect";
import { Footer } from "../components/Footer";
import abandonedHouseImg from "../../imports/WhatsApp_Image_2026-05-23_at_3.56.47_PM__1_.jpeg";
import detectiveImg from "../../imports/WhatsApp_Image_2026-06-03_at_1.24.42_PM.jpeg";
import laylaImg from "../../imports/WhatsApp_Image_2026-06-03_at_1.04.55_PM.jpeg";
import oldManImg from "../../imports/WhatsApp_Image_2026-06-03_at_1.04.54_PM.jpeg";
import mastermindImg from "../../imports/WhatsApp_Image_2026-06-03_at_1.04.54_PM__1_.jpeg";

export function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Solid Background */}
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#050505] to-[#0D0D0D]"></div>
        </div>

        {/* Rain Effect */}
        <HeroRainEffect />

        {/* Floating Particles */}
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#C4A16A] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-wider mt-20">
              <span className="block bg-gradient-to-r from-[#F2EEE8] via-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
                CODE OF
              </span>
              <span className="block bg-gradient-to-r from-[#C4A16A] via-[#F2EEE8] to-[#C4A16A] bg-clip-text text-transparent">
                CLUES
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-[#D7D7D7] mb-12 tracking-wide">
              Every Clue Hides A Truth
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link to="/download">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] hover:shadow-[0_0_40px_rgba(196,161,106,0.6)] transition-all duration-300 px-12 py-7 text-lg"
                >
                  <Download className="mr-2" size={24} />
                  Start Investigation
                </Button>
              </Link>
              <Link to="/trailer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#C4A16A] text-[#C4A16A] hover:bg-[#C4A16A]/10 px-12 py-7 text-lg backdrop-blur-sm"
                >
                  <Play className="mr-2" size={24} />
                  Watch Trailer
                </Button>
              </Link>
            </div>

            {/* Detective Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="inline-block max-w-md mx-auto"
            >
              <div className="bg-[#1F1F1F]/80 backdrop-blur-md border border-[#C4A16A]/20 rounded p-6 text-left shadow-2xl">
                <p className="text-[#B0B0B0] text-sm font-mono italic">
                  Detective Log - #001
                  <br />
                  <span className="text-[#D7D7D7] mt-2 block">
                    Every case has a beginning...
                    <br />
                    This is ours.
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-[#C4A16A]" size={48} />
        </motion.div>
      </section>

      {/* Story Preview */}
      <section className="relative py-32 px-6 lg:px-12 bg-gradient-to-b from-[#050505] to-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
              Uncover the Mystery
            </h2>
            <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto leading-relaxed">
              Step into the shoes of a brilliant detective as you navigate through a web of secrets, 
              deception, and danger. Every choice you make will shape the outcome of your investigation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-50 space-y-6"
            >
              <ImageWithFallback
                src={abandonedHouseImg}
                alt="Abandoned House - Exterior View"
                className="rounded-lg shadow-2xl border border-[#C4A16A]/20 relative z-50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-[#C4A16A]">Chapter 1: The Abandoned House</h3>
                <p className="text-[#D7D7D7] leading-relaxed">
                  Your investigation begins at an old, decrepit mansion on the outskirts of town. 
                  Within its walls lie hidden safes, cryptic codes, and a mysterious necklace that 
                  could be the key to solving everything.
                </p>
              </div>

              <ul className="space-y-3">
                {["Hidden safe with secret code", "Mysterious necklace", "Ancient map fragments", "Cryptic journal entries"].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-3 text-[#B0B0B0]"
                  >
                    <div className="w-2 h-2 bg-[#C4A16A] rounded-full"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link to="/story">
                <Button variant="outline" className="border-[#C4A16A] text-[#C4A16A] hover:bg-[#C4A16A]/10 mt-6">
                  Explore Full Story
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gameplay Preview */}
      <section className="relative py-32 px-6 lg:px-12 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
              Master Detective Skills
            </h2>
            <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
              Combine investigation, stealth, and puzzle-solving to unravel the truth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Investigation",
                description: "Examine crime scenes, collect evidence, and piece together clues",
                icon: Search,
              },
              {
                title: "Stealth Missions",
                description: "Infiltrate secure locations without being detected",
                icon: Eye,
              },
              {
                title: "Puzzle Solving",
                description: "Crack codes, decipher messages, and unlock secrets",
                icon: Lock,
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group bg-[#151515] border border-[#C4A16A]/20 rounded-lg p-8 hover:border-[#C4A16A]/50 hover:shadow-[0_0_30px_rgba(196,161,106,0.2)] transition-all duration-300"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#C4A16A]/20 blur-2xl rounded-full"></div>
                  <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-[#C4A16A]/20 to-[#8D6B47]/20 border-2 border-[#C4A16A] rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="text-[#C4A16A]" size={40} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#C4A16A] mb-3">{feature.title}</h3>
                <p className="text-[#B0B0B0]">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gameplay">
              <Button variant="outline" className="border-[#C4A16A] text-[#C4A16A] hover:bg-[#C4A16A]/10">
                View All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Characters Preview */}
      <section className="relative py-32 px-6 lg:px-12 bg-gradient-to-b from-[#0D0D0D] to-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
              Meet the Cast
            </h2>
            <p className="text-xl text-[#B0B0B0]">
              Each character holds secrets that could change everything
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "The Detective", role: "Protagonist", image: detectiveImg },
              { name: "Layla", role: "Surveillance Expert", image: laylaImg },
              { name: "The Old Man", role: "Guardian of Secrets", image: oldManImg },
              { name: "The Mastermind", role: "Antagonist", image: mastermindImg },
            ].map((character, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-lg border border-[#C4A16A]/20 hover:border-[#C4A16A]/50 transition-all duration-300"
              >
                <div className="aspect-[3/4] bg-gradient-to-b from-[#1F1F1F] to-[#0D0D0D] relative">
                  {character.image && (
                    <ImageWithFallback
                      src={character.image}
                      alt={character.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-2xl font-bold text-[#C4A16A] mb-1">{character.name}</h3>
                    <p className="text-[#B0B0B0]">{character.role}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/characters">
              <Button variant="outline" className="border-[#C4A16A] text-[#C4A16A] hover:bg-[#C4A16A]/10">
                Meet All Characters
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="relative py-32 px-6 lg:px-12 bg-[#050505]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
              Begin Your Investigation
            </h2>
            <p className="text-xl text-[#B0B0B0] mb-12">
              Download Code of Clues now and uncover the truth hidden in the shadows
            </p>
            <Link to="/download">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] hover:shadow-[0_0_40px_rgba(196,161,106,0.6)] transition-all duration-300 px-16 py-8 text-xl"
              >
                <Download className="mr-2" size={28} />
                Download Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}