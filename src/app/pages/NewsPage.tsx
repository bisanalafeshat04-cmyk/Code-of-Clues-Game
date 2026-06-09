import { motion } from "motion/react";
import { Calendar, User } from "lucide-react";
import { Button } from "../components/ui/button";

const newsArticles = [
  {
    title: "Official Trailer Released",
    date: "May 28, 2026",
    author: "Studio Team",
    excerpt: "Watch the official cinematic trailer showcasing the dark world of Code of Clues. Experience the mystery, danger, and intrigue that awaits.",
    category: "Announcement",
  },
  {
    title: "Patch 1.0.1 Released",
    date: "May 25, 2026",
    author: "Development Team",
    excerpt: "Bug fixes, performance improvements, and quality of life enhancements. Check the full changelog for details.",
    category: "Update",
  },
  {
    title: "Demo Now Available",
    date: "May 20, 2026",
    author: "Studio Team",
    excerpt: "Try the first chapter free! Download the demo and experience the beginning of your investigation.",
    category: "Announcement",
  },
  {
    title: "Behind the Scenes: Creating the Detective",
    date: "May 15, 2026",
    author: "Art Director",
    excerpt: "Learn about the design process and inspiration behind our enigmatic protagonist in this developer diary.",
    category: "Development",
  },
  {
    title: "Roadmap for Future Updates",
    date: "May 10, 2026",
    author: "Studio Team",
    excerpt: "We're committed to supporting Code of Clues with new content, features, and improvements. Here's what's coming.",
    category: "Roadmap",
  },
  {
    title: "Code of Clues Wins Best Narrative Award",
    date: "May 5, 2026",
    author: "PR Team",
    excerpt: "We're honored to receive recognition for our storytelling at the International Game Awards.",
    category: "News",
  },
];

export function NewsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-[#050505] via-[#0D0D0D] to-[#050505]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
            News & Updates
          </h1>
          <p className="text-xl text-[#B0B0B0]">
            Stay informed about the latest developments
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="space-y-8">
          {newsArticles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border border-[#C4A16A]/20 rounded-xl p-8 hover:border-[#C4A16A]/50 hover:shadow-[0_0_30px_rgba(196,161,106,0.2)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-[#C4A16A]/20 border border-[#C4A16A]/40 rounded text-[#C4A16A] text-xs font-mono uppercase">
                      {article.category}
                    </span>
                    <span className="text-[#8D6B47] text-sm flex items-center">
                      <Calendar className="mr-2" size={14} />
                      {article.date}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#C4A16A] mb-3 hover:text-[#F2EEE8] transition-colors cursor-pointer">
                    {article.title}
                  </h2>
                  <p className="text-[#D7D7D7] mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-[#B0B0B0] text-sm">
                    <User className="mr-2" size={14} />
                    <span>By {article.author}</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                className="text-[#C4A16A] hover:text-[#F2EEE8] hover:bg-[#C4A16A]/10 mt-4"
              >
                Read More →
              </Button>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-[#1F1F1F] to-[#151515] border-2 border-[#C4A16A]/30 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-[#C4A16A] mb-4">Stay Updated</h2>
          <p className="text-[#D7D7D7] mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive news, updates, and behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-[#0D0D0D] border border-[#C4A16A]/30 rounded-lg text-[#F2EEE8] placeholder-[#8D6B47] focus:outline-none focus:border-[#C4A16A]"
            />
            <Button className="bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] hover:shadow-[0_0_20px_rgba(196,161,106,0.4)]">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
