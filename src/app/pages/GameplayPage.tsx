import { motion } from "motion/react";
import { Search, Archive, Puzzle, Ghost, Map, Package, GitBranch, Swords, Film } from "lucide-react";

const gameplayFeatures = [
  {
    title: "Investigation",
    description: "Examine crime scenes with forensic precision. Collect fingerprints, analyze evidence, and interview witnesses to build your case.",
    icon: Search,
    color: "from-[#C4A16A] to-[#8D6B47]",
  },
  {
    title: "Evidence Collection",
    description: "Gather crucial clues scattered throughout the game world. Every item could be the key to solving the mystery.",
    icon: Archive,
    color: "from-[#8D6B47] to-[#C4A16A]",
  },
  {
    title: "Puzzle Solving",
    description: "Crack complex codes, decipher ancient symbols, and unlock hidden mechanisms to progress through the story.",
    icon: Puzzle,
    color: "from-[#C4A16A] to-[#5A1212]",
  },
  {
    title: "Stealth Missions",
    description: "Navigate through heavily guarded areas without being detected. Use shadows and timing to your advantage.",
    icon: Ghost,
    color: "from-[#5A1212] to-[#8D6B47]",
  },
  {
    title: "Exploration",
    description: "Discover hidden locations, secret passages, and alternative routes. The world is filled with secrets waiting to be uncovered.",
    icon: Map,
    color: "from-[#8D6B47] to-[#C4A16A]",
  },
  {
    title: "Inventory System",
    description: "Manage your collection of clues, tools, and evidence. Combine items to create new solutions.",
    icon: Package,
    color: "from-[#C4A16A] to-[#8D6B47]",
  },
  {
    title: "Story Choices",
    description: "Your decisions shape the narrative. Multiple endings await based on your investigative prowess and moral choices.",
    icon: GitBranch,
    color: "from-[#5A1212] to-[#C4A16A]",
  },
  {
    title: "Boss Battles",
    description: "Confront dangerous adversaries in intense encounters. Use strategy and wit to overcome powerful enemies.",
    icon: Swords,
    color: "from-[#8D6B47] to-[#5A1212]",
  },
  {
    title: "Cinematic Cutscenes",
    description: "Experience the story through beautifully crafted cinematics that bring the mystery to life.",
    icon: Film,
    color: "from-[#C4A16A] to-[#8D6B47]",
  },
];

export function GameplayPage() {
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
            Gameplay Features
          </h1>
          <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
            Master the art of investigation through diverse mechanics and gameplay systems
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameplayFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <div className="relative bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-xl p-8 shadow-2xl group-hover:border-[#C4A16A]/60 group-hover:shadow-[0_0_40px_rgba(196,161,106,0.3)] transition-all duration-500">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-[0_0_30px_rgba(196,161,106,0.5)] transition-all duration-500`}>
                    <feature.icon className="text-[#050505]" size={36} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#C4A16A] mb-4 group-hover:text-[#F2EEE8] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#B0B0B0] leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C4A16A]/30 group-hover:border-[#C4A16A] transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#C4A16A]/30 group-hover:border-[#C4A16A] transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Features Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border-2 border-[#C4A16A]/30 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
              Immersive Experience
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#C4A16A] mb-3">40+</div>
                <div className="text-[#B0B0B0]">Hours of Gameplay</div>
              </div>
              <div className="text-center border-l border-r border-[#C4A16A]/20">
                <div className="text-5xl font-bold text-[#C4A16A] mb-3">6</div>
                <div className="text-[#B0B0B0]">Unique Chapters</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#C4A16A] mb-3">100+</div>
                <div className="text-[#B0B0B0]">Clues to Discover</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-[#8D6B47] font-mono italic text-lg">
            "Every mechanic serves the mystery. Every feature reveals the truth."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
