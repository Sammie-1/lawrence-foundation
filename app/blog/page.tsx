"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const categories = ["All Articles", "Education", "Healthcare", "Women", "Youth", "Community", "Environment"];

const articles = [
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
    desc: "Trained and deployed by RootBridge, our network of 2,400 community health workers is changing outcomes for millions who never saw a doctor before.",
    slug: "/blog/community-health-workers"
  },
  {
    img: "/assets/program-3.png",
    date: "APRIL 29, 2025",
    category: "WOMEN",
    title: "5,000 Women Graduate From Our Empowerment Cohort",
    desc: "In our biggest graduation ceremony yet, 5,000 women across 12 states completed our vocational skills, digital literacy, and entrepreneurship programme.",
    slug: "/blog/women-empowerment"
  },
  {
    img: "/assets/program-4.png",
    date: "APRIL 10, 2025",
    category: "YOUTH",
    title: "NextGen Academy: Building Tomorrow's Leaders Today",
    desc: "Our youth skills academy has trained over 3,500 young Nigerians in digital literacy, trade skills, and entrepreneurship to compete in the modern economy.",
    slug: "/blog/nextgen-academy"
  },
  {
    img: "/assets/program-5.png",
    date: "MARCH 22, 2025",
    category: "COMMUNITY",
    title: "Connecting Rural Communities: The Road to Progress",
    desc: "New rural road projects are transforming access to markets, schools, and healthcare for thousands of families in remote villages.",
    slug: "/blog/connecting-rural-communities"
  },
  {
    img: "/assets/program-6.png",
    date: "MARCH 5, 2025",
    category: "ENVIRONMENT",
    title: "Green Nigeria: 120,000 Trees and Counting",
    desc: "How our community-led reforestation program is combating desertification across the Sahel region and creating green jobs.",
    slug: "/blog/green-nigeria"
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "All Articles" || article.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Blog Hero */}
      <section className="relative w-full h-[600px] md:h-[650px] overflow-hidden pt-[72px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/blog-hero.png"
            alt="Featured article hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 flex flex-col justify-end pb-12">
          {/* Featured Badge */}
          <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-10 w-fit">
            Featured
          </span>

          <h1 className="text-[32px] md:text-[44px] font-extrabold text-white leading-[1.1] mb-5 max-w-3xl tracking-tight">
            Why Rural Schools in Northern Nigeria Still Need Our Urgent Attention
          </h1>

          <p className="text-[15px] md:text-[16px] text-gray-200 font-normal leading-[1.7] mb-6 max-w-2xl">
            Despite a decade of progress, over 10 million Nigerian children remain out of school — and the gap is widening in the North. Our latest field report examines the barriers and what sustainable solutions actually look like.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#22c55e] flex items-center justify-center text-white font-extrabold text-[13px]">
                FA
              </div>
              <div>
                <p className="text-[14px] font-extrabold text-white">Fatima Aliyu</p>
                <p className="text-[12px] text-gray-300 font-normal">June 3, 2025 · 6 mins</p>
              </div>
            </div>

            {/* Read Article */}
            <a href="/blog/why-rural-schools" className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-3 rounded-full font-medium transition-colors shadow-sm text-[14px]">
              Read Article →
            </a>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="w-full bg-white pt-12 pb-4" data-aos="fade-up">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all border ${
                  activeCategory === cat
                    ? "border-[#22c55e] text-[#22c55e] bg-white"
                    : "border-gray-200 text-gray-600 bg-white hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="w-full bg-white pb-10" data-aos="fade-up">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10">
          <div className="relative w-full">
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search article, topics, programs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl border border-gray-200 text-[15px] font-normal text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full bg-white pb-24" data-aos="fade-up">
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredArticles.map((article, i) => (
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
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[12px] font-normal text-gray-500">{article.date}</span>
                      <span className="text-gray-300">·</span>
                      <span className="text-[12px] font-semibold text-[#22c55e] uppercase tracking-wider">{article.category}</span>
                    </div>
                    <h3 className="text-[19px] font-extrabold text-gray-900 mb-3 leading-snug tracking-tight">{article.title}</h3>
                    <p className="text-[14px] text-gray-600 font-normal leading-[1.7] mb-6">{article.desc}</p>
                    <a href={article.slug} className="text-[#22c55e] font-medium text-[14px] hover:underline mt-auto">
                      Read Article →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="text-[18px] font-extrabold text-gray-900 mb-2">No articles found</p>
              <p className="text-[14px] text-gray-500 font-normal">Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
