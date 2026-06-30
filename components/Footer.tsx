import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-24 pb-10 border-t border-gray-100">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/assets/logo.png" 
                alt="LOI Logo" 
                width={40} 
                height={40} 
                className="h-9 w-9 object-contain"
              />
              <div className="flex flex-col leading-[1.1]">
                <span className="text-[17px] font-extrabold text-gray-900 tracking-tight uppercase">Lawrence Iyere</span>
                <span className="text-[17px] font-extrabold text-[#22c55e] tracking-tight">Foundation</span>
              </div>
            </div>
            <p className="text-[13px] text-gray-600 leading-[28px] max-w-[280px] font-normal italic">
              A registered Nigerian NGO working since 2010 to create lasting change through education, healthcare, economic empowerment, and environmental sustainability.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h4 className="text-[17px] font-semibold text-gray-900 mb-6">Programs</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-gray-600 font-normal">
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Education & Schools</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Healthcare Outreach</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Women Empowerment</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Youth Development</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Community Development</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Green Nigeria</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Humanitarian Relief</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h4 className="text-[17px] font-semibold text-gray-900 mb-6">Organisation</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-gray-600 font-normal">
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Governance</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Annual Reports</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Media & Press</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Volunteer</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <h4 className="text-[17px] font-semibold text-gray-900 mb-6">Contact</h4>
            <ul className="flex flex-col gap-5 text-[14px] text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#22c55e] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900 mb-1">Head Office</span>
                  <span className="leading-relaxed font-normal">12 Harmony Close, Victoria Island<br/>Lagos, Nigeria</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#22c55e] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900 mb-1">Telephone</span>
                  <span className="font-normal">+234 (0) 802 345 6789</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#22c55e] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900 mb-1">Email</span>
                  <a href="mailto:info@rootbridgeng.org" className="hover:text-[#22c55e] transition-colors font-normal">info@rootbridgeng.org</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#22c55e]/50 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-gray-500 font-normal">
          <p>© 2025 Lawrence Iyere Foundation. All rights reserved. Built with <span className="text-[#22c55e]">💚</span> for Nigeria.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#22c55e] transition-colors">Privacy Policy</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="hover:text-[#22c55e] transition-colors">Terms of Use</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="hover:text-[#22c55e] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
