import { motion } from "motion/react";
import { Link, useNavigate, useLocation } from "react-router";
import { LogIn, Mail, Lock, Home } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const from = (location.state as any)?.from || "/";

  // Demo User
  const demoUser = {
    name: "Detective James",
    email: "detective@codeofclues.com",
    password: "demo123"
  };

  // Initialize demo user in localStorage
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("codeOfCluesUsers") || "[]");
    const demoExists = users.find((u: any) => u.email === demoUser.email);
    
    if (!demoExists) {
      users.push({
        email: demoUser.email,
        password: demoUser.password,
        name: demoUser.name
      });
      localStorage.setItem("codeOfCluesUsers", JSON.stringify(users));
    }
  }, []);

  const handleDemoLogin = () => {
    setEmail(demoUser.email);
    setPassword(demoUser.password);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const success = await login(email, password);

    if (success) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid email or password");
    }

    setLoading(false);
  };

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
              Welcome Back
            </h1>
            <p className="text-[#B0B0B0]">Sign in to continue your investigation</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
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

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-[#D7D7D7] text-sm cursor-pointer">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-[#C4A16A] hover:text-[#F2EEE8] text-sm transition-colors">
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] hover:shadow-[0_0_30px_rgba(196,161,106,0.5)] transition-all duration-300 py-6"
              disabled={loading}
            >
              <LogIn className="mr-2" size={20} />
              Sign In
            </Button>
          </form>

          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

          <div className="mt-8 text-center">
            <p className="text-[#B0B0B0]">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#C4A16A] hover:text-[#F2EEE8] font-bold transition-colors">
                Create Account
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
              Continue with Steam
            </Button>
            <Button
              variant="outline"
              className="w-full border-[#C4A16A]/30 text-[#D7D7D7] hover:bg-[#C4A16A]/10 hover:border-[#C4A16A] py-6"
            >
              Continue with Discord
            </Button>
          </div>
        </div>

        {/* Demo User Section - Outside the form box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <div className="bg-gradient-to-r from-[#1F1F1F]/80 to-[#151515]/80 backdrop-blur-sm border border-[#C4A16A]/20 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#8D6B47] text-xs mb-1">Quick Demo Access</p>
                <p className="text-[#D7D7D7] text-sm font-mono">
                  {demoUser.email}
                </p>
              </div>
              <Button
                type="button"
                size="sm"
                onClick={handleDemoLogin}
                className="bg-gradient-to-r from-[#C4A16A] to-[#8D6B47] text-[#050505] hover:shadow-[0_0_20px_rgba(196,161,106,0.4)] transition-all duration-300"
              >
                Use Demo
              </Button>
            </div>
          </div>
        </motion.div>

        <p className="text-center mt-6 text-[#8D6B47] text-sm">
          Protected by advanced encryption
        </p>
      </motion.div>
    </div>
  );
}