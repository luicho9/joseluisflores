import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "AI Engineer | Jose Luis Flores",
  description:
    "Jose Luis Flores' portfolio, AI Engineer building production LLM apps, RAG pipelines, and WhatsApp agents.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-card`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="mb-8">
              {children}
              <Analytics />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
