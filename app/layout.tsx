import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import AOSInit from "@/components/AOSInit";

export const metadata: Metadata = {
  title: "Lawrence Iyere Foundation",
  description: "Sixteen years of roots, bridges, and second chances. A Nigerian-led NGO that builds the bridge between underserved communities and the education, healthcare, and opportunity they deserve.",
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col font-sans text-gray-900 bg-white">
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
