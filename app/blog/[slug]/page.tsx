"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[650px] overflow-hidden pt-[72px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/blog-hero.png"
            alt="Article hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>

        <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col justify-end pb-12 pt-8">
          {/* Back button */}
          <div className="absolute top-8 left-5 md:left-8 lg:left-10">
            <a href="/blog" className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-white/50 text-[#ef4444] px-5 py-2 rounded-full text-[13px] font-bold hover:bg-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to blog
            </a>
          </div>

          <h1 className="text-[32px] md:text-[44px] font-extrabold text-white leading-[1.1] mb-5 max-w-4xl tracking-tight">
            Why Rural Schools in Northern Nigeria Still Need Our Urgent Attention
          </h1>

          <p className="text-[15px] md:text-[18px] text-gray-200 font-normal leading-[1.7] mb-8 max-w-3xl">
            Despite a decade of progress, over 10 million Nigerian children remain out of school — and the gap is widening in the North. Our latest field report examines the barriers and what sustainable solutions actually look like.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#22c55e] flex items-center justify-center text-white font-extrabold text-[14px]">
                FA
              </div>
              <div>
                <p className="text-[15px] font-extrabold text-white">Fatima Aliyu</p>
                <p className="text-[13px] text-gray-300 font-normal">June 3, 2025 · 6 mins</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white px-6 py-2.5 rounded-full font-medium transition-colors text-[14px]">
                Share
              </button>
              <button className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white px-6 py-2.5 rounded-full font-medium transition-colors text-[14px]">
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-white py-16 md:py-24" data-aos="fade-up">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          {/* Left Column (Article Body) */}
          <div className="w-full lg:w-[65%] xl:w-[70%]">
            
            {/* Lead Paragraph */}
            <div className="pl-6 border-l-4 border-[#22c55e] mb-10">
              <p className="text-[15px] text-gray-700 leading-[1.8] font-normal">
                Despite a decade of reform and investment, more than 10 million Nigerian children remain out of school today. The majority of them live in the North — and the gap is not closing fast enough.
              </p>
            </div>

            <h2 className="text-[20px] md:text-[22px] font-extrabold text-gray-900 mb-4 tracking-tight">The Scale of the Problem</h2>
            <p className="text-[15px] text-gray-600 leading-[1.8] mb-8 font-normal">
              Nigeria loses approximately 400,000 hectares of forest annually — one of the highest deforestation rates in the world. The consequences are being felt directly in communities: reduced rainfall, desertification creeping further south, soil erosion destroying farmland, and increasing flooding in communities near bare hillsides.
            </p>

            <div className="w-full aspect-[16/9] relative rounded-[24px] overflow-hidden mb-10 shadow-sm">
              <Image src="/assets/kids.png" alt="Students in a classroom" fill className="object-cover" />
            </div>

            {/* Blockquote */}
            <div className="bg-[#22c55e]/10 pl-6 pr-8 py-6 border-l-4 border-[#22c55e] rounded-r-[12px] mb-10">
              <p className="text-[15px] text-gray-900 leading-[1.8] font-medium italic mb-3">
                "We don't just plant trees. We plant with communities, we train them to care for the trees, and we connect the trees to their livelihoods — through fruit, shade, and soil restoration."
              </p>
              <p className="text-[13px] text-gray-600 font-normal">— Kemi Adeyemi, Director, Green Nigeria Campaign</p>
            </div>

            <h2 className="text-[20px] md:text-[22px] font-extrabold text-gray-900 mb-4 tracking-tight">What We Found on the Ground</h2>
            <p className="text-[15px] text-gray-600 leading-[1.8] mb-8 font-normal">
              Early tree-planting campaigns in Nigeria often failed because seedlings were planted without community buy-in and without post-planting care. Our model is different: we start with community dialogues, train local nursery operators, use locally-appropriate species, and establish a 5-year monitoring system that pays community members to maintain planted areas.
            </p>

            <h2 className="text-[20px] md:text-[22px] font-extrabold text-gray-900 mb-4 tracking-tight">The Lawrence Iyere Foundation Response</h2>
            <p className="text-[15px] text-gray-600 leading-[1.8] mb-8 font-normal">
              Our Green Nigeria model combines tree planting with three complementary interventions: borehole drilling for clean water access, solar-powered irrigation for small farms, and climate education in partner schools. The idea is simple — trees alone don't change livelihoods. Trees plus water plus education creates communities that have both the reason and the capacity to protect their environment.
            </p>

            <h2 className="text-[20px] md:text-[22px] font-extrabold text-gray-900 mb-4 tracking-tight">What Comes Next</h2>
            <p className="text-[15px] text-gray-600 leading-[1.8] mb-10 font-normal">
              We have committed to reaching 5 million trees by 2027, with a focus on mangrove restoration in the Niger Delta and desert-edge planting in the North. In 2025, we are partnering with state governments in Kebbi, Sokoto, and Katsina to establish 20 state-managed community forests using our model.
            </p>

            <hr className="mb-10 border-gray-200" />
            
            {/* Author Bio */}
            <div className="bg-gray-50 rounded-[16px] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 border border-gray-100">
              <div className="w-[50px] h-[50px] rounded-full bg-[#16a34a] shrink-0 flex items-center justify-center text-white font-extrabold text-[16px]">
                KA
              </div>
              <div className="flex flex-col">
                <h4 className="text-[16px] font-extrabold text-gray-900 mb-1 text-center sm:text-left">Kemi Adeyemi</h4>
                <p className="text-[13px] text-gray-600 leading-[1.7] font-normal text-center sm:text-left">
                  Director, Green Nigeria Campaign. Environmental scientist and climate activist. Former UNDP Nigeria consultant. 14 years in environmental conservation across West and Central Africa.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="w-full lg:w-[35%] xl:w-[30%] flex flex-col gap-8">
            
            {/* In This Article */}
            <div className="bg-gray-50 rounded-[24px] p-8 border border-gray-100">
              <h3 className="text-[14px] font-extrabold text-gray-900 uppercase tracking-widest mb-6">In This Article</h3>
              <ul className="flex flex-col gap-4">
                {[
                  { num: "01", text: "The Scale of the Problem" },
                  { num: "02", text: "What We Found on the Ground" },
                  { num: "03", text: "The Lawrence Iyere Response" },
                  { num: "04", text: "Measuring Impact" },
                  { num: "05", text: "What Comes Next" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 py-2 border-b border-gray-200/60 last:border-0">
                    <span className="text-[#22c55e] font-extrabold text-[14px]">{item.num}</span>
                    <a href="#" className="text-[14px] text-gray-700 font-medium hover:text-[#22c55e] transition-colors">{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Widget */}
            <div className="bg-[#16a34a] rounded-[24px] p-8 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_100%)] pointer-events-none" />
              <h3 className="text-[15px] font-extrabold text-white mb-3 relative z-10 leading-snug">HELP FUND PROGRAMS LIKE THIS</h3>
              <p className="text-[12px] text-green-50 font-normal leading-[1.6] mb-6 relative z-10">
                Every article you read represents real people. Your donation makes the work possible.
              </p>
              <a href="#" className="w-full bg-white text-[#16a34a] hover:bg-gray-50 py-3 rounded-full font-bold text-[13px] transition-colors relative z-10 text-center shadow-sm">
                Donate Now
              </a>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-[24px] p-8 border border-gray-100">
              <h3 className="text-[14px] font-extrabold text-gray-900 uppercase tracking-widest mb-6">Related Articles</h3>
              <div className="flex flex-col gap-6">
                {[
                  { img: "/assets/program-2.png", cat: "Healthcare", title: "How Community Health Workers Are Changing Rural Access", slug: "/blog/community-health-workers" },
                  { img: "/assets/program-3.png", cat: "Women", title: "She Leads 2025: 5,000 Women Graduate", slug: "/blog/women-empowerment" },
                  { img: "/assets/program-6.png", cat: "Environment", title: "Two Million Trees and Counting", slug: "/blog/green-nigeria" }
                ].map((article, i) => (
                  <a href={article.slug} key={i} className="flex items-start gap-4 group">
                    <div className="w-16 h-16 rounded-[12px] overflow-hidden shrink-0 relative">
                      <Image src={article.img} alt={article.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1">{article.cat}</span>
                      <h4 className="text-[14px] font-extrabold text-gray-900 leading-snug group-hover:text-[#22c55e] transition-colors">
                        {article.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* More From Our Blog */}
      <section className="w-full bg-[#f4fbf6] py-20" data-aos="fade-up">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-[#22c55e] mb-12 text-center tracking-tight">
            More From Our Blog
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full">
            {[
              {
                img: "/assets/kids.png",
                date: "JUNE 3, 2025",
                category: "EDUCATION",
                title: "Why Rural Schools in Northern Nigeria Still Need Our Attention",
                desc: "Despite progress, over 10 million Nigerian children remain out of school. Our latest field report examines the barriers and what sustainable solutions look like.",
                slug: "/blog/why-rural-schools"
              },
              {
                img: "/assets/program-2.png",
                date: "MAY 18, 2025",
                category: "HEALTHCARE",
                title: "How Community Health Workers Are Transforming Rural Healthcare",
                desc: "Trained and deployed by Lawrence Iyere Foundation, our network of 2,400 community health workers is changing outcomes for millions who never saw a doctor before.",
                slug: "/blog/community-health-workers"
              },
              {
                img: "/assets/program-3.png",
                date: "APRIL 29, 2025",
                category: "WOMEN",
                title: "5,000 Women Graduate From Our Empowerment Cohort",
                desc: "In our biggest graduation ceremony yet, 5,000 women across 12 states completed our vocational skills, digital literacy, and entrepreneurship programme.",
                slug: "/blog/women-empowerment"
              }
            ].map((article, i) => (
              <div key={i} className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group border border-gray-100/50 flex flex-col">
                <div className="relative w-full h-[220px] overflow-hidden shrink-0">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[12px] font-normal text-gray-500">{article.date}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-[12px] font-semibold text-[#22c55e] uppercase tracking-wider">{article.category}</span>
                  </div>
                  <h3 className="text-[18px] font-extrabold text-gray-900 mb-3 leading-snug tracking-tight">{article.title}</h3>
                  <p className="text-[14px] text-gray-600 font-normal leading-[1.7] mb-6 line-clamp-3">{article.desc}</p>
                  
                  <div className="mt-auto flex flex-col">
                    <hr className="border-gray-100 mb-4" />
                    <a href={article.slug} className="text-[#22c55e] font-medium text-[14px] hover:underline text-right w-full block">
                      Read Article →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
