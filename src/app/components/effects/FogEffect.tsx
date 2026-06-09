import { motion } from "motion/react";

export function FogEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[99] overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ x: "-100%" }}
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 60 + i * 20,
            repeat: Infinity,
            ease: "linear",
            delay: i * 15,
          }}
        >
          <div
            className="w-[200%] h-full opacity-10"
            style={{
              background: `radial-gradient(ellipse at center, rgba(196, 161, 106, 0.15) 0%, transparent 70%)`,
              filter: "blur(60px)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
