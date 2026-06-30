"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const sidebarLinks = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: "/assets/dashbard.png",
  },
  {
    label: "Blog",
    href: "/admin/dashboard/blog",
    icon: "/assets/blogg.png",
  },
  {
    label: "Gallery",
    href: "/admin/dashboard/gallery",
    icon: "/assets/gallery.png",
  },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  /** Determine the breadcrumb label from the current path */
  const getBreadcrumb = () => {
    if (pathname === "/admin/dashboard") return "Dashboard";
    if (pathname.startsWith("/admin/dashboard/blog")) return "Dashboard / Blog";
    if (pathname.startsWith("/admin/dashboard/gallery"))
      return "Dashboard / Gallery";
    return "Dashboard";
  };

  return (
    <div className="flex h-screen bg-[#fafafa] overflow-hidden">
      {/* ─── Sidebar ─── */}
      <aside className="w-[220px] shrink-0 bg-[#f2fbf4] border-r border-green-100/60 flex flex-col">
        {/* Logo */}
        <div className="px-5 py-6 border-b border-green-100/60">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/assets/logo.png"
              alt="LOI Logo"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
              priority
            />
            <div className="flex flex-col leading-[1.1]">
              <span className="text-[14px] font-extrabold text-gray-900 tracking-tight uppercase">
                Lawrence Iyere
              </span>
              <span className="text-[14px] font-extrabold text-[#22c55e] tracking-tight">
                Foundation
              </span>
            </div>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1 px-3 pt-6 flex-1">
          {sidebarLinks.map((link) => {
            const isActive =
              link.href === "/admin/dashboard"
                ? pathname === "/admin/dashboard"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-[10px] text-[14px] font-medium transition-all ${
                  isActive
                    ? "bg-[#22c55e] text-white shadow-sm"
                    : "text-gray-600 hover:bg-white/60 hover:text-gray-900"
                }`}
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={18}
                  height={18}
                  className={`w-[18px] h-[18px] object-contain ${
                    isActive ? "brightness-0 invert" : "brightness-0"
                  }`}
                />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 pb-6 border-t border-green-100/60 pt-4">
          <button
            onClick={() => {
              // TODO: Replace with real logout logic
              router.push("/admin/login");
            }}
            className="flex items-center gap-3 px-4 py-2.5 rounded-[10px] text-[14px] font-medium text-gray-600 hover:bg-white/60 hover:text-gray-900 transition-all w-full"
          >
            <Image
              src="/assets/logout.png"
              alt="Logout"
              width={18}
              height={18}
              className="w-[18px] h-[18px] object-contain"
            />
            Logout
          </button>
        </div>
      </aside>

      {/* ─── Main Area ─── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Bar */}
        <header className="h-[64px] shrink-0 bg-white border-b border-gray-100 flex items-center justify-between px-8">
          <p className="text-[14px] text-gray-500 font-normal">
            {getBreadcrumb()}{" "}
            <span className="text-gray-300">/</span>
          </p>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#22c55e] flex items-center justify-center text-white text-[13px] font-bold">
              AD
            </div>
            <span className="text-[14px] font-medium text-gray-700">
              Admin User
            </span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
