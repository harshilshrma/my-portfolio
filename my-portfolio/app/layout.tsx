import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Import Inter font once, without CSS variables
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensures the font is displayed as soon as it's loaded
});

export const metadata: Metadata = {
  title: "Harshil Sharma | Portfolio",
  description: "Harshil Sharma - Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-background antialiased`} // Apply Inter class directly
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          <BackToTopButton />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
