import { motion } from "motion/react";
import { Lock, MapPin, FileSearch, Building2, Key, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import abandonedHouseImg2 from "../../imports/WhatsApp_Image_2026-05-23_at_3.56.47_PM__1_-1.jpeg";
import supermarketImg from "../../imports/WhatsApp_Image_2026-05-23_at_3.56.47_PM.jpeg";
import corporateImg from "../../imports/WhatsApp_Image_2026-05-23_at_3.56.46_PM__1_.jpeg";
import oldManImg from "../../imports/WhatsApp_Image_2026-05-23_at_3.56.46_PM.jpeg";
import secretFacilityImg from "../../imports/WhatsApp_Image_2026-05-23_at_3.56.48_PM.jpeg";
import finalTruthImg from "../../imports/ChatGPT_Image_May_23__2026__07_45_32_PM.png";

const chapters = [
  {
    number: 1,
    title: "The Abandoned House",
    description: "Your investigation begins in a derelict mansion where shadows hide deadly secrets.",
    evidence: ["Hidden safe", "Secret code", "Mysterious necklace", "Hidden map"],
    icon: MapPin,
    status: "unlocked",
    image: abandonedHouseImg2,
  },
  {
    number: 2,
    title: "The Remote Supermarket",
    description: "A seemingly ordinary store conceals an extraordinary conspiracy.",
    evidence: ["Strange employee", "Hidden weapon", "Secret files", "Flash drive"],
    icon: FileSearch,
    status: "unlocked",
    image: supermarketImg,
  },
  {
    number: 3,
    title: "Corporate Infiltration",
    description: "Breach the defenses of a powerful corporation to uncover corruption at the highest levels.",
    evidence: ["Security systems", "Hidden records", "Surveillance footage"],
    icon: Building2,
    status: "locked",
    image: corporateImg,
  },
  {
    number: 4,
    title: "The Old Man's Secret",
    description: "A guardian of truth lies dead, but his secrets live on.",
    evidence: ["Murdered investigator", "Hidden key"],
    icon: Key,
    status: "locked",
    image: oldManImg,
  },
  {
    number: 5,
    title: "Secret Facility",
    description: "Enter a clandestine facility where technology and crime converge.",
    evidence: ["Criminal network", "Robotic guards"],
    icon: Shield,
    status: "locked",
    image: secretFacilityImg,
  },
  {
    number: 6,
    title: "Final Truth",
    description: "Face the mastermind and bring justice to those who hide in darkness.",
    evidence: ["Hidden mastermind", "Police intervention"],
    icon: Lock,
    status: "locked",
    image: finalTruthImg,
  },
];

export function StoryPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-[#050505] via-[#0D0D0D] to-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
            The Investigation
          </h1>
          <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
            Follow the trail of evidence through six gripping chapters. 
            Each case file reveals a piece of the puzzle.
          </p>
        </motion.div>

        {/* Detective Board */}
        <div className="relative">
          {/* Evidence String Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C4A16A]/0 via-[#C4A16A]/50 to-[#C4A16A]/0"></div>

          {/* Chapters */}
          <div className="space-y-24">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                {/* Case File Card */}
                <div className={`w-full md:w-5/12 ${chapter.status === "locked" ? "opacity-50" : ""}`}>
                  <div className="relative group">
                    {/* Tape Effect */}
                    <div className="absolute -top-4 left-8 w-20 h-8 bg-[#D7D7D7]/20 backdrop-blur-sm transform -rotate-12 border-t border-b border-[#C4A16A]/30"></div>
                    
                    <div className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border-2 border-[#C4A16A]/30 rounded-lg p-8 shadow-2xl group-hover:border-[#C4A16A]/60 group-hover:shadow-[0_0_40px_rgba(196,161,106,0.2)] transition-all duration-300">
                      {/* Chapter Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#C4A16A] to-[#8D6B47] rounded-lg flex items-center justify-center shadow-lg">
                            <chapter.icon className="text-[#050505]" size={32} />
                          </div>
                          <div>
                            <div className="text-[#8D6B47] text-sm font-mono">CASE FILE #{chapter.number.toString().padStart(3, "0")}</div>
                            <h3 className="text-2xl font-bold text-[#C4A16A]">{chapter.title}</h3>
                          </div>
                        </div>
                        {chapter.status === "locked" && (
                          <Lock className="text-[#8D6B47]" size={24} />
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-[#D7D7D7] mb-6 leading-relaxed">
                        {chapter.description}
                      </p>

                      {/* Evidence List */}
                      <div className="space-y-3">
                        <div className="text-[#8D6B47] text-sm font-mono uppercase tracking-wider">Evidence Collected:</div>
                        <div className="space-y-2">
                          {chapter.evidence.map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center space-x-3 text-[#B0B0B0]"
                            >
                              <div className="w-1.5 h-1.5 bg-[#C4A16A] rounded-full"></div>
                              <span className="font-mono text-sm">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="mt-6 pt-6 border-t border-[#C4A16A]/20">
                        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider ${
                          chapter.status === "unlocked" 
                            ? "bg-[#C4A16A]/20 text-[#C4A16A] border border-[#C4A16A]/50" 
                            : "bg-[#8D6B47]/20 text-[#8D6B47] border border-[#8D6B47]/50"
                        }`}>
                          {chapter.status === "unlocked" ? "CASE OPEN" : "CLASSIFIED"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chapter Number Badge (Center) */}
                <div className="hidden md:block w-2/12 flex-shrink-0">
                  <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-[#C4A16A] to-[#8D6B47] rounded-full flex items-center justify-center shadow-2xl ring-4 ring-[#0D0D0D] group-hover:ring-[#C4A16A]/20 transition-all duration-300">
                    <span className="text-3xl font-bold text-[#050505]">{chapter.number}</span>
                    {/* Connector Dots */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-full ml-8 w-2 h-2 bg-[#C4A16A] rounded-full"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-full mr-8 w-2 h-2 bg-[#C4A16A] rounded-full"></div>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="w-full md:w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="aspect-video bg-gradient-to-br from-[#1F1F1F] to-[#151515] rounded-lg border border-[#C4A16A]/20 overflow-hidden shadow-2xl"
                  >
                    {chapter.image ? (
                      <ImageWithFallback
                        src={chapter.image}
                        alt={chapter.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#8D6B47]">
                        <chapter.icon size={64} />
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-block bg-[#1F1F1F]/80 backdrop-blur-md border border-[#C4A16A]/20 rounded-lg p-8 max-w-2xl">
            <p className="text-[#B0B0B0] font-mono italic mb-4">
              "In the end, every shadow conceals a truth, and every truth demands justice."
            </p>
            <p className="text-[#8D6B47] text-sm">— The Detective</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}