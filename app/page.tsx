"use client";

import { useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [heroTypingDone, setHeroTypingDone] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <main className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/hero-img.png" 
            alt="Students reading together" 
            fill 
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-start">
          <h1 className="text-5xl md:text-[68px] font-extrabold text-white leading-[1.1] mb-6 max-w-2xl drop-shadow-md">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Building Stronger<br />Communities<br />Across Nigeria')
                  .callFunction(() => {
                    setHeroTypingDone(true);
                  })
                  .start();
              }}
              options={{
                delay: 50,
                cursor: ""
              }}
            />
          </h1>
          
          <p className={`text-[17px] md:text-[19px] text-gray-800 font-normal mb-10 max-w-[480px] leading-relaxed drop-shadow-sm transition-all duration-700 ease-out transform ${heroTypingDone ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            We connect underserved Nigerians to education, healthcare, and opportunity — empowering communities to thrive for generations.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto transition-all duration-700 delay-300 ease-out transform ${heroTypingDone ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a href="#" className="w-full sm:w-auto text-center bg-white text-[#22c55e] hover:bg-gray-50 px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Partner with us
            </a>
            <a href="#" className="w-full sm:w-auto text-center bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Contact Us
            </a>
          </div>
        </div>
      </main>

      {/* Section 2: Rooted in Nigeria */}
      <section className="w-full py-24 bg-white" data-aos="fade-up">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Image */}
          <div className="w-full md:w-[45%]">
            <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg">
              <Image 
                src="/assets/rooted.png" 
                alt="Community members" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="w-full md:w-[55%] flex flex-col">
            <h2 className="text-[34px] md:text-[40px] font-extrabold text-gray-900 leading-[1.15] mb-8 tracking-tight">
              Rooted in Nigeria, Built for<br /> Every Nigerian
            </h2>
            <p className="text-[16px] text-gray-600 font-normal leading-[1.8] mb-4 max-w-xl">
              This NGO is a registered Nigerian non-governmental organisation dedicated to transforming lives across the country. Founded in 2010, we work at the intersection of education, health, economic empowerment, and environmental stewardship.
            </p>
            <p className="text-[16px] text-gray-600 font-normal leading-[1.8] mb-10 max-w-xl">
              We believe that sustainable change starts at the grassroots. Our programs are co-designed with communities — not delivered to them — ensuring that every initiative is culturally relevant, dignified, and lasting.
            </p>

            <div className="grid grid-cols-2 gap-x-10 gap-y-5">
              {[
                "Evidence-based Programs",
                "Community-led Design",
                "Full Financial Transparency",
                "Registered & Audited",
                "Government Partnerships",
                "Sustainable Impact"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shrink-0"></div>
                  <span className="text-[15px] text-gray-700 font-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Programs That Change Lives */}
      <section id="programs" className="w-full py-24 bg-[#FAFAFA]" data-aos="fade-up">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-start">
          <h2 className="text-[34px] md:text-[40px] font-extrabold text-gray-900 leading-[1.15] mb-4 tracking-tight">
            Programs That Change Lives
          </h2>
          <p className="text-[16px] text-gray-600 font-normal max-w-2xl leading-[1.7] mb-14">
            Seven integrated focus areas working together to build communities where every person can flourish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
            {[
              { img: "/assets/program-1.png", tag: "Education", title: "Building Schools, Shaping Futures", desc: "Constructing and renovating schools in underserved communities across Northern Nigeria, providing modern facilities for thousands of students.", stat1: "4,200+ Students Enrolled", stat2: "12 Schools Built" },
              { img: "/assets/program-2.png", tag: "Healthcare", title: "Health for Every Community", desc: "Operating mobile and permanent health centres that bring free medical care, maternal services, and vaccinations to remote communities.", stat1: "30,000+ Patients Treated", stat2: "8 Health Centres" },
              { img: "/assets/program-3.png", tag: "Empowerment", title: "She Leads: Women in Business", desc: "Empowering women through microfinance, vocational training, and business mentorship — building financial independence from the ground up.", stat1: "1,800+ Women Trained", stat2: "₦240M Disbursed" },
              { img: "/assets/program-4.png", tag: "Youth", title: "NextGen: Youth Skills Academy", desc: "Equipping young Nigerians with digital literacy, trade skills, and entrepreneurship training to compete in the modern economy.", stat1: "3,500+ Youth Trained", stat2: "68% Employment Rate" },
              { img: "/assets/program-5.png", tag: "Infrastructure", title: "Roads, Water & Power", desc: "Partnering with state governments and communities to deliver clean water, rural roads, and solar power to off-grid villages.", stat1: "45 Boreholes Drilled", stat2: "12 Communities Connected" },
              { img: "/assets/program-6.png", tag: "Environment", title: "Green Nigeria Initiative", desc: "Combating desertification and deforestation through community-led tree planting, sustainable farming, and environmental education.", stat1: "120,000+ Trees Planted", stat2: "15 States Reached" }
            ].map((program, i) => (
              <div 
                key={i} 
                data-aos="fade-up" 
                data-aos-delay={i * 100}
                className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group border border-gray-100/50"
              >
                <div className="relative w-full h-[220px] overflow-hidden">
                  <Image 
                    src={program.img} 
                    alt={program.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 flex flex-col">
                  <span className="text-[12px] font-semibold text-[#22c55e] uppercase tracking-wider mb-3">{program.tag}</span>
                  <h3 className="text-[19px] font-extrabold text-gray-900 mb-3 leading-snug tracking-tight">{program.title}</h3>
                  <p className="text-[14px] text-gray-600 font-normal leading-[1.7] mb-6">{program.desc}</p>
                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between text-[13px] text-gray-500 font-normal">
                    <span>{program.stat1}</span>
                    <span>{program.stat2}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Real Lives. Real Change. */}
      <section className="w-full py-24 bg-[#f2fbf4] overflow-hidden" data-aos="fade-up">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center mb-14">
          <h2 className="text-[34px] md:text-[40px] font-extrabold text-[#22c55e] leading-[1.15] mb-4 tracking-tight text-center">
            Real Lives. Real Change.
          </h2>
          <p className="text-[16px] text-gray-600 font-normal max-w-2xl mx-auto text-center leading-[1.7]">
            Seven integrated focus areas working together to build communities where every person can flourish.
          </p>
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[
              {
                title: "From a Collapsed Classroom to a State Scholarship",
                body: "When RootBridge rebuilt Alhajiya Halima School in rural Kano, Abdullahi — 13 — hadn't attended school in two years. Today, he holds a state government scholarship and dreams of becoming an engineer.",
                initials: "AM",
                name: "Abdullahi Musa",
                role: "Kano, Northern Nigeria - Education Program"
              },
              {
                title: "Ngozi Turned ₦50,000 Into a Thriving Tailoring Business",
                body: "After joining the She Leads microfinance cohort, Ngozi expanded her home tailoring shop and now employs four other women in Ajegunle.",
                initials: "NA",
                name: "Ngozi Adeyemi",
                role: "Lagos - Women Empowerment"
              },
              {
                title: "Ngozi Turned ₦50,000 Into a Thriving Tailoring Business",
                body: "After joining the She Leads microfinance cohort, Ngozi expanded her home tailoring shop and now employs four other women in Ajegunle.",
                initials: "NA",
                name: "Ngozi Adeyemi",
                role: "Lagos - Women Empowerment"
              }
            ].map((testimonial, i) => (
              <div key={i} className="w-full shrink-0 bg-white rounded-[32px] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col">
                <h3 className="text-[19px] md:text-[21px] font-extrabold text-gray-900 mb-5 leading-snug tracking-tight">
                  {testimonial.title}
                </h3>
                <p className="text-[14.5px] text-gray-600 font-normal leading-[1.8] mb-8 flex-1">
                  {testimonial.body}
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-[#22c55e] flex items-center justify-center text-white font-extrabold text-[14px]">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-[14px] font-extrabold text-gray-900">{testimonial.name}</p>
                    <p className="text-[12px] text-gray-500 font-normal">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Moments That Matter */}
      <section id="impact" className="w-full py-24 bg-white" data-aos="fade-up">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center mb-14">
          <h2 className="text-[34px] md:text-[40px] font-extrabold text-[#22c55e] leading-[1.15] mb-4 tracking-tight text-center">
            Moments That Matter
          </h2>
          <p className="text-[16px] text-gray-600 font-normal max-w-2xl mx-auto text-center leading-[1.7]">
            A glimpse into the communities we serve and the lives we touch every day.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row gap-6 w-full h-auto md:h-[400px]">
            <div data-aos="fade-up" data-aos-delay="0" className="relative w-full md:w-[55%] h-[300px] md:h-full rounded-[32px] overflow-hidden group shadow-sm">
              <Image src="/assets/school.png" alt="School Renovation" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full">
                <span className="text-[13px] font-extrabold text-gray-900">School Renovation - Isolo LGA</span>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="relative w-full md:w-[45%] h-[300px] md:h-full rounded-[32px] overflow-hidden group shadow-sm">
              <Image src="/assets/empowerment.png" alt="Women empowerment" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full">
                <span className="text-[13px] font-extrabold text-gray-900">Women Empowerment</span>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row gap-6 w-full h-auto md:h-[320px]">
            <div data-aos="fade-up" data-aos-delay="200" className="relative w-full md:w-1/3 h-[280px] md:h-full rounded-[32px] overflow-hidden group shadow-sm">
              <Image src="/assets/health-center.png" alt="Health centre" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full">
                <span className="text-[13px] font-extrabold text-gray-900">HealthCentre Renovation - Isolo LGA</span>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="relative w-full md:w-1/3 h-[280px] md:h-full rounded-[32px] overflow-hidden group shadow-sm">
              <Image src="/assets/tap-water.png" alt="Clean water" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full">
                <span className="text-[13px] font-extrabold text-gray-900">CCommunity Development Initiative</span>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="relative w-full md:w-1/3 h-[280px] md:h-full rounded-[32px] overflow-hidden group shadow-sm">
              <Image src="/assets/road.png" alt="Road infrastructure" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full">
                <span className="text-[13px] font-extrabold text-gray-900">Road Construction - Isolo LGA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: News, Insights & Reports */}
      <section className="w-full py-24 bg-[#f2fbf4]" data-aos="fade-up">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center">
          <h2 className="text-[34px] md:text-[40px] font-extrabold text-[#22c55e] leading-[1.15] mb-4 tracking-tight text-center">
            News, Insights & Reports
          </h2>
          <p className="text-[16px] text-gray-600 font-normal max-w-2xl mx-auto text-center leading-[1.7] mb-14">
            Stay informed about our latest projects, research, and stories from the field.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full mb-14">
            {[
              { img: "/assets/kids.png", tag: "Impact Report", title: "2024 Annual Impact Report: A Year of Transformation", desc: "An in-depth look at how RootBridge Foundation impacted over 50,000 lives across 15 Nigerian states in the past year.", date: "March 15, 2024" },
              { img: "/assets/program-6.png", tag: "Environment", title: "Green Nigeria: 120,000 Trees and Counting", desc: "How our community-led reforestation program is combating desertification across the Sahel region.", date: "February 28, 2024" },
              { img: "/assets/program-5.png", tag: "Infrastructure", title: "Connecting Rural Communities: The Road to Progress", desc: "New rural road projects are transforming access to markets, schools, and healthcare for thousands.", date: "January 20, 2024" }
            ].map((article, i) => (
              <div key={i} className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group border border-gray-100/50">
                <div className="relative w-full h-[220px] overflow-hidden">
                  <Image 
                    src={article.img} 
                    alt={article.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 flex flex-col">
                  <span className="text-[12px] font-semibold text-[#22c55e] uppercase tracking-wider mb-3">{article.tag}</span>
                  <h3 className="text-[19px] font-extrabold text-gray-900 mb-3 leading-snug tracking-tight">{article.title}</h3>
                  <p className="text-[14px] text-gray-600 font-normal leading-[1.7] mb-6">{article.desc}</p>
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-gray-500 font-normal">{article.date}</span>
                    <a href="#" className="text-[#22c55e] font-medium hover:underline">Read Article →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <a href="/blog" className="bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-full font-medium transition-all shadow-sm border border-gray-200 hover:shadow-md">
              View all Articles
            </a>
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="w-full py-32 bg-white" data-aos="fade-up">
        <div className="w-full max-w-4xl mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center">
          <h2 className="text-[36px] md:text-[44px] font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight text-center">
            Be the Reason Someone&apos;s Life<br className="hidden md:block" /> Changes Today
          </h2>
          <p className="text-[16px] text-gray-600 font-normal max-w-2xl mx-auto text-center leading-[1.7] mb-12">
            Whether you give, partner, or volunteer — your action today creates a ripple that transforms communities for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#" className="w-full sm:w-auto text-center bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 rounded-full font-medium transition-all shadow-sm border border-gray-200 hover:shadow-md">
              Become a partner
            </a>
            <a href="#" className="w-full sm:w-auto text-center bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Donate Now
            </a>
            <a href="#" className="w-full sm:w-auto text-center bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 rounded-full font-medium transition-all shadow-sm border border-gray-200 hover:shadow-md">
              Volunteer with us
            </a>
          </div>
        </div>
      </section>

      {/* Section 8: Those Who Make It Possible */}
      <section className="w-full py-24 bg-[#f2fbf4] overflow-hidden" data-aos="fade-up">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center mb-16">
          <h2 className="text-[32px] md:text-[38px] font-extrabold text-gray-900 leading-[1.15] mb-4 tracking-tight text-center">
            Those Who Make It Possible
          </h2>
          <p className="text-[16px] text-gray-600 font-normal max-w-3xl mx-auto text-center leading-[1.7]">
            We are grateful to our corporate partners, government agencies, and international organisations who share our vision for a transformed Nigeria.
          </p>
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex overflow-hidden">
          <div className="flex w-max animate-marquee gap-6 hover:animate-paused">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] shrink-0 border border-gray-100/50">
                <div className="w-8 h-8 bg-[#22c55e] rounded-[6px] shrink-0"></div>
                <span className="text-[14.5px] font-extrabold text-gray-800 tracking-tight leading-snug max-w-[140px]">
                  Bill & Melinda Gates Foundation
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
