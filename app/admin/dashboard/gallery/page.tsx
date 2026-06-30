"use client";

import Image from "next/image";
import { useState, useRef } from "react";

/** Placeholder gallery images */
const initialGalleryItems = [
  {
    id: 1,
    title: "School Renovation — Isoko LGA",
    category: "Education",
    status: "Published",
    image: "/assets/school.png",
    featured: false,
  },
  {
    id: 2,
    title: "School Renovation — Isoko LGA",
    category: "Education",
    status: "Published",
    image: "/assets/program-1.png",
    featured: false,
  },
  {
    id: 3,
    title: "School Renovation — Isoko LGA",
    category: "Education",
    status: "Published",
    image: "/assets/program-2.png",
    featured: false,
  },
  {
    id: 4,
    title: "Health Care Renovation — Isoko LGA",
    category: "Healthcare",
    status: "Published",
    image: "/assets/health-center.png",
    featured: false,
  },
  {
    id: 5,
    title: "Community Development Initiative",
    category: "Infrastructure",
    status: "Published",
    image: "/assets/tap-water.png",
    featured: false,
  },
  {
    id: 6,
    title: "Road Construction — Isoko LGA",
    category: "Infrastructure",
    status: "Published",
    image: "/assets/road.png",
    featured: false,
  },
];

type GalleryItem = (typeof initialGalleryItems)[number];

const categories = [
  "All Category",
  "Education",
  "Healthcare",
  "Infrastructure",
  "Women",
  "Youth",
  "Environment",
];

