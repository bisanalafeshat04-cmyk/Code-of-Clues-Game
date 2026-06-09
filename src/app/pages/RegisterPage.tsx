import { motion } from "motion/react";
import { Link, useNavigate } from "react-router";
import { UserPlus, Mail, Lock, User, Home } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const success = await register(email, password, name);

    if (success) {
      navigate("/download", { replace: true });
    } else {
      setError("Email already registered");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#050505] via-[#0D0D0D] to-[#050505] relative overflow-hidden">
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
              Join the Investigation
            </h1>
            <p className="text-[#B0B0B0]">Create your account to get started</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="username" className="text-[#D7D7D7] mb-2 block">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8D6B47]" size={20} />
                <Input
                  id="username"
                  placeholder="DetectiveUsername"
                  className="bg-[#0D0D0D] border-[#C4A16A]/30 text-[#F2EEE8] placeholder-[#8D6B47] pl-12 py-6 focus:border-[#C4A16A]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-[#D7D7D7] mb-2 block">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8D6B47]" size={20} />
                <Input
                  id="email"
                  type="email"
                  placeholder="detective@example.com"
                  className="bg-[#0D0D0D] border-[#C4A16A]/30 text-[#F2EEE8] placeholder-[#8D6B47] pl-12 py-6 focus:border-[#C4A16A]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="text-[#D7D7D7] mb-2 block">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8D6B47]" size={20} />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-[#0D0D0D] border-[#C4A16A]/30 text-[#F2EEE8] placeholder-[#8D6B47] pl-12 py-6 focus:border-[#C4A16A]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="confirm-password" className="text-[#D7D7D7] mb-2 block">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8D6B47]" size={20} />
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-[#0D0D0D] border-[#C4A16A]/30 text-[#F2EEE8] placeholder-[#8D6B47] pl-12 py-6 focus:border-[#C4A16A]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" className="mt-1" />
              <label htmlFor="terms" className="text-[#D7D7D7] text-sm cursor-pointer">
                I agree to the{" "}
                <a href="#" className="text-[#C4A16A] hover:text-[#F2EEE8] transition-colors">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#C4A16A] hover:text-[#F2EEE8] transition-colors">
                  Privacy Policy
                </a>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] hover:shadow-[0_0_30px_rgba(196,161,106,0.5)] transition-all duration-300 py-6"
              disabled={loading}
            >
              <UserPlus className="mr-2" size={20} />
              Create Account
            </Button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>

          <div className="mt-8 text-center">
            <p className="text-[#B0B0B0]">
              Already have an account?{" "}
              <Link to="/login" className="text-[#C4A16A] hover:text-[#F2EEE8] font-bold transition-colors">
                Sign In
              </Link>
            </p>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-[#C4A16A]/20"></div>
            <span className="px-4 text-[#8D6B47] text-sm">OR</span>
            <div className="flex-1 border-t border-[#C4A16A]/20"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full border-[#C4A16A]/30 text-[#D7D7D7] hover:bg-[#C4A16A]/10 hover:border-[#C4A16A] py-6"
            >
              Sign up with Steam
            </Button>
            <Button
              variant="outline"
              className="w-full border-[#C4A16A]/30 text-[#D7D7D7] hover:bg-[#C4A16A]/10 hover:border-[#C4A16A] py-6"
            >
              Sign up with Discord
            </Button>
          </div>
        </div>

        <p className="text-center mt-6 text-[#8D6B47] text-sm">
          Protected by advanced encryption
        </p>
      </motion.div>
    </div>
  );
}