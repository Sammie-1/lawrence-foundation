"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const categories = [
  "Select",
  "Education",
  "Healthcare",
  "Women",
  "Youth",
  "Infrastructure",
  "Environment",
];

export default function CreateArticlePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("Draft");
  const [category, setCategory] = useState("Select");
  const [featureOnHomepage, setFeatureOnHomepage] = useState(false);
  const [publishDate, setPublishDate] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [middleImage, setMiddleImage] = useState<File | null>(null);

  const [toast, setToast] = useState<{ type: "publish" | "save" } | null>(null);

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement publish logic
    setToast({ type: "publish" });
    setTimeout(() => {
      router.push("/admin/dashboard/blog");
    }, 2500);
  };

  const handleSaveDraft = () => {
    // TODO: Implement save draft logic
    setToast({ type: "save" });
    setTimeout(() => {
      router.push("/admin/dashboard/blog");
    }, 2500);
  };

  const handlePreview = () => {
    // TODO: Implement preview logic
  };

  return (
    <div className="flex flex-col gap-6 relative">
      {/* Toast Notification */}
      <div
        className={`fixed top-8 right-8 z-50 bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100 p-4 pr-10 flex items-center gap-4 transition-all duration-300 ease-in-out ${
          toast ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-[52px] h-[52px] rounded-full bg-[#dcfce7] flex items-center justify-center shrink-0">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#22c55e]"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l3 3 5-5" />
          </svg>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[17px] font-bold text-gray-900 leading-tight">
            {toast?.type === "publish" ? "Published Successfully" : "Changes Saved"}
          </h4>
          <p className="text-[14px] text-gray-600 mt-0.5">
            {toast?.type === "publish"
              ? "Blog is now live on website"
              : "Content updated successfully"}
          </p>
        </div>
      </div>

      {/* ─── Header ─── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Go back"
          >
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
              className="text-gray-600"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <h1 className="text-[20px] font-extrabold text-gray-900 tracking-tight">
            Create Article
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSaveDraft}
            className="px-5 py-2 rounded-[10px] border-2 border-[#22c55e] text-[#22c55e] text-[13px] font-semibold hover:bg-green-50 transition-colors"
          >
            Save Draft
          </button>
          <button
            onClick={handlePreview}
            className="px-5 py-2 rounded-[10px] border-2 border-[#22c55e] text-[#22c55e] text-[13px] font-semibold hover:bg-green-50 transition-colors"
          >
            Preview
          </button>
          <button
            onClick={handlePublish}
            className="px-5 py-2 rounded-[10px] bg-[#22c55e] hover:bg-[#16a34a] text-white text-[13px] font-semibold transition-colors shadow-sm"
          >
            Publish
          </button>
        </div>
      </div>

      {/* ─── Form ─── */}
      <form
        onSubmit={handlePublish}
        className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6"
      >
        {/* Left: Article Content */}
        <div className="bg-white rounded-[16px] border border-gray-100 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <h2 className="text-[16px] font-extrabold text-gray-900 tracking-tight mb-6">
            Article Content
          </h2>

          <div className="flex flex-col gap-5">
            {/* Title */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="article-title"
                className="text-[13px] font-medium text-gray-600"
              >
                Title
              </label>
              <input
                id="article-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white"
              />
            </div>

            {/* Short Description */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="article-description"
                className="text-[13px] font-medium text-gray-600"
              >
                Short Description
              </label>
              <input
                id="article-description"
                type="text"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="article-content"
                className="text-[13px] font-medium text-gray-600"
              >
                Content
              </label>
              <textarea
                id="article-content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white resize-none"
              />
            </div>
          </div>
        </div>

        {/* Right: Publish Settings */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-[16px] border border-gray-100 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <h2 className="text-[16px] font-extrabold text-gray-900 tracking-tight mb-6">
              Publish Settings
            </h2>

            <div className="flex flex-col gap-5">
              {/* Status */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="article-status"
                  className="text-[13px] font-medium text-gray-600"
                >
                  Status
                </label>
                <select
                  id="article-status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-700 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                  }}
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>

              {/* Category */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="article-category"
                  className="text-[13px] font-medium text-gray-600"
                >
                  Category
                </label>
                <select
                  id="article-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-700 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white appearance-none cursor-pointer"
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

              {/* Feature on Homepage */}
              <label
                htmlFor="feature-homepage"
                className="flex items-center justify-between cursor-pointer select-none bg-gray-50 rounded-[10px] px-4 py-3"
              >
                <span className="text-[13px] font-medium text-gray-700">
                  Feature on Homepage
                </span>
                <input
                  id="feature-homepage"
                  type="checkbox"
                  checked={featureOnHomepage}
                  onChange={(e) => setFeatureOnHomepage(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[#22c55e] focus:ring-[#22c55e] accent-[#22c55e] cursor-pointer"
                />
              </label>

              {/* Publish Date */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="publish-date"
                  className="text-[13px] font-medium text-gray-600"
                >
                  Publish Date
                </label>
                <input
                  id="publish-date"
                  type="date"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  placeholder="DD/MM/YYYY"
                  className="w-full px-4 py-3 rounded-[10px] border border-gray-200 text-[14px] text-gray-700 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white cursor-pointer"
                />
              </div>

              {/* Cover Image Upload */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-gray-600">
                  Upload Cover Image
                </label>
                <label className="flex flex-col items-center justify-center gap-1 py-4 rounded-[10px] border border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:border-[#22c55e] transition-colors">
                  <span className="text-[13px] font-semibold text-gray-700">
                    {coverImage ? coverImage.name : "Upload"}
                  </span>
                  <span className="text-[11px] text-gray-400">
                    PNG, JEGP Max 10MB
                  </span>
                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    className="hidden"
                    onChange={(e) =>
                      setCoverImage(e.target.files?.[0] || null)
                    }
                  />
                </label>
              </div>

              {/* Middle Image Upload */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-gray-600">
                  Middle Image
                </label>
                <label className="flex flex-col items-center justify-center gap-1 py-4 rounded-[10px] border border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:border-[#22c55e] transition-colors">
                  <span className="text-[13px] font-semibold text-gray-700">
                    {middleImage ? middleImage.name : "Upload"}
                  </span>
                  <span className="text-[11px] text-gray-400">
                    PNG, JEGP Max 10MB
                  </span>
                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    className="hidden"
                    onChange={(e) =>
                      setMiddleImage(e.target.files?.[0] || null)
                    }
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
