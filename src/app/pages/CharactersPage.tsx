import { motion } from "motion/react";
import { User, Eye, Lock, Skull } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import detectiveImg from "../../imports/WhatsApp_Image_2026-06-03_at_1.24.42_PM.jpeg";
import laylaImg from "../../imports/WhatsApp_Image_2026-06-03_at_1.04.55_PM.jpeg";
import oldManImg from "../../imports/WhatsApp_Image_2026-06-03_at_1.04.54_PM.jpeg";
import mastermindImg from "../../imports/WhatsApp_Image_2026-06-03_at_1.04.54_PM__1_.jpeg";

const characters = [
  {
    name: "THE DETECTIVE",
    role: "Protagonist",
    bio: "A former investigator haunted by an unsolved case, now driven by an obsession to uncover the truth. Known for unparalleled analytical skills and an unwavering moral compass, even when the shadows grow darkest.",
    traits: ["Genius Analyst", "Relentless", "Haunted Past", "Master Investigator"],
    icon: User,
    gradient: "from-[#C4A16A] to-[#8D6B47]",
    image: detectiveImg,
  },
  {
    name: "LAYLA",
    role: "Surveillance Expert",
    bio: "A brilliant hacker and information broker who operates from the digital shadows. Her network of contacts and technical expertise make her an invaluable ally in penetrating the conspiracy's defenses.",
    traits: ["Hacking Expert", "Information Broker", "Tech Savvy", "Mysterious Ally"],
    icon: Eye,
    gradient: "from-[#8D6B47] to-[#C4A16A]",
    image: laylaImg,
  },
  {
    name: "THE OLD MAN",
    role: "Guardian of Secrets",
    bio: "A keeper of ancient knowledge and forbidden truths. His murder sets the investigation in motion, but the secrets he protected may be more dangerous than anyone imagined.",
    traits: ["Wise Elder", "Secret Keeper", "Tragic Victim", "Last Guardian"],
    icon: Lock,
    gradient: "from-[#C4A16A] to-[#5A1212]",
    image: oldManImg,
  },
  {
    name: "THE HIDDEN MASTERMIND",
    role: "Final Antagonist",
    bio: "A shadowy figure pulling strings from behind corporate walls and criminal networks. Their identity remains hidden until the final confrontation, but their influence is felt throughout the investigation.",
    traits: ["Manipulator", "Strategic Genius", "Ruthless", "Unknown Identity"],
    icon: Skull,
    gradient: "from-[#5A1212] to-[#0D0D0D]",
    image: mastermindImg,
  },
];

export function CharactersPage() {
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
            Key Players
          </h1>
          <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
            Meet the individuals whose fates intertwine in a web of secrets, lies, and deadly truths
          </p>
        </motion.div>

        {/* Characters Grid */}
        <div className="space-y-16">
          {characters.map((character, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Character Portrait */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group aspect-[4/5] bg-gradient-to-br from-[#1F1F1F] to-[#0D0D0D] rounded-2xl overflow-hidden border-2 border-[#C4A16A]/30 shadow-2xl"
                >
                  {/* Character Image or Icon */}
                  {character.image ? (
                    <ImageWithFallback
                      src={character.image}
                      alt={character.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <character.icon className="text-[#C4A16A]/20" size={200} />
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${character.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10">
                    <h2 className="text-4xl font-bold text-[#C4A16A] mb-2 tracking-wide">
                      {character.name}
                    </h2>
                    <p className="text-[#8D6B47] text-lg tracking-wider">{character.role}</p>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#C4A16A]/50 z-10"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#C4A16A]/50 z-10"></div>
                </motion.div>
              </div>

              {/* Character Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* Bio */}
                <div className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-[#C4A16A] mb-4">Biography</h3>
                  <p className="text-[#D7D7D7] leading-relaxed">
                    {character.bio}
                  </p>
                </div>

                {/* Traits */}
                <div className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-[#C4A16A] mb-4">Key Traits</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {character.traits.map((trait, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex items-center space-x-3 px-4 py-3 bg-gradient-to-r ${character.gradient} bg-opacity-10 rounded-lg border border-[#C4A16A]/30`}
                      >
                        <div className="w-2 h-2 bg-[#C4A16A] rounded-full"></div>
                        <span className="text-[#D7D7D7] text-sm font-mono">{trait}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-[#0D0D0D] border-l-4 border-[#C4A16A] rounded-r-xl p-6 italic">
                  <p className="text-[#B0B0B0]">
                    {index === 0 && '"The truth is hidden, but it cannot hide forever."'}
                    {index === 1 && '"Information is power. And I have plenty of both."'}
                    {index === 2 && '"Some secrets should have stayed buried..."'}
                    {index === 3 && '"You\'ll never see me coming until it\'s too late."'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Cast */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
            Supporting Cast
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {["Corporate Executive", "Police Detective", "Security Guard"].map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-xl p-6 text-center group hover:border-[#C4A16A]/50 hover:shadow-[0_0_30px_rgba(196,161,106,0.2)] transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#C4A16A] to-[#8D6B47] rounded-full flex items-center justify-center">
                  <User className="text-[#050505]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#C4A16A] mb-2">{role}</h3>
                <p className="text-[#B0B0B0] text-sm">More characters to discover...</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}