"use client";

import Image from "next/image";
import Link from "next/link";

/** Stat card data */
const stats = [
  {
    label: "Total Blog Posts",
    value: "24",
    icon: "/assets/blog-post.png",
  },
  {
    label: "Published Posts",
    value: "12",
    icon: "/assets/published-posts.png",
  },
  {
    label: "Gallery Items",
    value: "8",
    icon: "/assets/gallery.png",
  },
  {
    label: "Drafts",
    value: "24",
    icon: "/assets/drafts.png",
  },
];

/** Recent blog posts placeholder data */
const recentPosts = [
  {
    id: 1,
    title: "Why Rural Schools in Northern Nigeria Still Need Our Attention",
    date: "June 3, 2025",
    category: "Education",
    status: "Published",
    image: "/assets/program-1.png",
  },
  {
    id: 2,
    title: "How Community Health Workers Are Transforming Rural Healthcare",
    date: "May 18, 2025",
    category: "Healthcare",
    status: "Draft",
    image: "/assets/program-2.png",
  },
  {
    id: 3,
    title: "5,000 Women Graduate From Our Empowerment Cohort",
    date: "April 28, 2025",
    category: "Women",
    status: "Published",
    image: "/assets/program-3.png",
  },
];

/** Recent activity placeholder data */
const recentActivity = [
  {
    text: 'Admin User published "Why Rural Schools in Northern Nigeria..."',
    time: "2 days ago",
  },
  {
    text: "Admin User uploaded 3 images to Gallery → Healthcare",
    time: "3 days ago",
  },
  {
    text: 'Admin User saved a draft: "NextGen Nigeria: 1,800 Youth-Led..."',
    time: "5 days ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* ─── Stats Cards ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-[16px] border border-gray-100 px-6 py-5 flex items-center gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
          >
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[28px] font-extrabold text-gray-900 leading-none mb-1">
                {stat.value}
              </span>
              <span className="text-[13px] text-gray-500 font-normal truncate">
                {stat.label}
              </span>
            </div>
            <div className="w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src={stat.icon}
                alt={stat.label}
                width={28}
                height={28}
                className="w-7 h-7 object-contain opacity-70"
              />
            </div>
          </div>
        ))}
      </div>

      {/* ─── Content Grid ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        {/* Left: Recent Blog Posts */}
        <div className="bg-white rounded-[16px] border border-gray-100 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[17px] font-extrabold text-gray-900 tracking-tight">
              Recent Blog Posts
            </h2>
            <Link
              href="/admin/dashboard/blog"
              className="text-[13px] font-medium text-[#22c55e] hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="flex flex-col divide-y divide-gray-100">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                {/* Thumbnail */}
                <div className="w-[100px] h-[72px] shrink-0 rounded-[10px] overflow-hidden relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[14px] font-bold text-gray-900 leading-snug mb-1 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[12px] text-gray-400 font-normal">
                      {post.date} · {post.category}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                        post.status === "Published"
                          ? "bg-green-50 text-[#22c55e]"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {post.status}
                    </span>
                    <Link
                      href="#"
                      className="text-[12px] font-medium text-[#22c55e] hover:underline flex items-center gap-1"
                    >
                      View Article <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-[16px] border border-gray-100 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <h2 className="text-[17px] font-extrabold text-gray-900 tracking-tight mb-5">
              Quick Action
            </h2>
            <div className="flex flex-col gap-3">
              <Link
                href="/admin/dashboard/blog/new"
                className="w-full text-center py-3 rounded-[10px] border-2 border-[#22c55e] text-[#22c55e] text-[13px] font-semibold hover:bg-[#22c55e] hover:text-white transition-all"
              >
                Write a new article
              </Link>
              <Link
                href="/admin/dashboard/gallery"
                className="w-full text-center py-3 rounded-[10px] border-2 border-[#22c55e] text-[#22c55e] text-[13px] font-semibold hover:bg-[#22c55e] hover:text-white transition-all"
              >
                Upload Gallery Images
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-[16px] border border-gray-100 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <h2 className="text-[17px] font-extrabold text-gray-900 tracking-tight mb-5">
              Recent Activity
            </h2>
            <div className="flex flex-col gap-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#22c55e] flex items-center justify-center text-white text-[11px] font-bold mt-0.5">
                    AD
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] text-gray-700 font-normal leading-snug">
                      <span className="font-semibold">Admin User</span>{" "}
                      {activity.text.replace("Admin User ", "")}
                    </p>
                    <p className="text-[11px] text-gray-400 font-normal mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