export default function GalleryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Category");
  const [items, setItems] = useState(initialGalleryItems);
  const [viewItem, setViewItem] = useState<GalleryItem | null>(null);
  const [deleteItem, setDeleteItem] = useState<GalleryItem | null>(null);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  /* ─── Upload modal state ─── */
  const [showUpload, setShowUpload] = useState(false);
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadCategory, setUploadCategory] = useState("");
  const [uploadFeatured, setUploadFeatured] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /** Filter items by search and category */
  const filtered = items.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      category === "All Category" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  /** Handle item deletion */
  const handleDelete = () => {
    if (!deleteItem) return;
    setItems((prev) => prev.filter((i) => i.id !== deleteItem.id));
    setDeleteItem(null);
    setShowDeleteSuccess(true);
    setTimeout(() => setShowDeleteSuccess(false), 2500);
  };

  /** Handle file selection */
  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    if (file.size > 10 * 1024 * 1024) return; // 10MB limit
    setUploadFile(file);
    const reader = new FileReader();
    reader.onload = (e) => setUploadPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  /** Handle drag events */
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  /** Reset upload form */
  const resetUpload = () => {
    setShowUpload(false);
    setUploadTitle("");
    setUploadCategory("");
    setUploadFeatured(false);
    setUploadFile(null);
    setUploadPreview(null);
  };

  /** Handle publish (placeholder — adds to local state) */
  const handlePublish = () => {
    if (!uploadTitle || !uploadCategory) return;
    const newItem: GalleryItem = {
      id: Date.now(),
      title: uploadTitle,
      category: uploadCategory,
      status: "Published",
      image: uploadPreview || "/assets/program-1.png",
      featured: uploadFeatured,
    };
    setItems((prev) => [newItem, ...prev]);
    resetUpload();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* ─── Toolbar ─── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
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
              id="gallery-search"
              type="text"
              placeholder="Search by name"
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
            id="gallery-category-filter"
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

        {/* Upload Button */}
        <div className="flex flex-col gap-1.5 w-full sm:w-auto">
          <span className="text-[13px] font-medium text-transparent select-none hidden sm:block">
            &nbsp;
          </span>
          <button
            id="gallery-upload-btn"
            onClick={() => setShowUpload(true)}
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white text-[14px] font-semibold px-6 py-2.5 rounded-[10px] transition-all shadow-sm text-center whitespace-nowrap cursor-pointer"
          >
            Upload
          </button>
        </div>
      </div>

      {/* ─── Image Grid ─── */}
      <div>
        <h2 className="text-[17px] font-extrabold text-gray-900 tracking-tight mb-5">
          All image
        </h2>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-[16px] border border-gray-100 px-6 py-12 text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <p className="text-[14px] text-gray-400">No images found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[16px] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden group transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                {/* Image */}
                <div className="relative w-full h-[160px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="px-4 py-3.5">
                  <h3 className="text-[13px] font-bold text-gray-900 leading-snug mb-1 line-clamp-1">
                    {item.title}
                  </h3>
                  <span
                    className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-2.5 ${
                      item.status === "Published"
                        ? "bg-green-50 text-[#22c55e]"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {item.status}
                  </span>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      id={`gallery-view-${item.id}`}
                      onClick={() => setViewItem(item)}
                      className="flex items-center gap-1.5 text-[12px] font-medium text-[#22c55e] hover:underline transition-colors cursor-pointer"
                    >
                      <Image
                        src="/assets/view.png"
                        alt="View"
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain"
                      />
                    </button>
                    <button
                      id={`gallery-delete-${item.id}`}
                      onClick={() => setDeleteItem(item)}
                      className="flex items-center gap-1.5 text-[12px] font-medium text-red-500 hover:underline transition-colors cursor-pointer"
                    >
                      <Image
                        src="/assets/delete.png"
                        alt="Delete"
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ─── Upload Modal ─── */}
      {showUpload && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-6"
          onClick={resetUpload}
        >
          <div
            className="relative w-full max-w-[440px] bg-white rounded-[20px] shadow-[0_16px_64px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-8 pt-7 pb-0">
              <h2 className="text-[18px] font-extrabold text-gray-900 tracking-tight text-center">
                Upload Image
              </h2>
            </div>

            {/* Modal Body */}
            <div className="px-8 py-6 flex flex-col gap-5">
              {/* Title */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="upload-title"
                  className="text-[13px] font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id="upload-title"
                  type="text"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white"
                />
              </div>

              {/* Category */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="upload-category"
                  className="text-[13px] font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="upload-category"
                  value={uploadCategory}
                  onChange={(e) => setUploadCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-[10px] border border-gray-200 text-[14px] text-gray-700 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors bg-white appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                  }}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {categories
                    .filter((c) => c !== "All Category")
                    .map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                </select>
              </div>

              {/* Featured Checkbox */}
              <div className="flex items-center justify-between bg-gray-50 rounded-[10px] px-4 py-3 border border-gray-100">
                <span className="text-[13px] font-medium text-gray-700">
                  Display at the big frame
                </span>
                <button
                  id="upload-featured-toggle"
                  type="button"
                  onClick={() => setUploadFeatured(!uploadFeatured)}
                  className={`w-5 h-5 rounded-[4px] border-2 flex items-center justify-center transition-colors cursor-pointer ${
                    uploadFeatured
                      ? "bg-[#22c55e] border-[#22c55e]"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {uploadFeatured && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              </div>

              {/* File Upload Area */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-gray-700">
                  Upload Image
                </label>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full border-2 border-dashed rounded-[10px] flex flex-col items-center justify-center py-8 cursor-pointer transition-colors ${
                    isDragging
                      ? "border-[#22c55e] bg-green-50"
                      : "border-gray-200 hover:border-[#22c55e] hover:bg-green-50/30"
                  }`}
                >
                  {uploadPreview ? (
                    <div className="relative w-full h-[120px] px-4">
                      <Image
                        src={uploadPreview}
                        alt="Preview"
                        fill
                        className="object-contain rounded-[8px]"
                      />
                    </div>
                  ) : (
                    <>
                      {/* Upload icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#9ca3af"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mb-2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <p className="text-[14px] font-semibold text-gray-700">
                        Upload
                      </p>
                      <p className="text-[12px] text-gray-400 mt-0.5">
                        PNG, JEGP Max 10MB
                      </p>
                    </>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileSelect(file);
                  }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 pb-7 flex items-center justify-center gap-4">
              <button
                id="upload-cancel-btn"
                onClick={resetUpload}
                className="px-8 py-2.5 rounded-full border-2 border-[#22c55e] text-[#22c55e] text-[13px] font-semibold hover:bg-green-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                id="upload-publish-btn"
                onClick={handlePublish}
                disabled={!uploadTitle || !uploadCategory}
                className="px-8 py-2.5 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-[13px] font-semibold transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── View Image Modal ─── */}
      {viewItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-6"
          onClick={() => setViewItem(null)}
        >
          <div
            className="relative w-full max-w-[560px] bg-white rounded-[20px] shadow-[0_16px_64px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
              <h2 className="text-[16px] font-extrabold text-gray-900 tracking-tight">
                Image Detail
              </h2>
              <button
                onClick={() => setViewItem(null)}
                className="hover:opacity-70 transition-opacity cursor-pointer"
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

            {/* Modal Body */}
            <div className="overflow-y-auto flex-1 px-6 py-6">
              {/* Image */}
              <div className="relative w-full h-[300px] rounded-[14px] overflow-hidden mb-5">
                <Image
                  src={viewItem.image}
                  alt={viewItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-[18px] font-extrabold text-gray-900 leading-snug tracking-tight mb-2">
                {viewItem.title}
              </h3>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[12px] text-gray-500 font-normal">
                  Category: {viewItem.category}
                </span>
                <span className="text-gray-300">·</span>
                <span
                  className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                    viewItem.status === "Published"
                      ? "bg-green-50 text-[#22c55e]"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {viewItem.status}
                </span>
              </div>
              {viewItem.featured && (
                <p className="text-[12px] text-[#22c55e] font-medium">
                  ✦ Displayed on the big frame
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ─── Delete Confirmation Modal ─── */}
      {deleteItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={() => setDeleteItem(null)}
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
              Delete Image?
            </h3>
            <p className="text-[13px] text-gray-500 font-normal leading-relaxed mb-6">
              This action cannot be undone. The image will be permanently removed
              from the gallery.
            </p>

            <div className="flex items-center gap-3 w-full">
              <button
                onClick={() => setDeleteItem(null)}
                className="flex-1 py-2.5 rounded-[10px] border-2 border-[#22c55e] text-[#22c55e] text-[13px] font-semibold hover:bg-green-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                id="gallery-delete-confirm-btn"
                onClick={handleDelete}
                className="flex-1 py-2.5 rounded-[10px] bg-red-500 hover:bg-red-600 text-white text-[13px] font-semibold transition-colors cursor-pointer"
              >
                Delete Image
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
              <p className="text-[14px] font-bold text-gray-900">
                Deleted Successfully
              </p>
              <p className="text-[12px] text-gray-500 font-normal">
                Image removed permanently
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
