import { motion } from "motion/react";
import { Link } from "react-router";
import { Mail, ArrowLeft, Send, Home } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#050505] via-[#0D0D0D] to-[#050505] relative overflow-hidden">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-20 flex items-center space-x-2 text-[#C4A16A] hover:text-[#F2EEE8] transition-colors group"
      >
        <Home size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm">Back to Home</span>
      </Link>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C4A16A] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#C4A16A] to-[#8D6B47] rounded-lg flex items-center justify-center shadow-2xl">
            <span className="text-[#050505] font-bold text-2xl">C</span>
          </div>
        </Link>

        <div className="bg-gradient-to-br from-[#1F1F1F] to-[#151515] border-2 border-[#C4A16A]/30 rounded-2xl p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#C4A16A] to-[#F2EEE8] bg-clip-text text-transparent">
              Reset Password
            </h1>
            <p className="text-[#B0B0B0]">
              Enter your email and we'll send you a reset link
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-[#D7D7D7] mb-2 block">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8D6B47]" size={20} />
                <Input
                  id="email"
                  type="email"
                  placeholder="detective@example.com"
                  className="bg-[#0D0D0D] border-[#C4A16A]/30 text-[#F2EEE8] placeholder-[#8D6B47] pl-12 py-6 focus:border-[#C4A16A]"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] hover:shadow-[0_0_30px_rgba(196,161,106,0.5)] transition-all duration-300 py-6"
            >
              <Send className="mr-2" size={20} />
              Send Reset Link
            </Button>
          </form>

          <div className="mt-8 text-center">
            <Link
              to="/login"
              className="inline-flex items-center text-[#C4A16A] hover:text-[#F2EEE8] transition-colors"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Sign In
            </Link>
          </div>

          <div className="mt-8 p-4 bg-[#0D0D0D] border border-[#C4A16A]/20 rounded-lg">
            <p className="text-[#B0B0B0] text-sm text-center">
              If you don't receive an email within 5 minutes, check your spam folder or{" "}
              <a href="/contact" className="text-[#C4A16A] hover:text-[#F2EEE8] transition-colors">
                contact support
              </a>
              .
            </p>
          </div>
        </div>

        <p className="text-center mt-6 text-[#8D6B47] text-sm">
          Protected by advanced encryption
        </p>
      </motion.div>
    </div>
  );
}
