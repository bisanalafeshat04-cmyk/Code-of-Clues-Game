import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Masonry from "react-responsive-masonry";
import { X, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import abandonedHouseImg from "../../imports/WhatsApp_Image_2026-05-23_at_3.56.47_PM__1_.jpeg";
import abandonedHouseImg2 from "../../imports/WhatsApp_Image_2026-05-23_at_3.56.47_PM__1_-1.jpeg";
import supermarketImg from "../../imports/WhatsApp_Image_2026-05-23_at_3.56.47_PM.jpeg";
import corporateImg from "../../imports/WhatsApp_Image_2026-05-23_at_3.56.46_PM__1_.jpeg";
import oldManSecretImg from "../../imports/WhatsApp_Image_2026-05-23_at_3.56.46_PM.jpeg";
import secretFacilityImg from "../../imports/WhatsApp_Image_2026-05-23_at_3.56.48_PM.jpeg";
import finalTruthImg from "../../imports/ChatGPT_Image_May_23__2026__07_45_32_PM.png";
import detectiveImg from "../../imports/WhatsApp_Image_2026-06-03_at_1.24.42_PM.jpeg";
import laylaImg from "../../imports/WhatsApp_Image_2026-06-03_at_1.04.55_PM.jpeg";
import oldManCharImg from "../../imports/WhatsApp_Image_2026-06-03_at_1.04.54_PM.jpeg";
import mastermindImg from "../../imports/WhatsApp_Image_2026-06-03_at_1.04.54_PM__1_.jpeg";

const galleryImages = [
  {
    url: abandonedHouseImg,
    category: "Locations",
    title: "The Abandoned House - Exterior",
  },
  {
    url: detectiveImg,
    category: "Characters",
    title: "The Detective",
  },
  {
    url: supermarketImg,
    category: "Locations",
    title: "The Remote Supermarket",
  },
  {
    url: laylaImg,
    category: "Characters",
    title: "Layla - Surveillance Expert",
  },
  {
    url: corporateImg,
    category: "Locations",
    title: "Corporate Infiltration",
  },
  {
    url: oldManCharImg,
    category: "Characters",
    title: "The Old Man - Guardian of Secrets",
  },
  {
    url: oldManSecretImg,
    category: "Locations",
    title: "The Old Man's Secret",
  },
  {
    url: mastermindImg,
    category: "Characters",
    title: "The Mastermind",
  },
  {
    url: secretFacilityImg,
    category: "Locations",
    title: "Secret Facility",
  },
  {
    url: finalTruthImg,
    category: "Cutscenes",
    title: "Final Truth",
  },
  {
    url: abandonedHouseImg2,
    category: "Locations",
    title: "The Abandoned House - Night",
  },
];

const categories = ["All", "Locations", "Characters", "Cutscenes"];

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-[#050505] via-[#0D0D0D] to-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
            Explore the dark and mysterious world of Code of Clues
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] shadow-[0_0_20px_rgba(196,161,106,0.4)]"
                  : "bg-[#1F1F1F] text-[#B0B0B0] border border-[#C4A16A]/20 hover:border-[#C4A16A]/50 hover:text-[#C4A16A]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="1.5rem">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[#C4A16A] font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-[#B0B0B0] text-sm">{image.category}</p>
                  </div>
                  <ZoomIn className="text-[#C4A16A]" size={24} />
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-[#C4A16A]/0 group-hover:border-[#C4A16A]/50 transition-all duration-300 rounded-lg"></div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505]/95 backdrop-blur-xl z-[200] flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-[#C4A16A] hover:text-[#F2EEE8] transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={48} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg border-2 border-[#C4A16A]/50 shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-[#C4A16A] text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-[#B0B0B0]">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}