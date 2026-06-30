"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/** Placeholder blog articles */
const allArticles = [
  {
    id: 1,
    title: "Why Rural Schools in Northern Nigeria Still Need Our Urgent Attention",
    date: "June 3, 2025",
    category: "Education",
    status: "Published",
    image: "/assets/program-1.png",
    excerpt:
      "Despite a decade of reform and investment, more than 10 million Nigerian children remain out of school today. The majority of them live in the North — and the gap is not closing fast enough.",
    body: [
      {
        heading: "The Scale of the Problem",
        text: "Nigeria loses approximately 400,000 hectares of forest annually — one of the highest deforestation rates in the world. The consequences are being felt directly in communities: reduced rainfall, desertification creeping further south, soil erosion destroying farmland, and increasing flooding in communities near bare hillsides.",
        image: "/assets/program-4.png",
      },
      {
        heading: "What We Are Doing",
        text: "Through our Education First initiative, we have built and renovated 12 schools across Northern Nigeria, enrolling over 4,200 students who previously had no access to quality education. Our approach combines infrastructure with teacher training and community engagement to ensure lasting impact.",
      },
    ],
  },
  {
    id: 2,
    title: "How Community Health Workers Are Transforming Rural Healthcare",
    date: "May 18, 2025",
    category: "Healthcare",
    status: "Published",
    image: "/assets/program-2.png",
    excerpt:
      "In remote Nigerian communities where hospitals are hours away, community health workers are becoming the frontline of medical care — saving lives one village at a time.",
    body: [
      {
        heading: "Bridging the Healthcare Gap",
        text: "Our network of trained community health workers now covers 8 local government areas, providing essential primary healthcare, maternal care, and vaccination services to over 30,000 patients annually.",
      },
    ],
  },
  {
    id: 3,
    title: "5,000 Women Graduate From Our Empowerment Cohort",
    date: "April 29, 2025",
    category: "Women",
    status: "Published",
    image: "/assets/program-3.png",
    excerpt:
      "A milestone achievement as our She Leads programme celebrates 5,000 women who have completed vocational training and business mentorship across six states.",
    body: [
      {
        heading: "Economic Independence Through Skills",
        text: "The She Leads microfinance cohort has disbursed over ₦240 million in micro-loans, enabling women to start and scale businesses in tailoring, food processing, agriculture, and digital services.",
      },
    ],
  },
];

type Article = (typeof allArticles)[number];

const categories = [
  "All Category",
  "Education",
  "Healthcare",
  "Women",
  "Youth",
  "Infrastructure",
  "Environment",
];

