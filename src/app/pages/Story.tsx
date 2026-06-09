import { motion } from "motion/react";
import { Home, ShoppingCart, Building2, User, Shield, Eye } from "lucide-react";

const chapters = [
  {
    number: 1,
    title: "The Abandoned House",
    icon: Home,
    description: "Your investigation begins at a desolate house on the outskirts of town. The air is thick with mystery.",
    clues: [
      { name: "Hidden Safe", detail: "A locked safe behind a painting" },
      { name: "Secret Code", detail: "Cryptic numbers scrawled on a mirror" },
      { name: "Mysterious Necklace", detail: "An antique pendant with strange engravings" },
      { name: "Hidden Map", detail: "A map marking unknown locations" },
    ],
    color: "#C4A16A",
  },
  {
    number: 2,
    title: "The Remote Supermarket",
    icon: ShoppingCart,
    description: "A seemingly ordinary supermarket holds dark secrets. The employees aren't what they seem.",
    clues: [
      { name: "Strange Employee", detail: "A worker with a suspicious background" },
      { name: "Hidden Weapon", detail: "Concealed in storage area" },
      { name: "Secret Files", detail: "Encrypted documents in the office" },
      { name: "Flash Drive", detail: "Contains surveillance footage" },
    ],
    color: "#8D6B47",
  },
  {
    number: 3,
    title: "Corporate Infiltration",
    icon: Building2,
    description: "Infiltrate a powerful corporation. Navigate security systems and uncover corporate conspiracies.",
    clues: [
      { name: "Security Systems", detail: "Advanced surveillance network" },
      { name: "Hidden Records", detail: "Classified financial documents" },
      { name: "Surveillance Footage", detail: "Evidence of illegal activities" },
    ],
    color: "#C4A16A",
  },
  {
    number: 4,
    title: "The Old Man's Secret",
    icon: User,
    description: "An elderly informant holds the key to everything. But someone doesn't want him talking.",
    clues: [
      { name: "Murdered Investigator", detail: "A former detective, silenced" },
      { name: "Hidden Key", detail: "Opens a secret location" },
    ],
    color: "#8D6B47",
  },
  {
    number: 5,
    title: "Secret Facility",
    icon: Shield,
    description: "Breach a hidden underground facility. Face robotic guards and uncover the criminal network.",
    clues: [
      { name: "Criminal Network", detail: "The web of corruption revealed" },
      { name: "Robotic Guards", detail: "Automated security threats" },
    ],
    color: "#5A1212",
  },
  {
    number: 6,
    title: "Final Truth",
    icon: Eye,
    description: "The mastermind is revealed. Confront the truth in a final showdown. Will justice prevail?",
    clues: [
      { name: "Hidden Mastermind", detail: "The puppet master behind it all" },
      { name: "Police Intervention", detail: "The final confrontation" },
    ],
    color: "#C4A16A",
  },
];

export function Story() {
  return (
    <div className="min-h-screen bg-[#050505] pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0D0D0D] to-[#050505]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzRBMTZBIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-[#C4A16A]/10 border border-[#C4A16A]/30 rounded-full">
              <span className="text-[#C4A16A] tracking-wider">THE INVESTIGATION</span>
            </div>
            <h1 className="mb-6 text-6xl md:text-7xl bg-gradient-to-r from-[#C4A16A] via-[#F2EEE8] to-[#8D6B47] bg-clip-text text-transparent">
              The Story
            </h1>
            <p className="text-xl text-[#D7D7D7] max-w-3xl mx-auto leading-relaxed">
              Follow the detective's journey through six gripping chapters. Each location reveals new clues, 
              new suspects, and darker secrets. Piece together the evidence to uncover the truth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C4A16A] via-[#8D6B47] to-[#5A1212] transform md:-translate-x-1/2" />

            {/* Chapters */}
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div className="flex items-start">
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#050505] z-10"
                    style={{ backgroundColor: chapter.color }}
                  >
                    <chapter.icon className="h-8 w-8 text-[#050505]" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-28 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    } w-full`}
                  >
                    <div className="group relative p-8 bg-gradient-to-br from-[#151515] to-[#0D0D0D] border-2 rounded-xl overflow-hidden hover:shadow-2xl transition-all"
                      style={{ borderColor: `${chapter.color}40` }}
                    >
                      {/* Chapter Number */}
                      <div className="absolute top-4 right-4 text-6xl opacity-5" style={{ color: chapter.color }}>
                        {chapter.number.toString().padStart(2, '0')}
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="mb-4">
                          <span className="text-sm tracking-wider" style={{ color: chapter.color }}>
                            CHAPTER {chapter.number}
                          </span>
                        </div>
                        
                        <h3 className="mb-4 text-3xl" style={{ color: chapter.color }}>
                          {chapter.title}
                        </h3>
                        
                        <p className="mb-6 text-[#D7D7D7] leading-relaxed">
                          {chapter.description}
                        </p>

                        {/* Clues */}
                        <div className="space-y-3">
                          <h4 className="text-sm tracking-wider text-[#C4A16A] mb-3">EVIDENCE COLLECTED:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {chapter.clues.map((clue, clueIndex) => (
                              <motion.div
                                key={clueIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: clueIndex * 0.1 }}
                                className="flex items-start space-x-2 p-3 bg-[#0D0D0D]/50 rounded-lg border border-[#C4A16A]/10 hover:border-[#C4A16A]/30 transition-colors"
                              >
                                <div className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: chapter.color }} />
                                <div>
                                  <p className="text-[#F2EEE8] text-sm">{clue.name}</p>
                                  <p className="text-[#B0B0B0] text-xs">{clue.detail}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                        style={{ backgroundColor: chapter.color }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gradient-to-t from-[#0D0D0D] to-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl md:text-5xl bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] bg-clip-text text-transparent">
              Experience the Full Story
            </h2>
            <p className="mb-8 text-lg text-[#D7D7D7]">
              Every chapter brings you closer to the truth. Are you ready to solve the mystery?
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
