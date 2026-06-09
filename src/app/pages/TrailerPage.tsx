import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Play, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { FogEffect } from "../components/effects/FogEffect";

const TRAILER_MP4 = "/videos/Trailer.mp4";
const YOUTUBE_WATCH_URL = "https://youtu.be/so73ZDJwqGE";

export function TrailerPage() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#050505] to-[#0D0D0D]" />

      {/* Fog Effect */}
      <FogEffect />

      {/* Content */}
      <div className="relative z-20 flex min-h-screen flex-col">
        {/* Header */}
        <div className="container mx-auto px-6 pt-32 pb-8">
          <Link to="/">
            <Button
              variant="outline"
              className="mb-8 border-[#C4A16A] text-[#C4A16A] backdrop-blur-sm hover:bg-[#C4A16A]/10"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-4 text-5xl font-bold tracking-wider md:text-7xl">
              <span className="bg-gradient-to-r from-[#F2EEE8] via-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
                Official Trailer
              </span>
            </h1>
            <p className="text-xl tracking-wide text-[#D7D7D7]">
              Step into the shadows of Code of Clues
            </p>
          </motion.div>
        </div>

        {/* Video Player Section */}
        <div className="container mx-auto flex flex-1 items-center justify-center px-6 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-6xl"
          >
            <div className="relative">
              {/* Golden Glow */}
              <div className="pointer-events-none absolute -inset-4 bg-gradient-to-r from-[#C4A16A]/20 via-[#8D6B47]/20 to-[#C4A16A]/20 blur-2xl" />

              {/* Video Container */}
              <div className="relative rounded-lg border-2 border-[#C4A16A]/40 bg-[#1F1F1F] shadow-2xl">
                {/* Corner Ornaments */}
                <div className="pointer-events-none absolute top-0 left-0 z-10 h-16 w-16 border-l-4 border-t-4 border-[#C4A16A]" />
                <div className="pointer-events-none absolute top-0 right-0 z-10 h-16 w-16 border-r-4 border-t-4 border-[#C4A16A]" />
                <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-16 w-16 border-l-4 border-b-4 border-[#C4A16A]" />
                <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-16 w-16 border-r-4 border-b-4 border-[#C4A16A]" />

                {/* MP4 Player */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  {!videoError ? (
                    <video
                      className="absolute inset-0 h-full w-full object-contain"
                      src={TRAILER_MP4}
                      controls
                      playsInline
                      preload="metadata"
                      onError={() => setVideoError(true)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                      <p className="text-[#D7D7D7]">
                        Trailer could not be loaded in the browser.
                      </p>
                      <a
                        href={YOUTUBE_WATCH_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#C4A16A] hover:underline"
                      >
                        <ExternalLink size={18} />
                        Watch on YouTube
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-[#C4A16A] to-transparent" />
            </div>

            {/* YouTube fallback link */}
            <div className="mt-4 text-center">
              <a
                href={YOUTUBE_WATCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C4A16A] hover:underline"
              >
                <ExternalLink size={16} />
                Also available on YouTube
              </a>
            </div>

            {/* Video Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center"
            >
              <div className="mx-auto max-w-3xl rounded-lg border border-[#C4A16A]/20 bg-[#1F1F1F]/60 p-8 backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <Play className="text-[#C4A16A]" size={24} />
                  <h3 className="text-2xl font-bold tracking-wide text-[#C4A16A]">
                    The Investigation Begins
                  </h3>
                </div>
                <p className="mb-6 leading-relaxed text-[#D7D7D7]">
                  Uncover the dark secrets hidden in the rain-soaked streets of Ashford City.
                  Every shadow tells a story. Every clue brings you closer to the truth.
                  But be warned—some mysteries are meant to stay buried.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link to="/download" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] transition-all duration-300 hover:shadow-[0_0_40px_rgba(196,161,106,0.6)]"
                    >
                      Download Game
                    </Button>
                  </Link>
                  <Link to="/story" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-[#C4A16A] text-[#C4A16A] backdrop-blur-sm hover:bg-[#C4A16A]/10"
                    >
                      Explore Story
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}