export default function BlogManagementPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Category");
  const [viewArticle, setViewArticle] = useState<Article | null>(null);
  const [deleteArticle, setDeleteArticle] = useState<Article | null>(null);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [articles, setArticles] = useState(allArticles);

  /** Filter articles by search and category */
  const filtered = articles.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === "All Category" || a.category === category;
    return matchesSearch && matchesCategory;
  });

  /** Handle article deletion */
  const handleDelete = () => {
    if (!deleteArticle) return;
    setArticles((prev) => prev.filter((a) => a.id !== deleteArticle.id));
    setDeleteArticle(null);
    setShowDeleteSuccess(true);
    setTimeout(() => setShowDeleteSuccess(false), 2500);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* ─── Toolbar ─── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Search */}
        <div className="flex flex-col gap-1.5 flex-1 w-full sm:w-auto">
          <label className="text-[13px] font-medium text-gray-500">
            Search
          </label>
          <div className="relative">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search article."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-[10px] border border-gray-200 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white"
            />
          </div>
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1.5 w-full sm:w-[180px]">
          <label className="text-[13px] font-medium text-gray-500">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200 text-[14px] text-gray-700 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Create Article */}
        <div className="flex flex-col gap-1.5 w-full sm:w-auto">
          <span className="text-[13px] font-medium text-transparent select-none hidden sm:block">
            &nbsp;
          </span>
          <Link
            href="/admin/dashboard/blog/new"
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white text-[14px] font-semibold px-6 py-2.5 rounded-[10px] transition-all shadow-sm text-center whitespace-nowrap"
          >
            Create Article
          </Link>
        </div>
      </div>

      {/* ─── Articles List ─── */}
      <div className="bg-white rounded-[16px] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-[17px] font-extrabold text-gray-900 tracking-tight">
            All Articles
          </h2>
        </div>

        <div className="divide-y divide-gray-100">
          {filtered.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-[14px] text-gray-400">No articles found.</p>
            </div>
          ) : (
            filtered.map((article) => (
              <div
                key={article.id}
                className="flex flex-col sm:flex-row gap-4 px-6 py-5"
              >
                {/* Thumbnail */}
                <div className="w-[100px] h-[72px] shrink-0 rounded-[10px] overflow-hidden relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[14px] font-bold text-gray-900 leading-snug mb-1">
                      {article.title}
                    </h3>
                    <p className="text-[12px] text-gray-400 font-normal">
                      {article.date} · {article.category}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Status */}
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                        article.status === "Published"
                          ? "bg-green-50 text-[#22c55e]"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {article.status}
                    </span>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setViewArticle(article)}
                        className="flex items-center gap-1.5 text-[12px] font-medium text-[#22c55e] hover:underline transition-colors"
                      >
                        <Image
                          src="/assets/view.png"
                          alt="View"
                          width={16}
                          height={16}
                          className="w-4 h-4 object-contain"
                        />
                        View
                      </button>
                      <button
                        onClick={() => setDeleteArticle(article)}
                        className="flex items-center gap-1.5 text-[12px] font-medium text-red-500 hover:underline transition-colors"
                      >
                        <Image
                          src="/assets/delete.png"
                          alt="Delete"
                          width={16}
                          height={16}
                          className="w-4 h-4 object-contain"
                        />
                        Delete
                      </button>
                      <button className="flex items-center gap-1.5 text-[12px] font-medium text-gray-600 hover:underline transition-colors">
                        <Image
                          src="/assets/edit.png"
                          alt="Edit"
                          width={16}
                          height={16}
                          className="w-4 h-4 object-contain"
                        />
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ─── Article Detail Modal ─── */}
      {viewArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-6"
          onClick={() => setViewArticle(null)}
        >
          <div
            className="relative w-full max-w-[620px] max-h-[90vh] bg-white rounded-[20px] shadow-[0_16px_64px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
              <h2 className="text-[16px] font-extrabold text-gray-900 tracking-tight">
                Article Detail
              </h2>
              <button
                onClick={() => setViewArticle(null)}
                className="hover:opacity-70 transition-opacity"
                aria-label="Close modal"
              >
                <Image
                  src="/assets/close.png"
                  alt="Close"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </button>
            </div>

            {/* Modal Body — scrollable */}
            <div className="overflow-y-auto flex-1 px-6 py-6">
              {/* Hero Image */}
              <div className="relative w-full h-[220px] rounded-[14px] overflow-hidden mb-6">
                <Image
                  src={viewArticle.image}
                  alt={viewArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-extrabold text-gray-900 leading-snug tracking-tight mb-5">
                {viewArticle.title}
              </h3>

              {/* Excerpt / Blockquote */}
              <div className="border-l-4 border-[#22c55e] pl-4 mb-6">
                <p className="text-[14px] text-gray-600 leading-[1.7] font-normal">
                  {viewArticle.excerpt}
                </p>
              </div>

              {/* Body Sections */}
              {viewArticle.body.map((section, i) => (
                <div key={i} className="mb-6 last:mb-0">
                  <h4 className="text-[16px] font-bold text-gray-900 mb-3">
                    {section.heading}
                  </h4>
                  <p className="text-[14px] text-gray-600 leading-[1.7] font-normal mb-4">
                    {section.text}
                  </p>
                  {section.image && (
                    <div className="relative w-full h-[200px] rounded-[14px] overflow-hidden">
                      <Image
                        src={section.image}
                        alt={section.heading}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── Delete Confirmation Modal ─── */}
      {deleteArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={() => setDeleteArticle(null)}
        >
          <div
            className="w-full max-w-[380px] bg-white rounded-[20px] shadow-[0_16px_64px_rgba(0,0,0,0.12)] p-8 flex flex-col items-center text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-5">
              <Image
                src="/assets/delete.png"
                alt="Delete"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
            </div>

            <h3 className="text-[18px] font-extrabold text-gray-900 mb-2">
              Delete Article?
            </h3>
            <p className="text-[13px] text-gray-500 font-normal leading-relaxed mb-6">
              This action cannot be undone. The published article will be removed from the website.
            </p>

            <div className="flex items-center gap-3 w-full">
              <button
                onClick={() => setDeleteArticle(null)}
                className="flex-1 py-2.5 rounded-[10px] border-2 border-[#22c55e] text-[#22c55e] text-[13px] font-semibold hover:bg-green-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 py-2.5 rounded-[10px] bg-red-500 hover:bg-red-600 text-white text-[13px] font-semibold transition-colors"
              >
                Delete Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Delete Success Toast ─── */}
      {showDeleteSuccess && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] animate-in">
          <div className="flex items-center gap-3 bg-white rounded-[14px] shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-100 px-5 py-3.5">
            <Image
              src="/assets/success.png"
              alt="Success"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <div>
              <p className="text-[14px] font-bold text-gray-900">Deleted Successfully</p>
              <p className="text-[12px] text-gray-500 font-normal">Article removed permanently</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
