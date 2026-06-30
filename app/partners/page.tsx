"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow pt-[72px]">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] md:h-[650px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/partners-hero.png"
              alt="Partner with Lawrence Iyere Foundation"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Curved/Gradient Overlay matching the About page */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_150%_at_0%_50%,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.6)_45%,transparent_80%)]" />
          </div>

          <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col justify-center">
            <div className="max-w-2xl">
              <span className="inline-block text-[#f59e0b] text-[12px] font-extrabold uppercase tracking-widest mb-4">
                PARTNERSHIPS
              </span>
              <h1 className="text-[40px] md:text-[56px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Partner With Us<br />To Create Lasting<br />Impact
              </h1>
              <p className="text-[16px] md:text-[18px] text-gray-200 font-normal leading-[1.7] mb-10 max-w-[500px]">
                Join organisations transforming communities across Nigeria — through shared resources, shared expertise, and shared impact.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#" className="bg-white text-[#22c55e] hover:bg-gray-50 px-8 py-3.5 rounded-full font-bold transition-colors shadow-sm text-[15px]">
                  Start Partnership
                </a>
                <a href="#" className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-sm text-[15px]">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="w-full bg-white py-20 md:py-28" data-aos="fade-up">
          <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10">
            <div className="mb-16">
              <span className="inline-block text-[#f59e0b] text-[12px] font-extrabold uppercase tracking-widest mb-4">
                WHY PARTNER
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#22c55e] leading-[1.1] tracking-tight max-w-2xl">
                What a partnership with Lawrence Iyere Foundation looks like
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Visibility",
                  desc: "Your organisation's contribution is showcased across our platform, reports, and field communications."
                },
                {
                  title: "Shared Impact",
                  desc: "Co-own measurable outcomes — schools rebuilt, women trained, lives changed — with full reporting."
                },
                {
                  title: "CSR Alignment",
                  desc: "Programmes structured to align cleanly with your organisation's CSR and sustainability goals."
                },
                {
                  title: "Community Reach",
                  desc: "Access to a trusted network across rural and underserved communities nationwide."
                }
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col">
                  {/* Gray placeholder for icon */}
                  <div className="w-12 h-12 bg-gray-100 rounded-lg mb-6"></div>
                  <h3 className="text-[18px] font-extrabold text-gray-900 mb-4 tracking-tight">{card.title}</h3>
                  <p className="text-[14px] text-gray-600 leading-[1.7] font-normal">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="w-full bg-[#f4fbf6] py-20 md:py-28" data-aos="fade-up">
          <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 text-center">
            <span className="inline-block text-[#f59e0b] text-[12px] font-extrabold uppercase tracking-widest mb-4">
              WHY PARTNER
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#22c55e] mb-20 leading-[1.1] tracking-tight">
              From submission to launch
            </h2>

            <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-[#22c55e]/30 z-0"></div>

              {[
                { num: "01", title: "Submit", desc: "Share your organisation's details and partnership goals through our form below." },
                { num: "02", title: "Review", desc: "Our partnerships team reviews your submission within 5 business days." },
                { num: "03", title: "Meeting", desc: "We schedule a call to align on scope, impact goals, and collaboration structure." },
                { num: "04", title: "Launch", desc: "Your partnership goes live, with shared reporting from day one." }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 px-4">
                  <div className="w-16 h-16 rounded-full bg-[#22c55e] flex items-center justify-center text-white text-[22px] font-bold mb-6 shadow-[0_0_0_8px_#f4fbf6]">
                    {step.num}
                  </div>
                  <h3 className="text-[18px] font-extrabold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-[14px] text-gray-600 leading-[1.7]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Voices Section */}
        <section className="w-full bg-white py-20 md:py-28" data-aos="fade-up">
          <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10">
            <div className="mb-12">
              <span className="inline-block text-[#f59e0b] text-[12px] font-extrabold uppercase tracking-widest mb-4">
                PARTNER VOICES
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#22c55e] leading-[1.1] tracking-tight">
                What our partners say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                  <p className="text-[15px] text-gray-600 leading-[1.8] font-normal mb-10">
                    "Working with Lawrence Iyere Foundation gave our CSR programme real, measurable outcomes in communities we couldn't have reached alone."
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#bbf7d0] flex items-center justify-center text-gray-900 font-extrabold text-[15px]">
                      AM
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-[15px] font-extrabold text-gray-900 leading-snug mb-1">Abdullahi Musa</h4>
                      <p className="text-[13px] text-gray-500 font-normal">CSR Lead, First Bank Foundation</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Partnership Form Section */}
        <section className="w-full bg-[#f4fbf6] py-20 md:py-28" data-aos="fade-up">
          <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center">
            <div className="text-center mb-10">
              <span className="inline-block text-[#f59e0b] text-[12px] font-extrabold uppercase tracking-widest mb-4">
                START A PARTNERSHIP
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#22c55e] leading-[1.1] tracking-tight mb-4">
                Tell us about your organisation
              </h2>
              <p className="text-[14px] text-gray-600 font-normal">
                Fields marked * are required. We'll respond within 5 business days.
              </p>
            </div>

            <div className="w-full max-w-4xl bg-white rounded-[32px] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100/50">
              <form className="flex flex-col gap-6">
                
                {/* Full Width */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-gray-700">Organisation Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="e.g First bank foundation" className="w-full px-5 py-3.5 rounded-[12px] border border-gray-200 text-[15px] focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white" />
                </div>

                {/* Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium text-gray-700">Contact Person <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Full name" className="w-full px-5 py-3.5 rounded-[12px] border border-gray-200 text-[15px] focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="you@organisation.com" className="w-full px-5 py-3.5 rounded-[12px] border border-gray-200 text-[15px] focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white" />
                  </div>
                </div>

                {/* Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" placeholder="Phone number" className="w-full px-5 py-3.5 rounded-[12px] border border-gray-200 text-[15px] focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium text-gray-700">Organization Type <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select defaultValue="" className="w-full px-5 py-3.5 rounded-[12px] border border-gray-200 text-[15px] text-gray-500 appearance-none focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white">
                        <option value="" disabled>Select type</option>
                        <option value="corporate">Corporate</option>
                        <option value="ngo">NGO</option>
                        <option value="government">Government</option>
                        <option value="other">Other</option>
                      </select>
                      <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium text-gray-700">Partner Category <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select defaultValue="" className="w-full px-5 py-3.5 rounded-[12px] border border-gray-200 text-[15px] text-gray-500 appearance-none focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white">
                        <option value="" disabled>Select category</option>
                        <option value="funding">Funding</option>
                        <option value="implementation">Implementation</option>
                        <option value="technical">Technical</option>
                        <option value="media">Media</option>
                      </select>
                      <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium text-gray-700">Budget Range</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full px-5 py-3.5 rounded-[12px] border border-gray-200 text-[15px] text-gray-500 appearance-none focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white">
                        <option value="" disabled>Select range (optional)</option>
                        <option value="1m-5m">₦1M - ₦5M</option>
                        <option value="5m-20m">₦5M - ₦20M</option>
                        <option value="20m+">₦20M+</option>
                      </select>
                      <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expected Collaboration */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-gray-700">Expected Collaboration</label>
                  <div className="relative">
                    <select defaultValue="" className="w-full px-5 py-3.5 rounded-[12px] border border-gray-200 text-[15px] text-gray-500 appearance-none focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white">
                      <option value="" disabled>Select duration (optional)</option>
                      <option value="short">Short-term project</option>
                      <option value="long">Long-term partnership</option>
                      <option value="one-off">One-off event</option>
                    </select>
                    <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your organization goal and how you like to collaborate with Lawrence Iyere Foundation" 
                    className="w-full px-5 py-4 rounded-[12px] border border-gray-200 text-[15px] focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white resize-none"
                  ></textarea>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3 mt-2">
                  <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#22c55e] focus:ring-[#22c55e]" />
                  <label htmlFor="terms" className="text-[14px] text-gray-600 leading-[1.6]">
                    I agree to Lawrence Iyere Foundation's Terms of Use and Privacy Policy, and consent to being contacted about this partnership request. <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="mt-4 flex justify-center">
                  <button type="button" className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-sm text-[15px]">
                    Submit Partnership Request
                  </button>
                </div>

              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
