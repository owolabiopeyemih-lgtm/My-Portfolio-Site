import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Sidebar, MobileNav } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Opeyemi Owolabi — Product Designer",
    template: "%s | Opeyemi Owolabi",
  },
  description:
    "Product Designer creating clean, user-focused digital experiences. Specialising in UX, product strategy, and design systems.",
  authors: [{ name: "Opeyemi Owolabi" }],
  openGraph: {
    title: "Opeyemi Owolabi — Product Designer",
    description:
      "Product Designer creating clean, user-focused digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opeyemi Owolabi — Product Designer",
    description:
      "Product Designer creating clean, user-focused digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-canvas text-foreground min-h-screen">
        <ThemeProvider>
          <CustomCursor />
          <Sidebar />
          <MobileNav />
          <div className="md:ml-52 flex flex-col min-h-screen">
            <main className="flex-1 pt-14 md:pt-0">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
