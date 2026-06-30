"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Image 
            src="/assets/logo.png" 
            alt="LOI Logo" 
            width={48} 
            height={48} 
            className="h-10 w-10 object-contain"
            priority
          />
          <div className="flex flex-col leading-[1.1]">
            <span className="text-[17px] font-extrabold text-gray-900 tracking-tight uppercase">Lawrence Iyere</span>
            <span className="text-[17px] font-extrabold text-[#22c55e] tracking-tight">Foundation</span>
          </div>
        </a>
        
        {/* Desktop Navigation & Contact */}
        <div className="hidden lg:flex items-center gap-8 lg:gap-12">
          <nav className="flex items-center gap-8 text-[15px] font-normal text-gray-800">
            <a href="/about" className={`transition-colors hover:text-[#22c55e] ${pathname === '/about' ? 'text-[#22c55e] font-bold' : ''}`}>About</a>
            <a href="/#programs" className={`transition-colors hover:text-[#22c55e] ${pathname === '/programs' ? 'text-[#22c55e] font-bold' : ''}`}>Programs</a>
            <a href="/#impact" className={`transition-colors hover:text-[#22c55e] ${pathname === '/impact' ? 'text-[#22c55e] font-bold' : ''}`}>Impact</a>
            <a href="#" className={`transition-colors hover:text-[#22c55e] ${pathname === '/stories' ? 'text-[#22c55e] font-bold' : ''}`}>Stories</a>
            <a href="/blog" className={`transition-colors hover:text-[#22c55e] ${pathname === '/blog' || pathname.startsWith('/blog/') ? 'text-[#22c55e] font-bold' : ''}`}>Blog</a>
            <a href="/partners" className={`transition-colors hover:text-[#22c55e] ${pathname === '/partners' ? 'text-[#22c55e] font-bold' : ''}`}>Partners</a>
          </nav>
          
          <a href="#" className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-2.5 rounded-full font-medium transition-colors shadow-sm">
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col px-5 md:px-8 py-6 gap-5 text-[16px] font-normal text-gray-800">
          <a href="/about" className={`transition-colors py-1 hover:text-[#22c55e] ${pathname === '/about' ? 'text-[#22c55e] font-bold' : ''}`} onClick={() => setMenuOpen(false)}>About</a>
          <a href="/#programs" className={`transition-colors py-1 hover:text-[#22c55e] ${pathname === '/programs' ? 'text-[#22c55e] font-bold' : ''}`} onClick={() => setMenuOpen(false)}>Programs</a>
          <a href="/#impact" className={`transition-colors py-1 hover:text-[#22c55e] ${pathname === '/impact' ? 'text-[#22c55e] font-bold' : ''}`} onClick={() => setMenuOpen(false)}>Impact</a>
          <a href="#" className={`transition-colors py-1 hover:text-[#22c55e] ${pathname === '/stories' ? 'text-[#22c55e] font-bold' : ''}`} onClick={() => setMenuOpen(false)}>Stories</a>
          <a href="/blog" className={`transition-colors py-1 hover:text-[#22c55e] ${pathname === '/blog' || pathname.startsWith('/blog/') ? 'text-[#22c55e] font-bold' : ''}`} onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="/partners" className={`transition-colors py-1 hover:text-[#22c55e] ${pathname === '/partners' ? 'text-[#22c55e] font-bold' : ''}`} onClick={() => setMenuOpen(false)}>Partners</a>
          <a href="#" className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-3 rounded-full font-medium transition-colors shadow-sm text-center mt-2" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
