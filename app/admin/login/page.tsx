"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace with real authentication API call
    setTimeout(() => {
      router.push("/admin/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f2fbf4] px-4 py-10">
      <div className="w-full max-w-[520px] bg-white rounded-[24px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100/60 p-8 md:p-10">
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Image
            src="/assets/logo.png"
            alt="LOI Logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
          <div className="flex flex-col leading-[1.1]">
            <span className="text-[17px] font-extrabold text-gray-900 tracking-tight uppercase">
              Lawrence Iyere
            </span>
            <span className="text-[17px] font-extrabold text-[#22c55e] tracking-tight">
              Foundation
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-[22px] font-extrabold text-gray-900 tracking-tight mb-1.5">
            Welcome Back, Admin
          </h1>
          <p className="text-[14px] text-gray-500 font-normal leading-relaxed">
            Sign in to manage blog posts, gallery content, and site publishing.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="admin-email"
              className="text-[13px] font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="admin-email"
              type="email"
              placeholder="you@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="admin-password"
              className="text-[13px] font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                placeholder="your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 pr-11 rounded-[10px] border border-gray-200 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  /* Eye-off icon */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  /* Eye icon */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <label
            htmlFor="admin-remember"
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <input
              id="admin-remember"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-[#22c55e] focus:ring-[#22c55e] accent-[#22c55e] cursor-pointer"
            />
            <span className="text-[13px] text-gray-600 font-normal">
              Remember Me
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-1 bg-[#22c55e] hover:bg-[#16a34a] disabled:bg-[#22c55e]/70 disabled:cursor-not-allowed text-white text-[15px] font-semibold py-3.5 rounded-full transition-all shadow-[0_4px_14px_rgba(34,197,94,0.35)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center h-[52px]"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-[12px] text-gray-400 font-normal mt-8">
          Admin Portal
        </p>
      </div>
    </div>
  );
}
