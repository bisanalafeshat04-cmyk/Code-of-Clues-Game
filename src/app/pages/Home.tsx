import { motion } from "motion/react";
import { Link } from "react-router";
import { Play, ChevronDown, BookOpen, Gamepad2, Users, Download, Newspaper } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroImage from "../../imports/attachment_58735320.jpg";
import mysterImage from "../../imports/5e82d3c4f4ef2d5c2b336d4a_preview.jpg";
import detectiveImage from "../../imports/WhatsApp_Image_2026-05-23_at_4.16.07_PM.jpeg";

export function Home() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={heroImage}
            alt="Abandoned House in Fog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/70 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/80" />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#C4A16A] rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 0.5, 0],
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
        <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block mb-6 px-6 py-2 bg-[#C4A16A]/10 border border-[#C4A16A]/30 rounded-full"
              >
                <span className="text-[#C4A16A] tracking-wider">MYSTERY • THRILLER • INVESTIGATION</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-6"
              >
                <span className="block text-6xl md:text-8xl lg:text-9xl tracking-wider bg-gradient-to-br from-[#C4A16A] via-[#F2EEE8] to-[#8D6B47] bg-clip-text text-transparent drop-shadow-2xl">
                  CODE OF
                </span>
                <span className="block text-6xl md:text-8xl lg:text-9xl tracking-wider bg-gradient-to-br from-[#8D6B47] via-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent drop-shadow-2xl">
                  CLUES
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-8 text-2xl md:text-3xl text-[#D7D7D7] tracking-wide italic"
              >
                Every Clue Hides A Truth
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/download">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] hover:from-[#8D6B47] hover:to-[#C4A16A] text-[#0D0D0D] px-8 py-6 text-lg shadow-2xl shadow-[#C4A16A]/30 hover:shadow-[#C4A16A]/50 transition-all"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Start Investigation
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-[#C4A16A] text-[#C4A16A] hover:bg-[#C4A16A]/20 px-8 py-6 text-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Trailer
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Detective Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                <ImageWithFallback
                  src={detectiveImage}
                  alt="Detective Character"
                  className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ChevronDown className="h-10 w-10 text-[#C4A16A]" />
        </motion.div>
      </section>

      {/* Story Preview Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#050505] via-[#0D0D0D] to-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-1 bg-[#C4A16A]/10 border border-[#C4A16A]/30 rounded-full">
              <span className="text-[#C4A16A] text-sm tracking-wider">THE MYSTERY AWAITS</span>
            </div>
            <h2 className="mb-6 text-5xl md:text-6xl bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] bg-clip-text text-transparent">
              Uncover the Story
            </h2>
            <p className="text-[#B0B0B0] text-lg max-w-3xl mx-auto leading-relaxed">
              A web of secrets, a trail of clues, and a truth that will shake everything you thought you knew. 
              Are you ready to investigate?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src={mysterImage}
                alt="Mystery Investigation"
                className="w-full h-auto rounded-lg shadow-2xl shadow-[#C4A16A]/10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl text-[#C4A16A]">The Investigation Begins</h3>
              <p className="text-[#D7D7D7] leading-relaxed">
                When a mysterious case lands on your desk, you're thrust into a world of shadows and secrets. 
                From abandoned houses to corporate headquarters, from quiet supermarkets to hidden facilities—every 
                location holds pieces of a larger puzzle.
              </p>
              <p className="text-[#B0B0B0] leading-relaxed">
                Follow the evidence, interrogate suspects, and piece together the truth before it's too late. 
                But be warned: in this game, nothing is as it seems, and everyone has something to hide.
              </p>
              <Link to="/story">
                <Button
                  size="lg"
                  className="bg-[#C4A16A]/20 hover:bg-[#C4A16A]/30 text-[#C4A16A] border border-[#C4A16A]/50"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Full Story
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-5xl bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] bg-clip-text text-transparent">
              Game Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Gamepad2,
                title: "Immersive Gameplay",
                description: "Experience intense investigation mechanics, puzzle solving, and stealth missions.",
                link: "/gameplay",
              },
              {
                icon: Users,
                title: "Complex Characters",
                description: "Meet unforgettable characters, each with their own secrets and motivations.",
                link: "/characters",
              },
              {
                icon: Download,
                title: "Available Now",
                description: "Download and play on Windows, Mac, and Linux. Demo version available.",
                link: "/download",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={feature.link}>
                  <div className="group relative p-8 bg-gradient-to-br from-[#151515] to-[#0D0D0D] border border-[#C4A16A]/20 rounded-xl hover:border-[#C4A16A]/50 transition-all hover:shadow-2xl hover:shadow-[#C4A16A]/10 h-full">
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-[#C4A16A]/10 rounded-lg group-hover:bg-[#C4A16A]/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-[#C4A16A]" />
                    </div>
                    <h3 className="mb-3 text-xl text-[#C4A16A]">{feature.title}</h3>
                    <p className="text-[#B0B0B0] leading-relaxed">{feature.description}</p>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronDown className="h-5 w-5 text-[#C4A16A] rotate-[-90deg]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-gradient-to-b from-[#0D0D0D] to-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-1 bg-[#C4A16A]/10 border border-[#C4A16A]/30 rounded-full">
              <span className="text-[#C4A16A] text-sm tracking-wider">STAY UPDATED</span>
            </div>
            <h2 className="mb-6 text-5xl bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] bg-clip-text text-transparent">
              Latest News
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "New Trailer Released",
                date: "May 30, 2026",
                excerpt: "Watch our latest cinematic trailer showcasing the game's atmospheric world.",
              },
              {
                title: "Demo Now Available",
                date: "May 25, 2026",
                excerpt: "Download the free demo and experience the first chapter of the investigation.",
              },
              {
                title: "Development Update",
                date: "May 20, 2026",
                excerpt: "Behind the scenes look at how we created the game's immersive environments.",
              },
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-[#0D0D0D] border border-[#C4A16A]/20 rounded-xl hover:border-[#C4A16A]/50 transition-all hover:shadow-xl hover:shadow-[#C4A16A]/10"
              >
                <div className="mb-4 flex items-center space-x-2">
                  <Newspaper className="h-4 w-4 text-[#C4A16A]" />
                  <span className="text-[#B0B0B0] text-sm">{news.date}</span>
                </div>
                <h3 className="mb-3 text-xl text-[#C4A16A] group-hover:text-[#8D6B47] transition-colors">
                  {news.title}
                </h3>
                <p className="text-[#B0B0B0]">{news.excerpt}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/news">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-[#C4A16A] text-[#C4A16A] hover:bg-[#C4A16A]/20"
              >
                View All News
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C4A16A]/5 via-transparent to-[#8D6B47]/5" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-5xl md:text-6xl bg-gradient-to-r from-[#C4A16A] via-[#F2EEE8] to-[#8D6B47] bg-clip-text text-transparent">
              The Truth Awaits
            </h2>
            <p className="mb-12 text-xl text-[#D7D7D7] max-w-3xl mx-auto leading-relaxed">
              Download Code of Clues now and step into a world where every shadow hides a secret, 
              and every clue brings you closer to the truth.
            </p>
            <Link to="/download">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] hover:from-[#8D6B47] hover:to-[#C4A16A] text-[#0D0D0D] px-12 py-6 text-xl shadow-2xl shadow-[#C4A16A]/30 hover:shadow-[#C4A16A]/50 transition-all"
              >
                <Download className="mr-3 h-6 w-6" />
                Download Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
