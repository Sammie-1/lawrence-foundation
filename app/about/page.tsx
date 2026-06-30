"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow pt-[72px]">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] md:h-[650px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/about-hero.png"
              alt="About Lawrence Iyere Foundation"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Curved/Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_150%_at_0%_50%,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.6)_45%,transparent_80%)]" />
          </div>

          <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col justify-center">
            <div className="max-w-2xl">
              <span className="inline-block text-[#f59e0b] text-[12px] font-extrabold uppercase tracking-widest mb-4">
                About Lawrence Iyere Foundation
              </span>
              <h1 className="text-[40px] md:text-[56px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Sixteen years of roots, bridges, and second chances
              </h1>
              <p className="text-[16px] md:text-[18px] text-gray-200 font-normal leading-[1.7] mb-10 max-w-xl">
                We're a Nigerian-led NGO that builds the bridge between underserved communities and the education, healthcare, and opportunity they deserve — designed with the people we serve, not for them.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#" className="bg-white text-[#22c55e] hover:bg-gray-50 px-8 py-3.5 rounded-full font-bold transition-colors shadow-sm text-[15px]">
                  Become a Partner
                </a>
                <a href="#" className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-sm text-[15px]">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full bg-[#f4fbf6] py-20 md:py-28" data-aos="fade-up">
          <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            {/* Left: Image with Badge */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/3] md:aspect-square max-w-[520px] mx-auto lg:mx-0 rounded-[32px] overflow-hidden shadow-sm">
                <Image 
                  src="/assets/rooted.png" 
                  alt="Community members at a water pump" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* 2010 Badge */}
              <div className="absolute -bottom-8 left-4 lg:-left-6 bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center gap-5 border border-gray-100/50 max-w-[280px]">
                <span className="text-[36px] font-extrabold text-[#22c55e] leading-none">2010</span>
                <p className="text-[13px] text-gray-700 font-medium leading-[1.4]">
                  The year<br/>Lawrence Iyere<br/>took root
                </p>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col mt-12 lg:mt-0">
              <span className="inline-block text-[#f59e0b] text-[12px] font-extrabold uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
                Founded on a simple,<br />stubborn belief
              </h2>

              <div className="flex flex-col gap-6 text-[15px] text-gray-600 leading-[1.8] font-normal">
                <p>
                  Lawrence Iyere Foundation began in 2010 with a handful of volunteers rebuilding a single collapsed classroom in Isolo. What started as one repair became a registered Nigerian NGO working across education, health, economic empowerment, and the environment.
                </p>
                <p>
                  We learned early that aid handed down rarely lasts — but solutions grown from the community itself do. Every programme since has been co-designed with the people it serves, audited for transparency, and built to outlive any single donation cycle.
                </p>
                <p>
                  Today, that one classroom has grown into a network reaching hundreds of schools, clinics, and communities across Nigeria — still rooted in the same place we started.
                </p>
              </div>
            </div>

          </div>
        </section>
        {/* Mission & Vision Section */}
        <section className="w-full bg-white py-20 md:py-28" data-aos="fade-up">
          <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10">
            <span className="inline-block text-[#f59e0b] text-[12px] font-extrabold uppercase tracking-widest mb-4">
              MISSION & VISION
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#22c55e] mb-12 leading-[1.1] tracking-tight">
              What drives the work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="bg-white rounded-[24px] p-10 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mb-6"></div>
                <h3 className="text-[18px] font-extrabold text-gray-900 uppercase tracking-wide mb-4">
                  OUR MISSION
                </h3>
                <p className="text-[15px] text-gray-600 leading-[1.8] font-normal">
                  To connect underserved Nigerians to education, healthcare, and economic opportunity through community-led programmes that are dignified, evidence-based, and built to last for generations.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-[24px] p-10 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mb-6"></div>
                <h3 className="text-[18px] font-extrabold text-gray-900 uppercase tracking-wide mb-4">
                  OUR VISION
                </h3>
                <p className="text-[15px] text-gray-600 leading-[1.8] font-normal">
                  A Nigeria where no child misses school, no mother dies in childbirth, and no community is left behind — where opportunity is determined by ambition, not geography.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="w-full bg-[#f4fbf6] py-20 md:py-28" data-aos="fade-up">
          <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10">
            <div className="max-w-2xl mb-16">
              <span className="inline-block text-[#f59e0b] text-[12px] font-extrabold uppercase tracking-widest mb-4">
                CORE VALUES
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#22c55e] mb-6 leading-[1.1] tracking-tight">
                The principles behind every programme
              </h2>
              <p className="text-[15px] text-gray-600 leading-[1.8] font-normal">
                These aren't wall plaques — they're the filters every initiative has to pass before it reaches a community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: "01", title: "Community-Led Design", desc: "Every initiative is co-created with the people it serves — never delivered to them from a distance." },
                { num: "02", title: "Radical Transparency", desc: "Full financial disclosure and independent audits, published openly, every single year." },
                { num: "03", title: "Evidence Over Assumption", desc: "Programmes are shaped by field data and community feedback, not by guesswork from a head office." },
                { num: "04", title: "Dignity First", desc: "Aid that respects people's autonomy and culture outlasts aid that simply hands things over." },
                { num: "05", title: "Built to Last", desc: "We measure success by what continues after we leave a community — not by what we deliver on day one." },
                { num: "06", title: "Partnership Over Charity", desc: "Government, corporate, and grassroots partners sit at the table as collaborators, not funders alone." }
              ].map((value, i) => (
                <div key={i} className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100/50">
                  <span className="block text-[28px] font-extrabold text-[#22c55e] mb-4">{value.num}</span>
                  <h3 className="text-[17px] font-extrabold text-gray-900 mb-3 tracking-tight">{value.title}</h3>
                  <p className="text-[14px] text-gray-600 leading-[1.7] font-normal">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
