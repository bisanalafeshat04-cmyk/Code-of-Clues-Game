import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const faqs = [
  {
    question: "Is the game free to play?",
    answer: "Code of Clues is a premium title available for purchase. We offer a free demo that includes the first chapter so you can experience the game before buying. The full version includes all six chapters and future updates at no additional cost.",
  },
  {
    question: "What platforms are supported?",
    answer: "Code of Clues is currently available on Windows, macOS, and Linux. We're exploring console releases for PlayStation 5 and Xbox Series X|S in the future. Stay tuned for announcements!",
  },
  {
    question: "Can I play offline?",
    answer: "Yes! Code of Clues is a single-player experience that can be played completely offline. An internet connection is only required for the initial download and optional cloud save synchronization.",
  },
  {
    question: "What are the minimum system requirements?",
    answer: "For Windows: OS: Windows 10 64-bit, Processor: Intel Core i5-4460, Memory: 8 GB RAM, Graphics: NVIDIA GTX 970, Storage: 50 GB available space, DirectX: Version 11. For complete details on all platforms, visit the Download page.",
  },
  {
    question: "When is the official release date?",
    answer: "Code of Clues officially released on June 1, 2026. The game is now available for download on all supported platforms.",
  },
  {
    question: "How long is the gameplay?",
    answer: "The main story takes approximately 30-40 hours to complete. If you're a completionist who wants to find all clues, solve every puzzle, and unlock all endings, expect 60+ hours of gameplay.",
  },
  {
    question: "Are there multiple endings?",
    answer: "Yes! Code of Clues features multiple endings based on your investigative choices and moral decisions throughout the game. Your actions have consequences, and different paths lead to different conclusions.",
  },
  {
    question: "Is there multiplayer or co-op?",
    answer: "Code of Clues is designed as a single-player narrative experience. We believe the mystery and tension are best experienced alone, allowing you to fully immerse yourself in the detective's journey.",
  },
  {
    question: "Will there be DLC or expansions?",
    answer: "We're committed to supporting Code of Clues with free updates that include bug fixes, quality of life improvements, and new content. Any major expansions will be announced on our News page.",
  },
  {
    question: "What languages are supported?",
    answer: "The game features full voice acting and subtitles in English, Spanish, French, German, and Japanese. Additional language support may be added based on community feedback.",
  },
  {
    question: "Can I stream or create content about the game?",
    answer: "Absolutely! We encourage content creators to stream, record, and share their experiences with Code of Clues. We only ask that you avoid spoiling major plot points in video titles and thumbnails.",
  },
  {
    question: "How do I report bugs or issues?",
    answer: "Please visit our Contact page to submit bug reports. Include your system specifications, a description of the issue, and any screenshots if possible. Our team reviews all reports and works to address issues in regular updates.",
  },
];

export function FAQPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-[#050505] via-[#0D0D0D] to-[#050505]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#B0B0B0]">
            Find answers to common questions about Code of Clues
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-xl px-8 hover:border-[#C4A16A]/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-[#C4A16A] hover:text-[#F2EEE8] text-left py-6 text-lg font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#D7D7D7] pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-[#1F1F1F] to-[#151515] border-2 border-[#C4A16A]/30 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-[#C4A16A] mb-4">Still Have Questions?</h2>
          <p className="text-[#D7D7D7] mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <a href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] rounded-lg font-bold hover:shadow-[0_0_30px_rgba(196,161,106,0.5)] transition-all duration-300">
              Contact Support
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
